function photographerFactory(data) {
    const { name, id, city, country, price, portrait, tagline } = data;
    const picture = `assets/photographers/${portrait}`;
   
    function getUserCardDOM() {
        const article = document.createElement('article');
        article.setAttribute("aria-label", name)
      // lien de chaque photographe
        const lien = document.createElement ('a');
        lien.setAttribute("href", `photographer.html?id=${id}`)
        article.appendChild(lien);
      //  image 
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `${name}profil`)
        lien.appendChild(img);
      // nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        lien.appendChild(h2);
      // ville et pays
        const h3 = document.createElement ('h3');
         h3.textContent = `${city}, ${country}`;
         article.appendChild(h3);
      // tagline
         const h4 = document.createElement ('h4');
           h4.textContent = tagline;
           article.appendChild(h4);
      // PRIX
           const h5 = document.createElement ('h5');
           h5.textContent = `${price} € / jour`;
           article.appendChild(h5);
      
        return (article);
    }

  function getUserHeaderDOM() {
  const profile = document.createDocumentFragment();
 
  // image du profile
  const img = document.createElement( 'img' );
  img.classList.add("photograph-header__picture")
  img.setAttribute("src", picture)
  img.setAttribute("alt", name)
  img.setAttribute("tabindex", "3")
  const profileDiv = document.createElement('div');
  profileDiv.classList.add('photograph-header__profile');
  
  // nom du  profile
  const h1 = document.createElement( 'h1' );
  h1.textContent = name;
  h1.classList.add("photograph-header__name");
  h1.setAttribute("tabindex", "1")

  // ville et pays du profile
  const locationSpan = document.createElement( 'div' );
  locationSpan.textContent = city + ', ' + country;
  locationSpan.classList.add("photograph-header__location");
  
  //  tagline du profile
  const taglineSpan = document.createElement( 'div' );
  taglineSpan.textContent = tagline;
  taglineSpan.classList.add("photograph-header__tagline");
  
  //  boutton de contact
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contactez-moi';
  contactButton.classList.add("contact_button");
  contactButton.setAttribute("id", "contact-button")
  contactButton.setAttribute("tabindex", "2");
  contactButton.setAttribute("aria-label", "Contactez moi")
  contactButton.setAttribute("role", "button")
  contactButton.focus();

  // event gère l'ouverture de la modale de contact 
  contactButton.addEventListener('click', function(){
    displayModalContact();
  });
  contactButton.addEventListener('keydown', function(){
    switch(e.key) {
      case "Enter":
        displayModalContact();
      break;
  }  
  });

 // Creation nom dans la modal de contact
const textContact = document.querySelector('.modal-contact_title');
function createInfoModal(){
    let infoModalHTML = `<p  class="modal-contact_title" aria-label = "contactez moi"> Contactez-moi <br> ${name}</p>`;
    return infoModalHTML; 
};
textContact.innerHTML = createInfoModal(); 

  profileDiv.appendChild(h1);
  profileDiv.appendChild(locationSpan);
  profileDiv.appendChild(taglineSpan);
  profile.appendChild(profileDiv);
  profile.appendChild(contactButton);
  profile.appendChild(img);

  return profile 
}

// fonction affiche la baniere du footer
function getFooterDOM(){
  // baniere dom
  const baniere = document.createElement('div'); 
  baniere.classList.add("photograph-baniere__div");
  baniere.setAttribute("tabindex", "6")

  const totalLikes = document.createElement('span')
  totalLikes.classList.add("total-likes");
  totalLikes.innerText = totalLiks;
  // totalLikes.innerText = totalLiks;
  baniere.appendChild( totalLikes);
  // icone coeur dom
  const heart = document.createElement('i');
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  heart.classList.add("photograph-baniere__heart");
  heart.setAttribute("aria-label", "likes");
  heart.setAttribute("title", "likes");
  baniere.appendChild(heart);
  // baniere prix dom
  const priceBaniere = document.createElement ('h2');
  priceBaniere.textContent = `${price} € / jour`;
  priceBaniere.classList.add("photograph-baniere__price");
  baniere.appendChild(priceBaniere);
return baniere 
}
return {name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM,getFooterDOM}
};
 