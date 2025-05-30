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
    umberOfReports: number;
}