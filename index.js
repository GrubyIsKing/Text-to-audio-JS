const convert = document.getElementById("convert");
const speech = new SpeechSynthesisUtterance();
const text = document.getElementById("text");
alert("PL: Projekt narazie tylko w języku polskim\nEN: The project is only in Polish ");

convert.addEventListener("click", ()=>{
    speech.text = text.value;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = "pl";
    speech.rate = 1;
    speechSynthesis.speak(speech);
});



