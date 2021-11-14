printy = form => {
    let ch1 = document.forms["students"].disiplines1.checked;
    let ch2 = document.forms["students"].disiplines2.checked;
    let ch3 = document.forms["students"].disiplines3.checked;
    let ch4 = document.forms["students"].disiplines4.checked;
    let ch5 = document.forms["students"].disiplines5.checked;
    document.write(`<link rel="stylesheet" href = "collateral.css">
    <div class='divi'><div class='divfac' align='center'>${document.forms["students"].naming.value}</div>
    <div class='divinf'>
    <span class="tab">Уважаемая</span> ${document.getElementById("Input2").value} ${document.getElementById("Input1").value},
    вы приглашаетесь на ${document.forms["students"].course.value} бесплатную(-ые) процедуру(-ы) в спа-салон "Райский уголок" в ${document.forms["students"].day.value}
    в 19:00 на выбор:<br/>
    <ul type="disc">`);
        if(ch1){
            document.write(`<li>Шоколадное обертывание</li>`);}
        if(ch2){
            document.write(`<li>Стоун-терапия</li>`);}
        if(ch3){
            document.write(`<li>Пилинг тела</li>`);}
        if(ch4){
            document.write(`<li>Лечебная ванна</li>`);}  
        if(ch5){
            document.write(`<li>Фитобочка</li>`);}      
        if(!ch1 && !ch2 && !ch3 && !ch4 && !ch5){        
            document.write(`<li>Вы уже получили бесплатные процедуры!</li>`);} 

    window1 = window.document.body;
    document.write(`</ul></div><div class='dimg'><img src='4.png' width='230px'/></div>`);
    y = window.confirm('Начать печать формы?');
        if (y){
            hiPrint = () =>{
                window.print();
            }
            setTimeout(hiPrint, 1000);
        }
}
function funform2() {
    let c1 = document.forms["students"].disiplines1.checked;
    let c2 = document.forms["students"].disiplines2.checked;
    let c3 = document.forms["students"].disiplines3.checked;
    let c4 = document.forms["students"].disiplines4.checked;
    let c5 = document.forms["students"].disiplines5.checked;
    document.write(`<link rel="stylesheet" href = "main.css"><form> Вторая форма <ul><select>`);
    if (c1) document.write("<option>Шоколадное обертывание</option>"); 
    if (c2) document.write("<option>Стоун-терапия</option>");
    if (c3) document.write("<option>Пилинг тела</option>");
    if (c4) document.write("<option>Лечебная ванна</option>");
    if (c5) document.write("<option>Фитобочка</option>");
    document.write("</select></ul></form>");
}