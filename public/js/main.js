class Validate {

    constructor(form) {
        this.email = '/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/igm'
        this.password = '/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/'
        this.tel = '/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/'
        this.inputs = '';
        this.result = '';
        this.id = '';

        this.setListener(form);
    }

    setListener(form){
        this.shape = document.querySelector(form);

        this.shape.addEventListener('submit', (e)=> {
            this.inputs = shape.querySelectorAll('input')
            this.checking();
        });
 
    }

    checking() {

        this.inputs.map((i) => {

            this.id = i.getAttribute('id');

            if(this.id === 'email') {
                this.result = input.value.match(this.email)
            }
            else if(this.id === 'password') {
                this.result = input.value.match(this.password)
            }
            else if(this.id === 'tel') {
                this.result = input.value.match(this.tel)
            }

            if( this.result ) {
                this.result = true;
            }
            
            if(!this.result) {
                this.e.preventDefault();
                console.log('Некорректно введено поле ' + `${this.id}`);
            }

        });

    }
}    

const ValidateForm = new Validate('#form');