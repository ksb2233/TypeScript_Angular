/**
 * 유니언 타입 (Union_Types)
 * - 여러 타입 중 하나가 될 수 있는 값을 의미한다.
 * - "|" 로 각 타입을 구분한다
 */
// 문자열을 받고 왼쪽에 "padding"을 추가합니다.
// 만약 'padding'이 문자열이라면, 'padding'은 왼쪽에 더해질 것입니다.
// 만약 'padding'이 숫자라면, 그 숫자만큼의 공백이 왼쪽에 더해질 것입니다.
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
// "Hello world"를 반환합니다.
console.log(padLeft("Hello world", 4));
var pet = getSmallPet();
pet.layEggs();
function networkStatus(state) {
    // 현재 TypeScript는 셋 중 어떤 것이
    // state가 될 수 있는 잠재적인 타입인지 알 수 없습니다.
    // 모든 타입에 공유되지 않는 프로퍼티에 접근하려는 시도는
    // 오류
    //state.code;
    // state에 swtich문을 사용하여, TypeScript는 코드 흐름을 분석하면서
    // 유니언 타입을 좁혀나갈 수 있습니다.
    switch (state.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            // 여기서 타입은 NetworkFailedState일 것이며,
            // 따라서 `code` 필드에 접근할 수 있습니다.
            return "Error " + state.code + " downloading";
        case "success":
            return "Downloaded " + state.response.title + " - " + state.response.summary;
    }
}
