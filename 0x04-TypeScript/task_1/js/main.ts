interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// director interface extends teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// interface for prinTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    const initial = firstName.charAt(0); // Get first letter
    return `${initial}. ${lastName}`;
}

// Interface for the StudentClass instance
interface IStudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Interface for the StudentClass constructor
interface IStudentConstructor {
    new(firstName: string, lastName: string): IStudentClass
}

class StudentClass implements IStudentClass {
    firstName: string;
    lastName: string;

    // constructor initialize properties
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName
    }

}