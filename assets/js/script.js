document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('#toggleIcon');
    const toggleButtonDark = document.querySelector('#toggleIconOff');
    const albumPhotos = document.getElementsByClassName('albumPhotos');
    const header = document.querySelector('header');
    const wickedTitle = document.querySelector('#wickedTitle');
    const  wickedContent = document.querySelector('#wickedContent');
    const knowingTitle = document.querySelector('#knowingTitle');
    const knowingContent = document.querySelector('#knowingCover');
    const readMoreBtn = document.querySelectorAll('.readMoreBtn');
    const twentyTitle = document.querySelector('#twentyTitle');
    const twentyDescription = document.querySelector('#twentyDescription');
    const albumFlex = document.querySelectorAll('.albumContainer');
    const galleryImages = document.querySelectorAll('.galleryImage')
    const artistImages = document.querySelectorAll('.artistImage');
    const artistName = document.querySelectorAll('.artistName');
    const searchField = document.querySelector('#searchField');
    const searchIcon = document.querySelector('#searchIcon');
    const artist = {
        Name: document.querySelector('.artistName'),
        Gender:document.querySelector('#gender') ,
        Image: document.querySelector('.artistImage'),
        Description: document.querySelector('#artistDescription'),
        Country: document.querySelector('#country'),
        BornYear: document.querySelector('#yearBorn'),
        BackgroundImage: document.querySelector('#artistSection'),
        Genre :document.querySelector('#genre')
    }

    searchIcon.addEventListener('click', () => {
        fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=khalid')
        .then(response => response.json())
        .then(data => {
            if(searchField.value === "Khalid"){
                artist.Name.textContent = data.artists[0].strArtist
                artist.Description.textContent = data.artists[0].strBiographyEN
                artist.Country.textContent = data.artists[0].strCountry
                artist.BornYear.textContent = data.artists[0].intBornYear
                artist.Gender.textContent = data.artists[0].strGender
                artist.BackgroundImage.style.backgroundImage = "url('https://wallpapercave.com/dwp1x/wp2129684.png')"
                artist.Genre.textContent = data.artists[0].strGenre
                artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
            }
        fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=sia')
         .then(response => response.json())
         .then(data => {
             if(searchField.value === "Sia"){
                artist.Name.textContent = data.artists[0].strArtist
                artist.Description.textContent = data.artists[0].strBiographyEN
                artist.Country.textContent = data.artists[0].strCountry
                artist.BornYear.textContent = data.artists[0].intBornYear
                artist.Gender.textContent = data.artists[0].strGender
                artist.BackgroundImage.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/57d05107893fc0df0e6c8c33/1594256936387-9U0JB4T0VTKF7A2BHCBA/sia_site.png?format=2500w')"
                artist.Genre.textContent = data.artists[0].strGenre
                artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
             }
             fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=marshmello')
                .then(response => response.json())
                .then(data => {
                    if(searchField.value === "Marshmello"){
                        artist.Name.textContent = data.artists[0].strArtist
                        artist.Description.textContent = data.artists[0].strBiographyEN
                        artist.Country.textContent = data.artists[0].strCountry
                        artist.BornYear.textContent = data.artists[0].intBornYear
                        artist.Gender.textContent = data.artists[0].strGender
                        artist.BackgroundImage.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/5278/6285/files/Untitled-2.png?v=1642114837')"
                        artist.Genre.textContent = data.artists[0].strGenre
                        artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
                     }
            fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=drake')
               .then(response => response.json())
               .then(data => {
                if(searchField.value === "Drake"){
                    artist.Name.textContent = data.artists[0].strArtist
                    artist.Description.textContent = data.artists[0].strBiographyEN
                    artist.Country.textContent = data.artists[0].strCountry
                    artist.BornYear.textContent = data.artists[0].intBornYear
                    artist.Gender.textContent = data.artists[0].strGender
                    artist.BackgroundImage.style.backgroundImage = "url('https://i.pinimg.com/564x/51/e8/e1/51e8e13b3be9c76f3007372e6efa3e89.jpg')"
                    artist.Genre.textContent = data.artists[0].strGenre
                    artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
                 }
            fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=pitbull')
            .then(response => response.json())
            .then(data => {
                if(searchField.value === "Pitbull"){
                    artist.Name.textContent = data.artists[0].strArtist
                    artist.Description.textContent = data.artists[0].strBiographyEN
                    artist.Country.textContent = data.artists[0].strCountry
                    artist.BornYear.textContent = data.artists[0].intBornYear
                    artist.Gender.textContent = data.artists[0].strGender
                    artist.BackgroundImage.style.backgroundImage = "url('https://pitbullmusic.com/wp-content/themes/pitbull-theme/assets/img/home-header.png')"
                    artist.Genre.textContent = data.artists[0].strGenre
                    artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
                 }
            fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=rihanna')
              .then(response => response.json())
              .then(data => {
                if(searchField.value === "Rihanna"){
                    artist.Name.textContent = data.artists[0].strArtist
                    artist.Description.textContent = data.artists[0].strBiographyEN
                    artist.Country.textContent = data.artists[0].strCountry
                    artist.BornYear.textContent = data.artists[0].intBornYear
                    artist.Gender.textContent = data.artists[0].strGender
                    artist.BackgroundImage.style.backgroundImage = "url('http://www.rihannanow.com/wp-content/uploads/2015/09/20150831_Macys_RiRi_0804-682x1024.jpg')"
                    artist.Genre.textContent = data.artists[0].strGenre
                    artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
                 }
            fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=diplo')
                .then(response => response.json())
                .then(data => {
                    if(searchField.value === "Diplo"){
                        artist.Name.textContent = data.artists[0].strArtist
                        artist.Description.textContent = data.artists[0].strBiographyEN
                        artist.Country.textContent = data.artists[0].strCountry
                        artist.BornYear.textContent = data.artists[0].intBornYear
                        artist.Gender.textContent = data.artists[0].strGender
                        artist.BackgroundImage.style.backgroundImage = "url('https://www4.pictures.zimbio.com/gi/Diplo+Los+Angeles+Premiere+MGM+House+Gucci+Olmwfpt9zkMx.jpg')"
                        artist.Genre.textContent = data.artists[0].strGenre
                        artist.Image.setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
                     } 
                })
              })
            })
               })
                })
         })
        
        })
    })

    fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=khalid')
    .then(response => response.json())
    .then(artistData)

    function artistData(data){
        albumPhotos[2].setAttribute(`src`, `${data.artists[0].strArtistThumb}`);
        artistImages[0].setAttribute(`src`, `${data.artists[0].strArtistThumb}`);
        twentyTitle.textContent = data.artists[0].strArtist
        twentyDescription.textContent = data.artists[0].strBiographyEN;
        artistName[0].textContent = data.artists[0].strArtist 
    }

    fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then(parseResponse)
    .then(returnedData)

    fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=sia')
    .then(response => response.json())
    .then(data => {
        galleryImages[0].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[0].addEventListener(`mouseover`, () => {
            galleryImages[0].style.filter = "grayscale(0%)"
        })
        galleryImages[0].addEventListener(`mouseout`, () => {
            galleryImages[0].style.filter = "grayscale(100%)"
        })
    })

    fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=marshmello')
     .then(response => response.json())
     .then((data) => {
        galleryImages[1].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[1].addEventListener(`mouseover`, () => {
            galleryImages[1].style.filter = "grayscale(0%)"
        })
        galleryImages[1].addEventListener(`mouseout`, () => {
            galleryImages[1].style.filter = "grayscale(100%)"
        })
     })

     fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=drake')
     .then(response => response.json())
     .then((data) => {
        galleryImages[2].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[2].addEventListener(`mouseover`, () => {
            galleryImages[2].style.filter = "grayscale(0%)"
        })
        galleryImages[2].addEventListener(`mouseout`, () => {
            galleryImages[2].style.filter = "grayscale(100%)"
        })
     })

     fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=rihanna')
     .then(response => response.json())
     .then((data) => {
        galleryImages[3].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[3].addEventListener(`mouseover`, () => {
            galleryImages[3].style.filter = "grayscale(0%)"
        })
        galleryImages[3].addEventListener(`mouseout`, () => {
            galleryImages[3].style.filter = "grayscale(100%)"
        })
     })

     fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=pitbull')
     .then(response => response.json())
     .then((data) => {
        galleryImages[4].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[4].addEventListener(`mouseover`, () => {
            galleryImages[4].style.filter = "grayscale(0%)"
        })
        galleryImages[4].addEventListener(`mouseout`, () => {
            galleryImages[4].style.filter = "grayscale(100%)"
        })
     })

     fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=diplo')
     .then(response => response.json())
     .then((data) => {
        galleryImages[5].setAttribute(`src`, `${data.artists[0].strArtistThumb}`)
        galleryImages[5].addEventListener(`mouseover`, () => {
            galleryImages[5].style.filter = "grayscale(0%)"
        })
        galleryImages[5].addEventListener(`mouseout`, () => {
            galleryImages[5].style.filter = "grayscale(100%)"
        })

     })




    function toggleButtonOn(icon){
        icon.addEventListener('click', () => {
            header.style.backgroundImage = "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        })
    }
    function toggleButtonOff(icon){
        icon.addEventListener("click", () => {
            header.style.backgroundImage = "url('https://images.unsplash.com/photo-1576269601089-aad0bbfa4f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        })
    }
function parseResponse(response){
    return response.json()
}

function returnedData(data){
        albumPhotos[0].setAttribute(`src`, `${data.mvids[2].strTrackThumb}`)
        albumPhotos[1].setAttribute(`src`, `${data.mvids[3].strTrackThumb}`)

        
    function readMoreDisplay(){
        readMoreBtn[0].addEventListener('click', () => {
            albumFlex[0].style.display = "block"
        })
        readMoreBtn[1].addEventListener('click', () => {
            albumFlex[1].style.display = "block"
        })
        readMoreBtn[2].addEventListener('click', () => {
            albumFlex[2].style.display = "block"
        })
    }
    readMoreDisplay()
    function displayCoverPhotoDescription(){
        wickedTitle.textContent = data.mvids[2].strTrack;
        wickedContent.textContent = data.mvids[2].strDescriptionEN;
        knowingTitle.textContent = data.mvids[3].strTrack;
        knowingContent.textContent = `${data.mvids[3].strDescriptionEN}On the final track on House of Balloons,
             we get a peek inside of the mind of Abel during a sexual encounter with a female who???s been around as
             much as he has.
             Although he ???knows everything,??? the listener does as well. The official music video was directed and created by Mikael Colombu 
             known for his Jankyvision style of videos. Colombu has also done music videos for J Dilla, Drake, and Bilal, among others` ;
    }

displayCoverPhotoDescription()

}
toggleButtonOff(toggleButtonDark)
toggleButtonOn(toggleButton);

})


