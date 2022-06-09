// SILAHKAN HILANGKAN KOMENTAR UNTUK MENGGUNAKAN FUNGSI YANG DIINGINKAN

// // Function Declaration
// function showmassage(name) {
//    alert("hello" + nama);
// }

// showmassage(Hannan);

// Function Expression
// let showmassage = function (name) {
//    alert(`hello ${name}`);
// };

// showmassage("Hannan");

// Arrow Function
// let showmassage2 = (name) => {
//    alert(`hello ${name}`);
// };

// showmassage2("Hannan");

// jika 1 parameter bisa tanpa kurung
// const showmassage1 = (name) => {
//    return `hello ${name}`;
// };
// console.log(showmassage1("Hannan1"));

// Jika 2 parameter wajib pakai kurung
// const showmassage22 = (name, time) => {
//    return `hello ${name}, Good ${time}`;
// };
// console.log(showmassage22("Hannan2", "Night!!"));

// Implisit return
// const showmassage3 = (name) => `hello ${name}`;
// console.log(showmassage3("Hannan3"));

// Tanpa parameter
// const showmassage4 = () => `hello everyone`;
// console.log(showmassage4());

// case

let car = ["Lamborgini", "Ferrari", "BMW"];

// let jmlhuruf = car.map(function (name) {
//    return name.length;
// });

// diubah ke arrow function
// let jmlhuruf = car.map( name => name.length);

// jika ingin dalam bentuk objek
let jmlhuruf = car.map((name) => ({ name: name, jmlhuruf: name.length }));
console.table(jmlhuruf);
