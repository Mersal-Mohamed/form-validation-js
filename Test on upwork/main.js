let form = document.querySelector('form');
let name = document.form.name;
let password = document.form.password;
let email = document.form.email;
let select = document.form.select;
let inputs = document.querySelectorAll('input');
let topSpan = document.querySelectorAll('.top');
let eight = document.getElementById('eight');
let emailError = document.getElementById('emailerror');
let passWordCondition = false;
let nameCondition = false;
let emailCondition = false;
let button = document.getElementById('button');

console.log(emailCondition,nameCondition,passWordCondition)
//submit Form
form.addEventListener('submit', (event) => {

    event.preventDefault();
    checkInput();
    console.log(nameCondition,emailCondition,passWordCondition)
    //pass form
    if(emailCondition && nameCondition && passWordCondition){
        button.classList.add('buttonOk')
        }else {
            button.classList.remove('buttonOk')

        }
})

//input check 
function checkInput() {

    //check name
    if (name.value.trim() === '' || name.value.trim() === null) {
        name.classList.add('error');
        topSpan[0].classList.add('redTop');
        nameCondition = false;


    } else {
        name.classList.remove('error');
        topSpan[0].classList.remove('redTop');
        nameCondition = true;
    }

    //check password

    if (password.value.trim() === '' || password.value.trim() === null) {
        password.classList.add('error');
        passWordCondition = false;
    }
    if (password.value.length < 8) {
        topSpan[2].classList.add('redTop');
        password.classList.add('error');
        eight.classList.add('redTop');
        passWordCondition = false;

    } else {
        topSpan[2].classList.remove('redTop');
        password.classList.remove('error');
        eight.classList.remove('redTop');
        passWordCondition = true;
    }

    //check email

    if (email.value.trim() === '' || email.value.trim() === null) {
        email.classList.add('error');
        topSpan[1].classList.add('redTop');
        emailError.classList.add('show');
        emailCondition = false;

    }else {
        emailCondition = true;
    }
    if(!isEmail(email.value)){
        email.classList.add('error');
        topSpan[1].classList.add('redTop');
        emailError.classList.add('show')
    }else {
        emailCondition = true;
    }
 
}


//focus function

function focusInput(event) {
    let parent = event.target.parentElement;
    let spanTop = document.getElementById(`${event.target.name}top`)
    let maniPlaceholder = event.target.placeholder;
    spanTop.classList.add('show');
    event.target.removeAttribute('placeholder');

    event.target.addEventListener('blur', () => {
        if (event.target.value.length === 0) {
            spanTop.classList.remove('show');
            event.target.setAttribute('placeholder', maniPlaceholder);
        }
    })

}

//remove warnings
name.addEventListener('input', () => {
    removeWarnings();

})
password.addEventListener('input', () => {
    removeWarnings();

})
email.addEventListener('input', () => {
    removeWarnings();

})

function removeWarnings() {
    if (name.value.length > 3) {
        name.classList.remove('error');
        topSpan[0].classList.remove('redTop');
        nameCondition = true;
    }else{
        nameCondition = false;

    }

    if (password.value.length > 8) {
        topSpan[2].classList.remove('redTop');
        password.classList.remove('error');
        eight.classList.remove('redTop');
        passWordCondition = true;

    }else {
        passWordCondition = false;

    }

    if(isEmail(email.value)){
        email.classList.remove('error');
        topSpan[1].classList.remove('redTop');
        emailError.classList.remove('show')
        emailCondition = true;

    }else{
        emailCondition = false;

    }

    if(emailCondition && nameCondition && passWordCondition){
        button.classList.add('buttonOk')
        }else {
            button.classList.remove('buttonOk')

        }

}
 //check email
 function isEmail(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}

//show password

let eye = document.getElementById('eye');
eye.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text'
    }else {
        password.type = 'password'

    }
})

//show selection List

let downArrow = document.getElementById('downarrow');
downArrow.addEventListener('click',()=>{
select.open = true;

})
