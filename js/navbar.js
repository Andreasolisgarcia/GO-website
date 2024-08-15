const navbar = document.getElementById("navbar");
const listOfNavbarLinks = document.getElementById("navLinks")
const hamburgerIcon = document.getElementById('hamburgerIcon')


hamburgerIcon.addEventListener('click', (e) => {
  navbar.classList.toggle('responsive')
  listOfNavbarLinks.classList.toggle('main-navbar__active')
})