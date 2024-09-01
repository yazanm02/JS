

var str1="hello";
var str2="word";
var result = `${str1} ${str2} ` ;
console.log (`${str1} ${str2} `);
console.log(result);
/////////////////////////2222222222222222222222222222222222222222222222222222222222222222222
var  string ="JavaScript";
console.log( string.length);
/////////////////////////////////3333333333333333333333333333333333333333333333333333333
var  string= "Programming";
var n=string[0];
console.log(n);
///////////////////////////44444444444444444444444444444444444444444444444444444444444444
var str = "codeing is fun";
var substring = str.substring(0, 4);
console.log(substring); 
//////////////////////////////////////55555555555555555555555555555555555555555555555555
var str = "cat";
var newStr = str.replace(/a/g, "e");
console.log(newStr);
///////////////////////////666666666666666666666666666666666666666666666666666666666
var string = "javascript" ;
string.toUppercase ;
console.log(string); 
//////////////////////////////////77777777777777777777777777777777777777777777777
var string ="apple,banana,orange"  ;
 var s = string.split(",") ;
console.log(s);
////////////////////////////////////////8888888888888888888888888888888888888888888888
var arr = ["hello", "world"];
var joinedString = arr.join(" ");
console.log(joinedString);
//////////////////////////////////99999999999999999999999999999999999999999999999999999
var str = "      hello world       ";
var trimmedStr = str.trim();

console.log(trimmedStr);
/////////////////////////////////////////////1110010101010101010010100101010101001010101001
var str = "hello world";
var containsWorld = str.includes("world");
console.log(containsWorld); 
/////////////////////////////////////11111111111111111111111111111111111111111111111111111
var str = "hello";
var t = str.split("").reverse().join("");
console.log(t); 
///////////////////////////////////////////////1212121212121212121212121222
var str = "elephaneet";
var count = str.split("e").length-1 ;

console.log(count);
/////////////////////////////////////131311331113311313113133131113313313131
function palindromes(string){
    var r=string.split("").reverse().join("");
    return r;
    }
    console.log(palindromes("yazan"));
    //////////////////////////////////1414141411414141414141444444444444444444444444444
    function uppercase(string){
        var r=string.split(" ");
        for(let i=0;i<=r.length-1;i++){
            var t =r[i].toUpperCase().join(" ");
        }
            return t;
        }
        
        console.log(uppercase("yazan mmm"));
    ///////////////////////////////////////////////////////151515151515151515155555555555
    var num=1234.5678 ;
var n=num.toFixed(2);
console.log(n);
///////////////////////////////////////////////////16161616616166161666161616666666666
var str = "There are 3 apples and 2 oranges";
var numbers = str.match(/\d+/g);

console.log(numbers); 
////////////

function Extractingnumbers(str){
    var add;
     var t=str.split("");
     for(let i=0;i<=t.length-1;i++){
          if(t[i] === typeOf number){
              add+=t[i];
          }
     }
     return add;
 }
 var string="There are 3 apples and 2 oranges";
 console.log(Extractingnumbers(string));
 ////////////////////////////////////////////////177717111777171771711771777777777

function Censoringwords(str){
    
    var s= str.split(" ");
  for(let i=0;i<=s.length-1;i++){
        if(s[i] ===" bad"){
            s[i] ="good";
        }
        
     }
    var d= s.join(" ");
     return d;
 }

var str="This is a good word";
console.log(Censoringwords(str));
/////////////////
var str = "This is a bad word";
var censoredStr = str.replace("bad", "good");

console.log(censoredStr); 
////////////////////////////////////////////18181881818811818818188188888888888888888888888
function Removeduplicate(str){
    var str1="";
    for(let i=0;i<=str.length;i++){
        if(str.charAt[i] === str.char[i+1]){
        continue;
            
        }else{
            var str1 += `${str.charAt[i]}`;
        }
      
    }
      return srt;
} 
var str="aabbc";
console.log(Removeduplicate(str));
//////////////////////////////////191919191919919191919999999999999999999999999999999999999
function sortString(str) {
    return str.split("").sort().join("");
}
var str1="hello";
console.log(sortString(str1));
////////////////////////////////2222200000022222000022220000222200000200022222222222
function anagrams(str1,str2){
    
    str1= str1.split("").sort().join("");
    str2= str1.split("").sort().join("");
    if(str1 === str2){
        return true;
        
    }
    else
    {
        return false;
    }
} 
var str1=  "listen" ;
var str2 =  "silent" ;
console.log(anagrams(str1,str2));
//////////////////////////////////////////2121212122212211112222221111122222222222222222121121212
function reverseWords(str){
    var str1= str.split(" ").reverse().join(" ");
    return str1;
} 
var str="The quick brown fox"; 
console.log( reverseWords(str));
////////////////////////////////////////2222222222222222222222222222222222222222222222222222222222
function longestWord(str){
    var str1 =str.split(" ");
    var s= str1[0]
    for( let i=0;i<=str1.length-1;i++){
        if(s.length <= str1[i].length){
            s=str1[i];
        }
        
    }
    return s;
    
}
var str= "Web development is fascinating";
console.log(longestWord(str));
////////////////////////////////////////////////////232232323232232222233323333333333333333333

function characterFrequency(str) {
    let frequency = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

// Example usage
let input = "mississippi";
console.log(characterFrequency(input));  
// Output: {m: 1, i: 4, s: 4, p: 2}
/////////////////////////////
function CharacterFrequency(str){
    var s =str.split("");
   var r;
    for(let i=0;i<=s.length-1;i++){
         var count=0;
        for(let j=0;j<=s.length-1;j++){
        if(s[i] === s[j+1]){
            count++;
        }
        r +=`${s[i]}=${count} `
        }
    }
       }
       var str="mississippi";
       console.log(CharacterFrequency(str));
       ////////////////////////////////////////////////////222222222222444444444444222224444
       function CharacterFrequency(str){
        var str1=str.split("");
        var str2;
        for(let i=0;i<=str1.length-1;i++){
            switch(str1[i]){
                case a:
                    str1.replace("a",1);
                    break;
                     case e:
                       str1.replace("e",2);
                    break; 
                    case f:
                    str1.replace("f",3);
                    break;
                     case o:
                       str1.replace("0",4);
                    break;
                     case u:
                       str1.replace("u",5);
                    break;
            }
             str1=str1.join("");
        }
        return str1
        
             }
             var str= "Hello World";
             console.log(CharacterFrequency(str));
    ///////////////////////////////////////////////////////////////////







