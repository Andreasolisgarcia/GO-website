function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    var y = document.getElementById("main-navbar");
    if (y.className === "main-navbar") {
      y.className += " main-navbar__active";
    } else {
      y.className = "main-navbar";
    }
  }