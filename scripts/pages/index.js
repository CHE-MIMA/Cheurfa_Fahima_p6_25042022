// recuperation de la  data du json
         
async function getPhotographers(photographers) {
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
    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
        // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};
init();
      
      
      
     
