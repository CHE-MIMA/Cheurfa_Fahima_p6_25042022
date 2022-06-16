let totalLiks = 0; 
function mediaFactory(media) {
  const { photographerId, id, title, image, video, likes, date} = media; 
  const picture = `assets/photos/${image}`;    
  const videos = `assets/photos/${video}`

    function getUserMediaDOM() {
      const mediaProfile = document.createElement('section');
      const mediaCards = document.createElement('div');
      mediaCards.classList.add('media-cards');
      mediaCards.setAttribute("data-id", id);
      mediaCards.setAttribute("aria-label", "les médias des photographes")
      // média du profil separateur 
      let mediaSplit = null;
      //  console.log(title);
      //  console.log(videos);
      if (videos.split('.').slice(-1)[0]=='mp4'){
       mediaSplit = document.createElement( 'video' );
      mediaSplit.classList.add("photograph-media__video")
      mediaSplit.setAttribute("src", videos)
      // mediaSplit.setAttribute("controls", "controls");
      mediaSplit.setAttribute("tabindex", "5");
      mediaSplit.setAttribute("type", "video/mp4");
      mediaSplit.setAttribute("title", `${title}`)
      }
      else{
       mediaSplit = document.createElement( 'img' );
      mediaSplit.classList.add("photograph-media__picture")
      mediaSplit.setAttribute("src", picture)
      mediaSplit.setAttribute("alt", `${title}`)
      mediaSplit.setAttribute("tabindex", "5");
      }

      const mediaProfileDiv = document.createElement( 'div' );
      mediaProfileDiv.classList.add("photograph-media__div")

      // titre des médias
      const h2 = document.createElement( 'h2' );
      h2.textContent = title;
      h2.classList.add("photograph-media__title");
      h2.setAttribute("tabindex", "5");
    
      
      const mediaProfileDivLiks = document.createElement( 'div' );
      mediaProfileDivLiks.classList.add("photograph-media__div__liks")
      
      // liks des media
      const liks = document.createElement( 'span' );
      liks.textContent = likes;
      liks.classList.add("photograph-media__liks");
      liks.setAttribute("tabindex", "5");
      // const divLikes = document.createElement('div');
      // divLikes.classList.add("div-likes")
      const  heart = document.createElement('i');
        heart.classList.add("fas");
        heart.classList.add("fa-heart");
        heart.setAttribute("aria-label", "likes");
        heart.setAttribute("title", "likes");
        heart.setAttribute("tabindex", "5")
        heart.setAttribute("role", "button");
        // const titleLiks = document.createElement( 'span' );
        // titleLiks.textContent = "likes";
        // titleLiks.classList.add("title_likes");
        // titleLiks.setAttribute("aria-hidden", "true");
        
      
      mediaProfile.appendChild(mediaCards);
      mediaCards.appendChild(mediaSplit);
      mediaProfile.appendChild(mediaProfileDiv);
      mediaProfileDiv.appendChild(h2);
      mediaProfileDiv.appendChild(mediaProfileDivLiks)
      mediaProfileDivLiks.appendChild(liks);
      mediaProfileDivLiks.appendChild(heart);
      // divLikes.appendChild(heart);
      // divLikes.appendChild(titleLiks);
      
      // click sur les liks
      function listenHeart(){
      
      heart.addEventListener("click", function(){
       media.likes++
       liks.textContent =`${media.likes}`;
       totalLiks++;
       console.log(totalLiks);
       document.querySelector('.total-likes').innerText = totalLiks; 
      });
      heart.addEventListener("keydown",(e)=>{
        switch(e.key) {
            case "Enter":
              media.likes++
              liks.textContent =`${media.likes}`;
              totalLiks++;
              document.querySelector('.total-likes').innerText = totalLiks; 
            break;
        }
        
    });
       // calcul total liks
      console.log(likes);
      totalLiks+= likes;
      console.log(totalLiks);
    }
    
      mediaSplit.focus();  
    
    heart.focus();
    listenHeart();
      return mediaProfile;
    } 
   
   
    function getSortMediaDOM(medias){
      const mediaSort = document.querySelector('.sort-media');
    mediaSort.innerHTML = `<label id="filtres-label" aria-labbeledby="current-option">Trier par
    <div id="filtres-container"  role= "listbox"  aria-haspopup="listbox" aria-expanded> 
        <div tabindex = "3" id="current-option" > Popularité 
        <i aria-label="ouvrir" title="ouvrir" class="fa fa-angle-down"></i></div>
        <div  class="list-option"> 
          <div tabindex = "4" role="option" aria-selected aria-activedescendant class="index-option" id="list-option-popularity"> Popularité
          <i aria-label="fermer" title="fermer" class="fa fa-angle-up"></i> 
        </div> 
          <hr/>
          <div  class="index-option"  tabindex = "4"  aria-selected aria-activedescendant  role="option" id="list-option-date">Date</div>
          <hr/>
         <div class="index-option" tabindex = "4"  aria-selected aria-activedescendant  role= "option"  id="list-option-title">Titre</div>
      </div>
     </div>
    </label>`;
  //  console.log(medias);
    }
  
    return {photographerId, id, title, image, video, likes, date,getSortMediaDOM, getUserMediaDOM,}
}


 

  






































