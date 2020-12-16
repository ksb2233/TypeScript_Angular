/**
 * Type assertions
 * 실제 타입을 구체적으로 단언하는것으로 두 가지 문법이 있다
 * - angle-bracket 문법
 * - as 문법
 * TypeScript 를 JSX 와 함께 사용할 시에는 as 문법만 허용
 */
let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

let strLength3: number = (someValue).length;

console.log(strLength1);
console.log(strLength2);
console.log(strLength3);
