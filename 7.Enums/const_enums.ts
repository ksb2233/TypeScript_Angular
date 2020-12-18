/**
 * 열거형 (Enums)
 * const 열거형 (const_enums)
 * - 엄격하게 사용하기위해 "const" 를 사용한다.
 * - 상수 열거형 표현식에만 사용될 수 있다
 */
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
