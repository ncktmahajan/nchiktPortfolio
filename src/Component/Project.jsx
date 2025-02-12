import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Converting a Portfolio Website to an Agency Website",
      role: "@ UI/UX Design",
      description: (
        <>
          <p className="font-bold mt-2">Overview:</p>
          <p>
            This project involved transforming a personal portfolio website into a comprehensive agency website. The aim was to adapt the design and user experience to better suit agency services while maintaining a clean, modern, and user-friendly interface.
          </p>
      
          <p className="font-bold mt-2">Key Features:</p>
          <ul className="list-disc ml-5">
            <li><strong>Intuitive Navigation:</strong> Redesigned the navigation flow to ensure easy access to agency services, case studies, and contact information.</li>
            <li><strong>Service-Centric Design:</strong> Organized the content to highlight agency-specific services, enhancing user engagement and conversion rates.</li>
            <li><strong>Visual Consistency:</strong> Maintained consistent typography, color schemes, and design elements to ensure brand identity.</li>
            <li><strong>Responsive Layout:</strong> Implemented a fully responsive design to provide a seamless experience across all devices.</li>
          </ul>
      
          <p className="font-bold mt-2">Tools Used:</p>
          <ul className="list-disc ml-5">
            <li>Figma for UI/UX design and prototyping.</li>
            <li>Adobe Illustrator for custom graphics and visual elements.</li>
          </ul>
      
          <p className="font-bold mt-2">Challenges & Solutions:</p>
          <ul className="list-disc ml-5">
            <li><strong>Challenge:</strong> Adapting the personal portfolio layout to an agency-centric structure.</li>
            <li><strong>Solution:</strong> Conducted competitor analysis and implemented a modular layout that is flexible and scalable for agency needs.</li>
          </ul>
      
          <p className="font-bold mt-2">Outcome:</p>
          <p>
            The project successfully transformed a personal portfolio into a dynamic agency website, enhancing the user experience and better showcasing the agency’s services and expertise.
          </p>
        </>
      ),      
      image: "P2A.png",
      behanceLink: "https://www.behance.net/gallery/216323575/Converting-a-Portfolio-Website-to-Agency-Website/modules/1231687693",
    },

    {
      id: 2,
      title: "Prish Auditors and Consultants",
      role: "@ UI/UX Design",
      description: (
        <>
          <p className="font-bold mt-2">Overview:</p>
          <p>
            Designed a professional website for Prish Auditors and Consultants, a CA firm providing a range of Chartered Accountancy services. The objective was to create a user-friendly platform that effectively showcases their services while conveying trust and credibility.
          </p>
    
          <p className="font-bold mt-2">Key Features:</p>
          <ul className="list-disc ml-5">
            <li><strong>Service-Centric Design:</strong> Organized content to clearly present the firm’s CA services, including auditing, tax consultancy, and financial advisory.</li>
            <li><strong>Professional Layout:</strong> Maintained a clean and elegant design to reflect the firm’s professionalism and expertise.</li>
            <li><strong>Clear Navigation:</strong> Ensured intuitive navigation for users to easily explore services, case studies, and contact information.</li>
            <li><strong>Responsive Design:</strong> Developed a fully responsive layout to provide a seamless experience across all devices.</li>
          </ul>
    
          <p className="font-bold mt-2">Tools Used:</p>
          <ul className="list-disc ml-5">
            <li>Figma for UI/UX design and prototyping.</li>
            <li>Adobe Illustrator for custom icons and visual elements.</li>
          </ul>
    
          <p className="font-bold mt-2">Challenges & Solutions:</p>
          <ul className="list-disc ml-5">
            <li><strong>Challenge:</strong> Balancing a professional look with an engaging user experience.</li>
            <li><strong>Solution:</strong> Used a minimalist design approach with strategic use of typography and color schemes to maintain a corporate yet approachable feel.</li>
          </ul>
    
          <p className="font-bold mt-2">Outcome:</p>
          <p>
            Successfully delivered a professional website that enhances Prish Auditors and Consultants' online presence, effectively showcasing their CA services to potential clients.
          </p>
        </>
      ),
      image: "Prish.png",
      behanceLink:
        "https://www.behance.net/gallery/216373389/Prish-Auditors-and-Consultants-Website-Design/modules/1231983113",
    },

    {
      id: 3,
      title: "Web Creation - Digital Agency",
      role: "@ UI/UX Design",
      description: (
        <>
          <p className="font-bold mt-2">Overview:</p>
          <p>
            Designed a dynamic website for Web Creation, a digital agency providing a range of services including software development, web design, and digital solutions. The objective was to create an engaging and professional platform that effectively showcases their services and expertise.
          </p>
    
          <p className="font-bold mt-2">Key Features:</p>
          <ul className="list-disc ml-5">
            <li><strong>Service-Centric Layout:</strong> Organized content to clearly highlight the agency's services, including software development, web design, and digital marketing.</li>
            <li><strong>Engaging Visuals:</strong> Used modern design elements and high-quality visuals to enhance user engagement.</li>
            <li><strong>Intuitive Navigation:</strong> Implemented a user-friendly navigation system for easy exploration of services, case studies, and contact details.</li>
            <li><strong>Responsive Design:</strong> Ensured a seamless experience across all devices for better accessibility.</li>
          </ul>
    
          <p className="font-bold mt-2">Tools Used:</p>
          <ul className="list-disc ml-5">
            <li>Figma for UI/UX design and prototyping.</li>
            <li>Adobe Illustrator for custom graphics and visual elements.</li>
          </ul>
    
          <p className="font-bold mt-2">Challenges & Solutions:</p>
          <ul className="list-disc ml-5">
            <li><strong>Challenge:</strong> Balancing a vibrant design with a professional appearance.</li>
            <li><strong>Solution:</strong> Used a strategic color palette and clean typography to maintain a modern yet professional look.</li>
          </ul>
    
          <p className="font-bold mt-2">Outcome:</p>
          <p>
            Successfully delivered an engaging website that enhances Web Creation's online presence and effectively communicates their services and expertise to potential clients.
          </p>
        </>
      ),
      image: "WebCreation.png",
      behanceLink:"https://www.behance.net/gallery/215458461/Web-Creation-A-Digital-Agency/modules/1226434221",
    },
    
    {
      id: 4,
      title: "FitTrack - The Fitness Tracking Application",
      role: "@ UI/UX Design",
      description: (
        <>
          <p className="font-bold mt-2">Overview:</p>
          <p>
            Designed a user-centric fitness tracking application, FitTrack, to help users monitor their workouts and analyze health metrics. The goal was to create an intuitive and engaging interface that encourages users to maintain a healthy lifestyle.
          </p>
    
          <p className="font-bold mt-2">Key Features:</p>
          <ul className="list-disc ml-5">
            <li><strong>Comprehensive Health Metrics:</strong> Displays detailed workout statistics and health data for effective fitness tracking.</li>
            <li><strong>User-Friendly Interface:</strong> Designed with a clean and intuitive layout for easy navigation and enhanced user experience.</li>
            <li><strong>Personalization:</strong> Allows users to customize fitness goals and track progress efficiently.</li>
            <li><strong>Responsive Design:</strong> Ensured optimal usability across all devices, including mobile and tablets.</li>
          </ul>
    
          <p className="font-bold mt-2">Tools Used:</p>
          <ul className="list-disc ml-5">
            <li>Figma for UI/UX design and prototyping.</li>
            <li>Adobe Illustrator for custom icons and graphics.</li>
          </ul>
    
          <p className="font-bold mt-2">Challenges & Solutions:</p>
          <ul className="list-disc ml-5">
            <li><strong>Challenge:</strong> Balancing detailed health metrics with a clutter-free design.</li>
            <li><strong>Solution:</strong> Used a minimalist design approach and strategic information hierarchy to maintain clarity and usability.</li>
          </ul>
    
          <p className="font-bold mt-2">Outcome:</p>
          <p>
            Delivered an engaging and functional fitness tracking app that effectively motivates users to achieve their fitness goals.
          </p>
        </>
      ),
      image: "FitTrack.png",
      behanceLink:"https://www.behance.net/gallery/206856097/FitTrack-The-Fitness-Tracking-Application/modules/1174579973",
    },
    
    {
      id: 5,
      title: "TicketTrail - All-in-One Booking WebApp",
      role: "@ UI/UX Design",
      description: (
        <>
          <p className="font-bold mt-2">Overview:</p>
          <p>
            Designed a comprehensive booking platform, TicketTrail, for seamless reservations across various categories, including train, bus, flight, and entertainment tickets. The objective was to provide a user-friendly and efficient experience for all types of bookings.
          </p>
    
          <p className="font-bold mt-2">Key Features:</p>
          <ul className="list-disc ml-5">
            <li><strong>Multi-Category Booking:</strong> Unified platform for booking train, bus, flight, and entertainment tickets.</li>
            <li><strong>Intuitive User Interface:</strong> Designed an easy-to-navigate layout for a hassle-free booking experience.</li>
            <li><strong>Smart Search & Filters:</strong> Implemented advanced search and filtering options to enhance user convenience.</li>
            <li><strong>Responsive Design:</strong> Ensured consistent performance and usability across all devices.</li>
          </ul>
    
          <p className="font-bold mt-2">Tools Used:</p>
          <ul className="list-disc ml-5">
            <li>Figma for UI/UX design and prototyping.</li>
            <li>Adobe Illustrator for custom graphics and icons.</li>
          </ul>
    
          <p className="font-bold mt-2">Challenges & Solutions:</p>
          <ul className="list-disc ml-5">
            <li><strong>Challenge:</strong> Managing complex booking flows while maintaining a simple interface.</li>
            <li><strong>Solution:</strong> Used a modular design approach with clear navigation paths for each booking category.</li>
          </ul>
    
          <p className="font-bold mt-2">Outcome:</p>
          <p>
            Successfully delivered an all-in-one booking platform, enhancing user experience and simplifying the ticket reservation process across multiple categories.
          </p>
        </>
      ),
      image: "TicketTrail.png",
      behanceLink:
      "https://www.behance.net/gallery/215671435/TicketTrail-All-in-One-Booking-WebApp/modules/1227745297",
    },
    

  ];

  const [visibleProjects, setVisibleProjects] = useState([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-id");
            if (!visibleProjects.includes(projectId)) {
              setVisibleProjects((prevVisible) => [
                ...prevVisible,
                projectId,
              ]);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    titleRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      titleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  return (
    <div className="w-full p-4 md:p-4">
      <div className="text-[#121212] text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
        ⁄⁄ Projects
        <div className="load ml-5"></div>
      </div>

      <div className="flex flex-col lg:flex-row border border-[#383838] rounded-lg p-4 space-y-3 lg:space-y-0 lg:space-x-6">
        <Accordion>
          {projects.map((project, index) => (
            <AccordionItem
              key={project.id}
              aria-label={project.title}
              className="font-semibold font-serif"
              title={
                <span
                  ref={(el) => (titleRefs.current[index] = el)}
                  data-id={project.id}
                  className="#121212 cursor-none inline-block"
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    borderRight: "1px solid #121212",
                    maxWidth: "100%",
                    width: visibleProjects.includes(project.id.toString())
                      ? "100%"
                      : "0px",
                    animation: visibleProjects.includes(project.id.toString())
                      ? `typing 3s steps(${project.title.length}, end), blink 0.75s step-end infinite`
                      : "none",
                    animationFillMode: "forwards",
                    animationDelay: "0.2s",
                    fontSize: "clamp(1rem, 4vw, 1.5rem)",
                    whiteSpace: "normal",
                    lineHeight: "1.2",
                  }}
                >
                  {project.id + ". " + project.title}
                </span>
              }
            >
              <div className="flex flex-col lg:flex-row border border-[#383838] rounded-lg p-4 space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 lg:w-1/2 flex flex-col space-y-4 lg:mt-4">
                  <div className="text-[#FF0000] text-xl md:text-2xl lg:text-3xl mt-12 font-bold">
                    {project.title}
                  </div>
                  <div className="text-[#121212] text-lg md:text-xl lg:text-2xl font-light">
                    {project.role}
                  </div>
                  <div className="text-[#121212] text-base md:text-lg lg:text-xl font-light">
                    {project.description}
                  </div>
                  <div>
                    <a
                      href={project.behanceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-base md:text-lg lg:text-xl"
                    >
                      View Project ↝
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <style jsx>{`
        .load {
          display: inline-flex;
          gap: 10px;
        }
        .load:before,
        .load:after {
          content: "";
          height: 20px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
              farthest-side,
              #000 95%,
              #0000
            )
            35% 35% / 6px 6px no-repeat #ff0000;
          transform: scaleX(var(--s, 1)) rotate(0deg);
          animation: l6 1s infinite linear;
        }
        .load:after {
          --s: -1;
          animation-delay: -0.1s;
        }
        @keyframes l6 {
          100% {
            transform: scaleX(var(--s, 1)) rotate(360deg);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-right-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
