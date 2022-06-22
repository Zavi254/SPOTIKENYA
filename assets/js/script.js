document.addEventListener("DOMContentLoaded", () => {
    fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then(parseResponse)
    .then(returnedData)

const toggleButton = document.querySelector('#toggleIcon');
const toggleButtonDark = document.querySelector('#toggleIconOff');
const heroSection = document.querySelector('.heroSectionWords');
const albumPhotos = document.getElementsByClassName('albumPhotos');
const wickedPhoto = albumPhotos[0];
const theKnowing = albumPhotos[1]
const twentyEight = albumPhotos[2]


function parseResponse(response){
    return response.json()
}
function returnedData(data){
    function displayImage(){
        albumPhotos[0].setAttribute(`src`, `${data.mvids[2].strTrackThumb}`)
        albumPhotos[1].setAttribute(`src`, `${data.mvids[3].strTrackThumb}`)
        albumPhotos[2].setAttribute(`src`, `${data.mvids[4].strTrackThumb}`)
    }
    function coverPhotosHover(){
        wickedPhoto.addEventListener('mouseover', () => {

        })
        theKnowing.addEventListener('mouseover', () => {

        })
        twentyEight.addEventListener('mouseover', () => {
            
        })
    }
coverPhotosHover()
displayImage()
    
    
    console.log(data)

}

function toggleButtonOn(icon){
    icon.addEventListener('click', () => {
        toggleButton.style.display = "none"
        toggleButtonDark.style.display = "block"
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

