// 12.Kế thừa--------------------------------

class Student{
    // Khởi tạo class
    constructor(_name){
        this.name = _name;
    };
}

let student = new Student("KHAO NEE");

console.log('TEST OOP'+student.name);

class Mother{
    constructor(_name){
        this.name = _name;
    }
    // Phuong thuc
    colorEyes(){
        console.log("Red");
    }
};

class Me extends Mother{
    // Phuong thuc
    colorSkin(){
        console.log("Da đen");
    }
};

let me = new Me("KHAOAAA");
// Phuong thuc nay ke thua tu Mother
me.colorEyes();
me.colorSkin();

class Person{
    constructor(_name){
        this.name = _name
    };
    getName(){
        console("getName method");
        return this.name;
    }
};
// Dung prototype add mehtod cho Class
Person.prototype.getOld = function(){
    console("add getOld method vao Person");
}

// Monkey ghi de getName trong Person
class Monkey extends Person {
    getName(){
        return "Hello " + this.name;
    }
}

let monkey = new Monkey("Khi");
console.log(monkey.getName());

class People{
    constructor(_name,_age){
        this.name = _name,
        this.age = _age
    }

    getInfo(){
        console.log (`Ten: ${this.name} Tuoi: ${this.age}`);
    }
}

// Từ khóa super kế thừa biến từ People
class Monkey2 extends People{
    constructor(_name,_age,_eat){
        super(_name,_age);
        this.eat = _eat;
    }
    getInfo(){
        super.getInfo();
        console.log(`An : ${this.eat}`);
    }
}

let monkey2 = new Monkey2("Khi", 5, "Chuoi");
monkey2.getInfo();

export {monkey2};
