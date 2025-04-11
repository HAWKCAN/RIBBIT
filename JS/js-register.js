document.getElementById("registerform") .addEventListener("submit" ,async (e) => {
    e.preventDefault();
    const USERNAME = document.getElementById ("USERNAME").value;
    const PASSWORD = document.getElementById ("PASSWORD").value;

    const res = await fetch ('/verifikasi/register' , {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body :JSON.stringify({ USERNAME , PASSWORD})
    });

    const data =await res.json();
    document.getElementById("msg").textContent = data.message;
 
    if (res.ok){
        setTimeout(() => window.location.href = '/HTML/LOGIN-PAGE.html', 1500);
    }
  
})

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