class Student{
    constructor(sId, sName){
        this.Id = sId;
        this.Name= sName;
        this.Department = "Computer"
        this.School = "National Polytechic Institute"
    }
}
const student1 = new Student(12, "Jisan");
const student2 = new Student(22, "Ahsan");
const student3 = new Student (29, "Aurjon")
console.log(student1, student2, student3);