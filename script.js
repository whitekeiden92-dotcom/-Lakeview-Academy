const form = document.getElementById('admissionForm');
// Listen for form submission
form.addEventListener('submit', function(event) {
    // Stop page refresh
    event.preventDefault(); // Prevent form submission
    // Get input values
    const fullName = document.getElementById("fullname").value.trim();
const gender = document.getElementById("gender").value;
const dob = document.getElementById("dob").value;
const kcpe = document.getElementById("kcpe").value;
const parent = document.getElementById("parent").value;
const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;
const nameParts = fullName.split(" ")
if (nameParts.length < 2 || nameParts.length > 3) {
    alert("Please enter a valid full name .");
    return;
}
// Validate inputs
if(fullName === "" || gender === "" || dob === "") {
    alert("Please fill all required fields");
    return;
}
// Check minimum KCPE marks
if (kcpe < 400) {
    alert("Minimum KCPE requirement is 400 marks.");
    return;
}

alert("Form submitted successfully!");
// Create student object
const student = {
    fullName: fullName,
    gender: gender,
    dob: dob,
    kcpe: kcpe,
    parent: parent,
    phone: phone,
    message: message
};

    // Get existing students or create empty array
let students = JSON.parse(localStorage.getItem("students")) || [];
// Add new student
students.push(student);

    // Save back to localStorage
localStorage.setItem("students", JSON.stringify(students));
// Success message
 alert("Application submitted successfully!");
// Reset form
form.reset(); // Reset the form after submission

});