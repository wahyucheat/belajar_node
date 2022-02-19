const fs = require("fs");
const chalk = require("chalk");

const validator = require("validator");
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

const loadContact = () => {
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    return contacts;
};

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama,
        email,
        noHP,
    };
    const contacts = loadContact();
    // const file = fs.readFileSync("data/contacts.json", "utf-8");
    // const contacts = JSON.parse(file);

    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(
            chalk.red.inverse.bold(
                "this contact has registered, try using another username!"
            )
        );
        return false;
    }

    // cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold("invalid Email!!"));
            return false;
        }
    }

    //cek nomer HP
    if (!validator.isMobilePhone(noHP, "id-ID")) {
        console.log(chalk.red.inverse.bold("invalid phoneNumber!!"));
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log(chalk.green("terima kasih telah menginputkan data"));
};

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold("daftar kontak"));
    contacts.forEach((data, i) => {
        console.log(`${i + 1}. ${data.nama} - ${data.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find(
        (data) => data.nama.toLowerCase() === nama.toLowerCase()
    );

    if (!contact) {
        console.log(
            chalk.red.inverse.bold(`this contact's Name : ${nama} not found`)
        );
        return false;
    }

    console.log(chalk.green(contact.nama));
    console.log(contact.noHP);

    if (contact.email) {
        console.log(contact.email);
    }
};

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (data) => data.nama.toLowerCase() !== nama.toLowerCase()
    );

    if (contacts.length === newContacts.length) {
        console.log(
            chalk.red.inverse.bold(`this contact's Name : ${nama} not found`)
        );
        return false;
    }

    fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

    console.log(chalk.green(`contact's data ${nama} deleted successfully!`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
