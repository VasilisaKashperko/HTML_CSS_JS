A = new Array();
                A[0] = "pow"; // число в степень
                A[1] = "pop"; // удалить последний элемент
                A[2] = "push"; // добавить указанное значение в конец
                A[3] = "shift"; // удалить первый элемент
                A[4] = "round"; // округление
                A[5] = "floor"; // округление вниз
                A[6] = "slice"; // созздать массив из указанного диапазона
                A[7] = "sort"; // сортировка по выбранной функции

            B = new Array();
            C = new Array();

            document.write('<table class="table2">');

                document.write('<tr>');
                    document.write('<td rowspan="2">');

                for (i = 0; i < A.length; i++) {
                    document.write(A[i] + '<br>');
                }

                     document.write('</td>');

                    document.write('<td align = "center">' + 'Math:' + '</td>');
                    document.write('<td align = "center">' + 'Array:' + '</td>');
                document.write('</tr>'); 

                document.write('<tr>');
                    document.write('<td>');

                for (i = 0; i < A.length; i++) {
                    if (A[i] in Math) { // если объект в math
                            B[B.length] = A[i];
                            document.write(B[B.length - 1]+ '<br>');
                    }
                }
                    document.write('</td>');

                    document.write('<td>');

                    for (i = 0; i < A.length; i++) {
                    if (!(A[i] in Math)) { // если объект не в math
                        C[C.length] = A[i];
                            document.write(C[C.length - 1]+ '<br>');
                        }
                    }

                    document.write('</td>');
                    
                document.write('</tr>');

                document.write('<tr>');
                    document.write('<td align = "center">' + 'Длина:' + '</td>');
                    document.write('<td align = "center">' + B.length + '</td>');
                    document.write('<td align = "center">' + C.length + '</td>');
                document.write('</tr>');  

                document.write('</table>');