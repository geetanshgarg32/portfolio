burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
leftNav = document.querySelector('.leftNav')


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    leftNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})