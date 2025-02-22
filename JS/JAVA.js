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

// INI BUAT IKLAN
function startScrolling() {
  const container = document.querySelector(".scroll-promo"); // Pastikan pilih yang scrollable
  const scrollSpeed = 1; // Kecepatan scroll (px per frame)

  // Duplikasi konten supaya looping lebih smooth
  container.innerHTML += container.innerHTML;

  function scrollStep() {
      container.scrollLeft += scrollSpeed;

      // Jika sudah mencapai batas, reset ke awal agar seamless
      if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
      }

      requestAnimationFrame(scrollStep); // Gunakan animasi frame untuk smooth
  }

  scrollStep(); // Mulai animasi
}

document.addEventListener("DOMContentLoaded", startScrolling);
