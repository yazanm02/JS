

let input= prompt("enter your mounth");
switch(input){
    case 1:
        console.log("January")
        break;
         case 2:
        console.log("February")
        break;
         case 3:
        console.log("March")
        break;
         case 4:
        console.log("April")
        break;
         case 5:
        console.log("May")
        break;
         case 6:
        console.log("June")
        break;
         case 7:
        console.log("July")
        break;
         case 8:
        console.log("August")
        break;
         case 9:
        console.log("September")
        break;
         case 10:
        console.log("October")
        break;
         case 11:
        console.log("November")
        break;
         case 12:
        console.log("December")
        break;
        default:
        console.log("enter number between 1-12");
    
}
///////////////////////////////////task2 b
let number = 1;
for (let i = 1; i <= 4; i++) {
    let row = ''; 
    for (let j = 1; j <= i; j++) {
        row += number + ' '; 
        number++; 
    }
    console.log(row); 
}
///////////////////////////////////////////////////
let j;
for(let i=0;i<=1000;i++){
    if(i%13 === 0)
    {
      j = i;  
        console.log(j);
    }
    
}
/////////////////////////////////////////////////////
function multiplication2(a, b) {
    let result=0;
    if( a<0 || b<0){
        a*=-1;
        b*=-1;
    }
    for(let i=0;i<b;i++ ){
        result+=a;
    }
        return result;
    }
    console.log( multiplication2(8, -7));
    ////////////////////////////////////////////////
    function triangleArea(base, height) {
        if (base < 0 || height < 0) {
           console.log("Base and height must be not negative.");
        }
        return 0.5 * base * height;
    }
    //////////////////////////////////
    function isPandigital(num) {
        // Convert the number to a string and then to a set of characters
        const numStr = num.toString();
        
       for(let i=0 ; i<num ;i++){
           for(let t=0;t<9;t++){
          if(  numStr.charAt[t] === t) {
          return true; 
          else{
          return false;
          }
               
          }
               
           }
             
           }
           ///////////////////////////////////
           function getDrinkPrice(drink) {
            let price;
            
            switch (drink.toLowerCase()) {
                case 'banana':
                    price = 20;
                    break;
                case 'apple':
                    price = 15;
                    break;
                case 'orange':
                    price = 18;
                    break;
               
                default:
                    return `Sorry, we don't have a ${drink}.`;
            }
            
            return `The price of a ${drink} drink is ${price} dollars`;
        }
        ////////////////////////////////////////////
        function fullName(firstName, lastName) {
    
            return `${firstName} ${lastName}`;
        }
        //////////////fffffunnn
        function tellFortune (x,y,z,n) {
            return`You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`;
            
        }
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));