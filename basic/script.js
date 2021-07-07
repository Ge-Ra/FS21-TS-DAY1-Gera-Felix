"use strict";
// for (let i = 1; i <= 10; i++) {
// score = i + " x 1 = " + (i * 1) + "<br>";
// document.getElementById("multi").innerHTML += score;
// }
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let val of arr) {
    document.getElementById("multi").innerHTML += "<br>";
    for (let val2 of arr) {
        let multi = val2 * val;
        document.getElementById("multi").innerHTML += `${val2} x ${val} = ${multi} <br><br>`;
    }
}
