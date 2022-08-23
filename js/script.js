

// accordion()

function openCatalogEl() {
  document.querySelectorAll('.accordion__value-item').forEach(el => {
    const link = el.querySelector('.accordion__link');

    if (window.matchMedia("(max-width: 868px)").matches) {
      link.href = '#autorSpace'
    }

    el.addEventListener('click', () => {
      const valueEl = el.textContent;

      const listAutor = document.querySelectorAll('.autor');

      for (let i of listAutor) {
        const autorName = i.querySelector('.autor__name').textContent;

        document.querySelector('.autor_active').classList.remove('autor_active');

        if (valueEl === autorName.trim()) {
          i.classList.add('autor_active');
          break
        }

        document.querySelector('.autor_none').classList.add('autor_active');
      }
    })
  })
}

openCatalogEl()

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
 });
});

$(".accordion-list").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true,
  icons: false
});
 
document.querySelector('.btn-menu').addEventListener('click', function () {
  document.querySelector('.bottom-btns').classList.toggle('card__btns_active')
  document.querySelector('.btn-menu').classList.toggle('btn-menu_active')
  document.querySelector('.header__bottom').classList.toggle('header__bottom_active')
});
 

// tabs
document.querySelectorAll('.guest-box__step' ).forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guest-box__step').forEach(function(btn){
      btn.classList.remove('guest-box__step--active')
    });
      
  e.currentTarget.classList.add('guest-box__step--active');
  document.querySelectorAll('.guest__description').forEach(function(tabsBtn){
    tabsBtn.classList.remove('guest__description--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guest__description--active');
  });
});


//Кастомный селект
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled:false,
    itemSelectText: ""
});

// burger laptop
const burger = document.querySelector('.burger');
const menu = document.querySelector('.laptop');
const close = document.querySelector('.laptop__close');

burger.addEventListener('click', () => {
document.body.style.overflow = 'hidden';
menu.classList.add('laptop--visible');
});

close.addEventListener('click', () => {
document.body.style.overflow = 'initial';
menu.classList.remove('laptop--visible');
});


close.addEventListener('click', () => {
document.body.style.overflow = 'initial';
menu.classList.remove('mobile--visible');
});

//header menu__container
document.querySelector('.menu-btns__btn-players-archive').addEventListener('click', function () {
document.querySelector('.menu-btns__btn-players-archive .passive').classList.toggle('btn-active')
});

document.querySelector('.menu-btns__btn-players-ether').addEventListener('click', function () {
  document.querySelector('.menu-btns__btn-players-ether .passive').classList.toggle('btn-active')
});

document.querySelector('.card__btn-players-archive-mobile').addEventListener('click', function () {
  document.querySelector('.card__btn-players-archive-mobile .passive').classList.toggle('btn-active')
});

document.querySelector('.card__btn-players-ether-mobile').addEventListener('click', function () {
  document.querySelector('.card__btn-players-ether-mobile .passive').classList.toggle('btn-active')
});

//podcasts play
document.querySelector('.podcast__play-link').addEventListener('click', function () {
  document.querySelector('.podcast__play-link .passive').classList.toggle('btn-active')
});

const podcast = document.querySelector('.podcast__play-link');

podcast.addEventListener('click', () => {
document.body.style.overflow = 'hidden';
menu.classList.add('btn-active');
});

const button = document.querySelector('.header__access');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const closed = document.querySelector('.popup__close');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
 
});

//Валидация формы
new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10,
            rule: 'required',
            errorMessage: 'Field is requ', 
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: {
            required:'Как Вас зовут?',
            minLength: 'Поле должно содержать не менее 2 символов',
            maxLength:'Поле должно содержать не более 10 символов'
        },
        mail: {
            required:'Укажите Ваш e-mail',
            email: 'Пожалуйста, введите корректный адрес электронной почты'
        }
    } 
});

//popup
const button = document.querySelector('.header__access');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const closed = document.querySelector('.popup__close');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
 
});

closed.addEventListener('click', () => {
    document.body.style.overflow = 'initial';
    popup.classList.remove('popup_open');
});

//popup mobile
const key = document.querySelector('.header__btn');
const mode = document.querySelector('#blablabla');
const enter = document.querySelector('.popup');
const exit = document.querySelector('.popup__close');

key.addEventListener('click', () => {
  mode.classList.add('open');
  popup.classList.add('popup_open');
 
});

exit.addEventListener('click', () => {
    document.body.style.overflow = 'initial';
    enter.classList.remove('popup_open');
});

//buy
const click = document.querySelector('.subscription__btn');
const box = document.querySelector('#buy');
const buy = document.querySelector('.buy');
const clo = document.querySelector('.buy__close');

click.addEventListener('click', () => {
  box.classList.add('open');
  buy.classList.add('buy_open');
 
});

clo.addEventListener('click', () => {
    document.body.style.overflow = 'initial';
    buy.classList.remove('buy_open');
});

//podcast
const btn = document.querySelector('.podcast__btn');
const el1 = document.querySelector('.podcast__list-item-9');
const el2 = document.querySelector('.podcast__list-item-10');
const el3 = document.querySelector('.podcast__list-item-11');
const el4 = document.querySelector('.podcast__list-item-12');

btn.addEventListener('click', () => {
  el1.classList.add('block-active');
  el2.classList.add('block-active');
  el3.classList.add('block-active');
  el4.classList.add('block-active');
  btn.classList.add('btn-hidden');
});

$('.control').on('click', function() {
    $(this).toggleClass('pause play');
});
//header
$('.menu__player').on('click', function() {
  $(this).toggleClass('menu__pause');
});
//podcast
$('.podcast__play').on('click', function() {
  $(this).toggleClass('pause-play');
});
$('.btn-menu').on('click', function() {
  $(this).toggleClass('card-body');
});

(() => {
  //Слайдер радиокнопок на мобилке
  let swiper = Swiper;
  let init = false;
  
  function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 576px)");
    
    const wrapper = document.querySelector('.js-form');
    const slides = wrapper.querySelectorAll('.js-slide');

    // Enable (for mobile)
    if (mobile.matches) {
      if (!init) {
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => {
          slide.classList.add('swiper-slide');
        });
        
        init = true;
        swiper = new Swiper(".js-radio", {
          slidesPerView: 'auto',
          spaceBetween: 20,
          watchSlidesProgress: true
        });
        
      }
    } else {
      swiper.destroy();
      init = false;
      wrapper.classList.remove('swiper-wrapper');
      slides.forEach(slide => {
        slide.classList.remove('swiper-slide');
      });
    }
  }

  //On Load
  window.addEventListener("load", function () {
    swiperMode();
  });

  //On Resize
  window.addEventListener("resize", function () {
    swiperMode();
  });

//   Слайдер плейлистов
  const playlistsSlider = new Swiper(".js-playlists-slider", {
    // Настройки для мобильной версии, без брейкпоинта
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    grid: {
      rows: 6,
      fill: "row"
    },

    // Пагинация цифрами
    pagination: {
      el: ".js-playlists-pagination",
      type: "fraction"
    },

    // Кнопки пролистывания слайдера
    navigation: {
      prevEl: ".js-playlists-btn-prev",
      nextEl: ".js-playlists-btn-next"
    },

    // Брейкпоинты планшет и десткоп
    breakpoints: {
      860: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        grid: {
          rows: 4
        }
      },

      1200: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        grid: {
          rows: 3
        }
      }
    }
  });
})();
