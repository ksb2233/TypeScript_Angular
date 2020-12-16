/**
 * 함수 타입 (Function_Types)
 * 함수의 반환 타입을 정의할 수 있음.
 * 함수의 반환 타입이 인터페이스에 정의된 반환 타입과 일치하지 않을 경우 에러를 발생
 */
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
