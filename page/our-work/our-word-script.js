var i = 0; // start 
var images = [];
var time = 5000; // milliseconds for each image


images [0] = //image1.jpg
images[1] = //image2.jpg
images[2] = //image3.jpg



// Change image

function slideshow() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
         i++

    } else {
        i = 0
    }

    setTimeout(changeImg(), time);
}

window.onload = changeImg
