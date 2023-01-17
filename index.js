const bar= document.getElementById('bar')
const searchButtonMobile=document.getElementById('search-button-mobile')
const searchBar=document.getElementById('search-bar')
const imageContainer=document.getElementById('promo-image-container')
const reviewButton =document.getElementById('review-btn')
const promoImages=[
    {
        url:'images/promotion/promo1.webp',
        html:`
                <h2 class="promo-img-container_heading2">Big discount</h2>
                <h3 class="promo-img-container_heading3">up to 25%</h3> `
    },
    {
        url:'images/promotion/promo2.webp',
        html:``
    },
    {
        url:'images/promotion/promo3.png',
        html:``
    }
]

const maianImg= document.getElementById('main-img')
let smallImgs=document.getElementsByClassName('small-img')
const prev=document.getElementById('prev')
const next=document.getElementById('next')


// image slider 

let imageUrl=""
let html=``
var i=0
if(prev){
    prev.addEventListener('click',()=>{

        if (i>0){
            i-=1
        }else{
            i=promoImages.length-1
        }
     
        imageUrl=promoImages[i].url
        html=promoImages[i].html
        
        imageContainer.style.backgroundImage=`url(${imageUrl})`
        imageContainer.innerHTML=html
    
        
    })

}

if(next){

    next.addEventListener('click',()=>{
        if(i<promoImages.length-1){
            i+=1
        }else{
            i=0
        }
        imageUrl=promoImages[i].url
        html=promoImages[i].html
    
        imageContainer.style.backgroundImage=`url(${imageUrl})`
        imageContainer.innerHTML=html
    
        
    })
    
}






// single product changing image
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

        
 
navBar=document.getElementById("nav-bar")

bar.addEventListener("click",()=>{
    navBar.classList.add("navigation-bar--active")
})

document.getElementById('close').addEventListener("click", ()=>{
    navBar.classList.remove("navigation-bar--active")
})
searchButtonMobile.addEventListener('click',()=>{
    searchBar.classList.toggle('search-bar--active')

})

if (reviewButton){
    reviewButton.addEventListener('click',()=>{
        document.getElementById('product-review').classList.toggle('active')
    })

}
var docWidth = document.documentElement.offsetWidth;


var docWidth = document.documentElement.offsetWidth;

