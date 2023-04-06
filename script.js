// select the burger svg
const burger = document.querySelector("nav svg")

// when burger is clicked, run func
burger.addEventListener("click", () => {
    burger.classList.toggle("active")
})