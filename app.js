// var username =  prompt("Give me your Name : ");
// var result = "welcome " +  username ;

// alert(result);


var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/hodor.json";

function errorHandler(error){
    console.log("error occured" , error);
}

function getTranslateUrl(text){
    return serverUrl + "?text=" + text; 
}

function clickEventHandler(){
     var textInput = txtInput.value;

     fetch(getTranslateUrl(textInput))
     .then(response => response.json())
     .then(json => {
            var result = json.contents.translated;
            outputDiv.innerText =result;
     })
     .catch(errorHandler)
}


btntranslate.addEventListener("click" , clickEventHandler); 
   
