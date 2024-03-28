let sliderInner = document.getElementById("slider__inner");

let image = document.querySelectorAll("#slider__inner .imgs_slider");

let index = 1;

setInterval( function() {
    let porcentage = index * - 100;

    sliderInner.style.transform = "translateX( " + porcentage + "%)";
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
}, 6500);