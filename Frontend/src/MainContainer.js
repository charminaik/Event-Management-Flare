import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";
import "./App.css";

const MainContainer = () => {
  const location = useLocation();

  const shouldRenderHeader = () => {
    const publicRoutes = ["/", "/signup", "/login"];
    return publicRoutes.includes(location.pathname);
  };

  return (
    <div>
      {shouldRenderHeader() && <Header />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Events />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default MainContainer;
