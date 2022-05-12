function photographerFactory(data) {
    const { name, id, city, country, price, portrait, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
       
        const article = document.createElement('article');
        const lien = document.createElement ('a');
        lien.setAttribute("href", `photographer.html?id=${id}`)
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const h3 = document.createElement ('h3');
         h3.textContent = `${city}, ${country}`;
         article.appendChild(h3);
         const h4 = document.createElement ('h4');
           h4.textContent = tagline;
           article.appendChild(h4);
           const h5 = document.createElement ('h5');
           h5.textContent = `${price} € / jour`;
           article.appendChild(h5);
           lien.appendChild(article);
        return (lien);
    }
 

    return {name, picture, city, country, tagline, price, getUserCardDOM}
  }

// function getUserHeaderDOM() {
//   const profile = document.createElement('section');

//   // profile picture element
//   const img = document.createElement( 'img' );
//   img.classList.add("photograph-header__picture")
//   img.setAttribute("src", picture)
  

//   const profileDiv = document.createElement('div');
//   profileDiv.classList.add('photograph-header__profile');

//   // title element with Name
//   const h2 = document.createElement( 'h2' );
//   h2.textContent = name;
//   h2.classList.add("photograph-header__name")


  

//   //  City, Country element
//   const locationSpan = document.createElement( 'span' );
//   locationSpan.textContent = city + ', ' + country;
//   locationSpan.classList.add("photograph-header__location")

//   //  tagline
//   const taglineSpan = document.createElement( 'span' );
//   taglineSpan.textContent = tagline;
//   taglineSpan.classList.add("photograph-header__tagline")

//   detailsDiv.appendChild(locationSpan);
//   detailsDiv.appendChild(taglineSpan);
//   profileDiv.appendChild(h2);
//   profile.appendChild(profileDiv);
//   //profile.appendChild(priceSpan);
  
//   profile.appendChild(img);

//   return profile
// }
 
// return {name, picture, city, country, tagline, price, getUserCardDOM}
// }

function mediaFactory(data){
 

    const { photographerId, id, title, image, video, likes, date} = data;
}