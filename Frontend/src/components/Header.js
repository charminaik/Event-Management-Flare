import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  React.useEffect(() => {
  }, []);
  return (
    <nav>
      <div className="logo">FLARE</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/" spy={true} smooth={true} duration={500}>
          <RouterLink to="/">HOME</RouterLink>
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            EVENTS
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
          
          <RouterLink to="/signup">SIGN UP</RouterLink>
          <RouterLink to="/login">LOG IN</RouterLink>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;