  import {btnChange,navButtonEn,navButtonRu} from './main.js';
  import {valueRu,valueEn,selectors} from './values.js';

  function changeLang(){
    const aboutContent = document.querySelector('.about__content');
    const aboutLeft = document.querySelector('.about__left');
    btnChange.addEventListener('click', () => {
      if(navButtonEn.classList.contains('show-text')){
        navButtonEn.classList.add('hide-text');
        navButtonEn.classList.remove('show-text');
        navButtonRu.classList.add('show-text');
        navButtonRu.classList.remove('hide-text');
        aboutContent.style.height = '880px';
        aboutLeft.classList.add('about__left-RU');
      }
      else {
        navButtonEn.classList.add('show-text');
        navButtonEn.classList.remove('hide-text');
        navButtonRu.classList.add('hide-text');
        navButtonRu.classList.remove('show-text');
        aboutContent.style.height = '750px';
        aboutLeft.classList.remove('about__left-RU');
      }
    });
  }

  function change(){

    btnChange.addEventListener('click', () => {
      if(navButtonRu.classList.contains('show-text') && navButtonEn.classList.contains('hide-text') ){
        let value = Object.values(valueRu);
        let selector = Object.values(selectors);
        // console.log(selector.length);
        // console.log(value.length);
        for (let i = 0; i <= 22; i++){
          let word = document.querySelector(selector[i]).textContent = `${value[i] + ''}`;
          
        }
        
        
        
        
        
       
       
       
       
       
         // for(let i = 0; i <= selectors.lenght; i++ ){
        //   selector.forEach((select) => {
        //     value.forEach((val) => {
        //       document.querySelector(select).textContent(val);
        //     });
        //   });
        // }
      }   
      else if(navButtonRu.classList.contains('hide-text') && navButtonEn.classList.contains('show-text') ){
        let value = Object.values(valueEn);
        let selector = Object.values(selectors);
        for (let i = 0; i <= 22; i++){
          let word = document.querySelector(selector[i]).textContent = `${value[i] + ''}`;
          word.trim();
        }
      }

      
    });


  }
  

export {changeLang,change};




