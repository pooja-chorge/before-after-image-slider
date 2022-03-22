const slider = document.querySelector("input");
const img = document.querySelector(".colorfull-img");
const sliderLine = document.querySelector(".slider-line");

slider.oninput = () =>{
    let sliderVal = slider.value;
    sliderLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}