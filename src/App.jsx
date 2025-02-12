import { useState, useEffect, lazy, Suspense } from "react";
import Nachiket from "./assets/Nachiket.svg";
import Blur from "./assets/Blur.png"; // Ensure the path is correct
import Scroll from "./assets/Scroll.svg"; // Ensure the path is correct
import { Image } from "@nextui-org/react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className="cursor-none text-5xl right-12 top-8 font-bold text-black relative hover:text-red-500"
        onClick={toggleMenu}
        style={{ animation: "glow 3s infinite" }}
      >
        ↯
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F0F8FF] p-4 z-50 cursor-none flex flex-col items-center justify-center md:cursor-auto space-y-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl cursor-none text-black hover:text-red-500"
            style={{ animation: "glow 3s infinite" }}
          >
            ✖
          </button>
          <a
            href="#home"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: "0.1s" }}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: "0.2s" }}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: "0.3s" }}
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: "0.4s" }}
            onClick={toggleMenu}
          >
            Contact
          </a>
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
  `;

  return (
    <>
      {isDesktop && (
        <Suspense fallback={<div>Loading Cursor...</div>}>
          <Cursor isDesktop={isDesktop} />
        </Suspense>
      )}

      <style>{logoKeyframes}</style>

      <div className="bg-[#F0F8FF] overflow-x-hidden pr-4">
        <Navbar />

        <div className="home-container m-1 ml-5 mt-5 rounded-2xl border-1 border-[#383838]">
          <div className="h-screen m-4 rounded-xl border-1 border-[#383838] relative">
            <main className="h-screen w-full">
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
                top: "50%",
                left: "51%",
                transform: "translate(-50%, -50%)",
                animation: "glow 3s infinite",
              }}
            />

            <div className="rectangle absolute top-1/2 mt-36 w-full flex justify-center items-center">
              <div
                className="box absolute rounded-full border-2 border-black py-2 flex justify-center items-center mr-42"
                style={{
                  backgroundImage: `url(${Blur})`,
                  backgroundSize: "200px 200px",
                  backgroundPosition: "center",
                }}
              >
                <span className="text-black text-sm sm:text-2xl mx-5">
                  UI/UX Designer & Developer
                  <span className="text-red-500">™</span>
                </span>
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
