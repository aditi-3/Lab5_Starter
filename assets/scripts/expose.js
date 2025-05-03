// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImg = document.querySelector("img");
  const hornAudio = document.querySelector("audio");

  hornSelect.addEventListener('change', function() {
    const selected = hornSelect.value;
    if (selected === "air-horn") {
      hornAudio.src = "assets/audio/air-horn.mp3";
      hornImg.src = "assets/images/air-horn.svg";
    }
    else if (selected === "car-horn") {
      hornAudio.src = "assets/audio/car-horn.mp3";
      hornImg.src = "assets/images/car-horn.svg";
    } 
    else if (selected === "party-horn") {
      hornAudio.src = "assets/audio/party-horn.mp3";
      hornImg.src = "assets/images/party-horn.svg";
    } 
    else {
      hornAudio.src = "";
      hornImg.src = "assets/images/no-image.png";
    }
  });

  const volumeChange = document.getElementById("volume");
  const volumeImg = document.querySelector("#volume-controls img");

  volume.addEventListener('input', function() {
    const volumeValue = parseInt(volumeChange.value);
    console.log(volumeValue);
    hornAudio.volume = volumeValue / 100;

    if(volume.value > 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else if(volume.value >= 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
  });

  const button = document.querySelector("button");

  button.addEventListener('click', function() {
      if (hornAudio.src) {
        hornAudio.play();
      }
      if(hornSelect.value === "party-horn") {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
  });
}