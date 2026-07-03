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


let button1 = document.querySelector('.btn-1a');
let button2 = document.querySelector('.btn-2a');
let button3 = document.querySelector('.btn-3a');
let button4 = document.querySelector('.btn-4a');
let depthImage = document.querySelector('.depth-image');
let depthTitle = document.querySelector('.deaph-title');
let depthDescription = document.querySelector('.depth-description');
let dp = document.querySelector('.dp');
let depthTemp = document.querySelector(".depth-temp")
let depthInfo = document.querySelector(".depth-info")

button1.onclick = function () {
    button1.classList.toggle('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    depthTemp.innerHTML = "🌡️Temp: 24°C";
    depthTitle.innerHTML = "The Sunlit Surface";
    depthDescription.innerHTML = "The epipelagic zone receives ample sunlight, fueling photosynthesis and supporting the majority of ocean life, including playful dolphins andcoastal crabs.";
    depthImage.src = "img/e923a075055432cff2886793c8eb3185b1455c60.png";
    dp.innerHTML = "0m Depth Range";
    depthInfo.style.backgroundColor = "#CDE8FE";
    depthInfo.style.color = "#005482";
}
button2.onclick = function () {
    button2.classList.add('active');
    button1.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    depthTemp.innerHTML = "🌡️Temp: 8°C";
    depthTitle.innerHTML = "The Twilight Zone";
    depthDescription.innerHTML = "Sunlight rapidly fades in the mesopelagic zone. Bioluminescence begins to appear as glowing jellyfish and squid navigate the dim, cool waters.";
    depthImage.src = "img/33.png";
    dp.innerHTML = "-500m Depth Range";
    depthInfo.style.backgroundColor = "#D5E5EF";
    depthInfo.style.color = "#005482";
}
button3.onclick = function () {
    button3.classList.add('active');
    button1.classList.remove('active');
    button2.classList.remove('active');
    button4.classList.remove('active');
    depthTemp.innerHTML = "🌡️Temp: 2°C";
    depthTitle.innerHTML = "The Abyss";
    depthDescription.innerHTML = "Complete darkness and immense pressure characterize the bathypelagic zone. Strange creatures like the Anglerfish use bioluminescent lures to survive.";
    depthImage.src = "img/44.png";
    dp.innerHTML = "-1000m Depth Range";
    depthInfo.style.backgroundColor = "#004871";
    depthInfo.style.color = "#FFFFFF";
}
button4.onclick = function () {
    button4.classList.add('active');
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    depthTemp.innerHTML = "🌡️Temp: 1°C";
    depthTitle.innerHTML = "The Mariana Trench";
    depthDescription.innerHTML = "The hadalpelagic zone, the deepest trenches on Earth. Pitch black and near-freezing, home to highly specialized life forms like pale snailfish.";
    depthImage.src = "img/55.png";
    dp.innerHTML = "-2000m + Depth Range";
    depthInfo.style.backgroundColor = "#00192A";
    depthInfo.style.color = "#FFFFFF";
}