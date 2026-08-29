// Workshop 1 - ข้อที่ 6
// ระบบตรวจสอบสิทธิ์


// ==================== ส่วนที่ 1 ====================
// ข้อมูลผู้ใช้ที่ถูกต้องในระบบ
const correctUsername = "admin";
const correctPassword = "ce385pass";

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบและสิทธิ์
function login(inputUser, inputPass, role, isActive, age) {
    // ตรวจ username และ password ก่อนตรวจสอบเงื่อนไขอื่น
    if (inputUser !== correctUsername || inputPass !== correctPassword) {
        return {
            success: false,
            message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            statusCode: 401
        };
    }

    // ตรวจสอบว่าบัญชีถูกระงับการใช้งานหรือไม่
    if (isActive === false) {
        return {
            success: false,
            message: "บัญชีถูกระงับการใช้งาน",
            statusCode: 403
        };
    }

    // ตรวจสอบอายุ
    if (age < 18) {
        return {
            success: false,
            message: "อายุไม่ถึงเกณฑ์",
            statusCode: null
        };
    }

    // ตรวจสอบสิทธิ์ของผู้ใช้
    if (role === "อาจารย์") {
        return {
            success: true,
            message: "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)",
            statusCode: 200
        };
    }

    if (role === "นักศึกษา") {
        return {
            success: true,
            message: "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)",
            statusCode: 200
        };
    }

    // กรณี role ไม่ตรงกับที่ระบบกำหนด
    return {
        success: false,
        message: "ไม่พบสิทธิ์ผู้ใช้งาน",
        statusCode: 403
    };
}

// ==================== ส่วนที่ 2 ====================
// ทดสอบอย่างน้อย 6 กรณี
const testCases = [
    {
        name: "สำเร็จ (อาจารย์)",
        inputUser: "admin",
        inputPass: "ce385pass",
        role: "อาจารย์",
        isActive: true,
        age: 30
    },
    {
        name: "สำเร็จ (นักศึกษา)",
        inputUser: "admin",
        inputPass: "ce385pass",
        role: "นักศึกษา",
        isActive: true,
        age: 20
    },
    {
        name: "รหัสผ่านผิด",
        inputUser: "admin",
        inputPass: "wrongpass",
        role: "นักศึกษา",
        isActive: true,
        age: 20
    },
    {
        name: "บัญชีถูกระงับ",
        inputUser: "admin",
        inputPass: "ce385pass",
        role: "นักศึกษา",
        isActive: false,
        age: 20
    },
    {
        name: "อายุไม่ถึงเกณฑ์",
        inputUser: "admin",
        inputPass: "ce385pass",
        role: "นักศึกษา",
        isActive: true,
        age: 17
    },
    {
        name: "role ไม่ถูกต้อง",
        inputUser: "admin",
        inputPass: "ce385pass",
        role: "บุคคลทั่วไป",
        isActive: true,
        age: 20
    }
];

for (const testCase of testCases) {
    const result = login(
        testCase.inputUser,
        testCase.inputPass,
        testCase.role,
        testCase.isActive,
        testCase.age
    );

    console.log(
        `${testCase.name}: ${result.message} (${result.statusCode})`
    );
}


// ==================== ส่วนที่ 3 ====================

// คำถามท้ายข้อ
// ต้องตรวจ username/password ก่อนตรวจ role
// เพราะผู้ที่ใส่รหัสผ่านผิดไม่ควรได้รับข้อมูลเกี่ยวกับ role หรือสถานะบัญชี

// ถ้าย้ายการตรวจ "อายุไม่ถึงเกณฑ์" ขึ้นเป็นข้อแรก
// ผู้ที่ยังไม่ได้ยืนยันตัวตนอาจได้รับข้อมูลเกี่ยวกับบัญชีโดยไม่จำเป็น