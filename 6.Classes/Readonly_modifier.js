/**
 * 읽기전용 지정자 (Readonly_modifier)
 * - "readonly" 키워드를 사용하면 프로퍼티를 읽기전용으로 만들 수 있다.
 * - 읽기전용 프로퍼티들은 선언 또는 생성자에서 초기화 해야한다.
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// 오류, name 은 읽기전용이기 때문
// dad.name = "Man with the 3-piece suit"; 
/**
* 읽기전용 지정자 (Readonly_modifier)
* 매개변수 프로퍼티 (Parameter_properties)
* - 매개변수 프로퍼티를 사용하면 한 곳에서 멤버를 만들고 초기화할 수 있다.
* - 매개변수 프로퍼티는 접근 지정자나 "readonly" 또는 둘 모두를 생성자 매개변수에 접두어로 붙여 선언한다.
* - private 를 사용하면 비공개 멤버를 선언하고 초기화한다. (public, protected, readonly 도 동일하게 작용)
*/
var Octopus2 = /** @class */ (function () {
    function Octopus2(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus2;
}());
