const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
 let arrValues = [];
obj.arr = obj.arr.toString();
 arrValues = Object.values(obj);
console.log(arrValues);