const arr = [3,1,5,8];

// for (let i = 0; i < arr.length; i++){             //loop from start to end
//     console.log(arr[i]);
// }

// for (let i = arr.length - 1; i > -1; i--){            //loop from end to start
//     console.log(arr[i]);
// }

// let sum = 0 
// for(let i = 0; i < arr.length; i++){                  // adding all numbers inside array by loop
//     sum = sum + arr[i]
// }
// console.log(sum)


for(let i = 10; i >= 0; i--){
    if (i === 0){
        console.log('Blast Off!!')
        return
    }
    console.log(i);
}
