// Workshop 1 - ข้อที่ 3
// เครื่องคิดเลขคะแนน CE385

// ==================== ส่วนที่ 1 ====================
// คะแนนดิบและเกณฑ์คะแนนของแต่ละส่วน
const workshopRaw = 48;
const attendanceScore = 9;
const projectScore = 17;
const midtermScore = 15;
const finalScore = 24;

// เกณฑ์คะแนนเต็มของแต่ละส่วน
const workshopFullScore = 60;
const workshopWeight = 20;
const totalFullScore = 100;
const passPercentage = 80;

// ==================== ส่วนที่ 2 ====================
// แปลงคะแนน Workshop จากเต็ม 60 เป็นคะแนนเต็ม 20
const workshopConvertedScore =
    (workshopRaw / workshopFullScore) * workshopWeight;

// คำนวณคะแนนรวมทั้งหมด
const totalScore =
    workshopConvertedScore +
    attendanceScore +
    projectScore +
    midtermScore +
    finalScore;

// คำนวณเปอร์เซ็นต์ของคะแนนรวม
const totalPercentage =
    (totalScore / totalFullScore) * 100;

// คำนวณว่าขาดอีกกี่คะแนนจึงจะถึง 80 คะแนน
const scoreNeededForPass =
    Math.max(0, passPercentage - totalScore);

// ==================== ส่วนที่ 3 ====================
// แสดงผลสรุปคะแนนด้วย Template Literal
console.log(`
===== สรุปคะแนน CE385 =====
Workshop: ${workshopConvertedScore.toFixed(2)} / 20
Attendance: ${attendanceScore} / 10
Project: ${projectScore} / 20
Midterm: ${midtermScore} / 20
Final: ${finalScore} / 30

คะแนนรวม: ${totalScore.toFixed(2)} / ${totalFullScore}
คิดเป็นเปอร์เซ็นต์: ${totalPercentage.toFixed(2)}%

ขาดอีก: ${scoreNeededForPass.toFixed(2)} คะแนน
เพื่อถึง ${passPercentage} คะแนน
`);