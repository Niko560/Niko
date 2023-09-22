const text = prompt("Проверка слова на полидромность");
let polindrome = text.toLowerCase() === text.split("").reverse().join("").toLowerCase();
if (polindrome === true) {alert(`Слово ${text} является полиндромом`)} else {alert(`Слово ${text} не является полиндромом`)};