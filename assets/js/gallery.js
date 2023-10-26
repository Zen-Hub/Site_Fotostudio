// GALLERY====================================================================
//добавляет обработчик события, который будет выполнен, когда содержимое страницы полностью загрузится
window.addEventListener('DOMContentLoaded', function () {
    
    //функция imagesGallery создает галерею изображений на странице
    function imagesGallery() {
        // получает элемент галереи по его идентификатору "gallery"
        let gallery = document.getElementById('gallery');

        // использует функцию fetch для загрузки JSON-файла, содержащего пути к изображениям
        fetch('assets/images/gallery.json')
        // преобразует полученный ответ в формат JSON
            .then(response => response.json())
            // извлекает массив путей к изображениям из свойства images объекта данных
            .then(data => {
                const imagePaths = data.images;

                // Добавляем каждое изображение в галерею
                imagePaths.forEach(function (path) {
                    //создает элемент div для каждого изображения
                    let imageElement = document.createElement('div');
                    imageElement.classList.add('image-gallery');
                    //создает элемент img
                    let img = document.createElement('img');
                    //устанавливает его атрибут src в текущий путь изображения
                    img.src = path;
                    img.loading = "lazy"; // Добавляем атрибут loading="lazy"

                    // Увеличиваем при клике
                    // Добавляем обработчик события для клика на изображение
                    img.addEventListener('click', function () {
                        // Создаем модальное окно
                        let modal = document.createElement('div');
                        modal.classList.add('modal');

                        // Создаем изображение в модальном окне с увеличенным размером
                        let modalImg = document.createElement('img');
                        modalImg.src = this.src;
                        modalImg.classList.add('modal-img');

                        // Добавляем изображение в модальное окно
                        modal.appendChild(modalImg);

                        // Добавляем модальное окно в body документа
                        document.body.appendChild(modal);

                        // Закрываем модальное окно при клике на него
                        modal.addEventListener('click', function () {
                            document.body.removeChild(modal);
                        });
                    });

                    // Добавляем изображение в галерею
                    imageElement.appendChild(img);
                    gallery.appendChild(imageElement);
                });
            })
            .catch(error => {
                console.error('Error loading images:', error);
            });
    }

    imagesGallery();
});
