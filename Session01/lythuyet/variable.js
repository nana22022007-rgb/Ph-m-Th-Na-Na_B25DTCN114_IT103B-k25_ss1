/*    
    Variable: Biến : dung de luu tru du lieu
    3 từ khoá để khai báo biến
        1.let (ES6_2015)
            + k thể khai báo lại
            + có thể gán lại giá trị
            + có hoisting nhưng k truy cập dc
            + phạm vi là block scope
        2.const (ES6_2015): thường dùng khai báo hằng số
            + k thể khai báo lại
            + K thể gán lại gtri
            + có hoisting nhưng k truy cập dc
            + phạm vi là block scope

        3.var (1995)
            + có thể khaii báo lại
            + có thể gán lại gtri
            + có hoisting truy cập dc
            + phạm vi hoạt động function


    Kiểu dữ liệu trong JS 
    2 nhóm kiểu dữ liệu: 
        Nhóm 1: Kiểu dữ liệu nguyên thuỷ, primitive , tham trị
            1. Number
            2. String
            3. Boolean
            4. Null
            5. Undefined
            6. NaN
            ....Symbol
        nhóm 2: kiểu dữ liệu phức tạp, reference type, tham chiếu
            1. array
            2. function
            3. object


    Nhập và xuất
    I: Nhập 
     + dùng prompt: mặc định là string nếu nhập, nếu k nhập giá trị sẽ là null
    II. Xuất
        + aleart()
        + console.log()
        + document.write()
    III. chuyển đổi kiêu dữ liệu
        1. chuyển từ string->number
            + dùng Number
            + dùng toán tử +
            + parseInt : chuyển sang số nguyên (nhập số 5.1 vẫn lấy 5)\
            + parseFloat: chuyển sang số thập phân


*/


// var fullName = "Lê Minh Sơn";

let age = 20;
let isLogin = true;

{
    let a = 6;
}

// Kiểu dữ liệu number

let price = 10.0;
let quantity = 5;

// Kiểu dữ liệu string
let name = "na na";

//  Kiểu dữ liệu null
let bookName = prompt("Mời nhập tên sách");

// kiểu dữ liệu undefined: khi khai báo biến mà k nhập giá trị
let bookId;

//  kiểu dữ liệu boolean
let isLog = true;

// kiểu dữ liệu NaN
let result = "Pham Thi Na Na" / 3;
console.log(result);

let fullName = prompt("mời nhập tên");
console.log("fullName", fullName);


let number1 = Numberprompt("Nhap so thu nhat");
let number2 = +prompt("nhap so thu hai");
let total = number1 + number2;
console.log("total", total)
let a1 = parseInt(prompt("moi nhap so a"));
let b1 = parseFloat(prompt("moi nhap so b"));
let c = a1 + b1;
console.log("Gia tri c:", c);

