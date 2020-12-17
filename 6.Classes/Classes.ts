/**
 * 클래스 (Classes)
 * - 객제지향적 클래스기반으로 함수를 만들 수 있다.
 * - 프로퍼티, 생성자, 메서드를 가질 수 있다
 * - 클래스의 멤버를 참조할 때 "this." 를 붙여서 참조한다.
 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
// new 로 클래스의 인스턴스 생성
let greeter = new Greeter("world");