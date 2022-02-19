// mengambil argument dari command line

const yargs = require("yargs");
const contacts = require("./contacts");

yargs
    .command({
        command: "add",
        describe: "Menambahkan contact baru",
        builder: {
            nama: {
                describe: "Nama Lengkap",
                demandOption: true,
                type: "string",
            },
            email: {
                describe: "Email",
                demandOption: false,
                type: "string",
            },
            noHP: {
                describe: "No Hp",
                demandOption: true,
                type: "string",
            },
        },
        handler(argv) {
            contacts.simpanContact(argv.nama, argv.email, argv.noHP);
        },
    })
    .demandCommand();

// meanmpilkan semua data
yargs.command({
    command: "list",
    describe: "menampilkan Semua data nama, email dan nomer hp",
    handler() {
        contacts.listContact();
    },
});

// menampilkan detail
yargs.command({
    command: "detail",
    describe: "menampilkan detail sebuah contact",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//menghapus contact berdasarkan nama
yargs.command({
    command: "delete",
    describe: "menghapus detail sebuah contack berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

//memanggil commad
yargs.parse();

// const contacts = require("./contacts");

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukkan nama anda : ");
//   const email = await contacts.tulisPertanyaan("masukkan email anda : ");
//   const noHP = await contacts.tulisPertanyaan("masukkan No HP anda : ");

//   contacts.simpanContact(nama, email, noHP);
// };

// main();
