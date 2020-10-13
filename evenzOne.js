// function scrolldown() {
//     var appearText = document.querySelector(".wedding-serv1");
//     var appearPos = appearText.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 1.2;

//     if(appearPos < screenPosition) {
//         appearText.classList.add('wedding-serv1-appear');
//     }

// window.addEventListener('scroll', scrolldown);



// }

// let slide_content = document.getElementsByClassName("box");
// let image = ['slide1', 'slide2', 'slide3', 'slide4'];
// let i = 0;

let i = 0;
let image = [];
let time = 10000;

image[0] = 'meetup1.jpg';
image[1] = 'meetup2.jpg';
image[2] = 'meetup3.jpg';
image[3] = 'meetup4.jpg';


function nextSlide() {

    document.slide.src = image[i];

    if (i < image.length - 1) {
         i++;
    } else {
        i = 0;
    }

    setTimeout("nextSlide()", time);
console.log(image[i]);
    slide_content.innerHTML = "<img src="+image[i-1]+".png>";
}

function backSlide() {

    document.slide.src = image[i];

    if (i < image.length + 1 && i > 1) {
         i--;
    } else {
        i = image.length;
    }

    // setTimeout("backSlide()", time);
console.log(image[i]);
    slide_content.innerHTML = "<img src="+image[i-1]+".png>";
}

window.onload = nextSlide;




// var i = 0; 			// Start Point
// var images = [];	// Images Array
// var time = 3000;	// Time Between Switch
	 
// // Image List
// images[0] = "http://lorempixel.com/400/200/animals";
// images[1] = "http://lorempixel.com/400/200/sports";
// images[2] = "http://lorempixel.com/400/200/food";
// images[3] = "http://lorempixel.com/400/200/people";

// // Change Image
// function changeImg(){
// 	document.slide.src = images[i];

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}

// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload=changeImg;