const age = prompt(`Ваш возраст`);
if (age < 18) { alert(`Кредит недоступен`) } else if
    (18 <= age && age <= 21) { alert(`Вам доступно до 50.000`) }
else if
    (22 <= age && age <= 35) { alert(`Вам доступно до 400.000`) }
else if
    (36 <= age && age <= 65) { alert(`Вам доступно до 1.000.000`) }
else { alert(`Вам кредит не нужен`) }