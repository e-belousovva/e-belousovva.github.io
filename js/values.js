const valueRu = {
    navHome: 'Главная',
    navSkills: 'Навыки',
    navAbout: 'Обо мне',
    navPortfolio:'Порфтолио' ,
    navContact:'Контакты' ,
    headerSubtitle:'Привет' ,
    headerTitle:'Я Алёна Белоусова' ,
    headerText: 'Занимаюсь back-end разработкой на php с 2020 года. Считаю, что не всегда количество лет опыта оправдывает знания. Гораздо важнее то, что человек успел освоить за это время. Вы можете узнать о моем опыте, soft и hard skills ниже.' ,
    headerButton: 'Связаться со мной' ,
    cardsTitle: 'Навыки' ,
    aboutTitle: 'ОБО МНЕ' ,
    aboutText: 'Разрабатываю с нуля, добавляю новые фичи и занимаюсь рефакторингом проектов на PHP (laravel/symfony). Опыт работы с монолитами и API. Следую DRY, KISS, YAGNI, SOLID, где это уместно. Работаю с MYSQL, PostgreSQL. Все приложения я разрабатываю с помощью Docker (docker-compose). В качестве системы управления использую Git, каждое утро git pull :) Пишу красивый и читаемый, легко масштабируемый код, покрытый тестами. Интерфейсы, абстрактные классы и трейты для меня не просто термины ООП. На вопрос о позднем статическом связывании на собеседовании считаю честным спросить в ответ "где вы это используете?" ;). Открыта для новых знаний и мозгового штурма. Есть опыт работы в англоязычной команде. (уровень английского B1+). Я люблю путешествовать, поэтому предпочитаю работать удаленно, но не против время от времени заходить в офис и встречаться с коллегами. В свободное время я занимаюсь в тренажерном зале, читаю книги по психологии и провожу время с семьей и друзьями.' ,
    sliderTitle: 'Порфтолио' ,
    sliderCardTitleFirst: 'Custom Log' ,
    sliderCardTextFirst:'Пакет Composer для логирования данных в файл или базу данных с помощью Facade. Подключен ПСР-3.' ,
    sliderCardTitleSecond:'Restfull API native PHP',
    sliderCardTextSecond:'Приложение TODO lists в Docker на NATIVE PHP с авторизацией, middlewares, CRUDLs по спискам задач и задачам,<br> также реализован экспорт в pdf. Избегалось использование каких-либо ненужных зависимостей.' ,
    footerHome: 'Главная',
    footerSkills: 'Навыки',
    footerAbout:'Обо Мне' ,
    footerContact:'Контакты' ,
    footerItemFirst:'Контакты:',
 

};
const valueEn = {
    
    navHome: 'Home',
    navSkills: 'Skills',
    navAbout: 'About me',
    navPortfolio: 'Portfolio' ,
    navContact: 'Contacts' ,
    headerSubtitle:'HELLO' ,
    headerTitle:"I’m Alena Belousova" ,
    headerText: "I've been doing back-end development on php since 2020. I think that not always the number of years in experience justifies knowledge. It is much more important that I was able to master during this time. You can learn about my experience, soft and hard skills bellow.",
    headerButton:'CONTACT ME' ,
    cardsTitle: 'My Skills',
    aboutTitle: 'ABOUT ME',
    aboutText: "I develop from scratch, add new features and do refactor projects in PHP (laravel / symfony). Experience with monoliths and APIs. Follow DRY, KISS, YAGNI, SOLID where appropriate. I work with MYSQL, PostgreSQL. I develop all applications using Docker (docker-compose). Git is used as a control system, git pull every morning :) I write beautiful and readable, easily scalable code hidden by tests. Interfaces, abstract classes, traits are not just OOP terms for me. Open to new knowledge and brainstorming. There is experience in the English-speaking team. (Level of English B1+). I love to travel, so I prefer to work remotely, but I don't mind visiting the office from time to time and seeing colleagues. In my free time, I work out at the gym, read books on psychology, and spend time with my family and friends.",
    sliderTitle: 'PORTFOLIO',
    sliderCardTitleFirst:'Custom Log' ,
    sliderCardTextFirst: 'Composer package for logging data to a file or database using Facade. Added PSR-3.',
    sliderCardTitleSecond:'Restfull API native PHP' ,
    sliderCardTextSecond: 'TODO list app in Docker on NATIVE PHP with authorization, middlewares, CURLs by lists and tasks,<br> also implemented export to pdf. Was avoided any unnecessary dependencies.',
    footerHome: 'Home',
    footerAbout: 'About me',
    footerPortfolio:'Portfolio' ,
    footerContact: 'Contacts',
    footerItemFirst:'Contacts:',
    
  };

const selectors = {
    
    navHome: '.nav__content_item-first',
    navAbout: '.nav__content_item-second',
    navPortfolio: '.nav__content_item-third' ,
    navContact: '.nav__content_item-four' ,
    headerSubtitle:'.header__subtitle' ,
    headerTitle:'.header__title' ,
    headerText: '.header__text',
    headerButton:'.header__button' ,
    cardsTitle: '.cards__title',
    aboutTitle: '.about__title',
    aboutText: '.about__text',
    sliderTitle: '.slider__title',
    sliderCardTitleFirst:'.slider__card_title-first' ,
    sliderCardTextFirst: '.slider__card_text-first',
    sliderCardTitleSecond:'.slider__card_title-second' ,
    sliderCardTextSecond: '.slider__card_text-second',
    sliderCardTitleThird: '.slider__card_title-third',
    sliderCardTextThird: '.slider__card_text-third',
    footerHome: '.footer__left_item-first',
    footerAbout: '.footer__left_item-second',
    footerPortfolio:'.footer__left_item-third' ,
    footerContact: '.footer__left_item-four',
    footerItemFirst:'.footer__center_text-first',
    
    
};

export {selectors,valueEn,valueRu};