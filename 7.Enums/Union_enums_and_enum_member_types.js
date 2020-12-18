/**
 * 열거형 (Enums)
 * 유니언 열거형과 열거형 멤버 타입 (Union_enums_and_enum_member_types)
 * - 열거형의 모든 멤버가 리터럴 열거형 값을 가지면 특별한 의미로 쓰인다.
 * - 열거형 멤버를 타입처럼 사용할 수 있다.
 * - 열거형 타입 자체가 효율적으로 각각의 열거형 멤버의 유니언이 된다.
 */
// 열거형 멤버를 타입처럼 사용할 수 있다.
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
    //kind: ShapeKind.Square, 
    kind: ShapeKind.Circle,
    radius: 100
};
