
class Student{
    static count = 0;
    constructor(name,age,phone_number,board){
    this.name = name,
    this.age = age,
    this.board = board,
    this.phone_number=phone_number
    Student.count++;
    }

   checkElegibility(){
    if(this.board>40){
        console.log("eliginle");
    }
    else{
        console.log("not eligible");
    }
   }

   egligible(marks){

    return (age)=>{
     
        if(this.board>marks && this.age>age){
            return true;
        }
        else{
            return false;
        }
    }
   }
}

const ob1 = new Student('yatin',18,1234,95);
const ob2 = new Student('sanu',19,1334,90);
const ob3 = new Student('rishabh',20,14534,85);
const ob4 = new Student('shivansh',17,16734,35);
const ob5 = new Student('vivek',22,19234,30);

var object = [ob1,ob2,ob3,ob4,ob5];
// console.log(Student.count);
// ob5.checkElegibility();

for(let i=0; i<object.length; i++){

var getter = object[i].egligible(20);
var answer = getter(20);
if(answer===true){
    console.log(object[i].name);
}
}
