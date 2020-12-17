/**
 * 숫자형 리터럴 타입 (Numeric_Literal_Types)
 */
// 예제 1
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();


// 예제 2
declare function setupMap(config: MapConfig): void;

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });