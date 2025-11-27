const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000)
})

let items = document.querySelectorAll('.slider .list .item');

let next = document.getElementById('next');

let prev = document.getElementById('prev');

let countItem = items.length;

let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;

    if(itemActive >= countItem){
        itemActive = 0; 
    }
    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;

    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

//auto slider

let refreshInterval = setInterval(() =>{
    next.click();
}, 3000)


function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    
    itemActiveOld.classList.remove('active')
    
    items[itemActive].classList.add('active');


    clearInterval(refreshInterval);

let refreshInterval = setInterval(() =>{
    next.click();
}, 3000)
}


