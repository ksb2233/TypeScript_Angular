/**
 * 열거형 (Enums)
 * 역 매핑 (Reverse_mappings)
 * - 숫자 열거형 멤버는 프로퍼티 이름을 가진 객체를 생성하는 것 외에 열거형 값에서 열거형 이름으로 역 매핑을 받는다
 */
var Enum;
(function (Enum) {
    Enum[Enum["A8"] = 0] = "A8";
})(Enum || (Enum = {}));
var a = Enum.A8;
var nameOfA = Enum[a]; // "A"