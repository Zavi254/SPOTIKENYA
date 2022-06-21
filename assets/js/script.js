document.addEventListener("DOMContentLoaded", () => {
    fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then(parseResponse)
    .then(returnedData)

const toggleButton = document.querySelector('#toggleIcon');
const toggleButtonDark = document.querySelector('#toggleIconOff');
const heroSection = document.querySelector('header')

function parseResponse(response){
    return response.json()
}
function returnedData(data){
    console.log(data)
}

function toggleButtonOn(icon){
    icon.addEventListener('click', () => {
        toggleButton.style.display = "none"
        toggleButtonDark.style.display = "block"
        // document.body.style.backgroundColor = "lightgrey"    
    })
}
function toggleButtonOff(icon){
    icon.addEventListener("click", () => {
        toggleButtonDark.style.display = "none"
        toggleButton.style.display = "block"
        document.body.style.backgroundColor = "white";
    })
}
toggleButtonOff(toggleButtonDark)
toggleButtonOn(toggleButton);

})

