// // recuperation de la  data du json
   
let url = "http://127.0.0.1:5500/data/photographers.json";      
      
async function getPhotographers(photographers) {
    // remplacement par les données récupérées dans le json
    
    await fetch(url)

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
      
      
      
      
    //   async function getPhotographers() {
     
         
     
      
      
    //     // Penser à remplacer par les données récupérées dans le json
    //     const photographers = data.photographers;
         
        
    //   // et bien retourner le tableau photographers seulement une fois
    //   return photographers 
          
    // }
 


    // async function displayData(photographers) {
    //     const photographersSection = document.querySelector(".photographer_section");

    //     photographers.forEach((photographer) => {
    //         const photographerModel = photographerFactory(photographer);
    //         const userCardDOM = photographerModel.getUserCardDOM();
    //         photographersSection.appendChild(userCardDOM);
    //     });
    

    // async function init() {
    //     // Récupère les datas des photographes
    //     const data=  await loadData();
    //     const { photographers } = await getPhotographers(data);
    //     displayData(photographers);
    // }
    
    // init();
