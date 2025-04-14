document.addEventListener("DOMContentLoaded", function () {
    // Cek apakah ada form search sebelum menambahkan event listener
    const searchForm = document.querySelector("#search-overlay form");
    if (!searchForm) return;

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        let keyword = document.querySelector("input[name='keyword']").value.trim().toLowerCase();
        
        const searchMappings = {
            // Laptop
            "laptop": "../HTML/Laptop.html",
            "notebook": "../HTML/Laptop.html",
            "komputer jinjing": "../HTML/Laptop.html",
        
            // Mouse
            "mouse": "../HTML/Mouse.html",
            "mouse usb": "../HTML/Mouse.html",
            "mouse wireless": "../HTML/Mouse.html",
            "mouse gaming": "../HTML/Mouse.html",
        
            // Headset
            "headset": "../HTML/Headset.html",
            "headphone": "../HTML/Headset.html",
            "earphone": "../HTML/Headset.html",
            "earbuds": "../HTML/Headset.html",
            "audio": "../HTML/Headset.html",
        
            // Speaker
            "speaker": "../HTML/Speaker.html",
            "sound": "../HTML/Speaker.html",
            "speaker bluetooth": "../HTML/Speaker.html",
        
            // Disk / Storage
            "disk": "../HTML/Disk.html",
            "hdd": "../HTML/Disk.html",
            "ssd": "../HTML/Disk.html",
            "harddisk": "../HTML/Disk.html",
            "penyimpanan": "../HTML/Disk.html",
            "storage": "../HTML/Disk.html",
        
            // Gamepad / Controller
            "gamepad": "../HTML/Gamepad.html",
            "stik": "../HTML/Gamepad.html",
            "stik pc": "../HTML/Gamepad.html",
            "controller": "../HTML/Gamepad.html",
            "game": "../HTML/Gamepad.html",
            "joystick": "../HTML/Gamepad.html",
        
            // Keyboard
            "keyboard": "../HTML/Keyboard.html",
            "kebord": "../HTML/Keyboard.html",
            "board": "../HTML/Keyboard.html",
            "keyboard mechanical": "../HTML/Keyboard.html",
            "keyboard gaming": "../HTML/Keyboard.html",
        
            // Mousepad
            "mousepad": "../HTML/Mousepad.html",
            "alas mouse": "../HTML/Mousepad.html",
            "alas": "../HTML/Mousepad.html",
            "pad mouse": "../HTML/Mousepad.html",
        
            // Drawing Pad
            "drawing pad": "../HTML/drawingpad.html",
            "drawing": "../HTML/drawingpad.html",
            "pad": "../HTML/drawingpad.html",
            "draw": "../HTML/drawingpad.html",
            "pen tablet": "../HTML/drawingpad.html",
            "tablet gambar": "../HTML/drawingpad.html",
        
            // Webcam
            "webcam": "../HTML/Webcam.html",
            "kamera": "../HTML/Webcam.html",
            "kamera pc": "../HTML/Webcam.html",
        
            // Wheel
            "wheel": "../HTML/Wheel.html",
            "racing wheel": "../HTML/Wheel.html",
            "steering": "../HTML/Wheel.html",
            "setir": "../HTML/Wheel.html",
            "game wheel": "../HTML/Wheel.html",
        
            // Bracket
            "bracket": "../HTML/Bracket.html",
            "penyangga": "../HTML/Bracket.html",
            "mounting": "../HTML/Bracket.html",
            "mount": "../HTML/Bracket.html",
        
            // Monitor
            "monitor": "../HTML/Monitor.html",
            "layar": "../HTML/Monitor.html",
            "display": "../HTML/Monitor.html",
            "screen": "../HTML/Monitor.html",
        
            // RTX
            "rtx": "../HTML/RTX.html",
            "vga": "../HTML/RTX.html",
            "gpu": "../HTML/RTX.html",
            "nvidia": "../HTML/RTX.html",
            "graphics card": "../HTML/RTX.html",
            "kartu grafis": "../HTML/RTX.html"
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
