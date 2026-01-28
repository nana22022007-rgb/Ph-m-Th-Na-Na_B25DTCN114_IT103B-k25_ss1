let bookName = prompt("Moi nhap ten sach").trim().toUpperCase();
let bookAuthor = promt("moi nhap ten tac gia");
let year = +prompt("Nhap nam xuat ban");
let bookId= bookAuthor.slice(0,3) + year + (Math.floor(Math.random()*1000)+1);
let price = parseFloat(prompt("Nhap gia sach"));
let quantity = +prompt("Nhap so luong sach");
let bookAge = 2026 - year;
let total = price*quantity;