document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("button-logout");
  
    if (!logoutBtn) {
      console.warn("Tombol logout tidak ditemukan di halaman.");
      return;
    }
  
    logoutBtn.addEventListener("click", async () => {
      try {
        const res = await fetch("/verifikasi/logout", {
          method: "GET",
          credentials: "include", // Biar session/cookie ikut
        });
  
        // Kalau server me-redirect (res.redirect('/login'))
        if (res.redirected) {
          window.location.href = "/login"; // Ikuti redirect
          return;
        }
  
        // Kalau server balikin JSON (res.json())
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
  
          if (!res.ok) {
            alert(data.message || "Logout gagal.");
          } else {
            alert(data.message || "Logout berhasil.");
            window.location.href = "/HTML/LOGIN-PAGE.html"; // ganti sesuai path login kamu
          }
        } else {
          // Jika bukan JSON dan tidak di-redirect, fallback
          alert("Logout berhasil.");
          window.location.href = "/HTML/LOGIN-PAGE.html";
        }
  
      } catch (err) {
        console.error("Logout error:", err);
        alert("Terjadi kesalahan saat logout.");
      }
    });
  });
  