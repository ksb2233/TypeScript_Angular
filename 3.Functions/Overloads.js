/**
 * 오버로드 (Overloads)
 * 하나의 함수가 전달된 인자의 형태에 따라 다른 타입의 객체들을 반환하는 것을 의미한다.
 */
// 인자가 배열 또는 객체인지 확인하여 
// true 일 경우, deck 가 주어지고 card 를 선택
// false 일 경우, card 를 선택
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard3 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard3.suit);
