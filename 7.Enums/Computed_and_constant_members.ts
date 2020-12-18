/**
 * 열거형 (Enums)
 * 계산된 멤버와 상수 멤버 (Computed_and_constant_members)
 * - 열거형의 멤버는 상수이거나 계산된 값일 수 있다.
 */

// 초기화를 하지 않을 경우, 0 으로 값이 할당 된다
enum E { X }
console.log(E.X);

// 초기화 값이 없고, 숫자 상수로 초기화된 열거형 멤버 뒤에 따라나오는경우, 앞에 나오는 상수 값에 1씩 증가한 값을 상수로 갖는다.
enum E1 { X, Y, Z }
enum E2 {
    A = 1, B, C
}
console.log(E1);
console.log(E1.X);

