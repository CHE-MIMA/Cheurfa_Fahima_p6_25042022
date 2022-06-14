const photographeContact = document.querySelector("#contact_modal");
photographeContact.innerHTML =`<div for="contact-title" class="modal">
<header>
  <p class= "modal-contact_title" id="contact-title"> </p>
  <img tabindex="2" id="close-btn" src="assets/icons/close.svg" alt="close modale contact"  />
</header>
<form id="form">
  <div>
    <label  for="first">Prénom</label>
    <input  tabindex= "2" type="text" id="first"/>
    <span class="error" id="errorprenom"></span>
    <label for="last">Nom</label>
    <input tabindex= "2" type="text" id="last"/>
    <span class="error" id="errornom"></span>
    <label   for="email">Email</label>
    <input tabindex= "2" type="email" id="email"/>
    <span class="error" id="erroremail"></span>
    <label for="message">Votre message</label>
    <input tabindex= "2" type="text" id="message"/>
    <span class="error" id="errormessage"></span>
  </div>
  <button tabindex= "2" id="submit-btn" role="submit" aria-label="envoyer" class="contact_button">Envoyer</button>
</form>
</div>`;

document.getElementById('close-btn').addEventListener('click', function(){
closeModalContact();
});


 function displayModalContact(){
  photographeContact.style.display ='block';
   let closeButton = document.getElementById('close-btn');
   closeButton.addEventListener("keydown", (e)=>{
    console.log(e.key);
    switch(e.key){
        case "Enter":
           closeModalContact();
            break;
    }
  })
  setTimeout(() => {
 
    closeButton.focus();
  }, 5000)

};    
document.addEventListener("keyup",(e)=>{
  switch(e.key){
     
      case "Escape":
          close();
          break;
  }
});
function closeModalContact(){
photographeContact.style.display ='none'; 
}; 

//DOM elements (Variables)
const prenom = document.getElementById('first');
const errorprenom = document.getElementById('errorprenom')
const nom = document.getElementById('last');
const errornom = document.getElementById('errornom')
const email = document.getElementById('email');
const erroremail = document.getElementById('erroremail')
const message = document.getElementById('message');
const errormessage = document.getElementById('errormessage');

    document.getElementById('submit-btn').addEventListener("click", function(event){
    event.preventDefault();
    
    let champErreur = 0;
    let prenomValue = prenom.value;
    let pattern = /^[a-zA-Z ]+$/i;
    let nomValue = nom.value;
    let messageValue = message.value;
    // validat prenom
    if (prenomValue.length < 2 || !pattern.test(prenomValue)) {
      errorprenom.innerHTML = "Veuillez entrer votre prenom.";
      prenom.style.border = "2px solid red";
      champErreur++;
    } else {
      errorprenom.innerHTML = "";
      prenom.style.border = "0px";
    }
    //validation nom
    if (nomValue.length <2 ||!pattern.test(nomValue)){
    errornom.innerHTML = "Veuillez entrer votre nom.";
    nom.style.border = "2px solid red";
    champErreur++;
  }
  else {
    errornom.innerHTML = "";
    nom.style.border = "0px";
  }
  // validation email
  
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value)) {
    erroremail.innerHTML = "Veuillez entrer une adresse mail valide";
    email.style.border = "2px solid red";
    champErreur++;
  }
  else {
    erroremail.innerHTML = "";
    email.style.border = "0px";
  }
  // //  // validation massage
  if (messageValue.length <2) {
    errormessage.innerHTML = "veuillez entrer votre message";
    message.style.border = "2px solid red";
    champErreur++;
  }
  else {
    errormessage.innerHTML = "";
    message.style.border = "0px";
  }
  if (champErreur == 0) {
    console.log(nom.value+' '+prenom.value);
    console.log(email.value);
    console.log(message.value);
    document.getElementById('form').reset();
  }
 });
 document.getElementById('submit-btn').focus();
    
  

  

  
  
//  https://www.alsacreations.com/article/lire/570-Histoire-de-tabindex.html#:~:text=La%20touche%20%22tabulation%22%20permet%2C,modifier%20ce%20parcours%20%22naturel%22.

//  <meta itemprop="description" content="Description of the video...">