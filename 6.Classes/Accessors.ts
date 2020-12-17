/**
 * 접근자 (Accessors)
 */
const fullNameMaxLength = 10;

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}