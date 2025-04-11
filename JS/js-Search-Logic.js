document.addEventListener("DOMContentLoaded", function () {
    // Cek apakah ada form search sebelum menambahkan event listener
    const searchForm = document.querySelector("#search-overlay form");
    if (!searchForm) return;

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        let keyword = document.querySelector("input[name='keyword']").value.trim().toLowerCase();
        
        const searchMappings = {
            "laptop": "../HTML/Laptop.html",
            "mouse": "../HTML/Mouse.html",
            "headset": "../HTML/Headset.html",
            "speaker": "../HTML/Speaker.html",
            "disk": "../HTML/Disk.html",
            "gamepad": "../HTML/Gamepad.html",
            "keyboard": "../HTML/Keyboard.html",
            "mousepad": "../HTML/Mousepad.html",
            "drawing pad": "../HTML/drawingpad.html",
            "webcam": "../HTML/Webcam.html",
            "wheel": "../HTML/Wheel.html",
            "bracket": "../HTML/Bracket.html",
            "keyboard" :"../HTML/Keyboard.html"
        };

        const productKeywords = {
            "laptop": ["asus", "lenovo", "acer", "dell", "msi"],
            "mouse": ["logitech", "razer", "steelseries"],
            "headset": ["hyperx", "corsair", "sennheiser"],
            "keyboard": ["mechanical", "redragon", "logitech"],
        };

        // Jika kata kunci cocok dengan kategori, langsung pindah ke halaman kategori
        if (searchMappings[keyword]) {
            window.location.href = searchMappings[keyword];
            return;
        }

        // Jika kata kunci cocok dengan tipe produk, arahkan ke kategori dengan parameter `search`
        for (let category in productKeywords) {
            if (productKeywords[category].includes(keyword)) {
                window.location.href = `${searchMappings[category]}?search=${keyword}`;
                return;
            }
        }

        alert("Produk tidak ditemukan. Coba kata kunci lain!");
    });
});
