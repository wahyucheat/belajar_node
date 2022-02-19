const fs = require("fs");

//ReadLine
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//create folder data if not available
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//create file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = {
    nama,
    email,
    noHP,
  };
  const file = fs.readFileSync("data/contacts.json", "utf-8");

  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("terima kasih telah menginputkan data");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
