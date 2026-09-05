// ข้อมูลนักศึกษา
const students = [
  { id: "001", name: "สมชาย", major: "CE", score: 85 },
  { id: "002", name: "สมหญิง", major: "IT", score: 72 },
  { id: "003", name: "กิตติ", major: "CE", score: 48 },
  { id: "004", name: "มานะ", major: "CS", score: 65 },
  { id: "005", name: "วิภา", major: "CE", score: 91 },
  { id: "006", name: "ธนา", major: "IT", score: 55 }
];

// ชื่อของทุกคน
const getNames = (students) => {
  return students.map((student) => student.name);
};

// คนที่สอบผ่าน
const getPassedStudents = (students) => {
  return students.filter((student) => student.score >= 50);
};

// คะแนนรวม
const getTotalScore = (students) => {
  return students.reduce((total, student) => {
    return total + student.score;
  }, 0);
};

// คะแนนเฉลี่ย
const getAverageScore = (students) => {
  if (students.length === 0) return 0;

  return getTotalScore(students) / students.length;
};

// นับจำนวนตามเกรด
const countByGrade = (students) => {
  return students.reduce((result, student) => {
    const score = student.score;
    let grade;

    if (score >= 80) grade = "A";
    else if (score >= 75) grade = "B+";
    else if (score >= 70) grade = "B";
    else if (score >= 65) grade = "C+";
    else if (score >= 60) grade = "C";
    else if (score >= 55) grade = "D+";
    else if (score >= 50) grade = "D";
    else grade = "F";

    result[grade] = (result[grade] || 0) + 1;

    return result;
  }, {});
};

// คนที่คะแนนสูงสุด
const getTopStudent = (students) => {
  if (students.length === 0) return undefined;

  return students.reduce((top, student) => {
    return student.score > top.score ? student : top;
  });
};

// ทดสอบ
console.log("ชื่อ:", getNames(students));

console.log("สอบผ่าน:", getPassedStudents(students));

console.log("คะแนนรวม:", getTotalScore(students));

console.log("คะแนนเฉลี่ย:", getAverageScore(students));

console.log("จำนวนตามเกรด:", countByGrade(students));

console.log("คะแนนสูงสุด:", getTopStudent(students));

// ทดสอบ Array ว่าง
console.log("Array ว่าง:", getAverageScore([]));