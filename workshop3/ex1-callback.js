const students = [
  { id: "001", name: "สมชาย", major: "CE", score: 85 },
  { id: "002", name: "สมหญิง", major: "IT", score: 72 },
  { id: "003", name: "กิตติ", major: "CE", score: 48 },
  { id: "004", name: "มานะ", major: "CS", score: 65 },
  { id: "005", name: "วิภา", major: "CE", score: 91 },
  { id: "006", name: "ธนา", major: "IT", score: 55 }
];

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

// Workshop 3 ข้อ 1: Error-first Callback

const fetchStudentById = (id, callback) => {
  setTimeout(() => {
    if (typeof id !== "string" || id.trim() === "") {
      callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
      return;
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
      callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
      return;
    }

    callback(null, student);
  }, 300);
};

// ทดสอบ: พบข้อมูล
fetchStudentById("001", (error, student) => {
  if (error) {
    console.log("กรณี 1 Error:", error.message);
    return;
  }
  console.log("กรณี 1 พบข้อมูล:", student.name, toGrade(student.score));
});

// ทดสอบ: ไม่พบข้อมูล
fetchStudentById("999", (error, student) => {
  if (error) {
    console.log("กรณี 2 Error:", error.message);
    return;
  }
  console.log(student);
});

// ทดสอบ: id ผิดรูปแบบ
fetchStudentById(123, (error, student) => {
  if (error) {
    console.log("กรณี 3 Error:", error.message);
    return;
  }
  console.log(student);
});
