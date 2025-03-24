function toggleMenu(){
    var searchOverlay = document.getElementById("search-overlay");
    var button = document.getElementBtId("sembunyi");

    if (searchOverlay.classList.contains("show"))  {
        searchOverlay.classList.remove("show");
        button.classList.remove("hidden");
    } else {
        searchOverlay.classList.add("show");
        button.clasList.add("hidden");
    }
}

window.addEventListener("scroll",function(){
    const header = document.getElementById("JUDUL-GANTI");
    if (window.scrollY >180){
        header.textContent ="G A M E P A D"
        header.style.transform = "translateY(-5px)"; /* Efek naik */
    
    }else {
        header.textContent ="R A B B I T";
        header.style.transform = "translateY(0)"; 
    }
});