document.getElementById ("loginform").addEventListener("submit" , async (e) => {
    e.preventDefault();
    const USERNAME = document.getElementById ("USERNAME").value;
    const PASSWORD = document.getElementById ("PASSWORD").value;

    console.log("Login request body:", { USERNAME, PASSWORD });

    const res = await fetch ('/verifikasi/login' , {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body :JSON.stringify({ USERNAME , PASSWORD})
    });


    const data =await res.json();

    console.log("Response status:", res.status);
    console.log("Response data:", data);

    document.getElementById("msg").textContent = data.message;

 
    if (!res.ok) {
        msg.style.color = "red";
        return;
    }

  
 
    msg.style.color = "green";
    msg.textContent = "Login berhasil, redirecting...";

    // Redirect berdasarkan role
    setTimeout(() => {
        window.location.href = data.ROLE === 'admin'
            ? '/ADMIN/HTML/dashboard.html'
            : '/HTML/HOMEPAGE.html';
    }, 1500);
});

function setupTogglePassword(inputId, toggleIconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    toggleIcon.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";

      toggleIcon.classList.toggle("fa-eye");
      toggleIcon.classList.toggle("fa-eye-slash");
    });
  }

  // Panggil fungsi saat halaman sudah siap
  window.addEventListener("DOMContentLoaded", () => {
    setupTogglePassword("PASSWORD", "togglePassword");
  });