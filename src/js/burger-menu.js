function showMenu() {
  let el = document.getElementById("header-menu");
  const greetInfo = document.getElementById("greeting-info");
  const burgerIcon = document.getElementById("burger-icon");
  const logo = document.getElementById("header-logo");
  if (el.style.display === "block") {
    el.style.display = "none";
    greetInfo.style.display = "";
    burgerIcon.style.float = "";
    burgerIcon.classList.remove("change");
    logo.style.display = "";

    document.body.style.overflow = "";
  } else {
    el.style.display = "block";
    greetInfo.style.display = "none";

    burgerIcon.style.float = "left";
    burgerIcon.classList.toggle("change");
    logo.style.display = "none";

    document.body.style.overflow = "hidden";
  }
}
