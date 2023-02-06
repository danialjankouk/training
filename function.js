var sum = function (num1, num2) {
    return num1 * num2;
};
var result = sum(5, 6);
console.log(result);
// name function
function getName(firstName, lastName) {
    return "hello ".concat(firstName, " - ").concat(lastName, " welcome");
}
var myName = getName("fname", "lname");
console.log(myName);
//date function
var getDate = function () {
    return new Date();
};
console.log(getDate().getTime());
//logger
var logger = function (log) {
    console.log(log);
};
logger("do log");
//function type
var func = function (fn) {
    return fn();
};
func(function () {
    console.log("hello func");
});
//object type 
var obj = function (val) {
    return { val: "shit" };
};
