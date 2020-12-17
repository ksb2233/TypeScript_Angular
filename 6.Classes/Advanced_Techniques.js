/**
 * 고급 기법 (Advanced_Techniques)
 * 생성자 함수 (Constructor_functions)
 * - TypeScript 에서는 클래스를 선언하면 실제로 여러개의 선언이 동시에 생성된다.
 * - 클래스의 인스턴스 타입, 생성자 함수
 */
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = "Hello, there";
    return Greeter2;
}());
var greeter1;
greeter1 = new Greeter2();
console.log(greeter1.greet()); // "Hello, there"
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
/**
 * 고급 기법 (Advanced_Techniques)
 * 인터페이스로써 클래스 사용하기 (Using_a_class_as_an_interface)
 * - 클래스는 타입을 생성하기 때문에 인터페이스를 사용할 수 있는 동일한 위치에서 사용할 수 있다.
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
