/**
 * 인덱서블 타입 (Indexable_Types)
 * 인덱서블 타입은 인덱싱할 때 해당 반환 유형과 함께 객체를 인덱싱하는데 사용할 수 있는타입을 기술하는 인덱스 시그니처를 가지고 있다
 * - 타입을 인덱스로 기술 할 수 있다.
 * - 인덱스서명을 지원하는 타입은 String 과 Number
 * - Number 인덱서에서 반환된 타입은 반드시 String 인덱서에서 반환된 타입의 하위 타입(subtype) 이어야한다.
 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);




