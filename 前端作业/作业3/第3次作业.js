// function pus(arr1,addl)
// {
// let oldl=arr1.length;
// let arr2=new Array(old1+addl);
// arr2=arr1;
// for (let i = arr1.length; i < arr2.length+1; i++) 
// {
//     arr2[i] =prompt();    
// }
// return arr2;
// }
// let arr1=[1];
// console.pus(arr1,2);
let obj1= new Object();
obj1.name="luck";
obj1.age="996";
console.log(obj1);

let obj2 ={
    name:'hello',
    age:'world'
}
console.log(obj2);
function Person(name,age)
{
    this.name = name;
    this.age = age;
    this.sayname = () => {
        console.log(this.name)
    }
}
const p1=new Person('libai',20)