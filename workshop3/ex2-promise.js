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

// Workshop 3 ข้อ 2: Callback -> Promise
// หน่วงเวลา 300ms เท่ากัน

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

const fetchStudentByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    fetchStudentById(id, (error, student) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(student);
    });
  });
};

// กรณีสำเร็จ
fetchStudentByIdAsync("001")
  .then((student) => {
    return {
      name: student.name,
      grade: toGrade(student.score)
    };
  })
  .then((result) => {
    console.log("สำเร็จ:", result);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("จบ Promise กรณีสำเร็จ");
  });

// กรณีไม่พบข้อมูล
fetchStudentByIdAsync("999")
  .then((student) => console.log(student))
  .catch((error) => console.log("ไม่พบข้อมูล:", error.message))
  .finally(() => console.log("จบ Promise กรณี Error"));
