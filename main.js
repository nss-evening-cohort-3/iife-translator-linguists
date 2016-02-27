// Grabs Translate button and adds a click event.
document.getElementById("translate-button").addEventListener("click", translateText);

// Uses the select box to call the correct language function from other JS page.
function translateText() {
  
  var userInput= document.getElementById("input-field").value;
  var selectBox = document.getElementById("selected-language");

  if (selectBox.value === "french"){
    translatedSentence = MasterTranslator.translateToFrench(userInput);
  }

  else if (selectBox.value === "spanish"){
    translatedSentence = MasterTranslator.translateToSpanish(userInput);

  }
  else if (selectBox.value === "latin"){
    translatedSentence = MasterTranslator.translateToLatin(userInput);
  }

    var resultArea = document.getElementById("translate-text");
    resultArea.innerHTML = translatedSentence;
};
