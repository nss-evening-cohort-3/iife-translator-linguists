
var MasterTranslator = function(originalMasterTranslator) {

  var frenchLexicon = {
    "merry": "joyeux",
    "christmas": "Noël",
    "and": "et",
    "happy": "bonne",
    "new": "nouvelle",
    "year": "année",
  }

  var translatedSentence;
  var resultArea;

  originalMasterTranslator.translateToFrench = function(){

    var capUserInput= document.getElementById("input-field").value.toUpperCase();
    // var capUserInput= "merry christmas and happy new year".toUpperCase();
    var userArray = capUserInput.split(" ");

    userArray[userArray.indexOf("MERRY")] = frenchLexicon["merry"];
    userArray[userArray.indexOf("CHRISTMAS")] = frenchLexicon["christmas"];
    userArray[userArray.indexOf("AND")] = frenchLexicon["and"];
    userArray[userArray.indexOf("HAPPY")] = frenchLexicon["happy"];
    userArray[userArray.indexOf("NEW")] = frenchLexicon["new"];
    userArray[userArray.indexOf("YEAR")] = frenchLexicon["year"];

    console.log("userArray", userArray);

    translatedSentence = userArray.reduce(function(previous, current) {
      return previous + " " + current;

      });
    translatedSentence = translatedSentence + ".";
      console.log("translatedSentence", translatedSentence);
        
    }

    resultArea = document.getElementById("translate-text");
    resultArea.innerHTML += "<div>" + translatedSentence + "</div>";
    // etc...


    // Notes:
    // Join up the result and pump it to the DOM element?  .reduce?
    //  var transSent = ...(userArray);
    //     return transSent
    // }

    // originalMasterTranslator... = function(userArray) {
    //     var outputSent = userArray.reduce();
    //     return outputSent
    // }


  return originalMasterTranslator;

}( MasterTranslator || {} );