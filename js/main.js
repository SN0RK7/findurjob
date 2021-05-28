const menuBtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".navbar");
const closeMenuBtn=document.querySelector('.close');

const toggleMenu=(event) =>{
    menu.classList.toggle("is-open")
};
menuBtn.addEventListener('click',toggleMenu);
closeMenuBtn.addEventListener('click',toggleMenu);

