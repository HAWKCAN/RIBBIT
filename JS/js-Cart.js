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

window.addEventListener("scroll",function(){
    const header = document.getElementById("JUDUL-GANTI");
    if (window.scrollY >350){
        header.textContent ="W H E E L"
        header.style.transform = "translateY(-5px)"; 
    
    }else {
        header.textContent ="R I B B I T";
        header.style.transform = "translateY(0)"; 
    }
});