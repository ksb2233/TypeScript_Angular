/**
 * 읽기전용 프로퍼티(Readonly_Properties)
 * 객체가 처음 생성될 때만 수정이 가능하며, 이름 앞에 readonly 를 넣어 지정.
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20};

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// 값 변경 불가
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// 타입 단언으로 오버라이드하는 것은 가능
a = ro as number[];