/**
 * 상속 (Inheritance)
 * - 상속을 하면 이미 존재하는 클래스를 확장하여 새로운 클래스를 만들 수 있다
 * - 파생된 클래스의 생성자 함수는 기초 클래스의 생성자를 실행할 super() 를 먼저 호출해야한다
 * - 생성자 내에서 this 에 있는 프로퍼티에 접근하기 전에 super() 를 먼저 호출해야한다
 */
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);