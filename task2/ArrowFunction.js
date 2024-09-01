let  tellFortune = (x,y,z,n)=> `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`;
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));
/////////////////2222222222222222222222222222222222222222222222222222
let calculateDogAge = (age) => {
    let year=7;
    year*=age;
    return`Your doggie is ${year} years old in dog years!`;

}
console.log(calculateDogAge(2));
//////////////////////////////3333333333333333333333333333333333333333333333
let calculateSupply=(age, amountPerDay) => {
    const maxAge = 100;
    let years = maxAge - age;
    let totalAmount = (years * 365 * amountPerDay); 
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
  }
  
  calculateSupply(30, 3);
/////////////////////44444444444444444444444444444444444444444444
let greet = (name) => `hello ${name}`
console.log( greet("yazan"));
////////////////////////555555555555555555555555555555555555555555555555555

let cube = (number)=>{
    let result=1;
   for(let i=1;i<4;i++){
result *=number;
   }
   return result;
}
console.log( cube (4));
////////
let cube = (num) => num*num*num;
console.log(cube(4));
//////////////////////////////////////666666666666666666666666666666666666666
let multiply=(x,y)=>{
    let result=0;
    for(let i=1;i<=x;i++){

        result+=y;
    }
    return result;

}
console.log(multiply(3,4));
///////////////////////////777777777777777777777777777777777777777777777
let canIGetADrivingLicense=( age)=>{
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
/////////////////////////////////////////////////////////////////888888888888888888888888888
let sameLength=(x,y)=>{
    if(x.length === y.length){
        return true;
    }else{
return false;
    }
}
console.log(sameLength("tree","clue"));
console.log(sameLength("tree","clu"));
///////////////////////////99999999999999999999999999999999999999999999999999999999999
let largerNubmer =(x,y)=>{
    if(x>=y){
        return x;
    }else{
        return y;
    }
}
console.log( largerNubmer(5,7));
console.log( largerNubmer(10,7));
/////////////////////////////101010100100101010000
let smallerNubmer =(x,y,a)=>{
    if(x<y && x<a){
        return x; 
    }else if(y<x && y<a){
        return y; 
    }else if(a<x && a<y){
        return a; 
    }
}
console.log(smallerNubmer(8,6,7));
//////////////////1111111111111111111111111111111111111111111111111
let shorterString =(...st)=>{
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
///////////////////////////121221121211212112111222122121211222121221212112
let longerString=(x,y,a,b)=>{
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
//////////////////////////////1313131313131313133333333333333333333333333
let isEven=(num)=>{
    if (num%2 === 1){
        return false;
    }else
    {
        return true;
    }
    
}
console.log(isEven(1));
////////////////////////14141414141414141414141414144444444444444444444444444444
let positive=(num)=>{
    if(num<0)
    { 
        return num*-1;
    }
    return num;
}
console.log(positive(-8));
//////////////////////////////1515515115151515155511511555115155
let fullName=(fname,lname)=> `${fname} ${lname}`;
console.log(fullName("yazan", "khaled")); 
///////////////////161116161111611161611611161116
let isEven =(num)=>{
    if (num%2 === 1){
        return false;
    }else
    {
        return true;
    }
    
}
console.log(isEven(1));
////////////////////////////////////171717171771717717717171771777777777777
let positive =(num)=>{
    if(num<0)
    { 
        return num*-1;
    }
    return num;
}
console.log(positive(-8));
////////////////////////////1818188181818818111111118888888888888
let fullName =(fname,lname)=>`${fname} ${lname}`;
console.log(fullName("yazan", "khaled"));
///////////////////////////////117771717717717171771717177171771
let fullName=(fname,lname)=> `${fname} ${lname}`;
console.log(fullName("yazan", "khaled"));
///////////////////////////////119119199191991919911



