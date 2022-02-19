const validator = require("validator");
const chalk = require("chalk");
// console.log(validator.isEmail("wahyu@gmail.com"));
// console.log(validator.isMobilePhone("081235487", "id-ID"));
// console.log(validator.isNumeric("10298"));

console.log(chalk.black.bgYellow("hello world"));

const pesan = chalk`{bgRed wahyu} {bgGreen dwi} {bgYellow kurniawan}`;
console.log(chalk.bgBlue.black(pesan));
