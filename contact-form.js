

const form =document.getElementById('form')
const fullName=document.getElementById('full-name')
const email=document.getElementById('email')
const text=document.getElementById('message')


   form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    })



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const textValue=text.value.trim()


    

    if(fullNameValue === '') {
        setError(fullName, 'Username is required');
    }else if(/\d/.test(fullNameValue)){
        setError(fullName,'name canNot contain numbers')

    }
     else {
        setSuccess(fullName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(textValue === '' || textValue.length<10) {
        setError(text, 'message should not be less than 10 characters');
    } else {
        setSuccess(text);
    }
}
