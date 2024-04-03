let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// let newDate= new Date(2023,9,8) for date only
// console.log(newDate.toDateString());

// let time = new Date(2023,8,8,16,41)  for date and time 
// console.log("Time and Date given "+time.toString());

// let time = new Date("1970-01-02")
// // console.log(time.toLocaleString());

// let myTimeStamp= Date.now();
// console.log(myTimeStamp);

// console.log(Math.floor(time.getTime()/1000));

// console.log(myDate.getDay());
// console.log(myDate.getMonth());
//  let hello =`The day is ${myDate.getDay()} and the month is ${myDate.getMonth()}`
//  console.log(hello);

 let nn = myDate.toLocaleString('default',{
    weekday:'long'
 })
 console.log(hnn);