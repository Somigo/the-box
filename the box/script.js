const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message'); 
const errorMsg = document.querySelector('#errorMsg');
const buttonSubmit = document.querySelector('#submit');


buttonSubmit.addEventListener('click',function(event){
  event.preventDefault();
  
  if(inputName.value == ''){
    errorMsg.innerHTML = 'Name is missing';
  }
  else if(inputEmail.value == ''){
    errorMsg.innerHTML = 'Email is missing';
  }
  else if(inputMessage.value == ''){
    errorMsg.innerHTML = 'Message is missing';
  }
  else{
    errorMsg.innerHTML = 'All is gooood!';
  }
}) ;