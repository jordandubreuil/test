var Mustache = require("mustache");
var RandomNum = require("./randomNumber");

var result = Mustache.render("Hello, {{first}} {{last}} how are you today??",{first:"Jordan", last:"Dubreuil"});

console.log(result);
console.log(RandomNum());
console.log(RandomNum());
console.log(RandomNum());
console.log(RandomNum());

