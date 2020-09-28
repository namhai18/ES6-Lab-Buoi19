import {tinhTong} from "./test.js";
import {NhanVien} from "./NhanVien.js"
import {monkey2} from "./oop.js"

monkey2.name;
var a =1 ;
var a = 2;

// b da khai bao nen ko the khai bao lai
let b = 2;
b = 3;

// khai bao hang so- khong the add gia tri khac
const PI = 3.14;
// const ZI;
// const PI = 3.14;
// Hoisting- gan gia tri truoc khai bao sau
d = 5;
var d;

// biến c chỉ có phạm vi trong hàm test
function test(){
    var c = 12;
}
// console.log(c);

//1. Demo block scope
function foo(){
    
    var x = 10;
    if (true){
        var x= 20;
        console.log('block scope var : ' + x);
    }

    console.log('block scope var : ' + x);
}

foo();

// Demo block scope dùng let ES6
function foo2(){
    
    let x = 10;
    if (true){
        let x= 20;
        //  x = 20
        console.log('block scope let: ' + x);
    }
    // x = 10
    console.log('block scope let: ' + x);
}
//2.Khai báo biến dùng let thay thế cho var
foo2();

for (let index = 0; index < 4; index++) {
    // const element = array[index];
    console.log('for with let: ' + index);
}

// console.log(index);

function hello(name){
    console.log("Hello " + name);
}

hello("Nguyen");

//3. ARROW FUNCTION 2 tham so
let hello1 = (name,lop) => {
    console.log("Hello " + name + lop);
}

hello1("Hai","FE37");

let hello2 = name => {
    console.log("Hello " + name);
}

hello2("Nam");

function test1() {
    return 5;
}

let test2 = () => {
    return 5;
}
// Trong than ham 1 dòng khỏi return
let test3 = () => 5;

// JS bình thường
// const hocVien = {
//     // đối tượng
//     hoTen : 'Nguyen Van A',
//     lop: 'FE37',
//     // Phương thức
//     layThongTinHocVien : function(){
//         function hienThiThongTin(){
//             console.log(`Ho ten: ${this.hoTen}  Lop: ${this.lop}`);
//         }
//         hienThiThongTin();
//     }
// }
// // Không hiểu từ khóa this nên không in ra được
// hocVien.layThongTinHocVien();

// // ARROW FUNCTION 
let hocVien1 = {
    // đối tượng
    hoTen : 'Nguyen Van A',
    lop: 'FE37',
    // Phương thức của object hocvien1
    layThongTinHocVien : function(){
        // trong method co arrow function hienThiThongTin
         const hienThiThongTin = () => {
            console.log(`layThongTinHocVien Ho ten 1 : ${this.hoTen}  Lop 1: ${this.lop}`);
        }
        hienThiThongTin();
    }
}
// ARROW FUNCTION hiểu được từ khóa this
hocVien1.layThongTinHocVien();

//4. REST PARAM - có thể insert nhiều param đồng dạng vào hàm
function sum(a,b,c){
    let total = a + b + c;
    console.log(total);
}

sum(1,1,2);

let test99 = (...numbers) => {
    console.log('test99: '+numbers);
    return numbers;
}

test99(99);

function sum1(...numbers){
    // numbers.forEach(Element => {
    //     total = total +  Element;
    // });
    let total = 0 ;
    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index]; 
    }
// For Each có thể làm thay đổi giá trị của numbers 
    let total1 = 0; 
    numbers.forEach((item,i) =>{
        total1 += item;
    });

    //5. MAP tương ứng FOR EACH nhưng copy ra 1 ban tương ứng ko làm thay đổi mảng numbers gốc.
    let total2 = 0; 
    numbers.map((item,i) =>{
        total2 += item;
    });


    console.log("Map " + total2);
    console.log("For each " + total1);
    console.log("For loop " + total);
}

sum1(1,2,3,4);

//6. SPREAD operator
// tham chiếu
let mangA = [1,2,3];
let mangB = mangA;

mangB.push(4);
mangB.push(5);

// Mang A dang tham chieu den vung nho mang B
console.log('spread operator mang A:' + mangA); 
console.log('spread operator mang B:' +mangB);

// Mang A chi tham tri len vung nho mang B (tham trị)
let mangAA = [1,2,3];
// Copy lai mangAA thanh ban sao gan cho mangBB
let mangBB = [...mangAA,4,5];

console.log("mangAA: "+ mangAA);
console.log("mangBB: "+ mangBB);

let people = {
    ten : 'Hai',
    lop : 'FE37'
};

// Vi la object nen dung dau ngoac nhọn
let people2 = {...people};
let people3 = {...people2};

people2.tuoi = 37;

console.log(people);
console.log(people2);
console.log(people3);

//7. Default param - insert default value cho input param
let getInfo =(ten,lop = "fe37")=>{
    console.log(`Ten:${ten} Lop :${lop} `);
}
getInfo("KAO","37");
getInfo("KAO");

//8. Destructuring
let mang =[99,2];
let [x,y] = mang;
console.log("Destructuring " + x,y);

let obj = {
    ten : 'KAO',
    lop : 'FE37'
}
let {ten,lop} = obj;
console.log(ten,lop);

//9. Template string
let getName = (name) =>{
    // Cách viết template string
    let rs = `Hello ${name}`  ;
    console.log(rs);
};

getName("Template string ");

//10. Object literial
// Cách 1 dùng trong reactJS
let name = "Nguyen";
let lop1 = " fe37";
// Rút gọn việc gán key value trong object bằng cách đặt giống tên thuộc tính
let student = {
    name, // name : name
    lop1 // lop1: lop1
};
console.log(student);
////////////////////////////////////////////////
// Cách 2
let propHoTen = "hoTen";
let propLop = "lop";

let student2 = {
    [propHoTen] : "Nguyen",
    [propLop] : "lop"
}
console.log(student2);

//11. For of : lay ra gia tri phần tử trong mảng
// For in : lay ra gia tri index trong mảng
let mangNguoi = ["a","b","c"];
for (let item of mangNguoi) {
    console.log("For of : " + item);
}
for (let item in mangNguoi) {
    console.log("For in : " + item);
}

// 13. Dung lai ham tinhTong da export để dùng
let tong = tinhTong();
console.log("Tong : "+ tong);

