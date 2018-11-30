var content=document.getElementById("content");
var height=document.getElementById("intro").clientHeight;

content.addEventListener("scroll",function(e){
var scroll=e.target.scrollTop;
var header=document.getElementById("header");
var per=scroll/height;
per=per>1?1:per;
console.log(per);
header.style.backgroundColor="rgba(0, 155, 244,"+per+")";
header.style.padding=6+18*(1-per)+"px";
});

document.querySelector(".swipe-down").addEventListener("click",function(){
    intro();
});

document.getElementById("menu-btn").addEventListener("click",function(){
    document.getElementById("black-bg").style.display="block";
    document.getElementById("menu").style.display="block";
});

document.getElementById("black-bg").addEventListener("click",function(){
    document.getElementById("black-bg").style.display="none";
    document.getElementById("menu").removeAttribute("style");
});

function intro(){
    content.scrollBy({ 
        top: height, 
        left: 0, 
        behavior: 'smooth' 
      });
}
