import './style.css'
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const swiperInitializer = ( selector,  options ) => {
  const swiper = new Swiper(selector, options);
  return swiper;
}

const heroSliderOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  crossFade: true,
  speed: 700,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const arrivals_Slider_Options = {
  direction: 'horizontal',
  loop: true,
  crossFade: true,
  speed: 700,
  slidesPerView: 4,
  spaceBetween: 38.58,
  lazyloading: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
const testimonials_Slider_Options = {
  direction: 'horizontal',
  loop: true,
  crossFade: true,
  speed: 700,
  slidesPerView: 3,
  spaceBetween: 23.19,
  lazyloading: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
}

const hero_selector = document.querySelector('.hero-slider');
const arrivals_selector = document.querySelector('.arrival-cards-swiper');
const testimonials_selector = document.querySelector('.testinomials-swiper');

// Initialize Swiper
const heroSlider = swiperInitializer(hero_selector, heroSliderOptions);
const arrivalsSlider = swiperInitializer(arrivals_selector, arrivals_Slider_Options);
const testimonialsSlider = swiperInitializer(testimonials_selector, testimonials_Slider_Options);
