/**
 * 열거형 (Enums)
 * 런타임에서 열거형 (Enums_at_runtime)
 * - 열거형은 런타임에 존재하는 실제 객체다.
 */
enum E {
    XX, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다.
f(E);
