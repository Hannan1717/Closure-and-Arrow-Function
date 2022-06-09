function init() {
   let name = "Hannan"; // local variable
   function showname() {
      // inner function (closure)
      console.log(name); // akses ke parent variable
   }
   console.dir(showname);
}
init();

// function init() {
//    return function (name) {
//       console.log(name);
//    };
// }

// let callname = init();
// callname("Hannan");
// callname("Fahreza");

// Function Factory

// function sayhello(time) {
//    return function (name) {
//       console.log(`Hello ${name}, Good ${time}!!`);
//    };
// }

// let goodmorning = sayhello("morning");
// let goodevening = sayhello("evening");
// let goodnight = sayhello("night");

// goodnight("Hannan");
// goodmorning("Donny");

let add = (function () {
   let counter = 0;
   return function () {
      return ++counter;
   };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
