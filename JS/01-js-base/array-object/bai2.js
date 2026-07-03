//Sử dụng map để chuyển đổi dữ liệu
const students = [
    {name: "An",score: 7},
    {name: "Tan", score: 8},
    {name: "Tuan",score:9}
];
const scales = students.map(student => {
    return {
        name: student.name,
        score: student.score + 1
    };
});
console.log(scales);