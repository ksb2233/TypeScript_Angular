var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
            // ...
        }
        else if (easing === "ease-in-out") {
            // ...
        }
        else {
            // 타입을 무시하게 된다면 이곳에 도달할 수 있다.
            console.log("TEST");
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// 설정 된 문자열 이외의 문자열을 사용하게되면 오류가 발생
//button.animate(0, 0, "uneasy");
