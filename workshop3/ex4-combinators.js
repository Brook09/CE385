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

// Workshop 3 ข้อ 4: Promise Combinators
// ทุก Promise ที่ใช้หน่วงเวลา 300ms เท่ากัน

const getStudent = (id, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = students.find((item) => item.id === id);

      if (shouldFail || !student) {
        reject(new Error(`ไม่สามารถโหลดข้อมูล ${id}`));
        return;
      }

      resolve({
        id: student.id,
        name: student.name,
        grade: toGrade(student.score)
      });
    }, 300);
  });
};

const main = async () => {
  // 1. Promise.all()
  // ต้องการข้อมูลทุกคน ถ้าคนใดคนหนึ่งผิดพลาด จะเข้า catch
  try {
    const result = await Promise.all([
      getStudent("001"),
      getStudent("002"),
      getStudent("005")
    ]);
    console.log("1) Promise.all:", result);
  } catch (error) {
    console.log("1) Promise.all Error:", error.message);
  }

  // 2. Promise.allSettled()
  // ต้องการดูผลของทุก Promise ทั้งสำเร็จและล้มเหลว
  try {
    const result = await Promise.allSettled([
      getStudent("001"),
      getStudent("999", true),
      getStudent("005")
    ]);
    console.log("2) Promise.allSettled:", result);
  } catch (error) {
    console.log("2) Promise.allSettled Error:", error.message);
  }

  // 3. Promise.any()
  // ต้องการผลสำเร็จตัวแรก
  try {
    const result = await Promise.any([
      getStudent("999", true),
      getStudent("002"),
      getStudent("005")
    ]);
    console.log("3) Promise.any:", result);
  } catch (error) {
    console.log("3) Promise.any Error:", error.message);
  }

  // 4. Promise.race()
  // ใช้ผลของ Promise ที่เสร็จก่อน
  try {
    const result = await Promise.race([
      getStudent("001"),
      getStudent("002"),
      getStudent("005")
    ]);
    console.log("4) Promise.race:", result);
  } catch (error) {
    console.log("4) Promise.race Error:", error.message);
  }
};

main().catch((error) => console.log("Main Error:", error.message));
