function createLightbox(medias,codeFiltre){
        // const mediaList = medias;
        let mediaList;
        switch (codeFiltre){
            case "1": mediaList = medias.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            break;
            case "2": mediaList = medias.sort((a, b) => (a.date < b.date) ? 1 : -1);
            break;
            case "3": mediaList = medias.sort((a, b) => (a.title > b.title) ? 1 : -1);
            break;
            default: mediaList = medias
            break;
        }     
currentElement = null;
// fonction qui affiche la lightbox. 
function show(id){
    currentElement = getElementById(id);
     console.log(getElementById(id));
    display();
};
// fonction qui affiche l'element suivant. 
function next(){
    let index = mediaList.findIndex(element => element.id == currentElement.id);
    if(index == mediaList.length-1){
        currentElement = mediaList[0];    
    }
    else{
        currentElement =  mediaList[index + 1];
    }
    display();
};
// fonction qui affiche l'element précedent. 
function previous(){
    let index = mediaList.findIndex(element => element.id == currentElement.id);
    if(index==0){
      currentElement = mediaList[mediaList.length-1];
    }else{
        currentElement =  mediaList[index - 1]; 
    }
    display();
};
function getElementById(id){
return medias.find(element => element.id == id); 
}
function display(){
    const picture = `assets/photos/${currentElement.image}`;    
    const video = `assets/photos/${currentElement.video}`;
    const title = currentElement.title;
    // console.log(title);
    //   console.log(picture);
    console.log(`${currentElement.image}`)
    if (`${currentElement.image}`!='undefined'){
        document.querySelector("#lightbox-media-picture").style.display = 'block';
        document.querySelector("#lightbox-media-video").style.display = 'none';
        document.querySelector("#lightbox-media-picture").src = picture;
        document.querySelector("#lightbox-media-picture").alt = title;
        document.querySelector(".lightbox_title").innerHTML = title;   
    }else {
        document.querySelector("#lightbox-media-video").style.display = 'block';
        document.querySelector("#lightbox-media-picture").style.display = 'none';
        document.querySelector("#lightbox-media-video").src = video;
        // document.querySelector("#lightbox-media-video").setAttribute(controls, "controls");
        document.querySelector("#lightbox-media-video").setAttribute("type", "video/mp4");
        document.querySelector(".lightbox_title").innerHTML = title;
        }
    document.querySelector("#lightbox_bg").style.display = 'flex';
    document.querySelector("header").setAttribute("aria-hidden", "true");
	document.querySelector("main").setAttribute("aria-hidden", "true");
  //  gestion les events au clavier   
document.addEventListener("keyup",(e)=>{
            switch(e.key){
                case "Escape":
                close();
                break;
                case "ArrowLeft":
                previous(); 
                break;
                case "ArrowRight":
                    next();
                    break;
        }
     });
document.querySelector(".lightbox_close").addEventListener("keydown",(e)=>{
            switch(e.key){
                case "Enter":
                close();
                break; }
             });     
 } 
//  fonction qui gère les events a la souris 
function manageEvent(){
    document.querySelector(".lightbox_next").addEventListener("click", (e)=>{
        e.preventDefault();
    next();
    
    });
    document.querySelector(".lightbox_previous").addEventListener("click", (e)=>{
        e.preventDefault();
        previous();
        
    });
    document.querySelector(".lightbox_close").addEventListener("click", (e)=>{
        e.preventDefault();
        close();     
    });
    }
  manageEvent(); 
function close(){
    let logo = document.querySelector("#lienlogo");
    logo.focus();
    document.querySelector("#lightbox_bg").style.display = 'none';
    document.querySelector("header").setAttribute("aria-hidden", "false");
	document.querySelector("main").setAttribute("aria-hidden", "false");
}
 return {mediaList,show,close, getElementById,display,manageEvent}
}

