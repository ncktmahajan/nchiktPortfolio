import { useState, useEffect } from "react"; // ✅ Only one import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className="cursor-pointer text-5xl right-12 top-8 font-bold text-black relative hover:text-red-500"
        onClick={toggleMenu}
      >
        ↯
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#F0F8FF] p-4 z-50 flex flex-col items-center justify-center space-y-10 menu-container"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl cursor-pointer text-black hover:text-red-500"
          >
            ✖
          </button>

          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-5xl font-bold cursor-pointer text-black hover:text-red-500"
              onClick={() => setIsOpen(false)}
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat opacity-55"
      style={{
        backgroundImage: `url(${Logo})`,
      }}
    >
      {/* Custom Cursor for Desktop */}
      {isDesktop && <Cursor isDesktop={isDesktop} />}

      {/* Your Navbar */}
      <Navbar isDesktop={isDesktop} />
    </div>
  );
};

export default App;
