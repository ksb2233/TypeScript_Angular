/**
 * 추상 클래스 (Abstract_Classes)
 * - 다른 클래스들이 파생될 수 있는 기초 클래스
 * - 직접 인스턴스화할 수 없다.
 * - 추상 클래스는 인터페이스와 달리 멤버에 대한 구현 세부 정보를 포함할 수 있다
 * - "abstract" 로 추상 클래스뿐만 아니라 추상 클래스 내에서 추상 메서드를 정의하는데 사용된다.
 * - 추상 클래스 내에서 추상으로 표시된 메서드는 구현을 포함하지 않으며 반드시 파생된 클래스에서 구현되어야 한다
 */
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    // 반드시 파생된 클래스에서 구현되어야 한다.
    abstract printMeeting(): void; 
}

class AccountingDepartment extends Department {
    constructor() {
        // 파생된 클래스의 생성자는 반드시 super()를 호출해야 한다.
        super("Accounting and Auditing"); 
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
// 추상 타입의 레퍼런스를 생성한다
let department: Department; 
// 오류: 추상 클래스는 인스턴스화 할 수 없다
// department = new Department(); 
// 추상이 아닌 하위 클래스를 생성하고 할당한다
department = new AccountingDepartment(); 
department.printName();
department.printMeeting();
// 오류: 선언된 추상 타입에 메서드가 존재하지 않다
// department.generateReports(); 