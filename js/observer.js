console.log("Hello");
let header = document.querySelector('.container');

document.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY;
    if(scrollTop >200 ){
        header.style.backgroundColor = 'transparent'; 
    }else{
        header.style.backgroundColor = 'transparent'
    }


})
