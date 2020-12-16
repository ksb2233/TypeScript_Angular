/**
 * 하이브리드 타입 (Hybrid_Types)
 * 인터페이스는 다양한 타입을 기술할 수 있다.
 */
// 함수와 객체의 역할을 수행하는 객체
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;