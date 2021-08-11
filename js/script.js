const humBtn = document.querySelector('.hum-btn');
const navMobile = document.querySelector('.nav-mobile');

humBtn.addEventListener('click', navToggle);

function navToggle(){
    navMobile.classList.toggle('active');
}