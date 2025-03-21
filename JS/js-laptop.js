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
  
