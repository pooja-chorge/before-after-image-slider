const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .colorfull-img");
const sliderLine = document.querySelector(".slider .slider-line");

slider.oninput = () =>{
    let sliderVal = slider.value;
    sliderLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}