// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// Correct the syntax error
 let are=[ 1,7 , 9,  45, ];

let xrrs= ["Str", "alex","moh"];

 let dwe=["the","fox", "over" ];
 ////////////////////////////////////////222222222222222222222222222222222222222222222222222
 var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Watermelon"));
///////////////////////////////////////////////33333333333333333333333333333333333333333333333
var favoriteFood = ["Pizza", "Sushi", "Burgers", "Tacos", "Pasta"];
var favoriteSport = ["Soccer", "Basketball", "Tennis"];
var favoriteMovie = ["Inception", "The Matrix", "The Shawshank Redemption", "Interstellar"];
//////4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
function firstOfArray(arr){
    return arr[0];
}
console.log(firstOfArray([32,23,23]));
//////////////////////////////55555555555555555555555555555555555555555555555555555555555555555
function lastOfArray(arr){
    return arr[arr.length-1];
}
lastOfArray([1,4,5]) //5
 lastOfArray(["t","u","g","x"]) //=> "x"
 ////////////////////////////////////////////6666666666666666666666666666666666666666666666666666
 var array2 = [5,9,-7,3.5];
array2.push(7);
console.log(array2); 
array2.unshift(7);
console.log(array2);
array2.pop();
console.log(array2);
array2.shift();
console.log(array2);
////////////////////////////////////7777777777777777777777777777777777777777777
// function middleOfArray(arr){
//     if(middleOfArray.length-1 %2 === 0 ){
//     return ${ arr[Math.Floor((arr.length-1) /2)]}`and`${arr[Math.Floor (arr.length /2)]};
//     }else{
//        return arr [arr.length-1 /2];
//     }
    
// }
//     cosole.log(middleOfArray([1,4,5]));
//     console.log(middleOfArray(["t","u","g","x"]));
function middleOfArray(arr) {
    const length = arr.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        // Array has an even number of elements
        return `${arr[middleIndex - 1]} and ${arr[middleIndex]}`;
    } else {
        // Array has an odd number of elements
        return arr[middleIndex];
    }
}

// Examples
console.log(middleOfArray([1, 4, 5]));           // Output: 4
console.log(middleOfArray(["t", "u", "g", "x"])); 
/////////////////////////////////////////////8888888888888888888888888888888888888888888888888
var animals = ['cat', 'ele', 'bird'];
console.log(animals);
 animals =  ['zebra', 'elephant'];
 console.log(animals);
 ///////////////////////

 var nums= [1,2,3,8,9];
 console.log(nums);
 nums[0]=44;
 nums[1]=44;
 nums[2]=44;
 nums[3]=44;
 nums[4]=44;
 nums[5]=44;
 nums[6]=88;
 
 console.log(nums);
///////////////////////////////////////999999999999999999999999999999999999999999999999999999
function indexOfArray(nums,n){
    return nums[n]; 
    
 }
 
 console.log( indexOfArray(  nums= [1,2,3,8,9],3))// => 8
 console.log( indexOfArray(  nums= [1,2,3,8,9],1))// => 2
////////////////////101101010101001010111010101000000000000111111111111100000000001000
function arrayExceptLast(arr){
    arr.pop();   
    return arr;
  }
  
  console.log(arrayExceptLast(nums= [1,2,3,8,9]));
/////////////////////111111111111111111111111111111111111111111111111111111111111111111111  
function addToEnd(arr,n){
    arr.pop();
    arr.push(n);
    return arr;
}
var nums= [1,2,3,8,9]
 console.log(addToEnd(nums,55)); 
 ////////////////////////////////////112121122121212212121222222222222222222
 function  shorterInArray(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].length<= arr[i+1].length){
            return arr[i];
        }
    }
    
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log( shorterInArray(strings));
////////////////////////////////////

function  shorterInArray(arr){
    let result ;
   for(var i=0;i<arr.length-1;i++){
       for(let j=0;j<arr.length-1;j++){
       if(arr[i].length<arr[j+1]){
         result=  arr[i];
       }
       }
   }
   return arr[i];
    
}
   
