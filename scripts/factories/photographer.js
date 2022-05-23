function photographerFactory(data) {
    const { name, id, city, country, price, portrait, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
      // lien de chaque photographe
        const lien = document.createElement ('a');
        lien.setAttribute("href", `photographer.html?id=${id}`)
        article.appendChild(lien);
      //  image 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
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
          //  article.appendChild(lien);
        return (article);
    }

  function getUserHeaderDOM() {
  const profile = document.createDocumentFragment();



  // image du profile
  const img = document.createElement( 'img' );
  img.classList.add("photograph-header__picture")
  img.setAttribute("src", picture)
  
  const profileDiv = document.createElement('div');
  profileDiv.classList.add('photograph-header__profile');

  // nom du  profile
  const h2 = document.createElement( 'h2' );
  h2.textContent = name;
  h2.classList.add("photograph-header__name");
  // ville et pays du profile
  const locationSpan = document.createElement( 'div' );
  locationSpan.textContent = city + ', ' + country;
  locationSpan.classList.add("photograph-header__location");

  //  tagline du profile
  const taglineSpan = document.createElement( 'div' );
  taglineSpan.textContent = tagline;
  taglineSpan.classList.add("photograph-header__tagline");

  const contactButton = document.createElement('button');
  contactButton.textContent = "Contactez-moi";
  contactButton.classList.add("contact_button");
  contactButton.setAttribute("id", "contact-button")
  contactButton.addEventListener('click', function(){
    displayModalContact();
});
  
  // document.getElementsByClassName('contact_button');
  profileDiv.appendChild(h2);
  profileDiv.appendChild(locationSpan);
  profileDiv.appendChild(taglineSpan);
  profile.appendChild(profileDiv);
  // profile.appendChild(priceSpan);
  profile.appendChild(contactButton);
  profile.appendChild(img);

  return profile 
}
function getFooterDOM(){
  
  const baniere = document.createElement('div'); 
  baniere.classList.add("photograph-baniere__div");
  const totalLikes = document.createElement('span')
  totalLikes.classList.add("total-likes");
  totalLikes.innerText = totalLiks;
  baniere.appendChild( totalLikes);

  const  heart = document.createElement('i');
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  heart.classList.add("photograph-baniere__heart");
  baniere.appendChild(heart);

  const priceBaniere = document.createElement ('h5');
  priceBaniere.textContent = `${price} € / jour`;
  priceBaniere.classList.add("photograph-baniere__price");
  baniere.appendChild(priceBaniere);
return baniere 
}
return {name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM,getFooterDOM}
};
  
let totalLiks = 0; 

function mediaFactory(media) {

  const { photographerId, id, title, image, video, likes, date} = media; 
  const picture = `assets/photos/${image}`;    
 const videos = `assets/photos/${video}`
// if (media.hasOwnProperty('image')) {
    function getUserMediaDOM() {
      const mediaProfile = document.createElement('article');
      // mediaProfile.classList.add("media__article")
      
      // média du profil
     let mediaSplit = null;
    //  console.log(title);
    //  console.log(videos);
      if (videos.split('.').slice(-1)[0]=='mp4'){
       mediaSplit = document.createElement( 'video' );
      mediaSplit.classList.add("photograph-media__video")
      mediaSplit.setAttribute("src", videos)
      mediaSplit.setAttribute("controls", "controls")
      }
      else{
       mediaSplit = document.createElement( 'img' );
      mediaSplit.classList.add("photograph-media__picture")
      mediaSplit.setAttribute("src", picture)
      }
     
   
      const mediaProfileDiv = document.createElement( 'div' );
      mediaProfileDiv.classList.add("photograph-media__div")

      // titre des médias
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      h2.classList.add("photograph-media__title");

      const mediaProfileDivLiks = document.createElement( 'div' );
      mediaProfileDivLiks.classList.add("photograph-media__div__liks")

      const liks = document.createElement( 'span' );
      liks.textContent = likes;
      liks.classList.add("photograph-media__liks");

      const  heart = document.createElement('i');
        heart.classList.add("fas");
        heart.classList.add("fa-heart");
        // mediaProfile.appendChild(mediaArticle)
        mediaProfile.appendChild(mediaSplit);
      // mediaProfile.appendChild(video);
      mediaProfile.appendChild(mediaProfileDiv);
      mediaProfileDiv.appendChild(h2);
      mediaProfileDiv.appendChild(mediaProfileDivLiks)
      mediaProfileDivLiks.appendChild(liks);
      mediaProfileDivLiks.appendChild(heart);
   
      // click sur les liks
      heart.addEventListener("click", function(){
       media.likes++
       let spantotalLiks = document.getElementsByClassName("total-likes");
console.log(spantotalLiks);
console.log(totalLiks);
       totalLiks= totalLiks+1;
       console.log(totalLiks);
       spantotalLiks = totalLiks;
       liks.textContent =`${media.likes}`
      
      });
      return mediaProfile;

    } 
    
      console.log(likes);
      totalLiks+= likes
      console.log(totalLiks);
   
    return {photographerId, id, title, image, video, likes, date, getUserMediaDOM }
}

// function getFooterDOM(myProfilPhotographer, media){
  
//   const baniere = document.createElement('div'); 
//   baniere.classList.add("photograph-baniere__div");
//   const totalLikes = document.createElement('span')
//   totalLikes.classList.add("total-likes");
//   baniere.appendChild( totalLikes);

//   const  heart = document.createElement('i');
//   heart.classList.add("fas");
//   heart.classList.add("fa-heart");
//   heart.classList.add("photograph-baniere__heart");
//   baniere.appendChild(heart);

//   const priceBaniere = document.createElement ('h5');
//   priceBaniere.textContent = `${(price} € / jour`;
//   priceBaniere.classList.add("photograph-baniere__price");
//   baniere.appendChild(priceBaniere);
// return baniere 
// }
