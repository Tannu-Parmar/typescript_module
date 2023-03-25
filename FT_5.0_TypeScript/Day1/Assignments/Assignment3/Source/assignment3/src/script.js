var Stu = /** @class */ (function () {
    function Stu(id, name) {
        this.StuId = id;
        this.StuName = name;
    }
    Stu.prototype.getMarks = function (Sciencemark) {
        return Sciencemark;
    };
    return Stu;
}());
var student = new Stu(1, "Asd");
console.log(student.getMarks(90));
