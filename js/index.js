var content=document.getElementById("content");

content.addEventListener("scroll",function(e){
var height=document.getElementById("intro").clientHeight;
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
        top: document.getElementById("intro").clientHeight-content.scrollTop, 
        left: 0, 
        behavior: 'smooth' 
      });
}

// function loadpage(title,name){
//     content.scrollBy({ 
//         top: document.getElementById("intro").clientHeight+document.getElementById("intro-page").clientHeight-content.scrollTop, 
//         left: 0, 
//         behavior: 'smooth' 
//       });
//       loading();
//     fetch('/page/'+name+'.html')
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(result) {
//     document.getElementById("load-content").innerHTML=result;
//     unloading();
//   });
// }
// loadpage('adsf','doingu');

function loading(){
    document.querySelector(".loading").style.display="block";
    document.querySelector(".loading-bar").style.display="block";
}

function unloading(){
    document.querySelector(".loading").style.display="none";
    document.querySelector(".loading-bar").style.display="none";
}