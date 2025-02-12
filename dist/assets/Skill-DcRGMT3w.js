import{r as l,j as e}from"./index-CLs0emCh.js";import{i as f}from"./chunk-NK4BRF7C-Cf7fGyLD.js";import"./chunk-N2KXC5ZE-QJI8KfnC.js";const m="/assets/img-CBxrfTEd.svg",u=()=>{const o=l.useRef(null),n=l.useRef(null);return l.useEffect(()=>{const t=o.current,s=n.current,i={root:null,threshold:.1},r=new IntersectionObserver(x=>{x.forEach(a=>{a.isIntersecting&&(a.target===t?t.style.animation="slideInFromTop 1s ease-out forwards":a.target===s&&(s.style.animation="slideInFromBottom 1s ease-out forwards"))})},i);return t&&r.observe(t),s&&r.observe(s),()=>{t&&r.unobserve(t),s&&r.unobserve(s)}},[]),e.jsxs("div",{className:"w-full min-h-screen bg-[#F0F8FF] flex items-center justify-center p-4 overflow-x-hidden",children:[e.jsxs("div",{className:"box w-full h-full max-w-[1640px] mx-auto flex flex-col py-20 md:flex-row border border-[#383838] rounded-[13px] relative",children:[e.jsxs("div",{ref:o,className:"flex-1 flex flex-col justify-center p-6 relative",style:{opacity:0,transform:"translateY(-100px)",transition:"all 0.5s ease-in-out"},children:[e.jsx("div",{className:"loader absolute top-[-50px] left-1/2 transform -translate-x-1/2"}),e.jsxs("div",{className:"text-[#121212] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 font-serif ",children:["I’ve acquired a diverse set ",e.jsx("br",{}),"of skills"]}),e.jsxs("div",{className:"text-[#121212] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed ",children:["and I hone them every day.",e.jsx("br",{}),"Currently, I’m also learning Product Design.",e.jsx("br",{}),"〙«» ›‹ «»〘"]})]}),e.jsx("div",{ref:n,className:"flex-1 flex items-center justify-center p-6",style:{opacity:0,transform:"translateY(100px)",transition:"all 0.5s ease-in-out"},children:e.jsx(f,{src:m,alt:"Skill Illustration",className:"w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-auto object-cover"})})]}),e.jsx("style",{jsx:!0,children:`
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

        .loader {
          display: inline-flex;
          gap: 20px;
        }
        .loader:before,
        .loader:after {
          content: "";
          height: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #000 95%, #0000) 50% / 15px 15px no-repeat #FF0000;
          animation: l10 1.5s infinite alternate;
        }
        .loader:after {
          --s: -1;
        }

        @keyframes l10 {
          0%, 20% {
            transform: scaleX(var(--s, 1)) rotate(0deg);
            clip-path: inset(0);
          }
          60%, 100% {
            transform: scaleX(var(--s, 1)) rotate(30deg);
            clip-path: inset(45% 0 0);
          }
        }
      `})]})};export{u as default};
