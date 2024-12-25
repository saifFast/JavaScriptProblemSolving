// var array = [1,2,3,1,2,3];
// console.log(array);

// //console.log([...new Set(array)]);

// var result = [];

// array.forEach(x=> {
//     if(!result.includes(x))
//         result.push(x);
// })

// console.log([...new Set(array)]);


// //Remove Duplicates From Array

// var array = [1,2,3,1,2,3];
// console.log('Input1:' + array);

// var result = [...new Set(array)];
// console.log('Output1:' + result);

// var array2 = [4,5,6,4,5,6];
// console.log('Input2:' + array2);

// var result2 = [];

// var result = array2.forEach(x=> 
// {
//     if(!result2.includes(x))
//         result2.push(x);
// }
// )

// console.log('Output2: ' + result2);


//Find the Second Largest Number in an Array

function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    
    return secondMax === -Infinity ? null : secondMax;
}

// Test cases
console.log(secondLargest([10, 20, 5, 8, 15]));  // 15
console.log(secondLargest([1, 1, 1]));           // null
console.log(secondLargest([100, 90, 95]));       // 95

