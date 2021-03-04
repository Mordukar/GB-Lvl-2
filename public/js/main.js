document.querySelector('form').addEventListener('submit', function(e) {
    
    let inputEmail = 'input[type="text"]';

    let inputPassword = 'input[type="password"]';

    let inputPhone = 'input[type="tel"]';


    const resultEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm;

    const resultPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

    const resultPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;


    let inputs = [inputEmail, inputPassword, inputPhone];

    let results = [resultEmail, resultPassword, resultPhone];


    inputs.map(function(i) {
        let input = document.querySelector(i);

        results.map(function(i) {
            const result = input.value.match(i);
    
            if( result ) {
                result = true;
              }
             
            if(!result) {
                e.preventDefault();
                console.log('Некорректно введено поле');
            }
        });
    });

});

// class Email {

//     constructor(name) {
//     }

//     render () {
//         document.querySelector('form').addEventListener('submit', function(e) {
//             if( result ) {
//                 result = true;
//             }
            
//             if(!result) {
//                 e.preventDefault();
//                 console.log('Некорректно введено поле');
//             }
//         });
//     }
         

//   // Использование:
//   let email = new Email(resultEmail);
//   email.sayHi();