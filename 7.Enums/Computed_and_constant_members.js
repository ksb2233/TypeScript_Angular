/**
 * 열거형 (Enums)
 * 계산된 멤버와 상수 멤버 (Computed_and_constant_members)
 * - 열거형의 멤버는 상수이거나 계산된 값일 수 있다.
 */
// 초기화를 하지 않을 경우, 0 으로 값이 할당 된다
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
console.log(E.X);
// 초기화 값이 없고, 숫자 상수로 초기화된 열거형 멤버 뒤에 따라나오는경우, 앞에 나오는 상수 값에 1씩 증가한 값을 상수로 갖는다.
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
console.log(E1);
console.log(E1.X);
