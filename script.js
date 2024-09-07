document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");

 const triangle = document.getElementById("navbar-triangle");
  const navbarMenu = document.getElementById("navbar-menu");

  menuIcon.addEventListener("click", function() {
    if (
      navbarMenu.style.display === "none" ||
      navbarMenu.style.display === ""
    ) {
      navbarMenu.style.display = "flex";
    } else {
      navbarMenu.style.display = "none";
    }

    
  } 
  
  
  );
});
s;
