const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const email_error = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault()
  email(emailInput.value);
})

function email(input){
  const regEx = new RegExp(/^[^\s@]+@gmail.com/)
    if(input.match(regEx) ){
      emailInput.style.cssText = `
      border:2px solid green;
      `
      email_error.style.cssText =`
      display:none;
      transition:all 0.20s linear;
      `

      console.log('it worked')
    }else {
      emailInput.style.cssText = `
      border:2px solid red;
      `
      email_error.style.cssText =`
      display: unset;
      animation: error-message 1s linear forwards;`
      email_error.children[0].style.cssText =`
      background: linear-gradient(orangered,orangered,orangered);
      color:ghostwhite;
      `
    }
    return input
}



