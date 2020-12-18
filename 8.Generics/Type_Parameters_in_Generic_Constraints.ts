/**
 * 제네릭 제약조건에서 타입 매개변수 사용 (Using_Type_Parameters_in_Generic_Constraints)
 * - 다른 타입 매개변수로 제한된 타입 매개변수를 선언할 수 있다.
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
// 성공
getProperty(x, "a");

// 오류: 인수의 타입 'm' 은 'a' | 'b' | 'c' | 'd'에 해당되지 않음.
// getProperty(x, "m"); 