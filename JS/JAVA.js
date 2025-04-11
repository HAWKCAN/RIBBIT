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
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("User dari localStorage:", user);

  if (user && user.USERNAME) {
      document.getElementById("userUI").style.display = "block";
      document.getElementById("guestUI").style.display = "none";
      document.getElementById("welcomeText").textContent = `HALLO, ${user.USERNAME}`;
  } else {
      document.getElementById("userUI").style.display = "none";
      document.getElementById("guestUI").style.display = "block";
  }
};

function logout() {
  localStorage.removeItem('user');
  window.location.href = '/HTML/LOGIN-PAGE.html';
}