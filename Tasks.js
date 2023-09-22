const name = prompt("Введите ваше имя");
const birthday = prompt("Введите ваш год рождения");
const age = 2023 - birthday;
const ageRemainder = age % 10;
const ageFirst = (age - ageRemainder) / 10;
if (ageRemainder === 1) { alert(`${name}:${ageFirst + "1"}`) }
else if (ageRemainder === 2, 3, 4) { alert(`${name}:${ageFirst + "4"}`) }
else { alert(`${name}:${ageFirst + "7"}`) }