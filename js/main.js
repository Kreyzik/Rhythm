




"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
   document.addEventListener('click', documentActions);
}


function documentActions(e) {
   const targetElement = e.target

   //Burger

   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }

 

   //Animation-scrol

   if (targetElement.closest('[data-goto]')) {

      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();

   }

}


 //Анімація шапки

 const header = document.querySelector('header');

 function animationHeader () {
  if (window.pageYOffset){
    header.classList.add('header__color');


  }else{
    header.classList.remove('header__color');


  }
 }

 window.addEventListener('scroll', animationHeader);



















  
