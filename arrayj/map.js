
let num=[2,5,10];
let newNum=num.map(function(num){
    
    return num**2;
});
console.log(newNum);
// 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
let num=[2,5,10];
let arrstr=num.map(function(num){
    
    return num.toString();
});
console.log(arrstr);
///////////////////////////
function stringItUp(arr) {
    return arr.map(String);
  }
  console.log(stringItUp([2, 5, 100])); 
  ///////333333333333333333333333333333333333333333333333333333333333333333333333
  let arr=["john", "JACOB", "jinGleHeimer", "schmidt"];
  let arr1=arr.map(function (arr){
      return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase();
  }) ;
  console.log(arr1);
  /////////////4444444444444444444444444444444444444444444444444444444444444444444444444444
  function makeStrings(arr) {
    return arr.map(function(person) {
        return person.name;
    });
}
 console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
  ]));  
  /////////////////////////55555555555555555555555555555555555555555555555555
  function getNameAge(arr){
    return arr.map(function(person){
       if (person.age>=18){
           return person.name +" can go to The Matrix";
       }else {
           return person.name + " is under age!";
       }
    });
}


console.log(getNameAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
  ])); 
  ///////////////////////6666666666666666666666666666666666666666666666
  let num=[1,2,3];
let newnum=num.map(function (arr){
    return arr*2;
});
  let num1=[1,-2,-3];
  let newnum1=num1.map(function (arr){
    return arr*2;
});
console.log(newnum);
console.log(newnum1);
////////////////////////////////777777777777777777777777777777777777777777
function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    });
}
    console.log(valTimesIndex([1,2,3]));
    //////////////////////////////////////////////88888888888888888888888888888888888
    function extractKey (arr ,key){
        return arr.map(function(arr1){
            return arr1.push(key)  ;
            
        });
    };
    console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );
    ////////////////////////////////////////////////////999999999999999999999    