var strings= ["aleedfdfdwwerr","mererrecer","madererasa","rareershed2","emattred"];
console.log( shorterInArray(strings));
/////or
function shorterInArray(arr) {
    let shortest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }

    return shortest;
}
function shorterInArray(arr) {
    let shortest = arr[0];
let i = 1;
    while ( i< arr.length) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
        i++;
    }

    return shortest;
}

////////////////////////////////////11118181818188181818188181888888888888888888888888888
function sumArray(arr){
    var sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
var nums= [1,2,3,8,9]

console.log(sumArray(nums));
////////////////////////////
function sumArray(arr){
    var sum=0;
    let i=0;
    while (i<arr.length){
        sum+=arr[i];
        i++;
    }
    
    return sum;
}
var nums= [1,2,3,8,9]

console.log(sumArray(nums));
//////////////////////////////131313133131313131311313333333333333333333333333333333333333
function minInArray(arr){
    let n = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]<n){
            n=arr[i];
        }
        
    }
    return n;
    
}
var nums= [1,2,3,8,9]

console.log(minInArray(nums) );
////////////////////////
function minInArray(arr){
    let n = arr[0];
    let i=0;
    while(i<=arr.length){
        if(arr[i]<n){
            n=arr[i];
        }
        i++;
    }
    return n;
    
}
var nums= [1,2,3,8,9]

console.log(minInArray(nums) );
///////////////////////////////////////////////////141414141414141
function removeFromArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            arr.splice(i, 1);
            break; // Exit the loop once the element is removed
        }
    }
    return arr;
}

var nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 8));
/////////////////
function removeFromArray(arr, element) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] === element) {
            arr.splice(i, 1);
            break; // Exit the loop once the element is removed
        }
        i++;
    }
    return arr;
}

var nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 8));
/////////////////1515151551515515151555555555555555555555555555555555555555
function oddArray(arr){
    let arr2=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] % 2 !== 0)
        {
            arr2=arr.push(arr[i]);
        }
        
    }
    return arr2;
}
var nums= [1,2,3,8,9];
console.log(oddArray(nums));
/////////////////////////////1166161616166161611661666666666666
function aveArray(arr){
    let sum=0;
    for(let i=0;i<=arr.length-1;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
var nums= [1,2,3,8,9];
console.log(aveArray(nums));
///////////////////////1717177777777777777777777777777777777777777777777
function repeatChar(str,st){
    var count=0;
    for(let i=0;i<= str.length-1;i++){
        if(str[i] === st){
            count++;
        }
    }
    return count;
}

var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a") );
//////////////////////////////////////111111111119999999999999999111111999999999999
function repeatChar(str,st){
    var count=0;
    for(let i=0;i<= str.length-1;i++){
        if(str[i] === st){
            count++;
        }
    }
    return count;
}

var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a") );

///////////////////////
function repeatChar(str,st){
    var count=0;
    let i=0;
    while(i<= str.length-1){
        if(str[i] === st){
            count++;
        }
        i++
    }
    return count;
}

var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a") );
//////////////////////////////////////////2000000000000022222222222200000000000000000000000
function evenIndexOddLength(arr){
    var arr1=[];
    for(let i=0;i<= arr.length-1;i++){
        if(arr[i].length % 2 !== 0){
            arr1+=` ${arr[i]} `;
        }
    }
    return arr1;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings));
///////////////////////222111211122222111111111122222222222222211111111111222211
function powerElementIndex(arr){
    
    var n= arr.length-1
    
     return arr[arr.length-1] ** n;
 }
 
 var nums= [44, 5, 4, 3, 2, 10];
 console.log(powerElementIndex(nums) );
 ////////////////////////////////////////2222222222222222222222222/222222222222222222222/2
 function evenNumberEvenIndex(arr){
    var arr1=[];
  for (let i=0; arr.length-1;i++){
  if( arr[i] % 2 ===0 ){
      arr1 +=` ${arr[i]} `;
      
  }
  }
  return arr1;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log( evenNumberEvenIndex(nums));









