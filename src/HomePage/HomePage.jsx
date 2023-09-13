import SliderComponent from './SliderComponent/SliderComponent';
import ScheduleComponent from './ScheduleComponent/ScheduleComponent';
import SmakathonComponent from './SmakathonComponent/SmakathonComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import HeroComponent from './HeroComponent/HeroComponent';

import * as THREE from 'three';
// import orbImg from './assets/orb.jpeg';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Robot from '../assets/robot_playground/scene.gltf';
import React from 'react';
import UpSurgeGltf from '../assets/test123-v1-v2/test123-v1.gltf';

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

//adding car in scene
let loadedModel;
const glftLoader = new GLTFLoader();
glftLoader.load(Robot, (glftScene) => {
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
});

//adding Upsurge logo in scene
// let UpsurgeLogo;
const glftLoader1 = new GLTFLoader();
glftLoader1.load(UpSurgeGltf, (glftScene) => {
  // UpsurgeLogo = glftScene;
  glftScene.scene.position.z = 0.5;
  glftScene.scene.position.y = 0;
  glftScene.scene.position.x = 0;
  // glftScene.scene.rotateZ(21.3);
  glftScene.scene.rotation.x = 89.9;
  glftScene.scene.rotation.z = 89.5;

  glftScene.scene.scale.set(1.4, 1.4, 1.4);
  scene.add(glftScene.scene);
});

// add texture

function moveCamera() {
  const top = document.body.getBoundingClientRect().top;

  camera.position.z = top * -0.01;
  camera.position.x = top * -0.0002;
  camera.rotation.y = top * -0.0002;
}

document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);

  if (loadedModel) {
    loadedModel.scene.rotation.y += 0.005;
    // UpsurgeLogo.scene.rotation.z += 0.01;
  }

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.001;

  renderer.render(scene, camera);
}

animate();

export default function HomePage() {
  return (
    <React.Fragment>
      <canvas id="bg"></canvas>
      <main>
        <header>
          <HeroComponent />
        </header>

        <blockquote>
          <p>Unexpected VIP Visit !</p>
        </blockquote>

        <section>
          <SmakathonComponent />
        </section>

        <section className="light">
          <SliderComponent />
        </section>

        <section className="left">
          <ScheduleComponent />
        </section>

        <footer>
          <FooterComponent />
        </footer>
      </main>
    </React.Fragment>
  );
}
