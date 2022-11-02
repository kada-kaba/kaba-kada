
var i = 0; // start 
var images = [];
var time = 3000; // milliseconds for each image


images[0] = "/image/man-in-forest.jpeg";
images[1] = '/image/hut-in-forest.jpg'
images[2] = "/image/worker-in-forest.jpg";
images[3] = "/image/rainforest-landscape.jpg";



// Change image

function slideShow(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
         
        i++;

    } else {
        i = 0;
    }

    setTimeout("slideShow()", time); 
}

window.onload = slideShow; // load the slideShow function when the page loads


