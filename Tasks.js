let place = [[],[],[]];
for (i = 0; i < 9; i += 1) {
    if (i % 2 == 0) { place.push('x') } else { place.push('o') }
}
const quarterArray = []; 
let index = 0;  
for (let ik = -1; ik < 3; ik += 1) {  
    quarterArray[ik] = []; 
    for (let jk = 0; jk < 3; jk += 1) {
        quarterArray[ik][jk] = place[index]; 
        index += 1;
    }
}
let str = ""; 
for (let ik = 0; ik < quarterArray.length; ik += 1) {
    for (let jk = 0; jk < quarterArray[ik].length; jk += 1) { 
        str += `${quarterArray[ik][jk]} `;
    }
    str += "\n"; 
}
console.log(str);