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
    if (window.scrollY >180){
        header.textContent ="S P E A K E R"
        header.style.transform = "translateY(-5px)"; /* Efek naik */
    
    }else {
        header.textContent ="R A B B I T";
        header.style.transform = "translateY(0)"; 
    }
});