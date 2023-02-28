const frmLogin = document.querySelector('#frmLogin');
const inpEmail = frmLogin.querySelector('#email');
const inpPw = frmLogin.querySelector('#pw');
const msgEmail = frmLogin.querySelector('.ctrlEmail .message');
const msgPw = frmLogin.querySelector('.ctrlPw .message');

// disable HTML5 validation
frmLogin.setAttribute('novalidate', 'novalidate');

// halt form submissions and check form
frmLogin.addEventListener('submit', function(e) {
   e.preventDefault();
   let numErrors = 0;

   // clear all messages
   msgEmail.innerHTML = '';
   msgPw.innerHTML = '';

   // email can't be empty
   if (inpEmail.value == '') {
      msgEmail.innerHTML = 'email mag niet leeg zijn';
      numErrors++;
   }

   // password must have at least one capital letter
   if (inpPw.value.toUpperCase() == inpPw.value) {
      msgPw.innerHTML = 'paswoord moet een hoofdletter bevatten';
      numErrors++;
   }

   // password can't be empty
   if (inpPw.value == '') {
      msgPw.innerHTML = 'paswoord mag niet leeg zijn';
      numErrors++;
   }

   // if all ok; submit form
   if (numErrors == 0) frmLogin.submit();
});
