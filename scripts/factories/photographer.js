function photographerFactory(data) {
    const { name, id, city, country, price, portrait, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
      // lien de chaque photographe
        const lien = document.createElement ('a');
        lien.setAttribute("href", `photographer.html?id=${id}`)
      //  image 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        article.appendChild(img);
      // nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(h2);
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

           lien.appendChild(article);
        return (lien);
    }

  function getUserHeaderDOM() {
  const profile = document.createElement('section');

  // image du profile
  const img = document.createElement( 'img' );
  img.classList.add("photograph-header__picture")
  img.setAttribute("src", picture)
  
  const profileDiv = document.createElement('div');
  profileDiv.classList.add('photograph-header__profile');

  // nom du  profile
  const h2 = document.createElement( 'h2' );
  h2.textContent = name;
  h2.classList.add("photograph-header__name")

  // ville et pays du profile
  const locationSpan = document.createElement( 'div' );
  locationSpan.textContent = city + ', ' + country;
  locationSpan.classList.add("photograph-header__location")

  //  tagline du profile
  const taglineSpan = document.createElement( 'div' );
  taglineSpan.textContent = tagline;
  taglineSpan.classList.add("photograph-header__tagline")

  profile.appendChild(img);
  profile.appendChild(profileDiv);
  profileDiv.appendChild(h2);
  profileDiv.appendChild(locationSpan);
  profileDiv.appendChild(taglineSpan);

  return profile
}
 
return {name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM}
}
  

function mediaFactory(media) {

  const { photographerId, id, title, image, video, likes, date} = media;     
  const picture = `assets/photos/${image}`;
  const videos = `assets/photos/${video}}`;
    function getUserMediaDOM() {
      const mediaProfile = document.createElement('section');
      mediaProfile.classList.add("photograph-media__div")
    
      // média du profil
      const img = document.createElement( 'img' );
      img.classList.add("photograph-media__picture")
      img.setAttribute("src", picture)
      // const video= document.createElement( 'video' );
      // img.classList.add("photograph-media__video")
      // img.setAttribute("src", videos)
     
   
      // const mediaProfileDiv = document.createElement( 'div' );
      // mediaProfileDiv.classList.add("photograph-media__div")
      
      // titre des médias
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      h2.classList.add("photograph-media__title")
      const liks = document.createElement( 'span' );
      liks.textContent = likes;
      liks.classList.add("photograph-media__liks")
      // const heart = document.createElement( 'i' );
      // heart.innerHTML '<i class="fa-solid fa-heart"';
      // heart.classList.add("fa-solid fa-heart");
    
      mediaProfile.appendChild(img);
      // mediaProfile.appendChild(video);
      // mediaProfile.appendChild(mediaProfileDiv);
      mediaProfile.appendChild(h2); 
      mediaProfile.appendChild(liks); 
      // mediaProfile.appendChild(heart); 

    return mediaProfile;
    }

    return {photographerId, id, title, image, video, likes, date, getUserMediaDOM }
  }

    