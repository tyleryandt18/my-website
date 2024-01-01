const webpages = {
    'CFB': {
        title: "College Football Statistics",
        description: "temp",
        src: "assets/img/covers/CFB-Demo.png"
    },
    'NC': {
        title: "NC Public School Representation",
        description: "temp",
        src: "assets/img/covers/NC-Dashboard.png"
    }
}

const urlParams = new URLSearchParams(window.location.search);
const webpage = urlParams.get('webpage');

let title = document.getElementById("display-title");
let description = document.getElementById("display-description");
let img = document.getElementById("display-img");

title.textContent = webpages[webpage].title;
description.textContent = webpages[webpage].description;
img.src = webpages[webpage].src;