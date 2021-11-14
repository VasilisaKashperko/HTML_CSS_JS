// Задание 1

function fillingWithNumbers() // Функция создания таблицы и ее заполнения числами
    {
        let a = document.getElementById("numberInput1").value; // Обращение к значению (value) элемента с id = "numberinput1"
        let b = document.getElementById("numberInput2").value; // Обращение к значению (value) элемента с id = "numberinput2"

        document.write("<style>body{background-color: black;}</style>")
        document.write("<style>table, tr, td{border: 1px solid #ff4500;color:#ff4500; align-content: center; border-collapse: collapse; padding: 5px; background-color: rgb(0, 0, 0);}");
        document.write("tr:first-child td{border: 3px solid black; color:black; background-color: #ff4500;}");
        document.write("tr td:first-child{border: 3px solid black; color:black; background-color: #ff4500;}</style>");

        document.write("<table>");

        for (i = 1; i <= a; i++) {
            document.write("<tr>");

            for (j = 1; j <= b; j++) {
                document.write("<td>" + i * j + "</td>");
                var input = i*j;
            }

            document.write("</tr>");
        }
        
        document.write("</table>");
    }
    

// Задание 2

function firstTask() {

        alert ("Задание 1");
        alert ("Вас приветствует учебный центр");
    
        x = prompt('Введите Ваше имя:', 'Имя');
        alert ("Добро пожаловать на наши курсы, "+x);
    
        y = confirm ("Хотите стать Web-дизайнером?");
    
        if (y)
        {
        alert ("Учите стили CSS и JavaScript!");
        }
    
        else
        {
        alert ("Упускаете время!");
        }
 
 }
 
 

 function secondTask() {
 
        alert ("Задание 2");
    
        var x = ++prompt('Введите первое из чисел, которые нужно сложить', '3');
        var y = ++prompt('Введите второе число', '42');
    
       /* x = Number(x);
        y = Number(y); //или Number(...); - становится числом*/
    
        var z=x+y;
    
        alert('Сумма чисел = '+z); //alert автоматически преобразует любое значение к строке
        document.write('Сумма чисел = '+z);//Вызов document.write() из асинхронно-загруженного внешнего сценария был проигнорирован.
    
        var k = prompt('Введите первую строку', 'Например, 21');
        var i = prompt('Введите вторую строку', 'Например, 44');
        var n=k+i;
        alert('Сумма строк = '+n);
    
        var m = prompt('Введите первое число', '5');
        var j = prompt('Введите вторую строку', 'Например, 22');
        var m = Number(m);
        var u=m+j;
        var o=j+m;
    
        alert('Сумма строки и числа = '+o);
        alert('Сумма числа и строки = '+u);
    
        alert('Результатом сложения строки и числа всегда будет строка!');
 
 }
 
 

 function thirdTask(){
        alert ("Задание 3");
    
        var x=2;
        var y=21;
    
        var z=(3*y+2*x-46)*3;
        var k=(42/y+100/x+46)*4;
    
        alert('Результатом подсчета являются числа '+z+' и '+k);
    
        var n=k%z;
        alert('Остаток от деления значения одного выражения на значение другого = '+n);
        document.write('Остаток от деления значения одного выражения на значение другого = '+n);//Вызов document.write() из асинхронно-загруженного внешнего сценария был проигнорирован.
 }
 
 

 function fourthTask(){
        var x = prompt('Введите любое число:', '3'); // подходит 5
        var x = Number(x);
    
        var smile = '\u263A'; // символ Unicode с кодовой точкой U+263A
    
        if(x<20 || x>40 && x!=15 && x%5==0){
        alert('Правильное значение!'+smile);
        }
        else{
        alert('Не правильное значение! :(');
        }
    
        /*
        Свой пример
        */
    
        var y = prompt('Введите любое число:', '96'); // подходит 100
        var y = Number(x);
    
        var heart = '\uD83D\uDC96'; // символ Unicode с кодовой точкой U+263A
        //Если оно меньше или равно 10 или больше или равно 20 и не равно 8 и не равно 23 и делится без остатка на 5
        if(x<=10 || x>=20 && x!=8 && x!=23 && x%10==0){
        alert('Правильное значение!'+heart);
        }
        else{
        alert('Не правильное значение! :(');
        }
 }
 
 

 function fifthTask(){
        /*
        Задание 5
        */
        var x = prompt('Введите первое число:', '3');
        var x = Number(x);
    
        var y = prompt('Введите второе число:', '7');
        var y = Number(y);
    
        if (x>y) {
        alert('Первое число больше, чем второе');
        }  
        else if (x==y) {
        alert('Первое число равно второму'); //в JavaScript нет ключевого слова elseif (в одно слово)
        }
        else {
        alert('Первое число меньше, чем второе');
        }
    
        /*
        Свой пример
        */
        var n = prompt('Введите первое число:', '3');
        var n = Number(n);
    
        var m = prompt('Введите второе число:', '7');
        var m = Number(m);
    
        if (n%5==0 && m%5==0) {
        alert('Два числа кратны 5');
        }  
        else if (n%5==0 && m%5!==0) {
        alert('Первое число кратно 5'); //в JavaScript нет ключевого слова elseif (в одно слово)
        }
        else if (n%5!==0 && m%5==0) {
        alert('Второе число кратно 5'); //в JavaScript нет ключевого слова elseif (в одно слово)
        }
        else {
        alert('Никакое число не кратно 5');
        }
 }
 
 

 function sixthTask(){
        /*
        Задание 6
        */
    
        var x = prompt('Введите число текущего дня', 'Например, 21');
        var x = Number(x);
    
        switch (x) {
        case 1,8,15,22:
        alert('Понедельник'); break;
        case 2,9,16,23:
        alert('Вторник'); break;
        case 3,10,17,24:
        alert('Среда'); break;
        case 4,11,18,25:
        alert('Четверг'); break;
        case 5,12,19,26:
        alert('Пятница'); break;
        case 6,13,20,27:
        alert('Суббота'); break;
        case 7,14,21,28:
        alert('Воскресенье'); break;
        default:
        alert("Нет таких дней в феврале!"); break;
        }
 }
 
 

 function seventhTask(){
        /*
        Задание 7
        */
    
        /*
        Конструкция try...catch пытается выполнить инструкции в блоке try, 
        и, в случае ошибки, выполняет блок catch.
        */
    
        try {
    
        alert('Начало блока try');
    
        lalala; // ошибка, потому что переменная не определена
    
        alert('Конец блока try');  // он никогда не выполнится
    
        } catch(err) {
    
        alert('Возникла ошибка!');
        alert(err.name); // имя ошибки
        /* Объект ReferenceError представляет ошибку,
        возникающую при обращении к несуществующей переменной. */
        alert(err.message); // lalala is not defined - переменная не определена
        }
 }

