let bookName = prompt('Nhập tên sách:');
let authorName = prompt('Nhập tên tác giả:');
let Publication_Year = +prompt('Nhập năm xuất bản:');
let bookPrice = +prompt('Nhập giá tiền:');
let Number_of_Books = +prompt('Nhập số lượng sách nhập về:');


bookName = bookName.trim().toUpperCase();
authorName = authorName.trim().toUpperCase();


let authorCode = authorName.substring(0, 3);
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let bookID = `${authorCode}${Publication_Year}-${randomNumber}`;


let currentYear = new Date().getFullYear();;
let bookAge = currentYear - Publication_Year;
let totalValue = bookPrice * Number_of_Books;


let shelfNumber = Math.floor(Math.random() * 10) + 1;


console.log(`--- PHIẾU NHẬP KHO ---

Mã sách: ${bookID}
Tên sách: ${bookName}
Tác giả: ${authorName}
Năm xuất bản: ${Publication_Year}
Tuổi sách: ${bookAge} năm
Tổng giá trị: ${totalValue} VNĐ
Ngăn kệ gợi ý: Kệ số ${shelfNumber}
`);

