const mySym = Symbol("mykey");

let obj={
    name:"tanishq",
    "full name":"Tanishq Sharma",
    age:22,
    degree:"MCA",
    [mySym]:"mykey1"
}

// console.log(obj["name"]);
// console.log(obj["degree"]);
// console.log(obj["full name"]);    can not access the double quoted string with dot
// console.log(obj);


obj.greeting= function(){
    console.log("Hello betaa");
}

obj.greeting2=function(){
    console.log(`Hello papa ${this.name}`);
}

console.log(obj.greeting());
console.log(obj);
console.log(obj.greeting2());