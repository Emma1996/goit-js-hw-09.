const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.59f187df.js.map
