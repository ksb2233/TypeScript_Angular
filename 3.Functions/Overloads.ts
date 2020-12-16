/**
 * 오버로드 (Overloads)
 * 하나의 함수가 전달된 인자의 형태에 따라 다른 타입의 객체들을 반환하는 것을 의미한다.
 */

// 인자가 배열 또는 객체인지 확인하여 
// true 일 경우, deck 가 주어지고 card 를 선택
// false 일 경우, card 를 선택
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {

    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }

    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard3 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard3.suit);