function max (a, b, ...numbers) {
    console.log(numbers);
}

max(3, 6, 1, 32);


/****Math.max ***/

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const arr = Math.max(1, ...arr1, 50, ...arr2);      

console.log(arr);