// Define Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Jesse",
    lastName: "Esau",
    age: 5,
    location: "Jengre"
}

const student2: Student = {
    firstName: "Fred",
    lastName: "maigari",
    age: 7,
    location: "Jos"
}

// Add students to the studentslist array
let studentsList: Student[] = [
    student1,
    student2
]

// Create and render the table
const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Loop through the array and create table rows
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);