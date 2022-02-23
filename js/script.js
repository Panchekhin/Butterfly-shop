$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.nav').toggleClass('active');
      $('body').toggleClass('lock')
   });
   $('.reviews__slider').slick({
      arrow:true, //показывает стрелки или нет
      dots:true, //показывает точки "под" слайдами или нет
      adaptiveHight:true, //слайды адаптируются по высоте под контент
      slidesToShow:1, //показывает кол-во слайдов на странице
      slidesToScroll:1, // кол-во прослистываемых слайдов на странице
      speed:800, //скорость пролистывания слайдов в мл/с
      // easing:'ease', -----//тип анимации при смене слайда
      infinite:false, // будет ли слайдер бесконечным
      initialSlide:0, //c какого слайда будет старт
      autoplay:true, //автопроигрывание слайдов
      autoplaySpeed:1500, //скорость автопроигрывания в мл/с
      pauseOnFocus:true, //пауза при нажатии
      pauseOnHover:true,  //пауза при наведении
      pauseOnDotHover:true, //пауза при нажатии на точку
      draggable:false, //прокуртка на ПК мышью
      swipe: true,  //прокуртка на мобильных и планшетах
      touchThreshold:2, //для продвижения слайдов пользователь должен провести пальцем по длине (1 / touchThreshold) * ширина слайдера
      touchMuve: true, //включить движение слайдов одним касанием
      waitForAnimate:false, //чем быстрее нажиаешь на стрелку тем бысьтрее прокручиваются слайды
      centerMode:false, //включает центрированный вид с частичными предыдущими / следующими слайдами
      variableWidth: false, //cлайды переменной ширины
      rows: 1, //установка более 1 инициализирует режим сетки. Используйте slidesPerRow, чтобы установить, сколько слайдов должно быть в каждой строке.
      slidesPerRow: 1, //c режимом сетки, инициализированным с помощью опции строк, это устанавливает, сколько слайдов в каждой строке сетки.
      vertical:false, //Режим вертикального скольжения
      verticalSwiping:false, //Режим вертикальной прокрутки
      fade: false, //включает затухание
      asNavFor:0, //установите ползунок для навигации по другому ползунку (имя класса или идентификатора) (можно связать два слайдера, что бы отображать большой вариант маленькой картинки)
      responsive:{}, //объект, содержащий точки останова и объекты настроек (см. Демонстрацию). Включает настройки для заданной ширины экрана. Установите настройки «unlick» вместо объекта, чтобы отключить slick в заданной точке останова.
   });
   function openbox(payment__text) { 
      display = document.getElementById('payment__text').style.display; 
      if  (display == "none") {
         document.getElementById('payment__text').style.display = "block";
      } 
      else {
         document.getElementById('payment__text').style.display = "none";
      }
   }
});