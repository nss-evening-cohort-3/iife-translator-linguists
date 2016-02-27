// Grabs Translate button and adds a click event.
document.getElementById("translate-button").addEventListener("click", translateText);

// Uses the select box to call the correct language function from other JS page.
function translateText() {
  
  var selectBox = document.getElementById("selected-language");

  if (selectBox.value === "french"){
    MasterTranslator.translateToFrench();
  }

  else if (selectBox.value === "spanish"){
    MasterTranslator.translateToSpanish();

  }
  else if (selectBox.value === "latin"){
    MasterTranslator.translateToLatin();
  }
};
