/**
 * 제네릭 타입 변수 작업 (Working_with_Generic_Type_Variables)
 * - 제네릭 함수를 만들 때, 컴파일러는 함수 본문에 제네릭 타입화된 매개변수를 사용하도록 강요한다.
 *   (매개변수들은 실제로 "any" 나 모든 타입이 될 수 있는 것처럼 취급할 수 있다)
 */
function loggingIdentity(arg) {
    // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
    console.log(arg.length);
    return arg;
}
var array = ["a", "b", "c"];
var output2 = loggingIdentity(array);
console.log(output2);
