import {btnChange,navButtonEn,navButtonRu} from './main.js';
function TeleportToTop(){
    const button = document.querySelectorAll('.footer__right_img');
    button.forEach((item) => {
      item.addEventListener("click", () =>{
        window.scrollTo(0,0);
        button.classList.add('footer__right_img-unanim');
      } );
    });
    
  }
  
  function ReplaceLineOnNav(){
    const firstItem = document.querySelector('.nav__content_item-first');
    const secondItem = document.querySelector('.nav__content_item-second');
    const thirdItem = document.querySelector('.nav__content_item-third');
    const fourItem = document.querySelector('.nav__content_item-four');
    const fiveItem = document.querySelector('.nav__content_item-five');
        firstItem.classList.add('nav__content_item-active');
          secondItem.classList.remove('nav__content_item-active');
          thirdItem.classList.remove('nav__content_item-active');
          fourItem.classList.remove('nav__content_item-active');
          fiveItem.classList.remove('nav__content_item-active');
        document.addEventListener('scroll', () => {
        if(window.scrollY >= 0 && window.scrollY <= 500){
            firstItem.classList.add('nav__content_item-active');
            secondItem.classList.remove('nav__content_item-active');
            thirdItem.classList.remove('nav__content_item-active');
            fourItem.classList.remove('nav__content_item-active');
            fiveItem.classList.remove('nav__content_item-active');
        }
        else if(window.scrollY >= 500 && window.scrollY < 1800){
          firstItem.classList.remove('nav__content_item-active');
          secondItem.classList.add('nav__content_item-active');
          thirdItem.classList.remove('nav__content_item-active');
          fourItem.classList.remove('nav__content_item-active');
          fiveItem.classList.remove('nav__content_item-active');
        }
        else if(window.scrollY > 1800 && window.scrollY < 2800 ){
          firstItem.classList.remove('nav__content_item-active');
          secondItem.classList.remove('nav__content_item-active');
         thirdItem.classList.add('nav__content_item-active');
          fourItem.classList.remove('nav__content_item-active');
          fiveItem.classList.remove('nav__content_item-active');
        }
        else if(window.scrollY > 2800 && window.scrollY <= 3800){
          firstItem.classList.remove('nav__content_item-active');
          secondItem.classList.remove('nav__content_item-active');
          thirdItem.classList.remove('nav__content_item-active');
          fourItem.classList.add('nav__content_item-active');
          fiveItem.classList.remove('nav__content_item-active');
        }
        else if(window.scrollY > 3800){
          firstItem.classList.remove('nav__content_item-active');
          secondItem.classList.remove('nav__content_item-active');
          thirdItem.classList.remove('nav__content_item-active');
          fourItem.classList.remove('nav__content_item-active');
          fiveItem.classList.add('nav__content_item-active');
        }
      });
  }

  function changeBtnPosition(){
   
    btnChange.addEventListener('click', () => {
      if(!btnChange.classList.contains('btn-rotate')){
        btnChange.classList.add('btn-rotate');
        btnChange.classList.remove('btn-unrotate');
      }
      else{
        btnChange.classList.remove('btn-rotate');
        btnChange.classList.add('btn-unrotate');

      }
    });
  }
  function moveNavCircle(){
    const imgFirst = document.querySelector('.header__circle_item-first');
    const imgSecond = document.querySelector('.header__circle_item-second');
    const imgThird= document.querySelector('.header__circle_item-third');
    const imgFour = document.querySelector('.header__circle_item-four');

    imgFirst.classList.add('header__circle_item-first-anim');
    imgSecond.classList.add('header__circle_item-second-anim');
    imgThird.classList.add('header__circle_item-third-anim');
    imgFour.classList.add('header__circle_item-four-anim');
  }
  
  
    
  

export {TeleportToTop,changeBtnPosition,ReplaceLineOnNav,moveNavCircle,};