// select the burger svg
const burger = document.querySelector("nav svg")

// when burger is clicked, run func
burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        gsap.to(".links", { x: "100%" });
    } else {
        gsap.to(".links", { x: "0%" });
    }
    burger.classList.toggle("active");
});