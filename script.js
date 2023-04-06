// select the burger svg
const burger = document.querySelector("nav svg")

// when burger is clicked, run func
burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        gsap.to(".links", { x: "100%" });
        gsap.to(".line", {stroke: "black" });
        gsap.set("body", {overflow: "auto"});
        gsap.set("body", {overflowX: "hidden"})

    } else {
        gsap.to(".links", { x: "0%" });
        gsap.to(".line", {stroke: "black"});
        gsap.fromTo('.links a', 
        {opacity: 0, y: 0}, 
        {opacity: 1, y: 20, delay: 0.25, stagger: 0.25});
        gsap.set('body', {overflow: "hidden"})
    }
    burger.classList.toggle("active");
});