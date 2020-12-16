/**
 * 함수 타입 (Function_Types)
 * 함수의 타이핑 (Typing_the_function)
 * - 각 파라미터와 함수 자신이 반환할 타입으 정해줄 수 있다.
 * - 반환문을 보고 반환 타입을 파악할 수 있으므로 반환타입을 생략할 수 있다.
 */
function add2(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function(x: number, y: number): number { return x + y };



/**
 * 함수 타입 (Function_Types)
 * 함수 타입 작성하기 (Writing the function type)
 * - 매개변수 타입들과 반환 타입 사이에 '=>' 를 써서 반환타입을 분명히 할 수 있다
 * - 함수가 값을 반환하지 않는다면 비워두는 대신 void 를 써서 표현하는것도 가능하다.
 */
let myAdd3: (baseValue: number, increment: number) => number = function(x: number, y: number): number { return x + y; };



/**
 * 함수 타입 (Function_Types)
 * 타입의 추론 (Inferring the types)
 * TypeScript 의 컴파일러는 함수의 한쪽에만 타입이 있더라도 타입을 알아낼 수 있다. 이러한 타입 추런 형태를 "contextual typing" 라 부른다
 */

// myAdd는 전체 함수 타입을 가집니다
let myAdd4 = function(x: number, y: number): number { return  x + y; };

// 매개변수 x 와 y는 number 타입을 가집니다
let myAdd5: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };



/**
 * 함수 타입 (Function_Types)
 * 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
 * - 함수에 주어진 인자의 수는 함수가 기대하는 매개변수의 수와 일치해야한다.
 */
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
// 오류, 너무 적은 매개변수
// let result1 = buildName("Bob");          

// 오류, 너무 많은 매개변수
// let result2 = buildName("Bob", "Adams", "Sr.");  
let result3 = buildName("Bob", "Adams");
console.log(result3);


/**
 * 함수 타입 (Function_Types)
 * 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
 * - 선택적 매개변수를 원한다면 매개변수 이름 끝에 "?" 를 붙임으로써 해결 가능하다.
 */
function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
// 지금은 바르게 동작
// let result4 = buildName2("Bob");      

// 오류, 너무 많은 매개변수
// let result5 = buildName2("Bob", "Adams", "Sr.");  

let result6 = buildName2("Bob", "Adams");
console.log(result6);



/**
 * 함수 타입 (Function_Types)
 * 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
 * - 값을 제공하지 않거나 undefined 일 때 할당될 매개변수의 값을 정해놓을 수도 있다.
 */
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
// 올바르게 동작, "Bob Smith" 반환
// let result7 = buildName3("Bob");             
// 여전히 동작, 역시 "Bob Smith" 반환
// let result8 = buildName3("Bob", undefined);       
// 오류, 너무 많은 매개변수
// let result9 = buildName3("Bob", "Adams", "Sr.");  
let result10 = buildName3("Bob", "Adams");
console.log(result10);



/**
 * 함수 타입 (Function_Types)
 * 나머지 매개변수 (Rest Parameters)
 * - TypeScript 에서는 인자들을 하나의 변수로 모을 수 있다
 * - 'arguments' 라는 변수를 사용해 직접 인자를 가지고 작업할 수 있다.
 */
function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);



/**
 * 함수 타입 (Function_Types)
 * 나머지 매개변수 (Rest Parameters)
 * - "..." 부호 뒤의 이름으로 전달된 인자 배열을 빌드하여 함수에서 사용할 수 있도록 할 수 있다.
 * - 생략 부호는 나머지 매개변수가 있는 함수의 타입에도 사용할 수 있다.
 */
function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName5;