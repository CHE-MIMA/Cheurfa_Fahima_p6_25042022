const photographeContact = document.querySelector("#contact_modal");
photographeContact.innerHTML =`<div class="modal">
<header>
  <p class= "modal-contact_title" > </p>
  <img id="close-btn" src="assets/icons/close.svg" alt="close modale contact"  />
</header>
<form id="form">
  <div>
    <label for="first">Prénom</label>
    <input type="text" id="first"/>
    <span class="error" id="errorprenom"></span>
    <label for="last">Nom</label>
    <input type="text" id="last"/>
    <span class="error" id="errornom"></span>
    <label for="email">Email</label>
    <input type="email" id="email"/>
    <span class="error" id="erroremail"></span>
    <label for="message">Votre message</label>
    <input type="text" id="message"/>
    <span class="error" id="errormessage"></span>
  </div>
  <button id="submit-btn" role="submit" aria-label="envoyer" class="contact_button">Envoyer</button>
</form>
</div>`;

document.getElementById('close-btn').addEventListener('click', function(){
closeModalContact();
});
window.addEventListener("keyup", (e)=>{
  console.log(e.key);
  switch(e.key){
      case "Escape":
         closeModalContact();
          break;
  }
});

 function displayModalContact(){
  photographeContact.style.display ='block'; 
}; 

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
  
    
  

  

  
  
  