var MasterTranslator = function(originalMasterTranslator) {

// Private object in English:Spanish Key:Value pairs.  Since these key are strings "dot notation" won't work
//  you have to access them using bracket notation (i.e. spanishLexicon["merry"] yields "feliz")
  var spanishLexicon = {
    "merry": "feliz",
    "christmas": "navidad",
    "and": "y",
    "happy": "próspero",
    "new": "nuevo",
    "year": "año",
    "monkeybutt": "monoextremo"
  }

// Simply takes the english string passed from the DOM and builds an Array out of it. 
  function makeWordArray(passedEnglishText) {
    return passedEnglishText.split(" ");
  }

////
// This function accepts an English Array and...
////
  function checkReplaceWordArray(passedWordArray) {

//  1) Makes a temporary array to hold the new spanish phrase
//  2) Cycles through each element in the passed English array
//  3) Cycles through each key in the Spanish Language Lexicon
//  4) Checks to see if the current English Array element equals the current Spanish Lexicon Key if there is a 
//   match... if so, it puts the Spanish equivalent from the object into a temporary variable.
//   a) the english word gets checked to see if it's all caps, if so, its replaced with the spanish word in all caps
//   b) the english word gets checked to see if first letter's capped, if so, its replaced with the spanish word 
//      with its first letter capped.
//   c) if the english word is all lowercase it is replaced with proper lower case spanish word
//   d) if a, b, and c fail then the word isn't in the lexicon and is passed as-is
//  5) The array is joined and then returned to the original caller.
    var translatedSpanishArray = [];

    passedWordArray.forEach(function(englishWord) {
    var xCounter = 0;

     for (var key in spanishLexicon) {
        if (englishWord.toLowerCase().includes(key)) {
          if (englishWord.includes(key.toUpperCase())) {
            translatedSpanishArray.push(translateAllUpperCase(englishWord, key, spanishLexicon[key]));
            break;
          } else if (englishWord[0].includes(key[0].toUpperCase())) {
            translatedSpanishArray.push(translateFirstCharUpperCase(englishWord, key, spanishLexicon[key]));
            break;
          } else if (englishWord.includes(key)) {
            translatedSpanishArray.push(englishWord.replace(key, spanishLexicon[key]));
            break;
          };
        } else if (xCounter === (Object.keys(spanishLexicon).length - 1)) {
          translatedSpanishArray.push(englishWord);
        };
      xCounter++;
      };
    });

    var translatedSpanishString = translatedSpanishArray.join(" ");
    return translatedSpanishString;
  }

//Simple function to convert an all-caps substring with another substring that is all caps
  function translateAllUpperCase(passedEnglishWord, passedKey, passedKeyValue){
    return passedEnglishWord.toLowerCase().replace(passedKey, passedKeyValue.toUpperCase());
  }

//Simple function to convert a substring with first char capped with another substring that has it's first char capped
  function translateFirstCharUpperCase(passedEnglishWord, passedKey, passedKeyValue){
    return passedEnglishWord.toLowerCase().replace(passedKey, passedKeyValue[0].toUpperCase()) + passedEnglishWord.toLowerCase().replace(passedKey, passedKeyValue.substring(1));
  }

// This handles the translating of the text entered in the DOM
// The argument "translateText" is whatever variable we assign the translate-text 
//  div pull in the DOM.
  originalMasterTranslator.translateToSpanish = function(translateText) {

    // Splits the string from the DOM into individual array elements (dump to array)
    var arrayWordsToTranslate = makeWordArray(translateText);

    // The individual words are checked and replaced with appropriate spanish word using the checkAndReplace...
    //  The returned output is assigned to the spanishString variable 
    var spanishString = checkReplaceWordArray(arrayWordsToTranslate);
    
    // This returns the translated string to the original caller (main.js)
    return spanishString;

  }

// This just returns the Spanish Lexicon but keeps the spanishLexicon object 
//  private and non-editable.
  originalMasterTranslator.getSpanishLexicon = function() {
    return spanishLexicon;
  }

  return originalMasterTranslator;

}( MasterTranslator || {} );