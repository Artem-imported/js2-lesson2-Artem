document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider__input");
    const image = document.querySelector(".slider__image");
    const box = document.getElementById("box");
    
    box.style.position = "absolute";
    
    slider.addEventListener("input", _.debounce(() => {
        image.style.width = `${slider.value * 3}px`;
        image.style.height = `${slider.value * 3}px`;
    }, 100));

    document.addEventListener("mousemove", _.debounce((e) => {
        box.style.left = `${e.clientX}px`;
        box.style.top = `${e.clientY}px`;
    }, 100));
});
