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
    })   
};
async function displaySort(medias) {
    // const mediaSort = document.querySelector(".sort-media");
     medias.forEach((media) => {
     const photographerModel = mediaFactory(media);
     photographerModel.getSortMediaDOM(medias);
     
     
});
       
};
async function displayLightbox(medias){
    // await myProfilePhotographer;
    await medias;
    const functionLightbox = createLightbox(medias);
     document.querySelectorAll(".media-cards").forEach(mediaDom => { mediaDom.addEventListener("click",(e)=>{
        functionLightbox.show(e.currentTarget.dataset.id)});
});
};

async function init() {
    // Récupère les datas des profils par leurs id
    const data  = await getPhotographers();
    const profilePhotograph = data.photographers;
    const myProfilePhotographer = profilePhotograph.find(element => element.id == idPhotographer);
     console.log(myProfilePhotographer); 
// recupère les datas des médias
    let mediatab = []
    for (i=0; i<data.media.length; i++) {
        if(data.media[i].photographerId==idPhotographer){
            mediatab.push(data.media[i])}
    }
    const medias = mediatab;
    console.log(medias);

    displayProfil(myProfilePhotographer);
    displayFooter(myProfilePhotographer);
    // displayFiltres(medias);
    displaySort(medias);
    displayMedia(medias);
    displayLightbox(medias); 
};
init();



