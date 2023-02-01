const btnChange = document.querySelector('.nav__button_img');
const navButtonRu = document.querySelector('.nav__change_text-RU');
const navButtonEn = document.querySelector('.nav__change_text-EN');

import {slider} from "./slider.js";
import {TeleportToTop,changeBtnPosition,ReplaceLineOnNav,moveNavCircle,} from './navscript.js';
import {animFooter,animTextFooter} from './footerscript.js';
import {change, changeLang} from './changeLang.js';
import {moveHeaderText,scaleCardsItem,scaleHeaderCircle,rotateAboutCircle,returnHeaderImage} from './sectionscript.js';



const headerTimeOut = setTimeout(3000, moveHeaderText());
const scaleCircleTimeOut = setTimeout(3000, scaleHeaderCircle());
const cardsTimeOut = setTimeout(3000,scaleCardsItem());
const aboutTimeOut = setTimeout(3000, rotateAboutCircle());
const headerCircleTimeOut = setTimeout(3000, moveNavCircle());


ReplaceLineOnNav();
TeleportToTop();
changeBtnPosition();
changeLang()
animFooter();
animTextFooter();
change();
slider();   
returnHeaderImage();
export {btnChange,navButtonEn,navButtonRu};




