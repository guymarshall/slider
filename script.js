const slider = document.getElementById("slider");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(output.innerHTML);
}