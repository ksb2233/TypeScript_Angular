/**
 * 인터페이스 확장하기 (Extending_Interfaces)
 * 인터페이스의 멤버를 다른 인터페이스에 복사하는것을 가능하게 한다. 이는 재사용성이 높은 컴포넌트로 분리할 때 유용하다.
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;