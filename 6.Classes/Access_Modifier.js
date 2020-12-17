var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
/**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * 기본적으로 공개 (Public by default)
 * - TypeScript 에서는 기본적으로 각 멤버는 public 으로 정의
 * - 명시적으로 public 으로 표시할 수도 있다.
 */
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
/**
 * Public, private, protected 지정자 (Public, private, and protected modifiers)
 * ECMAScript 비공개 필드 (ECMAScript_Private_Fields)
 * - JavaScript 런타임에 내장되어 있으며, 각각의 비공개 필드의 격리를 더 잘 보장한다
 */
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, theName);
    }
    return Animal3;
}());
_name = new WeakMap();
//new Animal3("Cat").#name; // 프로퍼티 '#name'은 비공개 식별자이기 때문에 'Animal' 클래스 외부에선 접근할 수 없습니다.
/**
* Public, private, protected 지정자 (Public, private, and protected modifiers)
* TypeScript의 private 이해하기 (Understanding TypeScript’s private)
* - 클래스 외부에서 해당 멤버에 접근하지 못하도록 제어하는 방법.
* - 호환된다고 판단되는 두 개의 타입 중 한 쪽에서 private 멤버를 가지고 있으면, 다른 한 쪽도 무조건 동일한 선언에 private 멤버를 가지고 있어야한다.
*/
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal4));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal4("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
//animal = employee; // 오류: 'Animal'과 'Employee'은 호환될 수 없음.
/**
* Public, private, protected 지정자 (Public, private, and protected modifiers)
* protected 이해하기 (Understanding protected)
* - protected 로 선언된 멤버는 파생된 클래스 내에서 접근할 수 있다 (private 와의 차이)
* - 생성자에 protected 가 붙으면 클래스를 포함하는 클래스 외부에서 인스턴스화 할 수 없지만 확장할 수 있음을 의미한다
*/
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person2));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// 오류
//console.log(howard.name);
