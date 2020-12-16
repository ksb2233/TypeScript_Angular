/**
 * 클래스를 확장한 인터페이스 (Interfaces_Extending_Classes)
 * 인터페이스 타입이 클래스 타입을 확장하면, 클래스의 멤버는 상속받지만 구현은 상속받지 않는다.
 */
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     private state: any;
//     select() { }
// }

// class Location {

// }