let oefening0 = () => {
  // Maak hier oefening 0
  document.title = "Lio Dillen";

  var img = document.createElement("img");
  img.src = "img/logo2.jpeg";

  var src = document.getElementsByClassName("navbar-brand")[0];
  src.innerHTML = "";
  src.id = "logo";

  logo.appendChild(img);
};
