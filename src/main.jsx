import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as THREE from 'three';
// import orbImg from './assets/orb.jpeg';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// production mode camera
// camera.position.x = -0.0002;
// camera.position.z = -0.011;

camera.position.x = -0.0002;
camera.position.z = -4;

// development mode camera
// camera.position.x = -3;
// camera.position.z = 30;

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 100, 100);
// const geometry1 = new THREE.TorusGeometry(10, 3, 100, 100);

const material = new THREE.MeshNormalMaterial({
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);
// const torus1 = new THREE.Mesh(geometry1, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const pointLight2 = new THREE.AmbientLight(0xffffff, 1);
pointLight2.position.x = 2;
pointLight2.position.y = 2;
pointLight2.position.z = 2;
scene.add(pointLight2);

const amibentLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, amibentLight);

//helper
// const lighterHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 5);
// scene.add(lighterHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.OctahedronGeometry(0.25);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
  const drops = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  drops.position.set(x, y, z);
  scene.add(drops);
}

Array(200).fill().forEach(addStar);

// BACK GROUND IMAGE
// const themeCyber = new THREE.TextureLoader().load(bgImg);
// scene.background = themeCyber;

// add orb

// const orbBOX = new THREE.TextureLoader().load(orbImg);

// const displayOrb = new THREE.Mesh(
//   new THREE.BoxGeometry(3, 3, 3),
//   new THREE.MeshBasicMaterial({ map: orbBOX })
// );

// scene.add(displayOrb);

//adding car in scene
let loadedModel;
const glftLoader = new GLTFLoader();
glftLoader.load(
  'https://campusfestbucket.s3.us-west-1.amazonaws.com/Upsurge/scene.gltf',
  (glftScene) => {
    loadedModel = glftScene;
    glftScene.scene.traverse((c) => {
      c.castShadow = true;
    });

    glftScene.scene.position.z = 28;
    glftScene.scene.position.y = -2.5;
    glftScene.scene.position.x = -8;
    glftScene.scene.rotateY(21.3);
    glftScene.scene.scale.set(3, 3, 3);
    scene.add(glftScene.scene);
  }
);

//adding Upsurge logo in scene
let UpsurgeLogo;
const glftLoader1 = new GLTFLoader();
glftLoader1.load('/src/assets/test123.gltf', (glftScene) => {
  UpsurgeLogo = glftScene;
  glftScene.scene.position.z = 0;
  glftScene.scene.position.y = 0;
  glftScene.scene.position.x = 0;
  // glftScene.scene.rotateZ(21.3);
  glftScene.scene.rotation.x = 89.9;
  glftScene.scene.rotation.z = 89.5;

  glftScene.scene.scale.set(1.5, 1.5, 1.5);
  scene.add(glftScene.scene);
});

// adding the world to the project

// let worldModel;
// const worldLoader = new GLTFLoader();
// worldLoader.load('/src/assets/san_francisco_city/scene.gltf', (glftScene) => {
//   worldModel = glftScene;
//   glftScene.scene.traverse((c) => {
//     c.castShadow = true;
//   });

//   glftScene.scene.position.z = 5;
//   glftScene.scene.position.y = -10;
//   // glftScene.scene.position.x = -8;
//   // glftScene.scene.rotateY(21.3);
//   glftScene.scene.scale.set(0.08, 0.08, 0.08);
//   scene.add(glftScene.scene);
// });

// add texture

function moveCamera() {
  const top = document.body.getBoundingClientRect().top;

  // displayOrb.rotation.y += 0.01;
  // displayOrb.rotation.z += 0.01;

  // console.log(top);

  camera.position.z = top * -0.01;
  camera.position.x = top * -0.0002;
  camera.rotation.y = top * -0.0002;
}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);

  if (loadedModel || UpsurgeLogo) {
    loadedModel.scene.rotation.y += 0.005;
    UpsurgeLogo.scene.rotation.z += 0.01;
  }

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;
  // torus1.rotation.x += 0.002;
  // torus1.rotation.y += 0.001;
  // torus1.rotation.z += 0.002;
  // controls.update();
  renderer.render(scene, camera);
}

animate();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