//Задание 3

function round(x) {
       return Math.round(x * 10) / 10;
       
       
   }

   function func() {
       let str;

       let a = document.getElementById("numberInput3").value; // Обращение к значению (value) элемента с id = "numberinput1"
       let b = document.getElementById("numberInput4").value; // Обращение к значению (value) элемента с id = "numberinput2"

       a = Number(a);
       b = Number(b);

       let div = document.getElementById("main");

       div.innerHTML = "<style>table{width:100%; align:center;background-color: rgb(0, 0, 0.6);}</style><table id = \"idtable\"></table>";

       let table = document.getElementById("idtable");


       table.innerHTML += "<tr><td>Радиус</td><td>Площадь круга</td><td>Длина окружности</td></tr>" // закрывает теги

       do {
           // a = a - (a%0.1) - потому что работает не всегда
           str = "";
           str += "<tr>"; // Строка, которая хранит строку-ряд таблицы
           console.log("a: " + a); //Логирование (вывод отладочных данных, например) в консоль разработчикa.
           //Метод console.log() выводит отладочную информацию в консоль, т.е. скрывая ее от пользователей.

           a = round(a); // Функция округления

           str += "<td>" + a + "</td>";
           str += "<td>" + round(2 * Math.PI * a) + "</td>";
           str += "<td>" + round(Math.PI * a * a) + "</td>";

           str += "</tr>"
           table.innerHTML += str;
           a += 0.3;
       } while (a < b)

   }