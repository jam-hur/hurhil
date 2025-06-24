import lightGallery from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.8.1/lightgallery.es5.min.js";

import lgZoom from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.8.1/plugins/zoom/lg-zoom.es5.min.js";

// Original working variable declaration below....
// const $lgContainer = document.getElementById('swiper-container');

// new code to enable multiple instances - currently not working to launch full set of images
var $lgContainer = document.getElementsByClassName("swiper-slide");
for (let item of $lgContainer) {
  lightGallery(item, {
    share: false,
  });
}

const lg = lightGallery($lgContainer, {
  speed: 500,
  showZoomInOutIcons: true,
  actualSize: false,
  controls: true,
  selector: ".swiper-slide > a",
  plugins: [lgZoom],
  licenseKey: "8120E1EF-B22B-4CD3-8598-441BE946A08C",
});
