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
const header = document.querySelector('header')


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
        heroSection.style.color = "#1DB954"
        header.style.backgroundImage = "url('https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')"
    })
}
function toggleButtonOff(icon){
    icon.addEventListener("click", () => {
        heroSection.style.color = "#fff"
        header.style.backgroundImage = "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
    })
}
toggleButtonOff(toggleButtonDark)
toggleButtonOn(toggleButton);


})

