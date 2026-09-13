## ข้อ 1 - Error-first Callback

ไฟล์ `ex1-callback.js`

สร้าง `fetchStudentById(id, callback)` สำหรับค้นหานักศึกษาจาก ID โดยใช้รูปแบบ
Error-first Callback `(error, student)` และจำลองเวลาการดึงข้อมูลด้วย
`setTimeout` 300ms

ทดสอบ 3 กรณี:
1. ID ที่มีอยู่
2. ID ที่ไม่มีอยู่
3. ID ผิดรูปแบบ

แนวคิดคือ ถ้ามี error จะตรวจสอบ error ก่อน และหยุดการทำงานของ callback
ถ้าไม่มี error จึงนำข้อมูลนักศึกษาไปใช้งานต่อ และนำคะแนนไปหาเกรดด้วย `toGrade()`