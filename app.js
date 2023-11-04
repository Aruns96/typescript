var numArray = [];
var stringArray = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printObjVal(obj) {
    console.log(obj.val);
}
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var p = document.getElementById("result");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var n1 = input1.value;
    var n2 = input2.value;
    var ans = add(+n1, +n2);
    numArray.push(ans);
    var stringans = add(n1, n2);
    stringArray.push(stringans);
    printObjVal({ val: ans, timestamp: new Date() });
});
var pr = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("hello");
    }, 1000);
});
pr.then(function (res) {
    console.log(res);
});
