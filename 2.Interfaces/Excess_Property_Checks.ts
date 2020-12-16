/**
 * 초과 프로퍼티 검사 (Excess_Property_Checks)
 * 객체 리터럴이 대상 타입이 갖고있지 않은 프로퍼티를 갖고있으면 에러가 발생
 */
interface SquareConfig {
    color?: string;
    width?: number;
    // 초과 프로퍼티 검사를 피해가기 위해 추가 (추가 프로퍼티가 있을거라 확신할 때)
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.clor) {
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
