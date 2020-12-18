/**
 * 제네릭 제약조건 (Generic_Constraints)
 * - 특정 타입들로만 동작하는 제네릭 함수를 만들 수 있다.
 * -
 */
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    // length 프로퍼티의 존재를 알기 때문에 오류가 발생하지 않는다.
    console.log(arg.length);  
    return arg;
}
// Number는 .length 프로퍼티가 없기때문에 오류 발생
// loggingIdentity(3);  

// 필요한 프로퍼티들이 있는 타입의 값을 전달해야한다.
loggingIdentity2({length: 10, value: 3});