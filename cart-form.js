
const form =document.getElementById('form')
const fullName=document.getElementById('full-name')
const address=document.getElementById('address')
const city=document.getElementById('city')
const phoneNumber=document.getElementById('phone-number')

let isValid1=false
let isValid2=false
let isValid3=false
let isValid4=false


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if(isValid1 && isValid2 && isValid3&&isValid4){
       
        window.location="payment.html";
      }
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
const isValidPhoneNumber =phoneNumber=>{
    
    const re=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return re.test(String(phoneNumber))
}
const validateInputs = () => {
  
    const fullNameValue = fullName.value.trim();
    const phoneNumberValue=phoneNumber.value.trim();
    const cityValue= city.value.trim()
    const addressValue=address.value.trim()

    if(fullNameValue === '') {
        setError(fullName, 'Username is required');
    }else if(/\d/.test(fullNameValue)){
        setError(fullName,'name canNot contain numbers')

    }
     else {
        setSuccess(fullName);
        isValid1=true
    }
    if (phoneNumberValue===''){
        setError(phoneNumber,'please provide a phone number')

    }else if (!isValidPhoneNumber(phoneNumberValue)){
        setError(phoneNumber,'please provide a valid phone number')
    }
    else{
        setSuccess(phoneNumber)
        isValid2=true
    }

    if (cityValue===''){
        setError(city,'please provide your city')
    }
    else if (/\d/.test(cityValue)){
        setError(city,'please provide a valid city name')
    }
    else{
        setSuccess(city)
        isValid3=true
    }
    if(addressValue===''){
        setError(address,'address should not be empty')
    }else{
        setSuccess(address)
        isValid4=true
    }

   
}
