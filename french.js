
var MasterTranslator = function(originalMasterTranslator) {


  var resultArea;

  var frenchLexicon = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "bonne",
    "new": "nouvelle",
    "year": "année",
    "monkeybutt": "derrière du singe"
    };

  originalMasterTranslator.getFrenchLexicon = function() {
    return frenchLexicon;
  }

  originalMasterTranslator.translateToFrench = function(userInput) {

    var translatedSentence = [];
    var userArray = userInput.toLowerCase().split(" ");

    userArray.forEach(function(word) {
      translatedSentence.push(frenchLexicon[word]);
    });

    translatedSentence = translatedSentence.reduce(function(previous, current) {
      return previous + " " + current;
    });

    return translatedSentence;

    };

  return originalMasterTranslator;

} ( MasterTranslator || {} );