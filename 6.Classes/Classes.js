/**
 * 클래스 (Classes)
 * - 객제지향적 클래스기반으로 함수를 만들 수 있다.
 * - 프로퍼티, 생성자, 메서드를 가질 수 있다
 * - 클래스의 멤버를 참조할 때 "this." 를 붙여서 참조한다.
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
// new 로 클래스의 인스턴스 생성
var greeter = new Greeter("world");
