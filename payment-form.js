

const phoneNumber=document.getElementById('phone-number')
const accountNumber=document.getElementById('acc-num')

const CBE= document.getElementById('CBE')
const telebirr=document.getElementById('telebirr')


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

const isValidPhoneNumber =phoneNumber=>{
    
    const re=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return re.test(String(phoneNumber))
}

const validateInputs = () => {
    const phoneNumberValue=phoneNumber.value.trim();
    const accountNumberValue=accountNumber.value.trim()
    if (telebirr.checked){
        if (phoneNumberValue==='' ){
            setError(phoneNumber,'please provide a phone number')
    
        }else if (!isValidPhoneNumber(phoneNumberValue)){
            setError(phoneNumber,'please provide a valid phone number')
        }
        else{
            setSuccess(phoneNumber)
        }
    

    }
    if (CBE.checked){
        if (accountNumberValue.value==='' || accountNumberValue.length<14){
            setError(accountNumber,'please provide an a valid account')
        }
        else if(!/^[0-9]+$/.test(accountNumberValue)){
            setError(accountNumber,'account number should contain only number')

        }
        else{
            setSuccess(accountNumber)
        }
      

    }
   
    
    
    
}