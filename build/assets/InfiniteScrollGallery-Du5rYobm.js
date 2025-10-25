import{j as r}from"./vendor_ui-COnG51WL.js";import{I as o}from"./ImageWithFallback-DTXNp067.js";import"./vendor_react-D3F3s8fL.js";const n="/assets/Screenshot_2025-10-07_at_11.03.47_AM-D32e6LA4.webp",i="/assets/Screenshot_2025-10-07_at_11.08.28_AM-CPzohMxy.webp",c="/assets/Screenshot_2025-10-08_at_4.29.24_PM-DK67oidQ.webp",u="/assets/Screenshot_2025-10-08_at_4.34.11_PM-CHIANgIZ.webp",m="/assets/Screenshot_2025-10-08_at_4.36.37_PM-CYxKCG6W.webp",d="/assets/Screenshot_2025-10-08_at_4.54.23_PM-Cyoo5-Ow.webp",h="/assets/Screenshot_2025-10-08_at_4.55.37_PM-ipYnK3dw.webp",_="/assets/Screenshot_2025-10-08_at_4.56.46_PM-DVLeIp_O.webp",p="/assets/Screenshot_2025-10-08_at_4.58.54_PM-I3lgyYRV.webp",w="/assets/Screenshot_2025-10-08_at_4.59.44_PM-DgbcaUmp.webp",g="/assets/Screenshot_2025-10-08_at_5.15.28_PM-D3SwHYeC.webp",f="/assets/Screenshot_2025-10-08_at_8.58.57_AM-JR2o8P7J.webp";function l({url:a,alt:s}){return r.jsx("div",{className:`flex-shrink-0 w-[272px] h-[152px] lg:w-[400px] lg:h-[224px]
                 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden
                 transition-all duration-300 hover:scale-105 hover:shadow-elevated cursor-pointer`,style:{boxShadow:"var(--shadow-soft)"},children:r.jsx(o,{src:a,alt:s,className:"w-full h-full object-cover"})})}function b(){const a=[{url:n,alt:"Our work 1"},{url:i,alt:"Our work 2"},{url:c,alt:"Our work 3"},{url:u,alt:"Our work 4"},{url:m,alt:"Our work 5"},{url:d,alt:"Our work 6"}],s=[{url:h,alt:"Our work 7"},{url:_,alt:"Our work 8"},{url:p,alt:"Our work 9"},{url:w,alt:"Our work 10"},{url:g,alt:"Our work 11"},{url:f,alt:"Our work 12"}];return r.jsxs("section",{"data-section":"infinite-gallery",className:"relative overflow-hidden py-0",style:{contentVisibility:"auto",containIntrinsicSize:"700px"},children:[r.jsx("div",{className:"overflow-hidden mb-4 lg:mb-6",children:r.jsxs("div",{className:"track track-left",style:{"--dur":"40s","--gap":"1.5rem"},children:[r.jsx("div",{className:"group",children:a.map((t,e)=>r.jsx(l,{url:t.url,alt:t.alt},`t1-${e}`))}),r.jsx("div",{className:"group","aria-hidden":"true",children:a.map((t,e)=>r.jsx(l,{url:t.url,alt:t.alt},`t2-${e}`))})]})}),r.jsx("div",{className:"overflow-hidden",children:r.jsxs("div",{className:"track track-right",style:{"--dur":"50s","--gap":"1.5rem"},children:[r.jsx("div",{className:"group",children:s.map((t,e)=>r.jsx(l,{url:t.url,alt:t.alt},`b1-${e}`))}),r.jsx("div",{className:"group","aria-hidden":"true",children:s.map((t,e)=>r.jsx(l,{url:t.url,alt:t.alt},`b2-${e}`))})]})}),r.jsx("style",{children:`
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
      `})]})}export{b as InfiniteScrollGallery};
