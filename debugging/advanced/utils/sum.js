function sumArray(array) {
 return array.reduce((accumulator, currentValue) => 
    accumulator + currentValue);
}

module.exports = sumArray;