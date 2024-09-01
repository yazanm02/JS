function tellFortune (x,y,z,n) {
    return`You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`;
    
}
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));
//////////////////////////////////////////////////////////////////////////////////////////////2222
function calculateDogAge(age){
    let year=7;
    year*=age;
    return`Your doggie is ${year} years old in dog years!`;

}
console.log(calculateDogAge(2));
//////////////////////////////////////////////////////////////////////////////////////////////33333
function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    let years = maxAge - age;
    let totalAmount = (years * 365 * amountPerDay); 
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
  }
  
  calculateSupply(30, 3);
  ////////////////////////////////////////////////////////////////////////4444444444444444444444
  function greet(name){
    return `hello ${name}`
  }
  console.log( greet("yazan"));
  ///////////////////////////////////////////////////////////////////////555555555555555555
 

function double(x) {
  return 2 * x;
}

function double(7) {/////(x)
  return 2 * 7;    //////////14
}

function double('7') {/////(n)
  return 2 * 'x';////////number(x)
}
///////////////////////////////////////////////////////////////666666666666666666666666666
////fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2(x) {
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}
//////////////////////////////////77777777777777777777777777777777777777777777777777777
function  cube (num){
    return num*num*num;
}
console.log(cube(4));
/////or
function  cube (number){
    let result=1;
   for(let i=1;i<4;i++){
result *=number;
   }
   return result;
}
console.log( cube (4));
///////////////////////////////////////////////////////////8888888888888888888888888888888
function multiply(x,y){
    let result=0;
    for(let i=1;i<=x;i++){

        result+=y;
    }
    return result;

}
console.log(multiply(3,4));
///////////////////////////////////////////////999999999999999999999999
function canIGetADrivingLicense( age){
    let accses=20;
    if(age>=20){
        return`yes you can`
    }
    else
    {
        accses-=age;
        return `please come back after ${accses} years to get one`
    }

}
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
////////////////////////////////////////////////////1000000001111000000000000000100000
function sameLength(x,y){
    if(x.length === y.length){
        return true;
    }else{
return false;
    }
}
console.log(sameLength("tree","clue"));
console.log(sameLength("tree","clu"));
/////////////////////////////////////////////////////////1111111111111111111111111111111111111
function largerNubmer(x,y){
    if(x>=y){
        return x;
    }else{
        return y;
    }
}
console.log( largerNubmer(5,7));
console.log( largerNubmer(10,7));
/////////////////////////////////////////////////////////1212121212121222222222222222222222222222
function smallerNubmer(x,y,a){
    if(x<y && x<a){
        return x; 
    }else if(y<x && y<a){
        return y; 
    }else if(a<x && a<y){
        return a; 
    }
}
console.log(smallerNubmer(8,6,7));
///////////////////////////////////////////1131313131333333333333333333333333333333333333333333
function shorterString(...st){
    let count=st.length-1;
    let ar=[];
    
    for(let i=0;i<st.length;i++)

        if(st[i].length<=st[count].length){
            ar=st.unshift(st[i]);
            count--;
        }else{
            ar=st.push(st[i]);
            count--;
        }
        return ar;

}
console.log(shorterString("air","school","car","by","github"));


///////////////////////////////////////////////////141411414141414141414144444444444444444444
function longerString(x,y,a,b){
    if(x.length>=y.length && x.length>=a.length && x.length>=b.length){
        return x; 
    }else if(y.length>=x.length && y.length>=a.length && y.length>=b.length){
        return y; 
    }else if(a.length>=y.length && a.length>=x.length && a.length>=b.length){
        return a; 
    }else if(b.length>=y.length && b.length>=a.length && b.length>=x.length){
        return b; 
    }
}
console.log(longerString("air","school","car","github"));
////////////////////////////////////////////////1515151515151555555555555555555555555555555555555
function isEven(num){
    if (num%2 === 1){
        return false;
    }else
    {
        return true;
    }
    
}
console.log(isEven(1));
////////////////////////////////////////////161616616166161616616116666666666666666666666666
function positive(num){
    if(num<0)
    { 
        return num*-1;
    }
    return num;
}
console.log(positive(-8));
////////////////////////////or
function positive(num) {
    return Math.abs(num);
}
//////////////////////////////////////////17171171717171717177777777777777777777777777777777
function fullName(fname,lname){
    return `${fname} ${lname}`;
}
console.log(fullName("yazan", "khaled"));
//////////////////////////////////////18181818118188181818818188888888888888888888888888888888
function fullName(fname,lname){
    return `${fname} ${lname}`;
}
console.log(fullName("yazan", "khaled"));
//////////////////////////////////191919199191919199999999999999999999999119919199999999999
////20 20             200              20 222222222222200000
function randomNumber() {
    return Math.random();
}console.log(randomNumber());
//////////////////////////////////////////////////////////////////and 21 randomnumber
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(1, 8));
////////////////////////////////////////////////////////////////////////////////////////////
function scoreInUniversty(grade){
    switch(grade){
        case 1:
    }
    //////////////////////////////////222222222222222222222222222222222222222222222222
    function scoreInUniversity(score) {
        switch (true) {
            case (score >= 95 && score <= 100):
                return `A`;
            case (score >= 85 && score <= 94):
                return `B`;
            case (score >= 70 && score <= 84):
                return `c`;
            case (score >= 50 && score <= 69):
                return `D`;
            case (score >= 0 && score <= 49):
                return `F`;
            default:
            return `enter score btween 0-100`;
            
        }}
        console.log(scoreInUniversity(66));

}
//////////////////////////////////////////////////////////////////////////
function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

const counter = createCounter();
///////////////////////////////////////////////////////////////////////
let fullName=(fname,lname)=> `${fname} ${lname}`;
console.log(fullName("yazan", "khaled")); 
///////////////////////






