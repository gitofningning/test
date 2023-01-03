const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const { name,hobby:[h1,h2,h3],address:{home:HOME},title:[,{year}] } = stu; 
function sumTo(n){
    let sum=0;
    for(i=1;i<=n;i++)
    sum+=i;
    return sum;
}
function sumTo1(n){
    if(n==1)
        return n;
    else
        return n+sumTo1(n-1);
}

console.log(name)  // MING
console.log(h1,h2,h3)  // play run sing
console.log(HOME)  // HENAN，这里的HOME就是大写哈
console.log(year)  // 2022
console.log(sumTo1(5))
console.log(sumTo(5))

