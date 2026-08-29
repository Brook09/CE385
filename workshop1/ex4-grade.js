// Workshop 1 - ข้อที่ 4
// ตัดเกรดจากคะแนน

// ==================== ส่วนที่ 1 ====================
// ฟังก์ชันตรวจสอบคะแนนและคืนค่าเกรด
function toGrade(score) {
    // ตรวจสอบว่าคะแนนอยู่ในช่วง 0-100 ก่อนตัดเกรด
    if (score < 0 || score > 100) {
        return "คะแนนไม่ถูกต้อง";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 75) {
        return "B+";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 65) {
        return "C+";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 55) {
        return "D+";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// ทดลองคะแนน 78
const testScore = 78;
console.log(`คะแนน ${testScore} => เกรด ${toGrade(testScore)}`);

// ==================== ส่วนที่ 2 ====================
// ตรวจสอบคะแนนก่อนส่งเข้าไปตัดเกรด
const inputScore = 78;

if (inputScore < 0 || inputScore > 100) {
    console.log("คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100");
} else {
    console.log(`คะแนน ${inputScore} => เกรด ${toGrade(inputScore)}`);
}

// ==================== ส่วนที่ 3 ====================
// ทดสอบคะแนนหลายค่า
const scores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

for (const score of scores) {
    console.log(`คะแนน ${score} => ${toGrade(score)}`);
}