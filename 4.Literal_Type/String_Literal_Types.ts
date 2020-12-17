/**
 * 문자열 리터럴 타입 (String_Literal_Types)
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
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy");