interface Student {
  StuId: number;
  StuName: string;
  getMarks: (Sciencemark: number) => number;
}

class Stu implements Student {
  StuId: number;
  StuName: string;

  constructor(id: number, name: string) {
    this.StuId = id;
    this.StuName = name;
  }

  getMarks(Sciencemark: number): number {
    return Sciencemark;
  }
}

let student = new Stu(1, "Asd");
console.log(student.getMarks(90));
