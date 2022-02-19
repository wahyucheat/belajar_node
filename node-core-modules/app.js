//core module
//File System

const fs = require("fs");

//menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara Synchronous");
// } catch (e) {
//   console.log("error bos");
// }

// menuliskan string ke file(synchronous)
// fs.writeFile("data/test.txt", "Hello World scara Asynchronous", (e) => {
//   console.log(e);
// });

// membaca isi file scara syncrhonous
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file scara Asyncrhonous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//ReadLine
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("masukkan Nama Anda : ", (nama) => {
//   console.log(`Thanks you ${nama}`);
//   rl.close();
// });

rl.question("masukkan nama anda : ", (jeneng) => {
  rl.question("masukkan nomer hp anda : ", (hp) => {
    const contact = {
      nama: jeneng,
      noHP: hp,
    };
    const file = fs.readFileSync("data/contacts.json", "utf-8");

    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    rl.close();
  });
});
