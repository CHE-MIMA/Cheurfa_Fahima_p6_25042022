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
    return { name, id, picture, city, country, tagline, price, getUserCardDOM }
}

function mediaFactory(data){
    
}