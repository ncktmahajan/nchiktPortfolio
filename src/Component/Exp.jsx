import { useEffect, useRef } from "react";

const Exp = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = textElement.querySelectorAll("span");
          spans.forEach((span, i) => {
            span.style.animation = `flip 1s ease-in-out ${i * 0.2}s forwards`;
          });
        }
      });
    }, observerOptions);

    if (textElement) observer.observe(textElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F0F8FF] flex justify-center items-center p-4 overflow-x-hidden">
      {/* Inline CSS for @keyframes flip */}
      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateY(360deg);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .loading {
          display: inline-flex;
          gap: 10px;
        }
        .loading:before,
        .loading:after {
          content: "";
          height: 38px;
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(farthest-side, #000 95%, #0000) 35% 35%/12px 12px no-repeat
            #ff0000;
          animation: l5 3s infinite;
        }
        @keyframes l5 {
          0%,
          11% {
            background-position: 35% 35%;
          }
          14%,
          36% {
            background-position: 65% 35%;
          }
          38%,
          61% {
            background-position: 65% 65%;
          }
          64%,
          86% {
            background-position: 35% 65%;
          }
          88%,
          100% {
            background-position: 35% 35%;
          }
        }
      `}</style>

<div className="w-full h-full border border-[#383838] rounded-[13px] bg-transparent p-6 flex flex-col">
<div className="text-left mb-8 font-serif">
          {/* Text with flip animation applied, each word in a separate <span> */}
          <span
            ref={textRef}
            className="text-[#121212] my-10 mb-28 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block"
          >
            <span className="font-bold inline-block mr-2">I’ve</span>
            <span className="font-bold inline-block mr-2">worked</span>
            <span className="font-light inline-block mr-2">across</span>
            <span className="font-bold inline-block">domains</span>
          </span>
          <span> {/* Loader Animation */}
            <div className="loading"></div>
          </span>
        </div>

        <div className="space-y-10 mt-10">
          {[
            {
              title: "UI/UX Designer",
              company: "@ Kosoku Technologies",
              dateRange: "Feb 2025 - Present",
              role: "Intern",
            },
            {
              title: "UI/UX Developer",
              company: "@ Aures Web Creation",
              dateRange: "Contract Basis",
              role: "Freelance", 
            },
            {
              title: "Web Designer",
              company: "@ Nixor Obex",
              dateRange: "Jun 2024 - Aug 2024",
              role: "Intern",
            },
            {
              title: "UI Developer",
              company: "@ Rapportsoft Consulting & Technology",
              dateRange: "Feb 2024 - May 2024",
              role: "Intern",
            },
            {
              title: "Digital Artist",
              company: "@ Voice Over Bharat",
              dateRange: "May 2023 - Jul 2023",
              role: "Freelance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0"
            >
              <div className="flex-1">
                <span className="text-[#FF0000] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif">
                  {item.title}
                  <sup className="text-[#FF0000] opacity-75 text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                    {item.role}
                  </sup>
                </span>
                <br />
                <span className="text-[#121212] font-light text-sm sm:text-base md:text-lg lg:text-xl">
                  {item.company}
                </span>
              </div>
              <div className="text-right text-[#121212] text-xs sm:text-sm md:text-base lg:text-lg font-light">
                {item.dateRange}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;
