let fish1 = document.querySelector('.fish1');
let fish2 = document.querySelector('.fish2');
let fish3 = document.querySelector('.fish3');
let fish4 = document.querySelector('.fish4');
let fish5 = document.querySelector('.fish5');
let fish6 = document.querySelector('.fish6');
let number = document.querySelector('.number');
let count = 0;

fish1.onclick = function () {
    if
        (!fish1.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish1.classList.add('active');
    }


}
fish2.onclick = function () {
    if
        (!fish2.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish2.classList.add('active');
    }


}
fish3.onclick = function () {
    if
        (!fish3.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish3.classList.add('active');
    }


}
fish4.onclick = function () {
    if
        (!fish4.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish4.classList.add('active');
    }


}
fish5.onclick = function () {
    if
        (!fish5.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish5.classList.add('active');
    }


}
fish6.onclick = function () {
    if
        (!fish6.classList.contains('active')) {
        count = count + 1;
        number.innerHTML = count;
        fish6.classList.add('active');
    }


}


let button1 = document.querySelector('.1a');
let button2 = document.querySelector('.2a');
let button3 = document.querySelector('.3a');
let button4 = document.querySelector('.4a');
let depthImage = document.querySelector('.depth-image');
let depthTitle = document.querySelector('.deaph-title');
let depthDescription = document.querySelector('.depth-description');
let dp = document.querySelector('.dp');
let depthTemp = document.querySelector(".depthTemp")

button1.onclick = function () {
    depthTemp.innerHTML = "🌡️Temp: 24°C";
    depthTitle.innerHTML = "The Sunlit Surface";
    depthDescription.innerHTML = "The epipelagic zone receives ample sunlight, fueling photosynthesis and supporting the majority of ocean life, including playful dolphins andcoastal crabs.";
    depthImage.src = "images/e923a075055432cff2886793c8eb3185b1455c60.png";
    dp.innerHTML = "0m Depth Range";
}
button2.onclick = function () {
    depthTemp.innerHTML = "🌡️Temp: 10°C";
    depthTitle.innerHTML = "The Twilight Zone";
    depthDescription.innerHTML = "The mesopelagic zone is a dimly lit region where sunlight fades, and bioluminescent creatures like lanternfish and squid thrive in the mysterious depths.";
    depthImage.src = "images/mesopelagic-zone.png";
    dp.innerHTML = "200m Depth Range";
}