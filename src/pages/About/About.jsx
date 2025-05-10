import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/about.png';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      <div className="about-img">
        <img
          src={aboutImg}
          alt="person sitting on the roof of the van looking at the night sky"
        />
      </div>
      <div className="content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-action">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <Link to="/vans">
            <button className="about-btn">Explore our vans</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
