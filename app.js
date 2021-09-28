const translateButton = document.querySelector("#btn")
const inputText = document.querySelector("#input-text")
const outputText = document.querySelector("#output-text")
const apiURL = "https://api.funtranslations.com/translate/yoda.json"

function urlConstructor(){
    const URL = `${apiURL}?text=${inputText.value}`
    //console.log(URL)
    getTranslation(URL)
}

function getTranslation(URL){
    fetch(URL)
     .then((response) => response.json())
     .then((json) => {
         console.log(json)
         const translation = json.contents.translated
         outputText.innerHTML = translation
     })
     .catch(errorHandler)
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

translateButton.addEventListener("click" , handleClick)

function handleClick(){
    //outputText.innerHTML = `Dummy input text ${inputText.value}`
    if(inputText.value){
        urlConstructor()
    }
    else{
        outputText.innerHTML = "Please Enter the Input"
    }
}

