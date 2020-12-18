/**
 * 제네릭 타입 (Generic_Types)
 */
// 제네릭 함수의 타입은 비-제네릭 함수의 타입과 비슷하다
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
console.log(myIdentity);
// 타입 변수의 수, 타입 변수가 사용되는 방식에 따라 타입의 제네릭 타입 매개변수에 다른 이름을 사용할 수 있다.
function identity4(arg) {
    return arg;
}
var myIdentity2 = identity4;
console.log(myIdentity2);
// 제네릭 타입을 객체 리터럴 타입의 함수 호출 시그니처로 작성할 수도 있다.
function identity5(arg) {
    return arg;
}
var myIdentity3 = identity5;
console.log(myIdentity3);
