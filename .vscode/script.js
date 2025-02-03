function toggleMode() {
  /* Abrir domcumento html*/
  const html = document.documentElement
  /* toggle*/
  html.classList.toggle("light")

  /* pegar a tag da img*/
  const img = document.querySelector("#profile img")

  /* Se tiver a classe light, substituir o avatar para light*/
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
