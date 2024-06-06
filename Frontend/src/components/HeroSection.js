import React from "react";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  React.useEffect(() => {
  }, []);
  return (
    <section className="hero">
      <img src="/home.png" alt="flare" />
      <div className="item">
        <h3>FLARE</h3>
        <div>
          <h1>BEYONG THE VERGE</h1>
          <p>
            Annual Socio-Cultural Mega-Fest of Pandit Deendayal Energy University Gandhinagar!
          </p>

          <RouterLink to="/singup">GET STARTED</RouterLink>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
