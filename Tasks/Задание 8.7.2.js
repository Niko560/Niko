const calculator = {
    apply: function calculate(a, b, operator) {
        if (operator === '+') {
            return a + b;
        } else if (operator === '-') {
            return a - b;
        } else if (operator === '*') {
            return a * b;
        } else if (operator === '/') {
            return a / b;
        }
        return 0;
    }
    }
    let result = calculator.apply(2, 3, '+');
    console.log(result);
    