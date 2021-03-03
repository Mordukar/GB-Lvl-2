document.querySelector('form').addEventListener('submit', function(e) {
    
    let inputEmail = document.querySelector('input[type="text"]');

    let inputPassword = document.querySelector('input[type="password"]');

    let inputPhone = document.querySelector('input[type="tel"]');

    const resultEmail = input.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm);

    const resultPassword = input.value.match(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/);

    const resultPhone = input.value.match(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
   
    if( result ) {
      result = true;
    }
   
    if(!result) {
        e.preventDefault();
        console.log('Некорректно введено поле');
    }
});

class Email {

    let inputEmail = document.querySelector('input[type="text"]');

    const resultEmail = input.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm);

    constructor(name) {
        if( this.name ) {
            this.name = true;
        };
         
        if(!this.name) {
            e.preventDefault();
            console.log('Некорректно введено поле');
        };
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Использование:
  let email = new Email(resultEmail);
  email.sayHi();