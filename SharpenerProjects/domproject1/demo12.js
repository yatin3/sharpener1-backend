// var myFunction = function(a=5){
//     console.log(a);
// }

// myFunction(4);

// var ob1 = {
//     num:2
// };

// var ob2={
//     num:5
// };

// var addToThis = function(a){
//     return this.num + a ;
// }

// console.log(addToThis.call(ob1,4));

// var arr = [1,2,3,4];

// var helper = function(a,b,c,d){
//     return this.num+a+b+c+d;
// }


// console.log(helper.apply(ob2,arr));

// var obj = {
//     num:2
// };

// var helper1 = function(a,b,c){
//     return this.num+a+b+c;
// }

// var boun = helper1.bind(obj);

// console.dir(boun(1,2,3));

// var Student = {
//     age:20
// };

// var helper3 = function(){
//     console.log(this.age);
// }

// var bound1 = helper3.bind(Student);
// bound1();

// let multiply = function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(2,5);

// let multiplyByThree = multiply.bind(this);
// multiplyByThree(3,5);

let multiplyHelper = function(x){
    
    return function support(y){
        console.log(x*y);
    }
}

let show = multiplyHelper(3);
show(5);