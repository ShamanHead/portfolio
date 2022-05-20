function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
            // if(((pageTop < elementTop) && (pageBottom > elementBottom))) {
            //   var $target = $('.wrapper__content').next('div');
            //     if ($target.length == 0)
            //       $target = $('.div:first');
            //
            //     $('html, body').animate({
            //       scrollTop: $target.offset().top
            //     }, 'slow');
            //
            //     // $('.active').removeClass('active');
            //     // $target.addClass('active');
            // }
        } else {
          return ((elementTop <= pageBottom) && (elementBottom >= pageTop))
            // if(((elementTop <= pageBottom) && (elementBottom >= pageTop))) {
            //   var $target = $('.wrapper__content').next('div');
            //     if ($target.length == 0)
            //       $target = $('.div:first');
            //
            //     $('html, body').animate({
            //       scrollTop: $target.offset().top
            //     }, 'slow');
            //
            //     // $('.active').removeClass('active');
            //     // $target.addClass('active');
            // }
        }
    }
};

var Utils = new Utils();
//var isElementInView = Utils.isElementInView($('.next'), true);
window.onscroll = function() {

  let cases = $('.projects__case');

  for(let i = 0; i < cases.length; i++) {
    if(Utils.isElementInView(cases[i]) && !cases.eq(i).hasClass("case__animate")) {
      cases.eq(i).find(".projects__case-animate").removeClass("case-after__animate").addClass("case-before__animate").css("width" , 0);
      cases.eq(i).addClass("case__animate");
      cases.eq(i).find(".case__content").addClass("case-content__animate")
    } else if(!Utils.isElementInView(cases[i])) {
      cases.eq(i).find(".projects__case-animate").removeClass("case-before__animate")
      cases.eq(i).find(".projects__case-animate").addClass("case-after__animate")
      cases.eq(i).find(".projects__case-animate").css("width" , "100%")
      cases.eq(i).removeClass("case__animate");
      cases.eq(i).find(".case__content").removeClass("case-content__animate")
    }

  }

  myFunction()
};

// Get the header
let header = document.getElementsByClassName("wrapper__main__header")[0],
    wrapper = document.getElementsByClassName("wrapper__preview")[0];

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position


function myFunction() {
  if (window.pageYOffset > sticky) {
    typeof header === 'undefined' ? false : header.classList.add("header__sticky");
    typeof wrapper === 'undefined' ? false : wrapper.classList.add("on__sticky");
  } else {
    typeof header === 'undefined' ? false : header.classList.remove("header__sticky");
    typeof wrapper === 'undefined' ? false : wrapper.classList.remove("on__sticky");
  }

}

let mobileButton = document.getElementById("mobile_button"),
    buttonCss = document.getElementsByClassName("menu-button")[0],
    mobileMenu = document.getElementById("real_mobile_menu"),
    wrapperReal = document.getElementsByClassName("wrapper__real")[0],
    headerName = document.getElementsByClassName("header__header-content__name")[0];

let mobileMenuClicked = false;

mobileButton.onclick = () => {

  if(mobileMenuClicked === false) {

    mobileMenu.id = "menu-active";

    buttonCss.id = "button-menu-active";

    header.id = "header-menu-active";

    headerName.id = "header-name-menu-active";

    document.body.id = "body-off";

    mobileMenuClicked = true;

  } else {

    header.id = "header-menu-inactive";

    mobileMenu.id = "real_mobile_menu";

    headerName.id = "";

    buttonCss.id = "";

    document.body.id = "";

    mobileMenuClicked = false;

  }
}

// let casesRaw = [
//   {
//     name: 'Парсер объявленний для сайта',
//     points: {
//       task: 'Реализовать скрипт обновления объявлений через API донора для сайта. Донор - sutochno.ru, Акцептор - сайт на WordPress',
//       image: './images/allapart.jpg',
//       year: 2022,
//       technologies: ['PHP', 'WordPress'],
//       requirements: 'Скрипт должен работать постоянно, обновляя города последовательно. Должны присутствовать настройки, где можно было бы указывать сходимости полей на сайте акцепторе и сайте доноре.',
//       realization: `Для взятия данных использовались незадокументированные методы API суточно.ру, что позволило брать полную информацию не прибегая к парсингу данных.
//
// В следствии необходимости наилучшей совместимости контента на доноре и акцепторе, было принято решения добавить меню настроек в админ-панель сайта донора.`
//     }
//   },
//   {
//     name: 'API сервис для сайта',
//     points: {
//       task: 'Реализовать парсер для сайта. Донор - sutochno.ru, Акцептор - сайт на WordPress',
//       technologies: ['PHP', 'WordPress', 'Swagger', 'slim-php'],
//       image: null,
//       year: 2021,
//       requirements: 'Скрипт должен работать постоянно, обновляя города последовательно. Должны присутствовать настройки, где можно было бы указывать сходимости полей на сайте акцепторе и сайте доноре.',
//       realization: `Для взятия данных использовались незадокументированные методы API суточно.ру, что позволило брать полную информацию не прибегая к парсингу данных.
//
// В следствии необходимости наилучшей совместимости контента на доноре и акцепторе, было принято решения добавить меню настроек в админ-панель сайта донора.`
//     }
//   }
// ]
//
// console.log(JSON.stringify(casesRaw));

//
// function changeContent( pointer, contents ) {
//   // let mode = false;
//   //
//   // if(pointer.innerText.length == 0) mode = true;
//   //
//   // if(mode === false) {
//   //   pointer.innerText = pointer.innerText.slice(0, pointer.innerText.length - 1);
//   // } else {
//   //   pointer.innerText = pointer.innerText.concat(contents);
//   //   mode = false;
//   // }
//   console.log(Math.random() * (2000 - 1000) + 1000);
//
//   setTimeout(changeContent(pointer, contents), 10000);
// }

var xmlDoc;

$.ajax({url : "./xml/cases.xml", success: (res) => {xmlDoc = res}, async: false});

let caseNames = [].slice.call(xmlDoc.getElementsByTagName("name"));

const cases = caseNames.map((element) => {
  return element.parentElement;
})

// xml
// xmlDoc = parser.parseFromString(casesText.responseText, "text/xml");
