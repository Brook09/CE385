// Workshop 1 - ข้อที่ 5
// ระบบสั่งอาหาร

// ==================== ส่วนที่ 1 ====================
// ฟังก์ชันสำหรับหาราคาอาหาร
function getMenuPrice(menu) {
    switch (menu) {
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;

        case "ผัดไทย":
            return 60;

        case "ต้มยำกุ้ง":
            return 120;

        default:
            return 0;
    }
}

// ==================== ส่วนที่ 2 ====================
// ฟังก์ชันสำหรับคูณขนาดอาหาร
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;

        case "จัมโบ้":
            return 2;

        default:
            return 1;
    }
}

// ==================== ส่วนที่ 3 ====================
// สร้างรายการอาหารอย่างน้อย 5 รายการ
const order = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 2 },
    { menu: "เมนูไม่รู้จัก", size: "ธรรมดา", qty: 1 }
];

// คำนวณราคาสินค้าแต่ละรายการและแสดงผล
let totalPrice = 0;

for (const item of order) {
    const menuPrice = getMenuPrice(item.menu);
    const sizeMultiplier = getSizeMultiplier(item.size);
    const itemTotal = menuPrice * sizeMultiplier * item.qty;

    totalPrice += itemTotal;

    console.log(
        `${item.menu} (${item.size}) x${item.qty} = ${itemTotal} บาท`
    );
}

console.log(`ราคารวมทั้งหมด = ${totalPrice} บาท`);