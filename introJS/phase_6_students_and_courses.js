function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function(){
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function(course){
  if(!this.courses.includes(course) && !course.students.includes(this)){
    if(this.hasConflict(course)) {
      throw 'Student has course conflict with proposed course';
    }
    else {
      this.courses.push(course);
      course.addStudent(this);
    }
  }
  else{
    throw "Student is already enrolled in this course";
  }
};

Student.prototype.hasConflict = function(course) {
  // debugger
  for(let i = 0; i < this.courses.length; i++) {
    if(course.conflictsWith(this.courses[i])) {
      return true;
    }
  }
  return false;
};

Student.prototype.courseLoad = function(){
  let hash = {};
  
  for(let i in this.courses){
    if(this.courses[i].department in hash){
      hash[this.courses[i].department] += this.courses[i].numCredits;
    }
    else{
      hash[this.courses[i].department] = this.courses[i].numCredits;
    }
  }

  return hash;
};

function Course(name, department, numCredits, daysOfWeek, timeBlock){
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.daysOfWeek = daysOfWeek;
  this.timeBlock = timeBlock;
  this.students = [];
}

Course.prototype.addStudent = function(student){
  this.students.push(student);
};

Course.prototype.conflictsWith = function(course) {
  let sameDay = false;
  debugger
  for(let i = 0; i < course.daysOfWeek.length; i++) {
    if(this.daysOfWeek.includes(course.daysOfWeek[i])) {
      sameDay = true;
      break;
    }
  }
  
  if(this.timeBlock === course.timeBlock && sameDay) {
    return true;
  }
  else {
    return false;
  }
};

let student = new Student("Spongebob", "Squarepants");
let course1 = new Course("JavaScript", "Computer Science", 3, ["mon", "tues", "fri"], 1);
let course2 = new Course("Ruby", "Computer Science", 3, ["mon", "tues", "fri"], 2);
let course3 = new Course("Python", "Computer Science", 3, ["wed", "thu"], 3);
let course4 = new Course("C++", "Computer Science", 3, ["mon", "tues", "fri"], 1);

console.log(student.name());
student.enroll(course1);
// student.enroll(course2);
// student.enroll(course3);
console.log(student.courses);
console.log(student.courseLoad());
console.log(course1.students);
// student.enroll(course1);
student.enroll(course4);
console.log(student.courses)