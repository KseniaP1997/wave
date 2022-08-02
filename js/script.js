

//guest accardion
$(".accordion").accordion({
 heightStyle: "content",
 collapsible: true,
 active: false
});


$(".guest__item").click (function(e) {
  e.preventDefault();
  $(".guest__item").removeClass("guest__close");
  $(this).addClass("guest__close")
});

// tabs
document.querySelectorAll('.guest-box__step' ).forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guest-box__step').forEach(function(btn){
      btn.classList.remove('guest-box__step--active')});

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

//play
document.querySelector('.bottom-btns__btn-players-archive').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-archive .passive').classList.toggle('btn-active')
});

document.querySelector('.bottom-btns__btn-players-ether').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-ether .passive').classList.toggle('btn-active')
});

document.querySelector('.bottom-btns__btn-players-archive-mobile').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-archive-mobile .passive').classList.toggle('btn-active')
});

document.querySelector('.bottom-btns__btn-players-ether-mobile').addEventListener('click', function () {
  document.querySelector('.bottom-btns__btn-players-ether-mobile .passive').classList.toggle('btn-active')
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



