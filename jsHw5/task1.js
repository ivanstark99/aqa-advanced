// Declaration

function getSum(width, height) {
    return width * height
}
console.log(getSum(5, 10))


// Expression 

const getSum1 = function (width, height) {
    return width * height
}

console.log(getSum1(5, 10))

// Arrow function 

const getSum2 = (width, height) => width * height

console.log(getSum2(5, 10))