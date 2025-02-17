(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6012:(M,e,t)=>{Promise.resolve().then(t.bind(t,7673))},7673:(M,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});var I=t(5155),a=t(2115);let g=(0,a.createContext)(),i=()=>(0,a.useContext)(g),A=M=>{let{index:e}=M,{content:t,dispatch:a}=i();return(0,I.jsxs)("div",{onClick:()=>a({type:"switchTab",payload:e}),className:"flex flex-col justify-start items-center w-24 h-full bg-gray-500 hover:bg-gray-600",children:[(0,I.jsx)("object",{data:t.sections[e].icon,type:"image/svg+xml","aria-label":"{title} Icon",className:"w-4/5 mt-4 p-2 border-4 bg-cyan-600"}),(0,I.jsx)("h1",{className:"mt-4 writing-vertical text-orientation-upright text-2xl font-bold uppercase",children:t.sections[e].header1})]})},D=M=>{let{index:e}=M,{content:t}=i(),a=[];for(let[M,g]of t.sections[e].content.entries()){let e;let t=Object.keys(g);if(0!==t.length){switch(t[0]){case"header2":e=(0,I.jsx)("h2",{className:"mt-4 text-xl text-center font-bold",children:g.header2});break;case"header3":e=(0,I.jsx)("h3",{className:"mt-4 text-l text-center font-bold",children:g.header3});break;case"paragraph":e=(0,I.jsx)("p",{className:"mt-2 px-12",children:g.paragraph});break;case"image":e=(0,I.jsx)("img",{className:"mt-8 mx-auto w-2/3 border-double border-gray-500 border-4",src:g.image,alt:g.alt});break;default:console.error("Invalid content element type",g)}g.link&&(e=(0,I.jsx)("a",{className:"underline text-cyan-500 hover:text-teal-500",href:g.link,target:"_blank",rel:"noopener noreferrer",children:e})),e=(0,I.jsx)("div",{children:e},M),a.push(e)}}return(0,I.jsx)("div",{className:"w-[40rem]",children:a})},N=M=>{let{index:e}=M,{content:t}=i();return(0,I.jsxs)("div",{className:"border-2 border-gray-500 flex flex-row justify-start h-full w-fit",children:[(0,I.jsx)(A,{index:e}),e===t.activeTab&&(0,I.jsx)(D,{index:e})]})},r=()=>{let{content:M}=i();return(0,I.jsx)("div",{className:"flex flex-row h-screen justify-center items-center h-full",children:M.sections.map((M,e)=>(0,I.jsx)(N,{index:e},e))})},T=()=>(0,I.jsx)("div",{className:"flex flex-row flex-nowrap overflow-x-auto w-full justify-center items-center h-full",children:(0,I.jsx)(r,{})}),c=()=>(0,I.jsx)("div",{children:"MobilePage"}),j={activeTab:0,sections:JSON.parse('[{"header1":"About Me","icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iLTQgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxwYXRoIGQ9Ik00IDRhMiAyIDAgMSAxIDItMiAyIDIgMCAwIDEtMiAybTAtM2ExIDEgMCAxIDAgMSAxIDEgMSAwIDAgMC0xLTFNMyAxNS41di03YS41LjUgMCAwIDAtMSAwdjdhLjUuNSAwIDAgMCAxIDBtMyAwdi03YS41LjUgMCAwIDAtMSAwdjdhLjUuNSAwIDAgMCAxIDBtMi00di01QTEuNSAxLjUgMCAwIDAgNi41IDVoLTVBMS41IDEuNSAwIDAgMCAwIDYuNXY1YS41LjUgMCAwIDAgLjUuNS41LjUgMCAwIDAgLjUtLjV2LTVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXY1YS41LjUgMCAwIDAgMSAwIiBkYXRhLW5hbWU9IkxheWVyIDEiLz48L2c+PC9zdmc+","content":[{"image":"/images/Portrait.webp","alt":"Portrait of Martin Ritsberg"},{"header2":"Martin Ritsberg"},{"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"header1":"Education and Experience","icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMiA0LjUtMTAgNSAxMCA1IDEwLTV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE5IDExdjVsLTcgMy41TDUgMTZ2LTVtMTcgM3Y0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+","content":[{"header2":"header2a"},{"paragraph":"paragraph1"},{"paragraph":"paragraph2"}]},{"header1":"Skills","icon":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjI0IDIyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAwIDEyMmMtMTEuODY5IDAtMjEuNzI1IDguNjY4LTIzLjYzOSAyMEgxNjBjLTEzLjIzNCAwLTI0IDEwLjc2LTI0IDIzLjk4NlYyMTBoOHYtNDQuMDE0YzAtOC44MTQgNy4xNzgtMTUuOTg2IDE2LTE1Ljk4NmgxNi4zNjFjMS45MTMgMTEuMzMyIDExLjc3IDIwIDIzLjYzOSAyMCAxMy4yMzQgMCAyNC0xMC43NjYgMjQtMjRzLTEwLjc2Ni0yNC0yNC0yNG0wIDQwYy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2czcuMTc4LTE2IDE2LTE2IDE2IDcuMTc4IDE2IDE2LTcuMTc4IDE2LTE2IDE2TTkyIDYySDc2YzAtMTMuMjM0LTEwLjc2Ni0yNC0yNC0yNFMyOCA0OC43NjYgMjggNjJzMTAuNzY2IDI0IDI0IDI0YzEwLjQyNiAwIDE5LjI5NS02LjY5MyAyMi42LTE2SDkyYzguODIyIDAgMTYgNy4xODggMTYgMTYuMDI0VjIxMGg4Vjg2LjAyNEMxMTYgNzIuNzc3IDEwNS4yMzQgNjIgOTIgNjJNNTIgNzhjLTguODIyIDAtMTYtNy4xNzgtMTYtMTZzNy4xNzgtMTYgMTYtMTYgMTYgNy4xNzggMTYgMTYtNy4xNzggMTYtMTYgMTYiIHN0eWxlPSJzdHJva2U6IzAwMDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIvPjxwYXRoIGQ9Ik02NCAxMjJINDcuNjM5Yy0xLjkxNC0xMS4zMzItMTEuNzctMjAtMjMuNjM5LTIwLTEzLjIzNCAwLTI0IDEwLjc2Ni0yNCAyNHMxMC43NjYgMjQgMjQgMjRjMTEuODY5IDAgMjEuNzI1LTguNjY4IDIzLjYzOS0yMEg2NGM4LjgyMiAwIDE2IDcuMTg0IDE2IDE2LjAxNFYyMTBoOHYtNjMuOTg2Qzg4IDEzMi43NzQgNzcuMjM0IDEyMiA2NCAxMjJtLTQwIDIwYy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2czcuMTc4LTE2IDE2LTE2IDE2IDcuMTc4IDE2IDE2LTcuMTc4IDE2LTE2IDE2bTEzOS40NjEtNDhoMTIuOWMxLjkxMyAxMS4zMzIgMTEuNzcgMjAgMjMuNjM5IDIwIDEzLjIzNCAwIDI0LTEwLjc2NiAyNC0yNHMtMTAuNzY2LTI0LTI0LTI0Yy0xMS44NjkgMC0yMS43MjUgOC42NjgtMjMuNjM5IDIwaC0xMi45Yy02LjI5NyAwLTExLjQyLTUuMTI1LTExLjQyLTExLjQyNlYxNGgtOHY2MC41NzRjMCAxMC43MTEgOC43MTEgMTkuNDI2IDE5LjQyIDE5LjQyNk0yMDAgNzRjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnMtNy4xNzggMTYtMTYgMTYtMTYtNy4xNzgtMTYtMTYgNy4xNzgtMTYgMTYtMTYiIHN0eWxlPSJzdHJva2Utd2lkdGg6NTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW9wYWNpdHk6MSIvPjwvc3ZnPg==","content":[{"header2":"header2a"},{"paragraph":"paragraph1"},{"paragraph":"paragraph2"}]},{"header1":"Projects","icon":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwNC4wMDIgNDRoLTQ4YTEyLjAxMyAxMi4wMTMgMCAwIDAtMTIgMTJ2NDhhMTIuMDEzIDEyLjAxMyAwIDAgMCAxMiAxMmg0OGExMi4wMTMgMTIuMDEzIDAgMCAwIDEyLTEyVjU2YTEyLjAxMyAxMi4wMTMgMCAwIDAtMTItMTJtNCA2MGE0LjAwNCA0LjAwNCAwIDAgMS00IDRoLTQ4YTQuMDA0IDQuMDA0IDAgMCAxLTQtNFY1NmE0LjAwNCA0LjAwNCAwIDAgMSA0LTRoNDhhNC4wMDQgNC4wMDQgMCAwIDEgNCA0Wm0tNCAzNmgtNDhhMTIuMDEzIDEyLjAxMyAwIDAgMC0xMiAxMnY0OGExMi4wMTMgMTIuMDEzIDAgMCAwIDEyIDEyaDQ4YTEyLjAxMyAxMi4wMTMgMCAwIDAgMTItMTJ2LTQ4YTEyLjAxMyAxMi4wMTMgMCAwIDAtMTItMTJtNCA2MGE0LjAwNCA0LjAwNCAwIDAgMS00IDRoLTQ4YTQuMDA0IDQuMDA0IDAgMCAxLTQtNHYtNDhhNC4wMDQgNC4wMDQgMCAwIDEgNC00aDQ4YTQuMDA0IDQuMDA0IDAgMCAxIDQgNFptOTItMTU2aC00OGExMi4wMTMgMTIuMDEzIDAgMCAwLTEyIDEydjQ4YTEyLjAxMyAxMi4wMTMgMCAwIDAgMTIgMTJoNDhhMTIuMDEzIDEyLjAxMyAwIDAgMCAxMi0xMlY1NmExMi4wMTMgMTIuMDEzIDAgMCAwLTEyLTEybTQgNjBhNC4wMDQgNC4wMDQgMCAwIDEtNCA0aC00OGE0LjAwNCA0LjAwNCAwIDAgMS00LTRWNTZhNC4wMDQgNC4wMDQgMCAwIDEgNC00aDQ4YTQuMDA0IDQuMDA0IDAgMCAxIDQgNFptLTY0IDcydi0zMmE0IDQgMCAwIDEgOCAwdjMyYTQgNCAwIDAgMS04IDBtNzItMTZhNCA0IDAgMCAxLTQgNGgtMjh2NDRhNCA0IDAgMCAxLTQgNGgtMzJhNCA0IDAgMSAxIDAtOGgyOHYtNjBhNCA0IDAgMCAxIDggMHYxMmgyOGE0IDQgMCAwIDEgNCA0bTAgMzJ2MTZhNCA0IDAgMCAxLTggMHYtMTZhNCA0IDAgMCAxIDggMCIgc3R5bGU9InN0cm9rZTojMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjYuNDtzdHJva2UtZGFzaGFycmF5Om5vbmUiLz48L3N2Zz4=","content":[{"header2":"header2a"},{"paragraph":"paragraph1"},{"paragraph":"paragraph2"}]}]')};function x(M,e){if("switchTab"===e.type){if(e.payload<0||e.payload>=M.sections.length)throw Error("Invalid tab index: "+e.payload);return{...M,activeTab:e.payload}}throw Error("Unknown action type: "+e.type)}let l=M=>{let{children:e}=M,[t,i]=(0,a.useReducer)(x,j);return(0,I.jsx)(g.Provider,{value:{content:t,dispatch:i},children:e})},n=()=>{let[M,e]=(0,a.useState)(null),t=()=>{e(window.innerWidth>=768)};return(0,a.useEffect)(()=>{if(null===M)return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),(0,I.jsx)(l,{children:M?(0,I.jsx)(T,{}):(0,I.jsx)(c,{})})}}},M=>{var e=e=>M(M.s=e);M.O(0,[441,517,358],()=>e(6012)),_N_E=M.O()}]);