/**
 * 제네릭 클래스 (Generic Classes)
 * - 제네릭 클래스와 제네릭 인터페이스는 형태가 비슷하다.
 * - 제네릭 클래스는 클래스 이름 뒤에 "<>" 의 안에 제네릭 타입 매개변수 목록을 가진다
 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };