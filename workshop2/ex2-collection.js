// ข้อมูลนักศึกษา
const students = [
  {
    id: "001",
    name: "สมชาย",
    major: "CE",
    score: 85,
    contact: { email: "somchai@gmail.com", phone: "0811111111" }
  },
  {
    id: "002",
    name: "สมหญิง",
    major: "IT",
    score: 72,
    contact: { email: "somying@gmail.com", phone: "0822222222" }
  },
  {
    id: "003",
    name: "กิตติ",
    major: "CE",
    score: 48,
    contact: { email: "kitti@gmail.com", phone: "0833333333" }
  },
  {
    id: "004",
    name: "มานะ",
    major: "CS",
    score: 65,
    contact: { email: "mana@gmail.com", phone: "0844444444" }
  },
  {
    id: "005",
    name: "วิภา",
    major: "CE",
    score: 91,
    contact: { email: "wipa@gmail.com", phone: "0855555555" }
  },
  {
    id: "006",
    name: "ธนา",
    major: "IT",
    score: 55,
    contact: { email: "thana@gmail.com", phone: "0866666666" }
  }
];

// ค้นหาจาก ID
const findById = (students, id) => {
  return students.find((student) => student.id === id);
};

// ค้นหาจากสาขา
const findByMajor = (students, major) => {
  return students.filter((student) => student.major === major);
};

// มีคนสอบตกไหม
const hasFailingStudent = (students) => {
  return students.some((student) => student.score < 50);
};

// หา Email
const getEmail = (students, id) => {
  const student = findById(students, id);

  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

// ทดสอบ
console.log(findById(students, "001"));
console.log(findById(students, "999"));

console.log(findByMajor(students, "CE"));

console.log(hasFailingStudent(students));

console.log(getEmail(students, "001"));
console.log(getEmail(students, "999"));