document.getElementById('close-btn').addEventListener('click', function(){
closeModalContact();
});
const Modal = document.querySelector("#contact_modal");
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
  
    
  

  

  
  
  