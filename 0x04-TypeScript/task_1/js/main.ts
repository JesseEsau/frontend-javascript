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

