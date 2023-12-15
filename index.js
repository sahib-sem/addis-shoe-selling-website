

const maianImg= document.getElementById('main-img')
let smallImgs=document.getElementsByClassName('small-img')
const confirmPassword=document.getElementById('conf-password')
const password=document.getElementById('password')
const formSignup=document.getElementById('formSignup')


if (smallImgs!=null && smallImgs.length>0){
    smallImgs[0].addEventListener('click',function(){
        maianImg.src=smallImgs[0].src
    })
    smallImgs[1].addEventListener('click',function(){
        maianImg.src=smallImgs[1].src
    })
    smallImgs[2].addEventListener('click',function(){
        maianImg.src=smallImgs[2].src
    })
    smallImgs[3].addEventListener('click',function(){
        maianImg.src=smallImgs[3].src
    })

}


(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

const next=document.getElementById('next')
if (next){
    next.addEventListener('click',(event)=>{
        event.preventDefault()
        event.stopPropagation()
        const form=document.getElementById('form')
        form.classList.add('was-validated')
        console.log("clicked")
        console.log(form.checkValidity())
        if (form.checkValidity()){
            window.location="payment.html"
        }
    })

}
