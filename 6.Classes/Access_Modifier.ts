/**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * 기본적으로 공개 (Public by default)
 * - TypeScript 에서는 기본적으로 각 멤버는 public 으로 정의
 * - 명시적으로 public 으로 표시할 수도 있다.
 */
class Animal2 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * ECMAScript 비공개 필드 (ECMAScript_Private_Fields)
 * - JavaScript 런타임에 내장되어 있으며, 각각의 비공개 필드의 격리를 더 잘 보장한다
 */
class Animal3 {
    #name: string;
    constructor(theName: string) { this.#name = theName; }
}
//new Animal3("Cat").#name; // 프로퍼티 '#name'은 비공개 식별자이기 때문에 'Animal' 클래스 외부에선 접근할 수 없습니다.


 /**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * TypeScript의 private 이해하기 (Understanding TypeScript’s private)
 * - 클래스 외부에서 해당 멤버에 접근하지 못하도록 제어하는 방법.
 * - 호환된다고 판단되는 두 개의 타입 중 한 쪽에서 private 멤버를 가지고 있으면, 다른 한 쪽도 무조건 동일한 선언에 private 멤버를 가지고 있어야한다.
 */
class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal4 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal4("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
//animal = employee; // 오류: 'Animal'과 'Employee'은 호환될 수 없음.



 /**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * protected 이해하기 (Understanding protected)
 * - protected 로 선언된 멤버는 파생된 클래스 내에서 접근할 수 있다 (private 와의 차이)
 * - 생성자에 protected 가 붙으면 클래스를 포함하는 클래스 외부에서 인스턴스화 할 수 없지만 확장할 수 있음을 의미한다
 */
class Person2 {
    protected name: string;
    protected constructor(name: string) { this.name = name; }
}

class Employee2 extends Person2 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// 오류
//console.log(howard.name);
