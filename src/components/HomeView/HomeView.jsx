import Sponsors from "../sponsors/Sponsors";
import Carousel from "../Carousel/Carousel";
import "./HomeView.css";
function HomeView() {
  return (
    <main id="home_view">
      <section className="intro-section">
        <h1>Baltimore's best in&#x2011;person tech meetup</h1>
        <p>
          An inclusive, informal, co-working meetup for people of all skill
          levels. Bring a laptop and ideas, we'll bring coffee!
        </p>
      </section>
      <section className="carousel-section">
        <Carousel />
      </section>
      <section className="sponsor-section">
        <Sponsors />
      </section>
    </main>
  );
}

export default HomeView;
