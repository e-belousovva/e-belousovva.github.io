import {btnChange,navButtonEn,navButtonRu} from './main.js';
function moveHeaderText(){
    const headerContent = document.querySelector('.header__content');
    headerContent.classList.add('header__content-anim');


  }
  function scaleHeaderCircle(){
    const headerImg = document.querySelector('.header__img');
    headerImg.classList.add('header__img-anim');
  }

  function scaleCardsItem(){
    document.addEventListener('scroll', () => {
      if(window.scrollY >= 500){
        const cardItem = document.querySelectorAll('.cards__item');
        cardItem.forEach((item) => {
          item.classList.add('cards__item-anim');
        });
        
      }
      else{

      }
    })
    
  }
  function rotateAboutCircle(){
    document.addEventListener('scroll', () => {
      
      if(window.scrollY > 1620){
        const imgFirst = document.querySelector('.about__img-first');
        const imgSecond = document.querySelector('.about__img-second');
        const imgThird = document.querySelector('.about__img-third');
  
        imgFirst.classList.add('about__img-anim');
        imgSecond.classList.add('about__img-anim');
        imgThird.classList.add('about__img-anim');
      }
      else{

      }
      
    });

  }
  function returnHeaderImage(){
    const headerImg = document.querySelector('.header__img');
    btnChange.addEventListener(('click'), () => {
      if(navButtonRu.classList.contains('show-text') && navButtonEn.classList.contains('hide-text')){
        headerImg.classList.add('header__img-anim');
      }
      else{
        headerImg.classList.remove('header__img-active');
      }
    });
  }
export {moveHeaderText,scaleCardsItem,scaleHeaderCircle,rotateAboutCircle,returnHeaderImage};