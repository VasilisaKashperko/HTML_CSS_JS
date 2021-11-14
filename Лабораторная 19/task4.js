date = new Date();
            dateMonth = date.getMonth() + 1;
    
            document.write('<table class="table2">');
                    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'Год' + '</td>');
                    document.write('<td align = "center">' + date.getFullYear() + '</td>');
                    document.write('</tr>');
    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'Месяц' + '</td>');
                    document.write('<td align = "center">' + dateMonth + '</td>');
                    document.write('</tr>');
    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'День' + '</td>');
                    document.write('<td align = "center">' + date.getDay() + '</td>');
                    document.write('</tr>');
    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'Часы' + '</td>');
                    document.write('<td align = "center">' + date.getHours() + '</td>');
                    document.write('</tr>');
    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'Минуты' + '</td>');
                    document.write('<td align = "center">' + date.getMinutes() + '</td>');
                    document.write('</tr>');
    
                    document.write('<tr>');
                    document.write('<td align = "center">' + 'Секунды' + '</td>');
                    document.write('<td align = "center">' + date.getSeconds() + '</td>');
                    document.write('</tr>');
    
            document.write('</table>');
    