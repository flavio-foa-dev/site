const btnMobile = document.getElementById('btn-mobile');

function toggleMobile(){
const nav = document.getElementById('nav');
nav.classList.toggle('active');

}

btnMobile.addEventListener('click',toggleMobile);