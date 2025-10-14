import{j as t}from"./vendor_ui-COnG51WL.js";import{I as o}from"./ImageWithFallback-DTXNp067.js";import"./vendor_react-D3F3s8fL.js";function s({url:l,alt:a}){return t.jsx("div",{className:`flex-shrink-0 w-[272px] h-[152px] lg:w-[400px] lg:h-[224px]
                 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden
                 transition-all duration-300 hover:scale-105 hover:shadow-elevated cursor-pointer`,style:{boxShadow:"var(--shadow-soft)"},children:t.jsx(o,{src:l,alt:a,className:"w-full h-full object-cover"})})}function d(){const l=[{url:"https://lh3.googleusercontent.com/d/1JgexDtBSU_bcnzlpeJkx-ObutOGFccV2",alt:"Modern website design"},{url:"https://lh3.googleusercontent.com/d/1kpv6JTv-PtynUXE1_AbuzbFsH6NZgxik",alt:"Mobile app interface"},{url:"https://lh3.googleusercontent.com/d/1HSfU-qKFv-chH2RQK6fQ_8msBKil7yMi",alt:"E-commerce store"},{url:"https://lh3.googleusercontent.com/d/1S95CEASqXL0HGPiySZvpiPJH2Hie7tOR",alt:"Creative website"},{url:"https://lh3.googleusercontent.com/d/1HxoUd-laHA4s3SMWhDfIQ8mcAk0DN3LT",alt:"Portfolio site"},{url:"https://lh3.googleusercontent.com/d/1P4jwTLDs6QEO3ip290-kYXL1a-TCw1nq",alt:"Restaurant website"}],a=[{url:"https://lh3.googleusercontent.com/d/1Rqyh6-15TLfSL3OIUjtxrNNPkvdzY_Iu",alt:"Creative portfolio"},{url:"https://lh3.googleusercontent.com/d/111EDnZVx8rBh9N7rfxz5zRtECzpKAJWl",alt:"Business landing page"},{url:"https://lh3.googleusercontent.com/d/1-kBdwTweXolmWacRrjdCIn0utrQenM_8",alt:"Agency showcase"},{url:"https://lh3.googleusercontent.com/d/1xEhISTMdc83BtYrO3y0vtFecA52ad8vj",alt:"Product site"},{url:"https://lh3.googleusercontent.com/d/1-yKQK6KhLdkMsPNsHdlquMiFVe2Zl5hI",alt:"Tech startup"},{url:"https://lh3.googleusercontent.com/d/1ppDdKpddqfMlDDTWdnsxveNRTovFkWN9",alt:"Fashion brand"}];return t.jsxs("section",{"data-section":"infinite-gallery",className:"relative overflow-hidden py-0",children:[t.jsx("div",{className:"overflow-hidden mb-4 lg:mb-6",children:t.jsxs("div",{className:"track track-left",style:{"--dur":"40s","--gap":"1.5rem"},children:[t.jsx("div",{className:"group",children:l.map((e,r)=>t.jsx(s,{url:e.url,alt:e.alt},`t1-${r}`))}),t.jsx("div",{className:"group","aria-hidden":"true",children:l.map((e,r)=>t.jsx(s,{url:e.url,alt:e.alt},`t2-${r}`))})]})}),t.jsx("div",{className:"overflow-hidden",children:t.jsxs("div",{className:"track track-right",style:{"--dur":"50s","--gap":"1.5rem"},children:[t.jsx("div",{className:"group",children:a.map((e,r)=>t.jsx(s,{url:e.url,alt:e.alt},`b1-${r}`))}),t.jsx("div",{className:"group","aria-hidden":"true",children:a.map((e,r)=>t.jsx(s,{url:e.url,alt:e.alt},`b2-${r}`))})]})}),t.jsx("style",{children:`
        .group {
          display: flex;
          gap: var(--gap);
          padding-right: var(--gap);
        }

        .track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .track-left {
          animation: marquee-left var(--dur, 30s) linear infinite;
        }

        .track-right {
          animation: marquee-right var(--dur, 30s) linear infinite;
        }

        .track-left:hover,
        .track-right:hover {
          animation-play-state: paused;
        }
      `})]})}export{d as InfiniteScrollGallery};
