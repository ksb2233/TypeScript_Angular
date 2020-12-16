/**
 * 함수 (Function)
 * TypeScript 함수는 두 가지 방법으로 만들 수 있다
 * - 기명함수(named function)
 * - 익명 함수(anonymous function)
 */
// 기명함수(named function)
var n1 = 1;
var n3 = 2;
function add(x, y) {
    return x + y;
}
console.log(add(n1, n3));
// 익명 함수(anonymous function)
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(4, 5));
