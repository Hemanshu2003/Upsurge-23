import './App.css';
import SliderComponent from './SliderComponent/SliderComponent';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import ScheduleComponent from './ScheduleComponent/ScheduleComponent';
import SmakathonComponent from './SmakathonComponent/SmakathonComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <main>
        <header>
          <h1>Hero Section.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi,
            dolore in explicabo eveniet quis minus assumenda!
          </p>
        </header>

        <blockquote>
          <p>getting started Loading....</p>
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
          <p>Footer section</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
