// ตรวจสอบคะแนน
const isValidScore = (score) => {
  return score >= 0 && score <= 100;
};

// แปลงคะแนนเป็นเกรด
const toGrade = (score) => {
  if (score >= 80) return "A";
  if (score >= 75) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
};

// คำนวณคะแนน Workshop
const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
  return (raw / full) * weight;
};

// รวมคะแนน 5 ส่วน
const calculateTotal = (workshop, attendance, project, midterm, final) => {
  return workshop + attendance + project + midterm + final;
};

// นักศึกษา 3 คน
const students = [
  { name: "สมชาย", workshop: 18, attendance: 9, project: 18, midterm: 20, final: 25 },
  { name: "สมหญิง", workshop: 16, attendance: 10, project: 17, midterm: 18, final: 22 },
  { name: "กิตติ", workshop: 12, attendance: 8, project: 14, midterm: 15, final: 18 }
];

// แสดงผล
students.forEach((student) => {
  const total = calculateTotal(
    student.workshop,
    student.attendance,
    student.project,
    student.midterm,
    student.final
  );

  console.log(student.name, total, toGrade(total));
});

// ทดสอบ
console.log(calculateWorkshopScore(48));
console.log(calculateWorkshopScore(48, 60, 20));