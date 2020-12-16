/**
 * this
 * this와 화살표 함수 (this_and_arrow_functions)
 * - this 는 함수가 호출될 때 정해지는 변수
 * - 최상위 레벨에서의 비메서드 문법의 호출은 this 를 window 로 한다.
 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
/**
 * this
 * this 매개변수 (this parameter)
 * - 명시적으로 this 매개변수를 줄 수 있다.
 * - this 매개변수는 함수의 매개변수 목록에서 가장 먼저 나오는 가짜 매개변수다.
 */
function f() {
    // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
}
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
alert("card: " + pickedCard.card + " of " + pickedCard2.suit);
