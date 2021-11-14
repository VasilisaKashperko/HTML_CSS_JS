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