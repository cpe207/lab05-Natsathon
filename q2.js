// assign interface/type to the function definition properly
function findTopNames(students) {
    const topStudents = students.filter(student => student.score > 8);
    const topNames = topStudents.map(student => student.name);
    return topNames;
}
// assign interface/type to the student1 object properly
const students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
