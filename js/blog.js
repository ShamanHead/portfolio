//let casesRaw = [
//   {
//     name: 'Как «научиться учиться». Часть 2 — метакогнитивные процессы и дудлинг',
//     description: 'В первой части нашего обзора полезных лайфхаков для учащихся мы говорили о том, какие научные исследования стоят за очевидными советами — «пить больше воды», «заниматься спортом», «планировать распорядок дня». В этой части рассмотрим менее очевидные «хаки», а также направления, которые считаются на сегодняшний день одними из наиболее перспективных в обучении. Попробуем разобраться в том, чем могут быть полезны «каракули на полях тетради», и в каких случаях размышления об экзамене помогают лучше его сдать.',
//     image: 'https://hsto.org/r/w1560/webt/lv/3p/wx/lv3pwxxy-p3no7sunlwwoy795m4.jpeg',
//     tags: ['Блог компании Университет ИТМО', 'GTD*', 'Учебный процесс в IT', 'Читальный зал'],
//     href: 'https://habr.com/ru/company/spbifmo/blog/348942/'
//   },
//   {
//     name: 'Развели тут макиаввельщину',
//     description: 'Ой-ой-ой, я ж на главный-то вопрос не ответил! Всё пишу, как плести интриги и использовать грязные методы, а зачем это надо? Ведь можно просто хорошо работать!Можно, не вопрос. Более того: я и сам искренне хочу просто хорошо работать. Всегда хотел. Сидишь и просто делаешь своё дело, в чём бы оно не заключалось. Достигаешь поставленных целей, обеспечиваешь требуемый уровень качества, следуешь правилам, развиваешься в меру сил. И ведь всё будет хорошо?Да. Но не «всё», не «всегда» и не обязательно «хорошо».',
//     image: null,
//     tags: ['Управление персоналом', 'Читальный зал'],
//     href: 'https://habr.com/ru/post/666038/'
//   },
//   {
//     name: 'Локальный или облачный сервер: плюсы каждого выбора',
//     description: 'Еще 20 лет назад, когда только запустили первое облако LaaS, многим казалось, что облачный и локальный сервер – это как небо и земля. Спустя время опросы показывают, что пользователи перестали замечать разницу между двумя средами. А выбор сервера по большей части зависит от потребностей конкретного бизнеса. Кто-то сразу останавливается на одном из вариантов, а кому-то приходиться пройти немалый путь, чтобы найти свое. Хочу, чтобы у Вас сразу сформировалось четкое представление о двух средах, поэтому прошу под кат.',
//     image: 'https://hsto.org/r/w1560/webt/ua/js/aq/uajsaqjgfnqgiqbrmpiburs89c8.jpeg',
//     tags: ['Блог компании Timeweb Cloud', 'Хранение данных*', 'Хранилища данных*', 'Облачные сервисы'],
//     href: 'https://habr.com/ru/company/timeweb/blog/665620/'
//   }
// ]
var xmlDocBlog;

$.ajax({url : "./xml/blog.xml", success: (res) => {xmlDocBlog = res}, async: false});

let blogNames = [].slice.call(xmlDocBlog.getElementsByTagName("name"));

const blogs = blogNames.map((element) => {
  return element.parentElement;
})

let blogWrapper = document.getElementsByClassName("wrapper__content__column-blog")[0];

blogs.map((element, index) => {

  let blogName = element.getElementsByTagName("name")[0].innerHTML,
      blogDescription = element.getElementsByTagName("description")[0].innerHTML,
      blogImage = element.getElementsByTagName("image")[0].innerHTML,
      blogHref = element.getElementsByTagName("href")[0].innerHTML,
      blogTags = [].slice.call(element.getElementsByTagName("tags")[0].getElementsByTagName("element"))
                   .map((element) => { return `<div class="blog-piece__name-tag">` + element.innerHTML + `</div>` })
                   .reduce((el1, el2) => el1 + el2, '');
  blogWrapper.innerHTML += `
    <div class="blog-piece">
      <div class="blog-piece__name">
          ${blogName}
        <div class="blog-piece__name-tags">
          ${blogTags}
        </div>
      </div>
      <div class="blog-piece__content">
        <div class="blog-piece__content-description">
          ${blogDescription}
        </div>
        <div class="blog-piece__content-image">
          <img src="${blogImage}" alt="" class="blog-piece__content-image__image">
        </div>
      </div>
      <div class="blog-piece__button" onclick="window.location = '${blogHref}'">
        Посмотреть
      </div>
    </div>`;
})
