A = new Array();
                A[0] = 6 * Math.PI * Math.PI + 3 * Math.exp(8);
                A[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
                A[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
                A[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);

            let max = -Infinity;
            let min = Infinity;

            for (i = 0; i < 4; i++) {
                if (max < A[i])
                    max = A[i];
                if (min > A[i])
                    min = A[i];
            }
    
            document.write('<table class="table2">');
                    
                    document.write('<tr>');
                        document.write('<td align = "center" colspan="2">' + A[0] + '</td>');
                    document.write('</tr>');

                    document.write('<tr>');
                        document.write('<td align = "center" colspan="2">' + A[1] + '</td>');
                    document.write('</tr>');

                    document.write('<tr>');
                        document.write('<td align = "center" colspan="2">' + A[2] + '</td>');
                    document.write('</tr>');

                    document.write('<tr col>');
                        document.write('<td align = "center" colspan="2">' + A[3] + '</td>');
                    document.write('</tr>');

                    document.write('<tr>');
                        document.write('<td align = "center">' + 'Max' + '</td>');
                        document.write('<td align = "center">' + max + '</td>');
                    document.write('</tr>');

                    document.write('<tr>');
                        document.write('<td align = "center">' + 'Min' + '</td>');
                        document.write('<td align = "center">' + min + '</td>');
                    document.write('</tr>'); 
    
            document.write('</table>');
    