const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 10,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//question 1
function findPerson(type, id) {
  const ta = school[type].find((t) => (t.id === id));
  // const person=type.find(i=>i.id=id);
  return ta;
}

// findPerson('teachers',1);
console.log(findPerson("students", 12));

// Question 2

function assignStudent(stId, sub) {
  let max = 0;
  const allTeachers = school.teachers.filter((t) => (t.subjects.includes(sub)));
  const availTeacher = allTeachers.filter((t) => t.capacityLeft > 0);
  availTeacher.forEach(function (at) {
    if (at.capacityLeft > max) {
      max = at.capacityLeft;
    }
  });
  const bestTeacher = availTeacher.find((t) => (t.capacityLeft === max));
  // console.log("====================");
  // console.log(bestTeacher);
  // console.log("====================");
  // const teacher=school.teachers.find(t=>t.subjects=sub);
  // console.log("====================");
  // console.log(school.students.find((s) => (s.id === stId)));
  // console.log("====================");
  if (bestTeacher.capacityLeft <= 0) {
    console.log("Sorry, no available teachers left");
  } else {
    debugger
    const student=findPerson("students",stId)
    bestTeacher.students.push(student);
    bestTeacher.capacityLeft--;
  }

  return bestTeacher;
}

console.log(assignStudent(13, "history"));
console.log(assignStudent(12, "history"));
console.log(assignStudent(10, "history"));


function assignTeachersSubject(tId, newSubject){

  const myTeacher=findPerson("teachers",tId);
  if(myTeacher.subjects.includes(newSubject)){
    console.log(myTeacher.name+" is already teaching "+newSubject);
  }
  else{
    myTeacher.subjects.push(newSubject);
  }
  console.log(myTeacher.subjects);

}

// assignTeachersSubject(1,"math");

function unassignStudent(studentId, teacherId){
  
  const myTeacher=findPerson("teachers", teacherId);
  const myStudent=findPerson("students", studentId);
  const studentArr=[];
  for (let i = myTeacher.students.length-1; i>=0; i--) {
    if(myTeacher.students[i].id==studentId){
      myTeacher.students.pop();
    }
    else{
      studentArr.push(myTeacher.students[i]);
      myTeacher.students.pop();
    }
  }
  
  for(let j=studentArr.length-1; j>=0; j--){
    myTeacher.students.push(studentArr[j]);
    // studentArr.pop();
  }
  
  myTeacher.capacityLeft++;
  console.log(myTeacher);
}

unassignStudent(12, 2);
