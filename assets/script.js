const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides);

const image = slides.map(slides => slides.image)
// console.log(image)

const tagLine = slides.map(slides => slides.tagLine)
// console.log(tagLine)

// const slide = {...slides};
// console.log(slide);

// console.log(slides[1]);

const nbSlide = slides.length;
console.log(nbSlide)

const slide = document.getElementById("image");
// console.log(slide)

const srcImage = slide.src;
// console.log(srcImage)

const slideTagLine = document.getElementById("tagLine");
// console.log(slideTagLine)

//  on va creer un element par default
let dotElement = document.createElement("i")
//  rajout des classes correspondante
dotElement.setAttribute("class", "fa-solid fa-circle-dot dot")
// injecter les dots au html
const dotsContainer = document.getElementsByClassName("dots")[0]

slides.forEach(image => {
	dotsContainer.appendChild(dotElement.cloneNode(true))
	
});
document.querySelector(".dot").classList.add("dot-selected");
// rajouter la classe actif a la 1ere balise
const dots = document.querySelectorAll('.dot');
const nbDots = dots.length;
// console.log(nbDots)

let count = 0;

function nextSlide(){
	dots[count].classList.remove('dot-selected');


	if(count < nbSlide - 1){
		count++;
		console.log("a");
	} else {
		count = 0;
		console.log("b");
	}

	console.log(count);

	dots[count].classList.add('dot-selected');
	slide.setAttribute("src", "./assets/images/slideshow/" + image[count]);
	console.log(slide);
	slideTagLine.innerHTML = tagLine[count];
	console.log(slideTagLine);
	
}

function previousSlide(){
	dots[count].classList.remove('dot-selected');

	if(count > 0){
		count--;
	} else {
		count = nbSlide - 1;
	}

	console.log(count);

	dots[count].classList.add('dot-selected');
	slide.setAttribute("src", "./assets/images/slideshow/" + image[count]);
	console.log(slide);
	slideTagLine.innerHTML = tagLine[count];
	console.log(slideTagLine);

}

arrowR.addEventListener('click', nextSlide);
arrowL.addEventListener('click', previousSlide);


// arrowL.addEventListener("click", function () {
// 	alert("bonjour");
// });

// arrowR.addEventListener("click", function () {
// 	alert("au revoir");
// });


// const slide = document.querySelectorAll('.banner-img');
// const nbSlide = slide.length;

// const dots = document.querySelectorAll('#dot');
// const nbDots = dots.length;

// let count = 0;

// function nextSlide(){
// 	slide[count].classList.remove('active');
// 	dots[count].classList.remove('dot-selected');

// 	if(count < nbSlide - 1){
// 		count++;
// 		console.log("a");
// 	} else {
// 		count = 0;
// 		console.log("b");
// 	}

// 	console.log(count);

// 	slide[count].classList.add('active');
// 	dots[count].classList.add('dot-selected');
	
// }

// function previousSlide(){
// 	slide[count].classList.remove('active');
// 	dots[count].classList.remove('dot-selected');

// 	if(count > 0){
// 		count--;
// 	} else {
// 		count = nbSlide - 1;
// 	}

// 	console.log(count);

// 	slide[count].classList.add('active');
// 	dots[count].classList.add('dot-selected');

// }

// arrowR.addEventListener('click', nextSlide);
// arrowL.addEventListener('click', previousSlide);


// arrowL.addEventListener("click", function () {
// 	alert("bonjour");
// });