var vi = [
    ["doingu", "Đội Ngũ"],
    ["nghiencuu", "Nghiên Cứu"],
    ["giangday", "Giảng dạy"]
];
var langVi = new Array();
for (var key in vi) {
    langVi[vi[key][0]] = vi[key][1];
}

//check if not Mac, change scrollbar
if (navigator.appVersion.indexOf("Mac") == -1) {
    var css = `::-webkit-scrollbar {
        width: 6px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }`
    head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}


var content = document.getElementById("content");

content.addEventListener("scroll", function (e) {
    var height = document.getElementById("intro").clientHeight;
    var scroll = e.target.scrollTop;
    var header = document.getElementById("header");
    var per = scroll / height;
    per = per > 1 ? 1 : per;
    if (per == 1) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
    header.style.backgroundColor = "rgba(0, 155, 244," + per + ")";
    header.style.padding = 6 + 18 * (1 - per) + "px";
});

document.querySelector(".swipe-down").addEventListener("click", function () {
    intro();
});

document.querySelector("#to-top").addEventListener("click", function () {
    content.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("black-bg").style.display = "block";
    document.getElementById("hmenu").style.display = "block";
    // document.querySelector("#content").style.bottom=0;
});

document.getElementById("black-bg").addEventListener("click", function () {
    document.getElementById("black-bg").style.display = "none";
    document.getElementById("hmenu").removeAttribute("style");
    document.querySelector("#content").removeAttribute("style");
});

window.addEventListener("hashchange", function () {
    getHash();
});

function getHash() {
    if (location.hash.length >= 2) {
        let id = this.location.hash.substring(1, this.location.hash.length);
        document.getElementById("black-bg").style.display = "none";
        document.getElementById("hmenu").removeAttribute("style");
        document.querySelector("#content").removeAttribute("style");
        loadpage(langVi[id], id);
    };
}
getHash();

function intro() {
    content.scrollBy({
        top: document.getElementById("intro").clientHeight - content.scrollTop,
        left: 0,
        behavior: 'smooth'
    });
}

function loadpage(title, name) {
    document.getElementById("load-content").style.display = "block";
    document.getElementById("load-content").innerHTML = "";
    document.title = title + " | Bộ môn Công Nghệ Phần Mềm";
    content.scrollBy({
        top: document.getElementById("intro").clientHeight + document.getElementById("intro-page").clientHeight - content.scrollTop,
        left: 0,
        behavior: 'smooth'
    });
    loading();
    fetch('page/' + name + '.html')
        .then(function (response) {
            return response.text();
        })
        .then(function (result) {
            document.getElementById("load-content").innerHTML = result;
            unloading();
        });
}


function loading() {
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".loading-bar").style.display = "block";
}

function unloading() {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".loading-bar").style.display = "none";
}


