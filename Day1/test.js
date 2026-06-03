


console.log("started")
const res =  await fetch("https://api.escuelajs.co/api/v1/users");


const data  =  await res.json();
console.log("ended")



console.log(data)