import { useState, useEffect, lazy, Suspense } from "react";
import Nachiket from "./assets/Nachiket.svg";
import Scroll from "./assets/Scroll.svg"; 

import Spline from "@splinetool/react-spline";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy loading components
const About = lazy(() => import("./Component/About"));
const Exp = lazy(() => import("./Component/Exp"));
const Skill = lazy(() => import("./Component/Skill"));
const Projects = lazy(() => import("./Component/Project"));
const Contact = lazy(() => import("./Component/Contact"));
const Cursor = lazy(() => import("./Component/Cursor"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent menu from closing immediately
    setIsOpen((prev) => !prev);
  };

  // Smooth Scroll and Close Menu on Click
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="fixed top-5 right-5 z-50">
      {/* Menu Toggle Button */}
      <div
        className="cursor-pointer text-5xl right-12 top-8 font-bold text-black relative hover:text-red-500"
        onClick={toggleMenu}
        style={{ animation: "glow 3s infinite" }}
      >
        ↯
      </div>

      {/* Fullscreen Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#F0F8FF] p-4 z-50 flex flex-col items-center justify-center space-y-10 menu-container"
          onClick={(e) => e.stopPropagation()} // Prevent background click from closing menu
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl cursor-pointer text-black hover:text-red-500"
            style={{ animation: "glow 3s infinite" }}
          >
            ✖
          </button>

          {/* Navigation Links with Working Smooth Scroll */}
          {["home", "about", "projects", "contact"].map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-5xl font-bold cursor-pointer text-black hover:text-red-500 animate-drop"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={(e) => handleNavigation(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoKeyframes = `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 10px #83EEFF, 0 0 20px #83EEFF, 0 0 30px #83EEFF, 0 0 40px #83EEFF;
      }
      50% {
        text-shadow: none;
      }
      100% {
        text-shadow: 0 0 10px #83EEFF, 0 0 20px #83EEFF, 0 0 30px #83EEFF, 0 0 40px #83EEFF;
      }
    }

    @keyframes floatEffect {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
  `;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isDesktop && (
        <Suspense fallback={<div>Loading Cursor...</div>}>
          <Cursor isDesktop={isDesktop} />
        </Suspense>
      )}

      <style>{logoKeyframes}</style>

      <div id="home" className="bg-[#F0F8FF] overflow-x-hidden pr-4">
        <Navbar />

        <div className="home-container m-1 ml-5 mt-5 rounded-2xl border-1 border-[#383838]">
          <div className="h-screen m-4 rounded-xl border-1 border-[#383838] relative">
            <main className="h-screen w-full flex justify-center items-center">
              <SpeedInsights />
              <Spline
                scene="https://prod.spline.design/8B4fZ0w2cXsT8kpM/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </main>

            <img
              src={Nachiket}
              className="absolute h-80% w-full sm:w-1/2 z-20"
              style={{
                top: "55%",
                left: "51%",
                transform: "translate(-50%, -50%)",
                animation: "glow 3s infinite",
              }}
            />

            <div className="rectangle absolute top-1/2 mt-36 w-full flex justify-center items-center">
              <div
                className="box absolute rounded-full border-2 border-black py-2 flex justify-center items-center"
                style={{
                  boxSizing: "border-box",
                  position: "absolute",
                  width: "90%",        // Use percentage for responsiveness
                  maxWidth: "450px",   // Maximum width on larger screens
                  height: "auto",      // Let the content determine the height on smaller screens
                  minHeight: "60px",   // Minimum height remains at 60px
                  background: "rgba(255, 255, 255, 0.3)",
                  backgroundBlendMode: "luminosity",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(50px)",
                  borderRadius: "100px",
                }}
              >
                <span className="text-black text-sm sm:text-2xl mx-5">
                  UI/UX Designer & Developer
                  <span className="text-red-500">™</span>
                </span>
                <img
                  src={Scroll}
                  alt="Scroll Down"
                  className="absolute top-60 bottom-0 right-0 md:bottom-0 md:right-0 sm:w-1/3 w-24 md:w-36 h-auto rounded-full"
                  style={{
                    backgroundColor: "#F0F8FF",
                    padding: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    animation: "floatEffect 2s infinite ease-in-out",
                    }}
                  onClick={scrollToAbout}
                />
              </div>
             
            </div>
            
          </div>

          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>

          <Suspense fallback={<div>Loading Exp...</div>}>
            <Exp />
          </Suspense>

          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skill />
          </Suspense>

          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>

          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
