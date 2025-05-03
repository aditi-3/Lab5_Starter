// explore.js

window.addEventListener('DOMContentLoaded', init);

//we select elements, I jsut made id for button
const voiceSelect = document.getElementById("voice-select")
const textToSpeak = document.getElementById("text-to-speak")
const talkButton = document.getElementById("talkButton") 
const face = document.getElementById("face")
function init() {
  // TODO

  //voice thing that manages voice hting
  const voicething = window.speechSynthesis;
  // console.log(voiceSelect);

  //I first didnt make a function but I did later bc we need to wait until api loads I think?
  function mapVoices(){
    let voices = voicething.getVoices()
    voices.forEach((voice, index) => {
      let row = document.createElement("option");
      row.textContent = voice.name;
      row.value = index;
      voiceSelect.appendChild(row)
    })
  }
  mapVoices()
  //this was the issue, we gotta wait until the API loads
  if (voicething.onvoiceschanged !== undefined) {
    voicething.onvoiceschanged = mapVoices;
  }

  talkButton.addEventListener("click", () => {
    let text = textToSpeak.value
    let selected = voiceSelect.value
    if(text.length == 0 || selected == "select"){
      console.log("not valud!")
    }

    let uter = new SpeechSynthesisUtterance(text)
    let voices = voicething.getVoices()
    uter.voice = voices[selected]
    voicething.speak(uter)
    // if(uter.onstart){
    //   face.src = "assets/images/smiling-open.png"
    // }
    // else{
    //   face.src = "assets/images/smiling.png"
    // }
    

    //did not know this existed
    uter.onstart = () =>{
      face.src = "assets/images/smiling-open.png"
    }
    uter.onend = () =>{
      face.src = "assets/images/smiling.png"
    }
  })
}