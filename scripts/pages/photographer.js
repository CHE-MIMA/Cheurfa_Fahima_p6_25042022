//Mettre le code JavaScript lié à la page photographer.html*

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const photographerId = urlParams.get("id");
async function getPhotographers(photographers) {
    // remplacement par les données récupérées dans le json
    
    await fetch("http://127.0.0.1:5500/data/photographers.json")

.then(function(response) {
     if (response.ok) {
         return response.json();
     }
 })
 .then(function(value) {
    photographers = value;
    console.log(photographers); 

})
.catch(function() {
})
    //  retourner le tableau photographers seulement une fois
    return photographers;
}
async function init() {
    // Récupère les datas des photographes
    const photographers  = await getPhotographers();
    console.log(photographers.media);
    let mediatab = []
    for (i=0; i<photographers.media.length; i++) {
        if(photographers.media[i].photographerId==photographerId){
            mediatab.push(photographers.media[i])
        }

    }
    console.log(mediatab);
};

init();