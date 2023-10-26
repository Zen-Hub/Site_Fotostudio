// SLIDER
//после загрузки DOM-дерева браузером будет выполнена функция, переданная вторым аргументом
window.addEventListener('DOMContentLoaded', function () {
    //slidesPlugin принимает необязательный аргумент activeSlide со значением по умолчанию 0
    function slidesPlugin(activeSlide = 0) {
        //находит все элементы на странице с классом slide и сохраняет их в переменную slides.
        const slides = document.querySelectorAll('.slide');
        // добавляет класс active к элементу slides[activeSlide], который был передан в качестве аргумента activeSlide или имеет индекс 0
        slides[activeSlide].classList.add('active')



        //перебирает все элементы slides и добавляет обработчик события click, который будет вызывать функцию clearActiveClasses и добавлять класс active к текущему элементу slide
        slides.forEach((slide) => {

            slide.addEventListener('click', () => { //ЛОВИМ КЛИК
                clearActiveClasses();// УДАЛЯЕМ КЛАСС
                slide.classList.add('active'); // ДОБАВЛЯЕМ КЛАСС
            });
        });

        //УДАЛЯЕM КЛАСС
        function clearActiveClasses() {
            slides.forEach((slide) => {
                slide.classList.remove('active')


            })
        }



    }
    slidesPlugin()
})



