/**
 * 고급 기법 (Advanced_Techniques)
 * 생성자 함수 (Constructor_functions)
 */
class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"



/**
 * 고급 기법 (Advanced_Techniques)
 * 인터페이스로써 클래스 사용하기 (Using_a_class_as_an_interface)
 */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};