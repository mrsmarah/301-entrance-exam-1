//​Write a function named 'greaterThan' that will take an array of numbers and a number as parameters then return the number of numbers that are greater than that number in the array

// example_1: greaterThan([4,2,3,1],3) => 1
// example_2: greaterThan([2,8,-1],8) => 0
// ​

// once you finish, do the following:
// git push origin q1-solution
// update your master branch with q1 solution code​​

`use strict`;
var arrayOfNum=[4,2,3,1];
var compareNum= 3;

function greaterThan(randomArr,randomNum){

    var counter =0;
    // console.log(counter);
    for (var i=0 ; i<randomArr.length ;i++){
        if (randomArr[i] > randomNum){
             var counter = counter+1
        }
        // console.log(counter);

    }
    return counter;

}
greaterThan([4,2,3,1,5,7,8,9],3);

