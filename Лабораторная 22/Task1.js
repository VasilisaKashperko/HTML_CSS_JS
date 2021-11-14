let window1;

function winOpen1() {
    //(url страницы, имя окна, свойства окна)
    window1 = open("","","width = 250, height = 250, left = 20, top = 500");
    // window - в нем все объекты, функции, переменные
    // методы: open(), close(), alert();
    window1.document.title = "Первое окно"; //переменная, которая получает ссылку на окно
    window1.document.body.innerHTML = "<style>body{background-color:#f0d1aa;}</style>";
    window1.focus();
}
        function winClose1() {
            console.log(window1.document.title);
            window1.close();
        }
                function addText1() {
                    // innerHTML - для динамического изменения содержания страницы
                    //Cвойство innerHTML содержит весь HTML-код внутри узла, и его можно менять.
                    //Свойство innerHTML применяется, в основном, для динамического изменения содержания страницы, например:

                    window1.document.body.innerHTML = "<style>body{background-color:#f0d1aa;color:#5c3502;}</style>Добавленный текст";
                    window1.focus();
                }

function winOpen2() {
    //(url страницы, имя окна, свойства окна)
    window2 = open("","","width = 250, height = 250, left = 280, top = 500");
    window2.document.title = "Второе окно"; //переменная, которая получает ссылку на окно
    window2.document.body.innerHTML = "<style>body{background-color:#5c3502;}</style>";
    window2.focus();
}
        function winClose2() {
            console.log(window2.document.title);
            window2.close();
        }
                function addText2() {
                    window2.document.body.innerHTML = "<style>body{background-color:#5c3502;color:white;}</style>Добавленный текст";
                    window2.focus();
                }

function winOpen3() {
    //(url страницы, имя окна, свойства окна)
    window3 = open("","","width = 250, height = 250, left = 530, top = 500");
    window3.document.title = "Третье окно"; //переменная, которая получает ссылку на окно
    window3.document.body.innerHTML = "<style>body{background-color:rgb(182, 234, 255);}</style>";
    window3.focus();
}
        function winClose3() {
            console.log(window3.document.title);
            window3.close();
        }
                function addText3() {
                    window3.document.body.innerHTML = "<style>body{background-color:rgb(182, 234, 255);color:#5c3502;}</style>Добавленный текст";
                    window3.focus();
                }


function func() {
    let a = document.getElementById("Input1").value;

    switch (a) {
        case "Информация о браузере":
                alert(navigator.userAgent); //navigator - объект, userAgent - свойство
            break;
        case "Версия браузера":
                alert(navigator.appVersion);
            break;
        case "Название браузера":
                alert(navigator.appName);
            break;
        case "Кодовое название браузера":
                alert(navigator.appCodeName);
            break;
        case "ОС":
                alert(navigator.platform);
            break;    
        case "Java в браузере":
                alert(navigator.javaEnabled()); //navigator - объект, javaEnabled - метод
            break;
        case "Ширина и высота экрана":
                alert(`Ширина: ${screen.width}, высота: ${screen.height}`);
            break;
        case "Глубина цвета":
                alert(window.screen.colorDepth); //screen - объект, width - метод
            break;
        case "Посещенные URL":
                alert(history.length); //history - объект, length - метод (количество посещенных URL)
            break;
        case "Текущий URL":
                alert(location.href); //хранит URL текущего документа целиком
            break;
        case "Путь к документу":
                alert(location.pathname); //узнать путь к загруженному документу
            break;
        case "Имя домена":
                alert(location.host); //содержит имя домена загруженного документа
            break;
        default:
                alert('Введите еще раз');
    }
}