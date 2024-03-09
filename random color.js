let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector("div");
btn.addEventListener("click",function(){
    let result=getrandomcolor();
    h1.innerText=result;
    div.style.backgroundColor=result;
    btn.style.backgroundColor=result;
    h1.style.backgroundColor=result;
});

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;

}