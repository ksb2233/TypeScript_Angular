/**
 * null & undefined
 * null 과 undefined 는 모든 타입의 하위 타입이다.
 * 하지만 --strictNullChecks 를 사용하면 null 과 undefined 는 오직 any 와 각자 자신들 타입에만 할당 가능하다
 */
let u: undefined = undefined;
let n: null = null;
let u2: string = undefined;
let n2: string = null;

console.log(u);
console.log(u2);
console.log(n);
console.log(n2);

