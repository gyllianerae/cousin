/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu show
if(navToggle){
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}

// Menu hidden
if(navClose){
navClose.addEventListener('click', () => {
navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',   
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
})

sr.reveal(`.home__data, .favorites__container`)
sr.reveal(`.home__circle, .home__img`, {delay: 600, scale: .5})
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay: 1000, interval: 100})
sr.reveal(`.home__leaf`, {delay: 1200})
sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay: 1400, interval: 100})
sr.reveal(`.care__img, .contact__img`, {origin: 'left'})
sr.reveal(`.care__list, .contact__data`, {origin: 'right'})
sr.reveal(`.banner__item, .products__card`, {interval: 100})

// BACKGROUND MUSIC

// document.body.addEventListener('click', function() {
//     var audio = document.getElementById('audio');
//     // if (audio.paused) {
//     //     audio.play();
//     // } else {
//     //     audio.pause();
//     // }

//     audio.play();
// });


document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const audioIcon = document.querySelector('.section__audio i');
    const audioText = document.querySelector('.audio-text');
    const audioSection = document.querySelector('.section__audio');

    // Function to toggle play/pause
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // document.querySelector('.section__audio').addEventListener('click', function () {
    //     if (audio.paused) {
    //         audio.play();
    //         audioText.textContent = 'Pause Cock Music';
    //     } else {
    //         audio.pause();
    //         audioText.textContent = 'Play Cock Music!';
    //     }
    // });

    // Function to update icon
    function updateIconAndText() {
        if (audio.paused) {
            // When audio is paused, change icon to mute
            audioIcon.classList.remove('ri-volume-up-fill');
            audioIcon.classList.add('ri-volume-mute-fill');
            audioText.textContent = "Play Cock Music!";
        } else {
            // When audio is playing, change icon to volume on
            audioIcon.classList.remove('ri-volume-mute-fill');
            audioIcon.classList.add('ri-volume-up-fill');
            audioText.textContent = "Pause Cock Music!";
        }
    }

    // Add event listener to toggle play/pause on clicking the audio icon
    audioSection.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the body
        togglePlayPause(); // Toggle play/pause
        updateIconAndText(); // Update icon
    });

    // Add event listener for when the audio is playing or paused
    audio.addEventListener('play', updateIconAndText);
    audio.addEventListener('pause', updateIconAndText);
});

// ========== GALLERY ===========
const gallery = document.querySelector('.gallery');
const images = document.querySelector('.images');
const imageWidth = gallery.offsetWidth;
let currentIndex = 0;

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.children.length) {
    currentIndex = 0; // Reset index to loop back to the first image
  }
  updateGallery();
}

function updateGallery() {
  images.style.transition = 'transform 0.5s ease'; // Add transition for smooth animation
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function transitionEndHandler() {
  if (currentIndex === 0) {
    images.style.transition = 'none'; // Remove transition to instantly jump to the first image
    images.style.transform = `translateX(0)`;
  }
}

images.addEventListener('transitionend', transitionEndHandler);

setInterval(nextImage, 3000); // Change image every 3 seconds
