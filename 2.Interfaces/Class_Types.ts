/**
 * 클래스 타입 (Class_Types)
 * 인터페이스 구현하기 (Implementing an interface)
 * - 인터페이스는 클래스의 public 을 기술한다. 클래스 인스턴스의 private 에서는 특정 타입이 있는지 검사할 수 없다.
 * - 클래스는 두 가지 타입을 가진다. 
 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
