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

      // média du profil separateur 
      let mediaSplit = null;
      //  console.log(title);
      //  console.log(videos);
      if (videos.split('.').slice(-1)[0]=='mp4'){
       mediaSplit = document.createElement( 'video' );
      mediaSplit.classList.add("photograph-media__video")
      mediaSplit.setAttribute("src", videos)
      // mediaSplit.setAttribute("controls", "controls")
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
      // liks des media
      const liks = document.createElement( 'span' );
      liks.textContent = likes;
      liks.classList.add("photograph-media__liks");

      const  heart = document.createElement('i');
        heart.classList.add("fas");
        heart.classList.add("fa-heart");

      
      mediaProfile.appendChild(mediaCards);
      mediaCards.appendChild(mediaSplit);
      mediaProfile.appendChild(mediaProfileDiv);
      mediaProfileDiv.appendChild(h2);
      mediaProfileDiv.appendChild(mediaProfileDivLiks)
      mediaProfileDivLiks.appendChild(liks);
      mediaProfileDivLiks.appendChild(heart);

      // click sur les liks
      heart.addEventListener("click", function(){
       media.likes++
       liks.textContent =`${media.likes}`;
       totalLiks++;
       console.log(totalLiks);
       document.querySelector('.total-likes').innerText = totalLiks; 
      });
      console.log(likes);
      totalLiks+= likes;
      console.log(totalLiks);
      return mediaProfile;
    } 
    // calcul total liks
 
    function getSortMediaDOM(medias){
      const mediaSort = document.querySelector('.sort-media');
    //   mediaSort.innerHTML = `<div class="media-select">
    //   <label for="sort-medias"> Trier par </label>
    //   <select id="sort-medias">
    //     <option id ='sort-medias-likes'>Popularité </option>
    //     <option id ='sort-medias-date'>Date</option>
    //     <option id ='sort-medias-title'>Titre</option>
    //    </select>
    // </div>`;
    mediaSort.innerHTML = `<label id="filtres-label" for="filtres-label-container">Trier par
    <div id="filtres-container"> 
        <div  id="current-option">Popularité
        <i class="fa fa-angle-down"></i></div>
        <div class = "list-option"> 
          <div class="index-option" id="list-option-popularity">Popularité
          <i class="fa fa-angle-up"></i> 
        </div> 
          <div class= "souligne-option">─────────</div>
          <div class="index-option"  id="list-option-date">Date</div>
          <div class= "souligne-option">─────────</div>
         <div class="index-option"  id="list-option-title">Titre</div>
      </div>
     </div>
    </label>`;
    
    console.log(medias)
  
   
    // getUserMediaDOM(medias);
    function sortlikes(medias){   
  //  document.querySelector("#list-option-popularity").addEventListener('click',()=>{
    medias.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    // getUserMediaDOM(medias);
  //  });
  
} 
   function sortdate(medias){
//     document.querySelector("#list-option-date").addEventListener('click',()=>{ 
    medias.sort((a, b) => (a.date < b.date) ? 1 : -1);
 
}
    function sorttitle(medias){
//       document.querySelector("#list-option-date").addEventListener('click',()=>{ 
    medias.sort((a, b) => (a.title > b.title) ? 1 : -1)
    // getUserMediaDOM(medias);
//   });
    }
    

  sortlikes(medias);
  // sortdate(medias);
  // sorttitle(medias);
 
}
    return {photographerId, id, title, image, video, likes, date, getUserMediaDOM,getSortMediaDOM}
}

// listMedia.sort((a, b) => (a.likes > b.likes) ? 1 : -1)
// const currentOption = document.querySelector("#current-option")
// const listOption = document.querySelector(".list-option")
// const listOptionPopularity = document.querySelector("#list-option-popularity")
 
// currentOption.addEventListener('click', ()=>{
// listOption.style.display = 'flex';
// currentOption.style.display = 'none';
// });

//   listOptionPopularity.addEventListener('click', ()=>{
//     listOption.style.display = 'none';
//     currentOption.style.display = 'flex';
   
//   });
  






































