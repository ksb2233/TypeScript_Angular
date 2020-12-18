/**
 * 열거형 (Enums)
 * 문자열 열거형 (String_enums)
 * - 각 멤버는 문자열 리터럴 또는 다른 문자열 열거형의 멤버로 상수를 초기화 해야 한다.
 * - 숫자 열거형 처럼 자동 증가는 하지 않는다.
 */
var Direction;
(function (Direction) {
    Direction["Up2"] = "UP";
    Direction["Down2"] = "DOWN";
    Direction["Left2"] = "LEFT";
    Direction["Right2"] = "RIGHT";
})(Direction || (Direction = {}));
