import SliderComponent from './SliderComponent/SliderComponent';
import ScheduleComponent from './ScheduleComponent/ScheduleComponent';
import SmakathonComponent from './SmakathonComponent/SmakathonComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import HeroComponent from './HeroComponent/HeroComponent';

export default function HomePage() {
  return (
    <main>
      <header>
        <HeroComponent />
      </header>

      <blockquote>
        <p>Getting Started Loading....</p>
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
  );
}
