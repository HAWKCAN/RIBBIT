
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

window.onload = () => {
  fetch('/verifikasi/check-session')
    .then(response => response.json())
    .then(data => {
      if (data.loggedIn) {
        const user = data.user;
        document.getElementById("userUI").style.display = "block";
        document.getElementById("guestUI").style.display = "none";
        document.getElementById("welcomeText").textContent = `HALLO, ${user.USERNAME}`;
      } else {
        document.getElementById("userUI").style.display = "none";
        document.getElementById("guestUI").style.display = "block";
      }
    })
    .catch(err => {
      console.error('Gagal cek session:', err);
    });
};

