const webpages = {
    'CFB': {
        title: "College Football Statistics",
        description: 'For the final project in Davidson\'s Database Systems computer science course, I worked with my group to develop a mySQL database that interacts with a simple front-end query builder. We downloaded 500MB of college football statistics from 2005 to 2013, imported it into our schema, and built a front-end that allows the users to filter the data to investigate the statistics.</p><br><br><p>To run the fullstack application, visit <a href="https://github.com/tyleryandt18/CSC353-Final" target="_blank">this GitHub page</a>, clone the repository, run "npm install", and run the application with VSCode\'s debugger.',
        src: "assets/img/covers/CFB-Demo.png",
        button: false
    },
    'NC': {
        title: "NC Public School Representation",
        description: "<p>Over the summer of 2023, I worked with another Davidson student to create an R Shiny Dashboard to investigate school board representation across public school districts in North Carolina. This dashboard also looks at educational opportunity measures and how they correlate to educational outcome measures.",
        src: "assets/img/covers/NC-Dashboard 11.54.14 AM.png",
        button: true
    }
}

const urlParams = new URLSearchParams(window.location.search);
const webpage = urlParams.get('webpage');

let title = document.getElementById("display-title");
let description = document.getElementById("display-description");
let img = document.getElementById("display-img");
let button = document.getElementById("site");

if (webpages[webpage].button) {
    button.style.visibility = "visible";
} else {
    button.style.visibility = "hidden";
}

title.textContent = webpages[webpage].title;
description.innerHTML = webpages[webpage].description;
img.src = webpages[webpage].src;