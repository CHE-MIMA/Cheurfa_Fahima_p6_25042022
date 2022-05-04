// // recuperation de la  data du json
   
// let url = "http://127.0.0.1:5500/data/photographers.json";
async function getData(){
await fetch("http://127.0.0.1:5500/data/photographers.json")
.then(function(response) {
     if (response.ok) {
         return response.json();
     }
 })
 .then(function(data) {
     console.log(data);

})
.catch(function() {
console.log(error)
})
}
getData();     
      
      
      
      
      
      
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: [...photographers, ...photographers, ...photographers]})
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
      
      
      
      
    //   async function getPhotographers(data) {
    //     // Penser à remplacer par les données récupérées dans le json
    //     const photographers = data.photographers;
        
    //     // et bien retourner le tableau photographers seulement une fois
    //     return 
    //         photographers
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
