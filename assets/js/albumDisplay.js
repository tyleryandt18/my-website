const albums = {
    'Hungary': {
        album: hungary,
        title: "Hungary.",
        description: "Taken during my time studying abroad in Budapest, Hungary. Some pictures were taken in the city, while others were taken during other trips around the country."
    },
    'Ireland': {
        album: ireland,
        title: "Ireland,",
        description: "While I was studying abroad, I took a weekend trip to Dublin, Ireland. These photos were taken on a day trip to the Cliffs of Moher."
    },
    'sports': {
        album: sports,
        title: "Sports Photography.",
        description: "At Davidson College, I had the privilege of taking photos during men's and women's soccer matches. These are some of my favorite shots."
    },
    'day': {
        album: day,
        title: "A Picture A Day.",
        description: "When I first got into photography, I challenged myself to take at least one picture a day for 100 days. I experimented with all sorts of different techniques. These are some of my favorite shots."
    },
    'Arizona': {
        album: arizona,
        title: "Arizona.",
        description: "My mom moved to Arizona after my freshman year at Davidson. Here are some pictures I've compiled over my visits back home."
    },
    'other': {
        album: other,
        title: "Other Pictures from Europe.",
        description: "Here are some pictures from my travels while studying abroad, not including Ireland or Hungary."
    }
}

const urlParams = new URLSearchParams(window.location.search);
const albumName = urlParams.get('album');

let albumDisplay = document.getElementById("album-display");
albumDisplay.innerHTML = '';

let albumTitle = document.getElementById("album-title");
let albumDescription = document.getElementById("album-description");

albumTitle.textContent = albums[albumName].title;
albumDescription.textContent = albums[albumName].description;

let album = albums[albumName].album;
let path = "assets/img/albums/" + String(albumName) + "/";
album.forEach(img => {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-xl-10', 'offset-xl-1');
    div.style.padding = '20px';
    let image = document.createElement('img');
    image.src = path + img;
    image.setAttribute('width', '100%');
    image.setAttribute('height', 'auto');
    div.appendChild(image);
    albumDisplay.appendChild(div);
});