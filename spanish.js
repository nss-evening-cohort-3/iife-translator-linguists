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

////
// This function accepts an English Array and...
////
  function checkAndReplaceEnglishArray(passedEnglishArray) {

//  1) Makes a temporary array to hold the new spanish phrase
    var tempSpanishString = "";

//  2) Cycles through each element in the passed English array
    passedEnglishArray.forEach(function(englishWord) {

//  3) Cycles through each key in the Spanish Language Lexicon
      Object.keys(spanishLexicon).forEach(function(lexiconEnglishWord) {
        
//  4) Checks to see if the current English Array element equals the current Spanish Lexicon Key if there is a 
//   match...
//   a) the english word gets checked to see if it's all caps and then is replaced with the spanish word in all caps
//   b) the english word gets checked to see if cap first letter and is replaced with the spanish word with first 
//       cap letter.
//   c) if both a and b fail, the english word is replaced with lower case spanish word
        if (englishWord.toLowerCase().includes(lexiconEnglishWord)) {
            var currentLexiconEnglishWord = spanishLexicon[lexiconEnglishWord];
          if (englishWord.toUpperCase() === englishWord) {
            tempSpanishString += englishWord.toLowerCase().replace(lexiconEnglishWord, currentLexiconEnglishWord.toUpperCase()) + " ";
          } else if (englishWord[0].toUpperCase() === englishWord.substring(0,1)) {
            var capitalizedSpanishWord = currentLexiconEnglishWord.substring(0,1).toUpperCase() + currentLexiconEnglishWord.substring(1);
            tempSpanishString += englishWord.toLowerCase().replace(lexiconEnglishWord, capitalizedSpanishWord) + " ";
          } else {
            tempSpanishString += englishWord.replace(lexiconEnglishWord, currentLexiconEnglishWord) + " ";
          };
        };
      });
    });
//  5) Returns the new Spanish Array
    return tempSpanishString;
  }


// This handles the translating of the text entered in the DOM
// The argument "translateText" is whatever variable we assign the translate-text 
//  div pull in the DOM.
  originalMasterTranslator.translateToSpanish = function(translateText) {

    //The string from the DOM needs to be split into individual words (dump to array)
    var englishArrayToBeTranslated = makeEnglishArray(translateText);

    //The individual words need to be checked and replaced with appropriate spanish word
    //  Build a new array using forEach() 
    var spanishString = checkAndReplaceEnglishArray(englishArrayToBeTranslated);
    
    // Output new array to div DOM element.
    console.log(spanishString);

  }

// This just returns the Spanish Lexicon but keeps the spanishLexicon object 
//  private and non-editable.
  originalMasterTranslator.getSpanishLexicon = function() {
    return spanishLexicon;
  }

  return originalMasterTranslator;

}( MasterTranslator || {} );