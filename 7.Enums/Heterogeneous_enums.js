/**
 * 열거형 (Enums)
 * 이종 열거형 (Heterogeneous_enums)
 * - 열거형은 숫자와 문자를 섞어서 사용할 수 있다.(권장하지 않는 방법)
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
