import {btnChange,navButtonEn,navButtonRu} from './main.js';
function animFooter(){
    const btnFooter = document.querySelectorAll('.footer__right_img');
    
    document.addEventListener("scroll", () => {
      
      if(window.scrollY > 100){
        btnFooter.forEach((item) => {
          item.classList.remove('footer__right_img-unanim')
          item.classList.add('footer__right_img-anim')
        });
      }
      else if(window.scrollY < 100){
        btnFooter.forEach((item) => {
          item.classList.remove('footer__right_img-anim')
        });
      }

       
      
     
    })
  }
  function animTextFooter(){
    document.addEventListener('scroll', () => {
      const footerText = document.querySelectorAll('.footer__center_text');
      if(window.scrollY >= 3200){
        footerText.forEach((item) => {
          item.classList.add('footer__center_text-anim');
        })
      }
    })
  }
  // function changeHrefFooter(){
  //   const footerLogo = document.querySelector('.footer__logo_img');

  //   const footerFirst = document.querySelector('.footer_left_item-first');
  //   const footerSecond = document.querySelector('.footer_left_item-second');
  //   const footerThird = document.querySelector('.footer_left_item-third');
  //   const footerFour = document.querySelector('.footer_left_item-four');




  //       footerFirst.setAttribute('href', '#header-EN');
  //       footerSecond.setAttribute('href', '#about-EN');
  //       footerThird.setAttribute('href', '#slider-EN');
  //       footerFour.setAttribute('href', '#contact-EN');
  //       footerLogo.setAttribute('href','#header-EN');
  //   btnChange.addEventListener("click", () => {

  //     if(navButtonRu.classList.contains('show-text') && navButtonEn.classList.contains('hide-text')){
  //       footerFirst.setAttribute('href', '#header-RU');
  //       footerSecond.setAttribute('href', '#about-RU');
  //       footerThird.setAttribute('href', '#slider-RU');
  //       footerFour.setAttribute('href', '#contact-RU');
  //       footerLogo.setAttribute('href', '#header-RU');
  //     }
  //     else if(navButtonEn.classList.contains('show-text')  && navButtonRu.classList.contains('hide-text')){
  //       footerFirst.setAttribute('href', '#header-EN');
  //       footerSecond.setAttribute('href', '#about-EN');
  //       footerThird.setAttribute('href', '#slider-EN');
  //       footerFour.setAttribute('href', '#contact-EN');
  //       footerLogo.setAttribute('href','#header-EN');
  //     }
  
      
    
  //   });


    
  // }
export {animFooter,animTextFooter,};