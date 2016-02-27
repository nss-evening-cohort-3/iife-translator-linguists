// Grabs Translate button and adds a click event.
document.getElementById("translate-button").addEventListener("click", translateText);

// Uses the select box to call the correct language function from other JS page.
function translateText() {
  
  var capUserInput= document.getElementById("input-field").value.toUpperCase();
  var selectBox = document.getElementById("selected-language");

  if (selectBox.value === "french"){
    translatedSentence = MasterTranslator.translateToFrench(capUserInput);
  }

  else if (selectBox.value === "spanish"){
    translatedSentence = MasterTranslator.translateToSpanish(capUserInput);

  }
  else if (selectBox.value === "latin"){
    translatedSentence = MasterTranslator.translateToLatin(capUserInput);
  }

    var resultArea = document.getElementById("translate-text");
    resultArea.innerHTML = translatedSentence;
};
