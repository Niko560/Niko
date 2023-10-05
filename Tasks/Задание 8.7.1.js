const person = {
    name: 'Иван',
    age: '22',
    call: function printInfo() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
let result = person.call();
console.log(result);
