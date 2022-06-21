document.addEventListener("DOMContentLoaded", () => {
    fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then(parseResponse)
    .then(returnedData)

const toggleButton = document.querySelector('#toggleIcon');
const toggleButtonDark = document.querySelector('#toggleIconOff')

function parseResponse(response){
    return response.json()
}
function returnedData(data){


}

function toggleButtonOn(icon){
    icon.addEventListener('click', () => {
        // toggleButton.setAttribute('class', 'fa-solid fa-toggle-on');
        toggleButton.style.display = "none"
        toggleButtonDark.style.display = "block"
        document.body.style.backgroundColor = "darkgrey"
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

// function returnedData(data){
//     console.log(data.mvids[6].strTrackThumb)
// }

})

