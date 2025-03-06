function toggleMenu() {
  var searchOverlay = document.getElementById("search-overlay");
  var button = document.getElementById("sembunyi");

  if (searchOverlay.classList.contains("show")) {
      searchOverlay.classList.remove("show");
      button.classList.remove("hidden");
  } else {
      searchOverlay.classList.add("show");
      button.classList.add("hidden");
  }
}

const sliderController = (function() {
  let index = 0;
  const imagesPerView = 1;
  
  function geser(arah) {
      const slider = document.querySelector(".scroll-promo");
      const totalImages = document.querySelectorAll(".scroll-promo img").length;
      const maxIndex = totalImages - imagesPerView;
      
      if (arah === 'kanan') {
          index = (index + imagesPerView) % (maxIndex + imagesPerView);
      } else {
          index = (index - imagesPerView + (maxIndex + imagesPerView)) % (maxIndex + imagesPerView);
      }
      
      slider.style.transform = `translateX(${-index * 300}px)`;
  }
  
  return { geser };
})();