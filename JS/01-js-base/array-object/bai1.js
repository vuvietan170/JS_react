// Tạo array students và filter theo điểm số
const students = [
    {name: "An",score: 7},
    {name: "Tan", score: 8},
    {name: "Tuan",score:9}
];
const diemTren8 = students.filter(person => person.score >= 8);
console.log(diemTren8);
