/**
 * 선택적 프로퍼티(Optional_Properties)
 * 모든 프로퍼티를 전달하는것이 아닌 선택적인 프로퍼티를 함수에 전달할 때 사용
 */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});