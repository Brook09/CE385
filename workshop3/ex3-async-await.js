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

// Workshop 3 ข้อ 3: async/await
// ทุกงานหน่วงเวลา 300ms เท่ากัน เพื่อเปรียบเทียบ Sequential vs Parallel

const fetchStudentByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = students.find((item) => item.id === id);

      if (!student) {
        reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
        return;
      }

      resolve(student);
    }, 300);
  });
};

// Sequential: รอทีละคน -> ประมาณ 900ms
const reportSequential = async () => {
  const start = Date.now();

  try {
    const student1 = await fetchStudentByIdAsync("001");
    const student2 = await fetchStudentByIdAsync("002");
    const student3 = await fetchStudentByIdAsync("003");

    console.log("Sequential:");
    console.log(student1.name, toGrade(student1.score));
    console.log(student2.name, toGrade(student2.score));
    console.log(student3.name, toGrade(student3.score));
    console.log("เวลาประมาณ:", Date.now() - start, "ms");
  } catch (error) {
    console.log("Sequential Error:", error.message);
  } finally {
    console.log("จบ Sequential");
  }
};

// Parallel: เริ่มพร้อมกัน -> ประมาณ 300ms
const reportParallel = async () => {
  const start = Date.now();

  try {
    const studentsResult = await Promise.all([
      fetchStudentByIdAsync("001"),
      fetchStudentByIdAsync("002"),
      fetchStudentByIdAsync("003")
    ]);

    console.log("Parallel:");
    studentsResult.forEach((student) => {
      console.log(student.name, toGrade(student.score));
    });
    console.log("เวลาประมาณ:", Date.now() - start, "ms");
  } catch (error) {
    console.log("Parallel Error:", error.message);
  } finally {
    console.log("จบ Parallel");
  }
};

const main = async () => {
  await reportSequential();
  await reportParallel();

  // ทดสอบ error ด้วย async/await
  try {
    const student = await fetchStudentByIdAsync("999");
    console.log(student);
  } catch (error) {
    console.log("ทดสอบ Error:", error.message);
  } finally {
    console.log("จบการทดสอบ Error");
  }
};

main().catch((error) => console.log("Main Error:", error.message));
