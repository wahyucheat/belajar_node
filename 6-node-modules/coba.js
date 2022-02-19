function printNama(nama) {
  return `nama saya adalah : ${nama}`;
}

const PI = 3.14;

// Objek
const dataDiri = {
  nama: "Wahyu Dwi Kurniawan",
  umur: "22",
  cetakData() {
    return `halo, nama saya ${this.nama} dan umur saya ${this.umur}`;
  },
};

class Orang {
  constructor() {
    console.log("class Orang telah di buat!!");
  }
}

// module.exports.printNama = printNama;
// module.exports.PI = PI;
// module.exports.dataDiri = dataDiri;
// module.exports.Orang = Orang;

//multiple export
// module.exports = {
//   printNama: printNama,
//   PI: PI,
//   dataDiri: dataDiri,
//   Orang: Orang,
// };

module.exports = { printNama, PI, dataDiri, Orang };
