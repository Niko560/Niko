let person = { fullname: 'Bob' };

function setFullName() {
    person.fullname ="John Smith";
}

let result = setFullName.bind(person);
result(); 
console.log(person.fullname); 