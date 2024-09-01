function doubleValues (arr){
    var result=[];
    arr.forEach(function(value){
        result.push(value*2);
    });
    return result;
}
console.log(doubleValues([1,2,3]) );
//////////////////////222222222222222222222222222222222222222222222222222222222
function onlyEvenValues (arr){
    var result=[];
    arr.forEach(function(value){
       if(value % 2 === 0){
           result.push(value);
       } 
       return result;
    });
    
}
console.log(  onlyEvenValues([1,2,3]) );
/////////////////////33333333333333333333333333333333333333
function showFirstAndLast(arr){
    var result=[];
    arr.forEach(function(value){
        result.push(value[0] + value[value.length-1]);
    })
    return result;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
//////////////////4444444444444444444444444444444
function addKeyAndValue(arr, att, value) {
    arr.forEach(function(obj) {
        obj[att] = value;
    });
    return arr;
}
console.log(addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'title',
    'instructor'));
    //////////////////////55555555555555555555555555555555555555555
    
