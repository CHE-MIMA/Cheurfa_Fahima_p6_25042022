//Mettre le code JavaScript lié à la page photographer.html*
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 const idPhotographer = urlParams.get("id");
 
 async function getPhotographers(data) {
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

function displayMedia(medias) {
    const photographersMedia = document.querySelector(".photograph-media");
    photographersMedia.innerHTML="";
    totalLiks = 0; 
    medias.forEach((media) => {
    const photographerModel = mediaFactory(media);
    const userMediaDOM = photographerModel.getUserMediaDOM();
    photographersMedia.appendChild(userMediaDOM);

    }) 
};

function displaySort(medias) {
     medias.forEach((media) => {
     const photographerModel = mediaFactory(media);
     photographerModel.getSortMediaDOM(medias);   
});       
};

function displayLightbox(medias){
    const functionLightbox = createLightbox(medias);
     document.querySelectorAll(".media-cards").forEach(mediaDom => { mediaDom.addEventListener("click",(e)=>{
        functionLightbox.show(e.currentTarget.dataset.id)});
    });     
        document.querySelectorAll(".media-cards").forEach(mediaDom => { mediaDom.addEventListener("keydown",(e)=>{
            switch(e.key) {
                case "Enter":
                    functionLightbox.show(e.currentTarget.dataset.id);
                break;
            }
            document.querySelector(".lightbox_close").focus();
            document.querySelector(".lightbox_next").focus();
            document.querySelector(".lightbox_previous").focus();
      });
    }); 
}

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
    displayMedia(medias);
    displaySort(medias);

let currentOption = document.getElementById("current-option")
let listOption = document.querySelector(".list-option")
let  listOptionPopularity = document.querySelector("#list-option-popularity")
 
// event affiche les option du select
currentOption.addEventListener('click', ()=>{
  listOption.style.display = 'flex';
  currentOption.style.display = 'none';
  });
  currentOption.addEventListener("keydown",(e)=>{
     switch(e.key) {
         case "Enter":
             listOption.style.display = 'flex';
             currentOption.style.display = 'none';
         break;
     }
 });

    listOptionPopularity.addEventListener('click', ()=>{
     listOption.style.display = 'none';
      currentOption.style.display = 'flex';
      currentOption.innerHTML = "Popularité";
      sortlikes(medias); 
    });

    listOptionPopularity.addEventListener("keydown",(e)=>{
     switch(e.key) {
         case "Enter":
             listOption.style.display = 'none';
             currentOption.style.display = 'flex';
             currentOption.innerHTML = "Popularité";
             sortlikes(medias); 
         break;
     }
 });

    let  listOptionDate = document.querySelector("#list-option-date");
    listOptionDate.addEventListener('click', ()=>{
     listOption.style.display = 'none';
     currentOption.style.display = 'flex';
     currentOption.innerHTML = "Date"
     sortdate(medias);
   });

   listOptionDate.addEventListener("keydown",(e)=>{
     switch(e.key) {
         case "Enter":
             listOption.style.display = 'none';
             currentOption.style.display = 'flex';
             currentOption.innerHTML = "Date";
             sortdate(medias); 
         break;
     }
 });

    let  listOptionTitle = document.querySelector("#list-option-title"); 
    listOptionTitle.addEventListener('click', (e)=>{
        e.preventDefault();
     listOption.style.display = 'none';
     currentOption.style.display = 'flex';
     currentOption.innerHTML = "Titre"
     sorttitle(medias);
   });
   listOptionTitle.addEventListener("keydown",(e)=>{
     switch(e.key) {
         case "Enter":
             listOption.style.display = 'none';
             currentOption.style.display = 'flex';
             currentOption.innerHTML = "Titre";
             sorttitle(medias); 
         break;
     }
 });
 
//  fonction sort sur les tri des medias
 function sortlikes(medias){   
    document.querySelector(".photograph-media").innerHTML = "";
       medias.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
     displayMedia(medias);
     displayLightbox(medias,1); // affiche la lightbox avec filtre likes (code 1)
   } 
      function sortdate(medias){
        document.querySelector(".photograph-media").innerHTML = "";
       medias.sort((a, b) => (a.date < b.date) ? 1 : -1);
       displayMedia(medias);
      
    displayLightbox(medias,2); // affiche la lightbox avec filtre dates (code 2)      
 }
       function sorttitle(medias){
        document.querySelector(".photograph-media").innerHTML = "";
       medias.sort((a, b) => (a.title > b.title) ? 1 : -1)
       displayMedia(medias);
    displayLightbox(medias,3); // affiche la lightbox avec filtre titres (code 3) 
       }
  displayLightbox(medias,0); 
};
init();


    
