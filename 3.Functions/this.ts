/**
 * this
 * this와 화살표 함수 (this_and_arrow_functions)
 * - this 는 함수가 호출될 때 정해지는 변수
 * - 최상위 레벨에서의 비메서드 문법의 호출은 this 를 window 로 한다.
 */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

/**
 * this
 * this 매개변수 (this parameter)
 * - 명시적으로 this 매개변수를 줄 수 있다.
 * - this 매개변수는 함수의 매개변수 목록에서 가장 먼저 나오는 가짜 매개변수다.
 */
function f(this: void) {
    // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck2: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: 아래 함수는 이제 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker2();

alert("card: " + pickedCard.card + " of " + pickedCard2.suit);