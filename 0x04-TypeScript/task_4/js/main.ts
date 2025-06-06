/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import CppClass = Subjects.Cpp;
import JavaClass = Subjects.Java;
import ReactClass = Subjects.React;
import Teacher = Subjects.Teacher;

// Create and export subject instances
export const cpp = new CppClass();
export const java = new JavaClass();
export const react = new ReactClass();

// Create and export a teacher
export const cTeacher: Teacher = {
    firstName: 'Jesse',
    lastName: 'Esau',
    experienceTeachingC: 10
};

// Use Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Use Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Use React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
