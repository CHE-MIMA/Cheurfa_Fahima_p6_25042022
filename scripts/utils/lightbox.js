function createLightbox(medias){
const mediaList =  medias;
currentElement = null;
manageEvent();
function show(id){
    currentElement = getElementById(id);
     console.log(getElementById(id));
    display();
};
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
function previous(){
    let index = mediaList.findIndex(element => element.id == currentElement.id);
    if(index==0){
      currentElement = mediaList[mediaList.length-1];
    }else{
        currentElement =  mediaList[index - 1]; 
    }
   
    display();
}
function manageEvent(){
document.querySelector(".lightbox_next").addEventListener("click", ()=>{
next();
});
document.querySelector(".lightbox_previous").addEventListener("click", ()=>{
    previous();   
});
document.querySelector(".lightbox_close").addEventListener("click", ()=>{
    close();   
});
document.querySelector("#lightbox_bg").addEventListener("click", (e)=>{
    if(e.target == e.currentTarget){
        close();
    }
});
window.addEventListener("keyup", (e)=>{
    console.log(e.key);
    switch(e.key){
        case "Enter":
            display();
            break;
        case "ArrowRight":
        next();
        break;
        case "ArrowLeft":
        previous();
        break;
        case "Escape":
            close();
            break;
    }
}); 
}
function getElementById(id){
return medias.find(element => element.id == id); 
}
function display(){
    const picture = `assets/photos/${currentElement.image}`;    
    const video = `assets/photos/${currentElement.video}`;
    const title = currentElement.title
    // console.log(title);
    //  const lightboxMedia = document.querySelector(".lightbox_container");
    // let mediaSplit = null;
    // //   console.log(picture);
    // if (video.split('.').slice(-1)[0]=='mp4'){
    // //  document.querySelector(".lightbox-media-video").src = video;
    // mediaSplit = document.createElement( 'video' );
    // mediaSplit.classList.add("lightbox-media-video")
    // mediaSplit.setAttribute("src", video)
    // mediaSplit.setAttribute("controls", "controls")
    
    // }
   
    // else{
    //     mediaSplit = document.createElement( 'img' );
    //     mediaSplit.classList.add("lightbox-media-picture")
        // mediaSplit.setAttribute("src", picture)
       
     document.querySelector(".lightbox-media-picture").src = picture;
    // lightboxMedia.appendChild(mediaSplit);
     document.querySelector(".lightbox_title").innerHTML = title;
    document.querySelector("#lightbox_bg").style.display = 'flex';
}
function close(){
    document.querySelector("#lightbox_bg").style.display = 'none';  
}
return {mediaList, show, next, previous, manageEvent,getElementById,display,close}
} 