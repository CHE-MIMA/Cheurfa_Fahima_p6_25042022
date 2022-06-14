function createLightbox(medias,codeFiltre){
        //const mediaList = medias;
        let mediaList;
        switch (codeFiltre){
            case "1": mediaList = medias.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            break;
            case "2": mediaList = medias.sort((a, b) => (a.date < b.date) ? 1 : -1);
            break;
            case "3": mediaList = medias.sort((a, b) => (a.title > b.title) ? 1 : -1);
            break;
            default: mediaList = medias;
            break;
        }     
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
        console.log("hello");
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
   
  
// document.addEventListener("keyup",(e)=>{
//     console.log(e.key);
//     switch(e.key){
//         case "ArrowRight":
//         next();
//         break;
//         case "ArrowLeft":
//         previous(); 
//         break;
//         case "Escape":
//             close();
//             break;
//     }
// });
}

function getElementById(id){
return medias.find(element => element.id == id); 
}
function display(){
    const picture = `assets/photos/${currentElement.image}`;    
    const video = `assets/photos/${currentElement.video}`;
    const title = currentElement.title;
   
    // console.log(title);
      console.log(picture);
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
    
    // document.querySelector(".lightbox_close").addEventListener("keydown",(e)=>{
    //     switch(e.key){
    //         case "Enter":
    //         close();
    //         break;
    //     }
    // });
    // document.querySelector(".lightbox_close").focus();
    // document.querySelector(".lightbox_previous").focus();
    // document.querySelector(".lightbox_next").focus();
 
}
    
function close(){
    document.querySelector("#lightbox_bg").style.display = 'none';  
}
return {mediaList, show,manageEvent,getElementById,display,close}
}
 