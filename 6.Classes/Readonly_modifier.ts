/**
 * 읽기전용 지정자 (Readonly_modifier)
 */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// 오류, name 은 읽기전용이기 때문
// dad.name = "Man with the 3-piece suit"; 



 /**
 * 읽기전용 지정자 (Readonly_modifier)
 * 매개변수 프로퍼티 (Parameter_properties)
 */
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
