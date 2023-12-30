const albums = {
    'Budapest': {
        album: 'budapest'
    },
    'Ireland': {
        album: 'ireland'
    },
    'sports': {
        album: 'sports'
    },
    'day': {
        album: 'day'
    },
    'Arizona': {
        album: 'arizona'
    }, 
    'other': {
        album: 'other'
    }
} // JS object with attributes of what we need to fill into the page
// one attribute will be the album name
// create an album for each page in the directory
// dynamically create the image displays by iterating over each picture in the album

// create a python script that creates the lists for you
// find all of the pictures you want, iterate over the files in folders in the python scripts, 
// then you have your lists

function navigateAlbum(dest) {
    const albumDisplay = document.getElementById("album-display");
    albumDisplay.innerHTML = '';

    let album = albums
    window.location.href = "./albumdisplay.html";
}