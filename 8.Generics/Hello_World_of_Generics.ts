/**
 * 제네릭의 Hello World (Hello_World_of_Generics)
 * - 인수로 무엇이 오던 그대로 반환하는 함수
 */
function identity<T>(arg: T): T {
    return arg;
}
// string 반환
let output1 = identity<string>("myString");
// string 반환
let output1_2 = identity("myString");

console.log(output1);
console.log(output1_2);
