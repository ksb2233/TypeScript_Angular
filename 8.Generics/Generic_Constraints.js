function loggingIdentity2(arg) {
    // length 프로퍼티의 존재를 알기 때문에 오류가 발생하지 않는다.
    console.log(arg.length);
    return arg;
}
// Number는 .length 프로퍼티가 없기때문에 오류 발생
// loggingIdentity(3);  
// 필요한 프로퍼티들이 있는 타입의 값을 전달해야한다.
loggingIdentity2({ length: 10, value: 3 });
