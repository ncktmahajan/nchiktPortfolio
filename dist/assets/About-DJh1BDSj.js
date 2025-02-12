import{r,j as e}from"./index-CLs0emCh.js";import{i as m}from"./chunk-NK4BRF7C-Cf7fGyLD.js";import"./chunk-N2KXC5ZE-QJI8KfnC.js";const c="/assets/card-img-DJdq0g-y.png",g=()=>{const n=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{const t=n.current,s=l.current,o={root:null,threshold:.1},a=new IntersectionObserver(d=>{d.forEach(i=>{i.isIntersecting&&(i.target===t?t.style.animation="slideInFromTop 1s ease-out forwards":i.target===s&&(s.style.animation="slideInFromBottom 1s ease-out forwards"))})},o);return t&&a.observe(t),s&&a.observe(s),()=>{t&&a.unobserve(t),s&&a.unobserve(s)}},[]),e.jsxs("div",{id:"Scroll",className:"w-full min-h-screen px-4 py-6 bg-[#F0F8FF] flex justify-center items-center overflow-x-hidden",children:[e.jsx("style",{jsx:!0,children:`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hidden {
          opacity: 0;
        }

         /* Hover effect for whoami */
        .whoami:hover {
          font-weight: bold;
          transition: font-weight 0.3s ease-in-out;
          }

      `}),e.jsxs("div",{className:"flex flex-col md:flex-row md:space-x-12 w-full max-w-8xl",children:[e.jsx("div",{ref:n,className:"relative flex-1 mb-8 md:mb-0",style:{opacity:0,transform:"translateY(-100px)",transition:"all 0.5s ease-in-out"},children:e.jsxs("div",{className:"relative w-full bg-transparent rounded-xl border border-black p-4 h-full flex items-center justify-center",children:[e.jsx("div",{className:"absolute -top-4 left-5 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal",children:"Trading Card"}),e.jsx("div",{className:"absolute -bottom-3 right-4 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal",children:"2024-25"}),e.jsx(m,{className:"w-6/12 md:w-9/12 lg:w-10/12 mx-auto shadow-lg ",src:c,alt:"Card"})]})}),e.jsx("div",{ref:l,className:"relative flex-1",style:{opacity:0,transform:"translateY(100px)",transition:"all 0.5s ease-in-out"},children:e.jsxs("div",{className:"relative w-full bg-transparent rounded-[13px] border border-[#383838] p-4",children:[e.jsx("div",{className:"absolute -top-4 left-5 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal whoami",children:"whoami"}),e.jsx("div",{className:"details mt-12 overflow-auto",children:e.jsxs("div",{className:"relative text-[#121212] font-light",children:[e.jsx("div",{className:"text-xl md:text-2xl lg:text-2xl font-semibold m-6",children:"Nachiket"}),e.jsx("div",{className:"text-sm md:text-base lg:text-lg leading-relaxed m-6 ",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Name:"})," Nachiket –  ",e.jsx("br",{}),"                     engineer and designer"]})}),e.jsxs("div",{className:"description2 mt-10 text-[#121212] p-4 leading-relaxed break-words",children:[e.jsx("div",{className:"text-base md:text-lg font-semibold",children:"Description"}),e.jsx("div",{className:"text-sm md:text-base p-4 leading-relaxed mt-2",children:"From a young age, I’ve been captivated by the blend of creativity and technology. The magic of turning ideas into visually engaging and intuitive digital experiences drew me towards the world of UI/UX design & development. Over time, I’ve developed a deep passion for crafting seamless user interfaces and efficient workflows. My journey has equipped me with a strong foundation in tools. My approach is centered on user-centered design principles, ensuring visually appealing and meaningful projects for end-users, bringing fresh perspectives and innovative ideas to the evolving digital product design world."})]}),e.jsxs("div",{className:"mt-10 text-[#121212] p-4 ",children:[e.jsx("div",{className:"text-base md:text-lg font-semibold",children:"Usage"}),e.jsx("div",{className:"text-sm md:text-base text-center mt-2",children:"Currently, Nachiket is being applied in the following contexts:"}),e.jsxs("div",{className:"text-xs md:text-sm text-center mt-1 font-semibold",children:["Nachiket [UI/UX Design, Figma, Wireframing, Prototyping]"," ",e.jsx("br",{}),"[React.Js, Next.Js, Front-End Development]"]})]})]})})]})})]})]})};export{g as default};
