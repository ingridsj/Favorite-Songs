const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src =`https://www.youtube.com/embed/${videoId}`
    })
}
document.querySelector('.closeModal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

//MENU RESPONSIVO
let show = true

const menuSection = document.querySelector(".menuSection")
const menuToggle = menuSection.querySelector(".menuToggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show
})