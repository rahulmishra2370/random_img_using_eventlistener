let elem=document.querySelector('.wrapper')
elem.addEventListener('click',function(){
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
});