//Mettre le code JavaScript lié à la page photographer.html*

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

 const idPhotographer = urlParams.get("id");
 
 async function getPhotographers(data) {
    // remplacement par les données récupérées dans le json
    await fetch("http://127.0.0.1:5500/data/photographers.json")

.then(function(response) {
     if (response.ok) {
         return response.json();
     }
 })
 .then(function(value) {
    data= value;
    console.log(data); 
})
.catch(function() {
})
    //  retourne le tableau photographers seulement une fois
    return data;
}

async function displayProfil(myProfilePhotographer) {
    const photographersHeader = document.querySelector(".photograph-header");
    const photographer = await myProfilePhotographer;
    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    photographersHeader.appendChild(userHeaderDOM);
    };
 async function displayFooter(myProfilePhotographer){
    const photographBaniere = document.querySelector(".photograph-baniere");
    const photographer = await myProfilePhotographer;
    const photographerModel = photographerFactory(photographer);
    const userFooterDOM = photographerModel.getFooterDOM();
    photographBaniere.appendChild(userFooterDOM);
    }; 
 

async function displayMedia(medias) {
    const photographersMedia = document.querySelector(".photograph-media");
    medias.forEach((media) => {
    const photographerModel = mediaFactory(media);
    const userMediaDOM = photographerModel.getUserMediaDOM();
    photographersMedia.appendChild(userMediaDOM);
    });
};
async function init() {
    // Récupère les datas des profils par leurs id
    const data  = await getPhotographers();
    const profilePhotograph = data.photographers;
    const myProfilePhotographer = profilePhotograph.find(element => element.id == idPhotographer);
     console.log(myProfilePhotographer); 
     displayProfil(myProfilePhotographer);
     displayFooter(myProfilePhotographer);
// recupère les datas des médias

    let mediatab = []
    for (i=0; i<data.media.length; i++) {
        if(data.media[i].photographerId==idPhotographer){
            mediatab.push(data.media[i])
        }
    }
    const medias = mediatab;
    console.log(medias);

    // recupere les id des media
    let mediaId= []
    for (i=0; i<data.media.length; i++) {
         mediaId = data.media[i].id;
        console.log(mediaId);
    }
    // let total = getmediaLiks(mediaId) + getmediaLiks(mediaId); 
    // console.log( total);
    displayMedia(medias);
};
init();



