// Workshop 1 - ข้อที่ 2
// ชนิดข้อมูลและ typeof

// ==================== ส่วนที่ 1 ====================
// สร้างตัวแปรข้อมูล 6 ชนิด
const greetingMessage = "สวัสดีชาวโลก";       // ชนิด string
const studentScore = 67.7;              // ชนิด number
const isStudent = true;                 // ชนิด boolean
let undefinedValue;                     // ชนิด undefined
const nullValue = null;                 // ชนิด null
const favoriteNumbers = [1, 2, 3, 4];  // ชนิด array

// แสดงค่าของตัวแปรและชนิดข้อมูล
console.log("--------------ส่วนที่ 1--------------");
console.log(greetingMessage, typeof greetingMessage);
console.log(studentScore, typeof studentScore);
console.log(isStudent, typeof isStudent);
console.log(undefinedValue, typeof undefinedValue);
console.log(nullValue, typeof nullValue);
console.log(favoriteNumbers, typeof favoriteNumbers);

// ==================== ส่วนที่ 2 ====================
console.log("\n--------------ส่วนที่ 2--------------");

// typeof null ได้ค่าอะไร และผลนั้นถูกต้องตามความเป็นจริงหรือไม่
console.log("typeof null =", typeof nullValue);
console.log("ตามความเป็นจริง null เป็น object ตามพฤติกรรมของ JavaScript");

// ตัวแปรที่ประกาศแล้วแต่ยังไม่ได้กำหนดค่า
console.log("ตัวแปรที่ยังไม่กำหนดค่า =", typeof undefinedValue);
// ผลลัพธ์คือ undefined

// NaN มีชนิดข้อมูลอะไร
const notANumberValue = Number("abc");
console.log("NaN =", notANumberValue);
console.log("typeof NaN =", typeof notANumberValue);
// NaN มีชนิดข้อมูลเป็น number

// ==================== ส่วนที่ 3 ====================
console.log("\n--------------ส่วนที่ 3--------------");

const inputAge = "20";
const inputScore = "85.5";

// แปลงอายุจาก string เป็น number แล้วบวก 5
const convertedAge = Number(inputAge);
const newAge = convertedAge + 5;

// แปลงคะแนนเป็น number และแสดงทศนิยม 1 ตำแหน่ง
const convertedScore = Number(inputScore);
const formattedScore = convertedScore.toFixed(1);

// เปรียบเทียบ inputAge กับ Number(inputAge)
console.log("inputAge === Number(inputAge) :", inputAge === Number(inputAge));

// แสดงผลลัพธ์
console.log("อายุเดิม =", inputAge);
console.log("อายุหลังบวก 5 =", newAge);
console.log("คะแนน =", formattedScore);