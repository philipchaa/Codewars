// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//p: 
//R:  return all positive numbers
//E:  if we are given a an array of numbers just add all the postive number only [2,-1,3], should return 5
//P: Make a function that takes in a array, filter out all the positive number to add. return the sum.

function positiveSum(arr){
    return arr.filter(x => x>=0).reduce((a,c)=> a+c,0)
}


