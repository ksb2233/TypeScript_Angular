/**
 * 접근자 (Accessors)
 * - 객체의 멤버에 대한 접근방식으로 getters/setters 를 사용한다.
 */
var fullNameMaxLength = 10;
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}
