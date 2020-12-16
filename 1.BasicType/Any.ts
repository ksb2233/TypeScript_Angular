/**
 * Any Type
 * 알지 못하는 타입을 표현 해야 하거나, 타입의 일부만 알고 전체는 알지 못할 때 사용
 */
let notSure: any = 4;
notSure = false;
notSure = "maybe a string instead";

console.log(notSure);

let list3: any[] = [1, true, "free"];
console.log(list3);

list3[1] = 100;
console.log(list3);
