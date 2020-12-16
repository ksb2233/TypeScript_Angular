/**
 * Object Type
 * 원시 타입이 아닌 타입, number, string, boolean, bigint, symbol, null, undefined 가 아닌 나머지 타입
 */
declare function create(o: object | null): void;

create({prop: 0});
create(null);

// create(42);
// create("string");
// create(false);
create(undefined);