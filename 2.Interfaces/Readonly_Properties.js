var p1 = { x: 10, y: 20 };
var a = [1, 2, 3, 4];
var ro = a;
// 값 변경 불가
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;
// 타입 단언으로 오버라이드하는 것은 가능
a = ro;
