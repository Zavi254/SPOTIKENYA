document.addEventListener("DOMContentLoaded", () => {
    fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then(parseResponse)
    .then(returnedData)

const toggleButton = document.querySelector('#toggleIcon');
const toggleButtonDark = document.querySelector('#toggleIconOff');
const heroSection = document.querySelector('.heroSectionWords');
const firstImage = document.querySelector('#firstImage');

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
        heroSection.style.color = "#1DB954"
    })
}
function toggleButtonOff(icon){
    icon.addEventListener("click", () => {
        toggleButtonDark.style.display = "none"
        toggleButton.style.display = "block"
        heroSection.style.color = "#fff"
    })
}
toggleButtonOff(toggleButtonDark)
toggleButtonOn(toggleButton);


})

