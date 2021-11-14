/*  
                concat() объединяет два и более массива в один;
	            рор() – удаляет последний элемент массива и возвращает его значение;
                push(значение|объект) – добавляет к массиву указанное зна-чение в качестве последнего элемента и возвращает новую длину мас-сива;
	            shift() – удаляет первый элемент массива и возвращает его значение;
	            sliсe(индекс1 [, индекс2]) – создает массив из элементов ис-ходного массива с индексами указанного диапазона;
	            sort([функция_сортировки]) – сортирует (упорядочивает) элементы массива с помощью функции сравнения. 
            */

                let str = new String('Кашперко Василиса Сергеевна');

                document.write('<table class="table2">');
    
                    document.write('<tr>');
                        document.write('<td>' + str + '</td>');
                    document.write('</tr>'); 
    
                    document.write('<tr>');
                        document.write('<td>' + 'Длина строки: ' + str.length + '</td>');
                    document.write('</tr>'); 
    
                    let str1 = str.toUpperCase();
    
                    document.write('<tr>');
                        document.write('<td>' +  str1 + '</td>');
                    document.write('</tr>'); 
    
                    let str2 = str.toLowerCase();
    
                    document.write('<tr>');
                        document.write('<td>' +  str2 + '</td>');
                    document.write('</tr>'); 
    
                    let strconcat = str1.concat(str2); // сложить
    
                    document.write('<tr>');
                        document.write('<td>' +  strconcat + '</td>');
                    document.write('</tr>'); 
    
                    str = str.replace("Кашперко ", "К"); // заменить
                    str = str.replace("Василиса ", "В");
                    str = str.replace("Сергеевна", "С");
    
                    document.write('<tr>');
                        document.write('<td>' + str + '</td>');
                    document.write('</tr>'); 
    
                    document.write('</table>');