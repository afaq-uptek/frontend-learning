import './style.css'
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import ScrollReveal from 'scrollreveal';

let lastScrollTop = 0;
let header = document.querySelector("#section-header");
let scrollTimeout = null;

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Clear any existing timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    // Hide header when scrolling down
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100%"; // Adjust to hide the header completely
    } else {
        header.style.top = "0"; // Show header when scrolling up
    }

    // Set a timeout to show the header when scrolling stops
    scrollTimeout = setTimeout(() => {
        header.style.top = "0";
    }, 200); // Adjust the time to fit your needs

    lastScrollTop = scrollTop;
});


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
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
      spaceBetween: 38.58,
    }

  }

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
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 23.19,
      }
    }
}
const product_thumbs_slider_options = {
  direction: "vertical",
  speed: 700,
  spaceBetween: 18.68,
  cssMode: true,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const hero_selector = document.querySelector('.hero-slider');
const arrivals_selector = document.querySelector('.arrival-cards-swiper');
const testimonials_selector = document.querySelector('.testinomials-swiper');
const product_selector = document.querySelector('.gallery-slider');
const product_thumbs_selector = document.querySelector('.gallery-thumbs-slider');

// Initialize Swiper
const heroSlider = swiperInitializer(hero_selector, heroSliderOptions);
const arrivalsSlider = swiperInitializer(arrivals_selector, arrivals_Slider_Options);
const testimonialsSlider = swiperInitializer(testimonials_selector, testimonials_Slider_Options);
const productThumbsSlider = swiperInitializer(product_thumbs_selector, product_thumbs_slider_options);
const product_slider_options = {
  direction: "horizontal",
  loop: true,
  speed: 700,
  thumbs: {
    swiper: productThumbsSlider
  }
}
const productSlider = swiperInitializer(product_selector, product_slider_options);
// productSlider.thumbs.swiper = productThumbsSlider;

productThumbsSlider.on('slideChange', function() {
  productSlider.slideTo(productThumbsSlider.activeIndex);
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const filterAccordionHeaders = document.querySelectorAll('.tab-accordion-header');

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.classList.add('expanded');
     }
     else {
       accordionItemBody.style.maxHeight = 0;
       accordionItemBody.classList.remove('expanded');
     }
    
   });
});
if (window.innerWidth <=1024) {
  filterAccordionHeaders.forEach(filterAccordionHeader => {
    filterAccordionHeader.addEventListener("click", event => {
      
       // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
  //     const currentlyActivefilterAccordionHeader = document.querySelector(".accordion-item-header.active");
  //     if(currentlyActivefilterAccordionHeader && currentlyActivefilterAccordionHeader!==filterAccordionHeader) {
  //        currentlyActivefilterAccordionHeader.classList.toggle("active");
  //        currentlyActivefilterAccordionHeader.nextElementSibling.style.maxHeight = 0;
  //      }
  
       filterAccordionHeader.classList.toggle("active");
       const accordionItemBody = filterAccordionHeader.nextElementSibling;
       if(filterAccordionHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        accordionItemBody.classList.add('expanded');
       }
       else {
         accordionItemBody.style.maxHeight = 0;
         accordionItemBody.classList.remove('expanded');
       }
      
     });
  });
}


// price slider on collection page

const shop_template = document.querySelector('.template-shop');
if (shop_template) {
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minValue = document.getElementById("minValue");
  const maxValue = document.getElementById("maxValue");
  const sliderTrack = document.querySelector(".slider-track");
  
  function updateSlider(min_value, max_value) {
      let min = parseInt(min_value);
      let max = parseInt(max_value);
      minRange.value = min;
      maxRange.value = max;
  
      if (min > max) {
          minRange.value = max;
          console.log(minRange.value);
      }
  
      if (max < min) {
          maxRange.value = min;
          console.log(maxRange.value);
      }
      minValue.value = parseInt(minRange.value);
      maxValue.value = parseInt(maxRange.value);
  
      const minPercent = (minRange.value / minRange.max) * 100;
      const maxPercent = (maxRange.value / maxRange.max) * 100;
  
      sliderTrack.style.background = `linear-gradient(to right, #ddd ${minPercent}%, #8a33fd ${minPercent}%, #8a33fd ${maxPercent}%, #ddd ${maxPercent}%)`;
  }
  
  minRange.addEventListener("input", () => {
    updateSlider(minRange.value, maxRange.value)
  });
  maxRange.addEventListener("input", () => {
    updateSlider(minRange.value, maxRange.value)
  });
  minValue.addEventListener("change", () => {
    updateSlider(minValue.value, maxRange.value)
  });
  maxValue.addEventListener("change", () => {
    updateSlider(minRange.value, maxValue.value)
  });
  
  
  window.onload = updateSlider(minRange.value, maxRange.value);
  
  document.getElementById("details-toggle").addEventListener("click", function() {
    var content = document.querySelector(".text-content");
    var button = this;
  
    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded");
      button.textContent = "See More";
    } else {
      content.classList.add("expanded");
      button.textContent = "See Less";
    }
  });
}


const text_over_img_images = document.querySelectorAll('#text-over-image img');

document.addEventListener('DOMContentLoaded', function() {
  text_over_img_images.forEach(img => {
    img.onload = function() {
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const padding = `${(aspectRatio * 100)}%`;
        
        img.closest('.image-wrapper').style.setProperty('--padding-bottom', padding);
        img.style.setProperty('--aspect-ratio', aspectRatio);
    };
  })

  const tabs = document.querySelectorAll('.product-tabs .tab-link');
  const contents = document.querySelectorAll('.tabs-content-wrapper .tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
          event.preventDefault();

          // Remove active class from all tabs
          tabs.forEach(tab => {
            const list_item = tab.closest('.list-item');
            list_item.classList.remove('active')
          });
          // Add active class to the clicked tab
          tab.closest('.list-item').classList.add('active');

          // Hide all tab contents
          contents.forEach(content => content.classList.add('hidden'));
          // Show the content corresponding to the clicked tab
          const contentId = tab.getAttribute('href');
          document.querySelector(contentId).classList.remove('hidden');
      });
  });
})


const close_btn = document.querySelector('.close-btn');
const menu_btn = document.querySelector('.menu-btn');

close_btn.addEventListener('click', closeMenu);
menu_btn.addEventListener('click', openMenu);
// Open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "350px";
}

// Close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

const video = document.querySelector('.product-video-media video');
const playPauseButton = document.querySelector('.play-pause-button');
const timeLabel = document.querySelector('.time-label');

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.querySelector('.icon-pause').classList.remove('hidden');
        playPauseButton.querySelector('.icon-play').classList.add('hidden');
    } else {
        video.pause();
        playPauseButton.querySelector('.icon-pause').classList.add('hidden');
        playPauseButton.querySelector('.icon-play').classList.remove('hidden');
    }
}

function togglePlayBtn() {
  playPauseButton.querySelector('.icon-pause').classList.add('hidden');
        playPauseButton.querySelector('.icon-play').classList.remove('hidden'); // Reset the play button text
  // You can also perform other actions here, such as showing a replay button
}

function updateTimeLabel() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    timeLabel.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

playPauseButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateTimeLabel);
video.addEventListener('ended', togglePlayBtn);

// Initialize time label
updateTimeLabel();
