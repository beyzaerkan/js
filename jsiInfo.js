// javascript ile ilgili bilinmesi gerekenler

console.log("JavaScript Documentation");

// basic infos
// atama yapılmayan değişken undefined döner
// Diziler, date, NULL veri tipleri obje veri tipidir.
// let ve const değerlere yerel olarak müdahale edilemez.
// yani global olarak let olarak tanımlanmış değer bir if veya fonksiyon ya da
// döngü içine girdiğinde global değişkende ne tanımlanmış ie o değeri alır.
// var tipi için sadece ifde geçerlidir.
// javascriptte tek tırnakla cift tırnak arasında fark yoktur

console.log("EcmaScript 6");

// new variables: let, const
let name = "beyza";
const age = 20;

// string expressions
console.log(`Hi, my name is ${name}. I'm ${age} years old. This is new
    JavaScript syntax rules that is EcmaScript6`);

// if condition
let isMember = true;
let isAdult = 18;
console.log(isMember ? "yes, she is a member" : "no she isn't member ");
console.log(isAdult < age ? "adult" : "child");

// arrow functions

const heyt = (name) => {
  console.log(`Heyt ${name}. How you doin?`);
};
heyt("Beyza");

// for loop

const cars = ["BMW", "Mercedes", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

console.log(text);

// create element

const liler = document.createElement("li");
const uller = document.createElement("ul");

// class atama
liler.className= "liste";
// id atama
liler.id = "listId"
 // attribute atama
liler.setAttribute("data", "toggle");

// li transfer ul
uller.appendChild(liler);
console.log(uller);

// local storage
// Set Item
localStorage.setItem("name", "Beyza");
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("name");

localStorage.clear();

// //JSON

let music = {
  name: "Sigara",
  collaborators: {
    writer: "Şebnem Ferah",
    music: "Şebnem Ferah",
  },
  lyrics: "Ben sigara dumanının altında Yana yana en sonunda kül oldum...",
  year: 2001,
  album: "Perdeler",
};

var kayit = JSON.stringify(music);  // Stringe çevir
console.log(kayit);

var cevir = JSON.parse(kayit); // json tipine çevir

// json tipini yazdırmak icin for in dongusunden yararlanilir
for (let i in music) {
  console.log(`${i} -> ${music[i]}`);
}

//OOP

let obj = new Object();

obj.isim = "Beyza";
obj.yas = 20;
obj.kendiniTanit = function () {
  return `İsmim ${this.isim} , yasim ${this.yas}`;
};

console.log(obj.kendiniTanit());

// Map function

const users = [
  {
    name: "Beyza",
    surname: "Erkan",
    age: 20,
  },
  {
    name: "Burak",
    surname: "Erkan",
    age: 16,
  },
];
const date = new Date();

const result = users.map((user) => {
  return {
    fullname: `${user.name} ${user.surname}`,
    yearOfBirth: date.getFullYear() - user.age,
  };
});

console.log(result);

// Class

class products {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  newModel(newModel) {
    this.model = newModel;
  }

  getProduct() {
    return `Name: ${this.name}, Model: ${this.model}, Price: ${this.price}`;
  }

  // static metodlarda kurucu fonksiyon icerisindeki degiskenlere ulasılmaz
  static getPrice(className) {
    return className.price;
  }
}

const phone = new products("Apple", "Iphone X", 1000);
console.log(phone.getProduct());

phone.newModel("Iphone 7");
console.log(phone.getProduct());

console.log(products.getPrice(phone));

//SubClass

class subPhone extends products {
  constructor(garanti, kimden, name, model, price) {
    super(name, model, price); //super fonksiyonu ile ust sınıftaki degiskenler dahil edilir.
    this.garanti = garanti;
    this.kimden = kimden;
  }
}

const liste = new subPhone("2 yıl", "Sahibinden", "Samsung", "S7", 700);

console.log(liste)
