(()=>{"use strict";!function(){const e=document.querySelector("#menu-button"),t=document.querySelector("#menu");e.addEventListener("click",(function(){t.classList.toggle("-active")}))}(),function(){const e=document.querySelector(".video"),t=document.querySelector("#video-cover");e.addEventListener("click",(function(){t.classList.add("-inactive")}))}(),function(){let e=document.querySelectorAll(".accordion .item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(n){e[t].classList.toggle("-active")}))}(),document.querySelector(".button-modal").addEventListener("click",(e=>{fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein",{method:"GET",mode:"cors",cache:"default"}).then((e=>{e.json().then((e=>{return t=e,void(document.querySelector(".extract").innerHTML=t.query.pages[736].extract);var t}))}))})),function(){const e=document.querySelector(".button-modal"),t=document.getElementsByTagName("body")[0],n=document.querySelector(".modal-wiki");e.addEventListener("click",(function(){t.classList.add("-overlay"),n.classList.add("-active")}))}();let e=document.querySelectorAll("#carousel .item"),t=0;setInterval((function(){t===e.length-1&&(t=-1),function(){for(let t=0;t<e.length;t++)e[t].style.display="none"}(),e[t+1].style.display="block",t++}),1800)})();