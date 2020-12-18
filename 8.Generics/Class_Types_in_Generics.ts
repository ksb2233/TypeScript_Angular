/**
 * 제네릭에서 클래스 타입 사용 (Using_Class_Types_in_Generics)
 * - 제네릭을 사용하는 TypeScript 에서 팩토리를 생성할 때 생성자 함수로 클래스 타입을 참조해야 한다.
 */
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal2 {
    numLegs: number;
}

class Bee extends Animal2 {
    keeper: BeeKeeper;
}

class Lion extends Animal2 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal2>(c: new () => A): A {
    return new c();
}
// 타입 검사
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;