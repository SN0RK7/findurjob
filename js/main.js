const menuBtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".navbar");
const closeMenuBtn=document.querySelector('.close');

const toggleMenu=(event) =>{
    menu.classList.toggle("is-open")
};
menuBtn.addEventListener('click',toggleMenu);
closeMenuBtn.addEventListener('click',toggleMenu);

$(function () {
    $(window).scroll(function() {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("puffIn");
	        }
	    });
	});

})

