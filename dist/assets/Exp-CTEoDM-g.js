import{r as l,j as e}from"./index-CLs0emCh.js";const m=()=>{const n=l.useRef(null);return l.useEffect(()=>{const t=n.current,s={root:null,threshold:.1},a=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&t.querySelectorAll("span").forEach((i,c)=>{i.style.animation=`flip 1s ease-in-out ${c*.2}s forwards`})})},s);return t&&a.observe(t),()=>{t&&a.unobserve(t)}},[]),e.jsxs("div",{className:"w-full min-h-screen bg-[#F0F8FF] flex justify-center items-center p-4 overflow-x-hidden",children:[e.jsx("style",{jsx:!0,children:`
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
      `}),e.jsxs("div",{className:"w-full h-full border border-[#383838] rounded-[13px] bg-transparent p-6 flex flex-col",children:[e.jsxs("div",{className:"text-left mb-8 font-serif",children:[e.jsxs("span",{ref:n,className:"text-[#121212] my-10 mb-28 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block",children:[e.jsx("span",{className:"font-bold inline-block mr-2",children:"I’ve"}),e.jsx("span",{className:"font-bold inline-block mr-2",children:"worked"}),e.jsx("span",{className:"font-light inline-block mr-2",children:"across"}),e.jsx("span",{className:"font-bold inline-block",children:"domains"})]}),e.jsxs("span",{children:[" ",e.jsx("div",{className:"loading"})]})]}),e.jsx("div",{className:"space-y-10 mt-10",children:[{title:"UI/UX Developer",company:"@ Kosoku Technologies",dateRange:"Feb 2025 - Present",role:"Intern"},{title:"UI/UX Developer",company:"@ Aures Web Creation",dateRange:"Contract Basis",role:"Freelance"},{title:"UI/UX Designer",company:"@ Nixor Obex",dateRange:"Jun 2024 - Aug 2024",role:"Intern"},{title:"UI Developer",company:"@ Rapportsoft Consulting & Technology",dateRange:"Feb 2024 - May 2024",role:"Intern"},{title:"Graphic Designer",company:"@ Voice Over Bharat",dateRange:"May 2023 - Jul 2023",role:"Intern"}].map((t,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("span",{className:"text-[#FF0000] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif",children:[t.title,e.jsx("sup",{className:"text-[#FF0000] opacity-75 text-xs sm:text-sm md:text-base lg:text-lg font-normal",children:t.role})]}),e.jsx("br",{}),e.jsx("span",{className:"text-[#121212] font-light text-sm sm:text-base md:text-lg lg:text-xl",children:t.company})]}),e.jsx("div",{className:"text-right text-[#121212] text-xs sm:text-sm md:text-base lg:text-lg font-light",children:t.dateRange})]},s))})]})]})};export{m as default};
