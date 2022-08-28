const slider = document.getElementById("slider");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(output.innerHTML);
    document.getElementById("sliderValue").style.color = getRandomColour();
}

function getRandomColour() {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}