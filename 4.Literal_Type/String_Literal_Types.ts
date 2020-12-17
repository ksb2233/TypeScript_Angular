/**
 * 문자열 리터럴 타입 (String_Literal_Types)
 * 문자열 리터럴 타입으로 enum 처럼 사용이 가능하다
 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        } else if (easing === "ease-out") {
        // ...
        } else if (easing === "ease-in-out") {
        // ...
        } else {
            // 타입을 무시하게 된다면 이곳에 도달할 수 있다.
            console.log("TEST");
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// 설정 된 문자열 이외의 문자열을 사용하게되면 오류가 발생
//button.animate(0, 0, "uneasy");