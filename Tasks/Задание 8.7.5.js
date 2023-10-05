function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  const numbers = [1,4,3,4,5,3,2,1,6,4,4];
 numbers.sort((a, b) => a - b);
 console.log(unique(numbers)); 