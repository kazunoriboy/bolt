(function() {
  'use strict';

  function navToggle() {
    var toggleBtn = document.getElementById('bar');
    var contact = document.getElementById('contact');
    var toggleBtnClass = contact.getAttribute('class');

    if(toggleBtnClass == 'contact-btn cv-btn sp-hidden') {
      contact.classList.remove('sp-hidden');
      contact.classList.add('active');
    } else {
      contact.classList.add('sp-hidden');
      contact.classList.remove('active');
    }
  }

  document.getElementById('bar').onclick = navToggle;

})();