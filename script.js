let daynight=document.querySelector(".daynight");
let banner=document.querySelector(".banner");

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let tyingEffect = new Typed("#text",{
    strings:["DropXout","Youtuber","Coder"],
    loop:true,
    typespeed:100,
    backSpeed:50,
    BackDelay:1000
});