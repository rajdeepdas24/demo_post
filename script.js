const students = [
    {id: "01", name: "Riya Sharma", marks: 85, class: "10th", address: "Delhi"},
    {id: "02", name: "Rohan Patel", marks: 70, class: "12th", address: "Mumbai"},
    {id: "03", name: "Rajdeep Das", marks: 91, class: "12th", address: "Bengaluru"},
    {id: "04", name: "Shilpa Roy", marks: 87, class: "12th", address: "Pune"},
    {id: "05", name: "Shivam Singh", marks: 77, class: "12th", address: "Lucknow"},
    {id: "06", name: "Akash Madhwal", marks: 67, class: "12th", address: "Ahmedabad"},
    {id: "07", name: "Rishi Jaat", marks: 74, class: "12th", address: "Chandigarh"},
    {id: "08", name: "Rohit Kumar", marks: 88, class: "12th", address: "Patna"},
    {id: "09", name: "Hritesh Verma", marks: 70, class: "12th", address: "Hyderabad"},
    {id: "10", name: "Rakesh Billa", marks: 80, class: "12th", address: "Pune"},
    {id: "11", name: "Shubham Kumar", marks: 95, class: "12th", address: "Chennai"},
    {id: "12", name: "Akash Puchal", marks: 67, class: "12th", address: "Kochi"},
    {id: "13", name: "Trisha Jaiswal", marks: 78, class: "12th", address: "Jaipur"},
    {id: "14", name: "Drishti Dutta", marks: 65, class: "12th", address: "Guwahati"},
    {id: "15", name: "Urmila", marks: 59, class: "12th", address: "Raipur"}
];

const container = document.querySelector(".container");
const searchBox = document.getElementById("searchBox");

function displayStudents(arr) {
    container.innerHTML = arr.map(function(student) {
        return `
        <div class="card">
            <p>Student Name: ${student.name}</p>
            <p>Marks: ${student.marks}%</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
        </div>
        `;
    }).join("");
}

// Display all students initially
displayStudents(students);

// Search functionality
searchBox.addEventListener("input", function () {

    let text = searchBox.value.toLowerCase();

    let filteredStudents = students.filter(function(student) {

        return student.name.toLowerCase().includes(text);

    });

    displayStudents(filteredStudents);

});