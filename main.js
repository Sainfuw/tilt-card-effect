const container = document.querySelector(".card-container")
const card = document.querySelector(".card")

// Se crea un span con la clase light y agrega como hijo de card
// const light = document.createElement("span")
// light.setAttribute("class", "light")
// card.appendChild(light)

// Distancia entre el container y le inicio de arriba izquierda de la ventana
const offsetLeft = container.offsetLeft
const offsetTop = container.offsetTop

// Punto medio de la carta
const halfWidth = card.offsetWidth / 2
const halfHeight = card.offsetHeight / 2

// Intensidad del movimiento
const intensityX = 20
const intensityY = 10

let scrollY = 0, convertX, convertY

container.addEventListener("mousemove", ({ clientX, clientY }) => {
  const innerX = clientX - offsetLeft
  const innerY = clientY - offsetTop + scrollY

  container.style.scale = "1.1"

  // Activamos y posicionamos la luz
  // light.style.left = innerX + "px"
  // light.style.top = innerY + "px"
  // light.classList.add("light-active")

  convertX = Math.floor(((innerX - halfWidth) * intensityX) / halfWidth)
  convertY = Math.floor(((innerY - halfHeight) * intensityY) / halfHeight)

  card.style.transform = `rotateY(${convertX * -1}deg) rotateX(${convertY}deg)`
})

container.addEventListener("mouseout", () => {
  container.style.scale = "1"
  card.style.transform = `rotateY(0deg)`
  // light.classList.remove("light-active")
})