const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const form = document.getElementById('form');
const email_error = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
      if(emailInput.value == '' || passwordInput.value == ''){
        password(passwordInput);
        email(emailInput.value);
        e.preventDefault();
      }else {
        return;
      }

});

function email(input){
    const regEx = new RegExp(/^[^\s@]+@gmail.com/)
    if(input.match(regEx) ){
      emailInput.style.cssText = `
      border:2px solid green;`;
      email_error.style.cssText =`
      display:none;
      transition:all 0.20s linear;`
      console.log('it worked');
    } else {
      emailInput.style.cssText = `
      border:2px solid red;`
      email_error.style.cssText =`
      display: unset;
      animation: error-message 1s linear forwards;`
      email_error.children[0].style.cssText =`
      background: linear-gradient(orangered,orangered,orangered);
      color:ghostwhite;`;
    }

    if(input.value == ''){
      emailInput.style.cssText = `
      border:2px solid red;`;
      email_error.children[0].style.cssText =`
      background: linear-gradient(orangered,orangered,orangered);
      color:ghostwhite;`;
    };

    return input
};

function password(pw){
  if(pw.value == ''){
    passwordInput.style.cssText = `
    border:2px solid red;`
    email_error.children[0].style.cssText =`
    background: linear-gradient(orangered,orangered,orangered);
    color:ghostwhite;`
  }else {
    passwordInput.style.cssText = `
    border:2px solid green;`
    email_error.style.cssText =`
    display:none;
    transition:all 0.20s linear;`;
  };
  return pw
};