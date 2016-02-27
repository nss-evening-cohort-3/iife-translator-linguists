
var MasterTranslator = function(originalMasterTranslator) {

  var frenchLexicon = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "bonne",
    "new": "nouvelle",
    "year": "année",
    };

  originalMasterTranslator.getFrenchLexicon = function() {
    return frenchLexicon;
  }

  var translatedSentence;
  var resultArea;

  originalMasterTranslator.translateToFrench = function(userInput){

    var userArray = userInput.toUpperCase().split(" ");

    userArray[userArray.indexOf("MERRY")] = frenchLexicon["merry"];
    userArray[userArray.indexOf("CHRISTMAS")] = frenchLexicon["christmas"];
    userArray[userArray.indexOf("AND")] = frenchLexicon["and"];
    userArray[userArray.indexOf("HAPPY")] = frenchLexicon["happy"];
    userArray[userArray.indexOf("NEW")] = frenchLexicon["new"];
    userArray[userArray.indexOf("YEAR")] = frenchLexicon["year"];

    translatedSentence = userArray.reduce(function(previous, current) {
      return previous + " " + current;
      });

    translatedSentence = translatedSentence + ".";
      console.log("translatedSentence", translatedSentence);
      return translatedSentence;
    }

  return originalMasterTranslator;

} ( MasterTranslator || {} );