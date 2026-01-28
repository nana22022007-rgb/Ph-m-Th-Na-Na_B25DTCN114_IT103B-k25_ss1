let bookName = prompt("Nhập tên sách").trim().toUpperCase();
let bookNumber = prompt("Nhập số thứ tự của sách");
let bookId = "LIB-" + bookName +"-"+ bookNumber;
console.log("Tên của sách là:", bookName);
console.log("Mã sách sau chuẩn hoá là:",bookId);


