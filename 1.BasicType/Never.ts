/**
 * Never Type
 * 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 사용
 */
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Somethis failed");
}

function infiniteLoop(): never {
    while(true){

    }
}