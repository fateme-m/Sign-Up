const form = document.querySelector('.form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const userWarning = document.querySelector('.userwarning')
const passWarning = document.querySelector('.passwarning')
const userPatter = /^[\W.][\w._]{5-23}$/

let isUserValidated = false;
let isPasswordValidated = false;

form.username.addEventListener('keyup', e => {
    if (e.target.value) {

        if (e.target.value.length >= 8) {
            isUserValidated = true
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        } else {
            e.target.classList.add('is-invalid')
            isUserValidated = false
            userWarning.classList.remove('d-none')
        }
    } 
})

form.password.addEventListener('keyup', e => {
    if (e.target.value) {
        
        let evaluatePassword = 0
        evaluatePassword += /[A-Z]/.test(e.target.value) ? 1 : 0;
        evaluatePassword += /[a-z]/.test(e.target.value) ? 1 : 0;
        evaluatePassword += /[0-9]/.test(e.target.value) ? 1 : 0;
        evaluatePassword += e.target.value.length >= 6 ? 1 : 0;

        if (evaluatePassword === 4) {
            passWarning.classList.add('d-none')
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
            isPasswordValidated = true
        } else {
            passWarning.classList.remove('d-none')
            e.target.classList.add('is-invalid')
            isPasswordValidated = false
        }
    } else {
        password.innerHTML = '<i>Please select a password </i>'
    }
})
form.email.addEventListener('keyUp', e =>{
    let at =/@/
    if(at.test(e.target.value)){
        e.target.className.add('is-valid')
    }else{
        e.target.classList.add('is-invalid')
    }
})


form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (isUserValidated && isPasswordValidated) {
        console.log('submited')
    }
    if(!isPasswordValidated){
        form.password.classList.add('is-invalid')
    }

    if(!isUserValidated){
        form.username.classList.add('is-invalid')
        
    }
})
