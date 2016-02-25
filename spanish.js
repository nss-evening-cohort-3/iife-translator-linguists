var MasterTranslator = function(originalMasterTranslator) {

// Private object in English:Spanish Key:Value pairs.  Since these are strings you have to
//  access them using bracket notation (i.e. spanishLexicon["merry"] yields "feliz")
  var spanishLexicon = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "próspero",
    "new": "nuevo",
    "year": "año",
  }

// Simply takes the english string passed from the DOM and builds an Array out of it. 
  function makeEnglishArray(passedEnglishText) {
    return passedEnglishText.split(" ");
  }

  function checkAndReplaceEnglishArray(passedEnglishArray) {
    var newSpanishArray = [];

    passedEnglishArray.forEach(function(englishWord) {
      Object.keys(spanishLexicon).forEach(function(lexiconKey) {
        
        if (englishWord.includes(lexiconKey)) {
          newSpanishArray += englishWord.replace(spanishLexicon[lexiconKey], spanishLexicon[lexiconKey]) + " ";
        };
      });
     });

    return newSpanishArray;
  };


  //   Object.keys(obj).forEach(function(element) {
  //   console.log(element === "1");
  // })

// This handles the translating of the text entered in the DOM
// The argument "translateText" is whatever variable we assign the translate-text 
//  div pull in the DOM.
  originalMasterTranslator.translateToSpanish = function(translateText) {

    //The string from the DOM needs to be split into individual words 
    // (dump to array)
    var englishArrayToBeTranslated = makeEnglishArray(translateText);
    
    checkAndReplaceEnglishArray(englishArrayToBeTranslated);
    
    //The individual words need to be checked and replaced with appropriate spanish word
    //  Build a new array using forEach() 



    // Output new array to div DOM element.
  }

// This just returns the Spanish Lexicon but keeps the spanishLexicon object 
//  private and non-editable.
  originalMasterTranslator.getSpanishLexicon = function() {
    return spanishLexicon;
  }

  return originalMasterTranslator;

}( MasterTranslator || {} );