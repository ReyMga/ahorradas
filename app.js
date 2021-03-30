
const day = new Date().getDate();
let month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

console.log(new Date().getDate());
console.log(new Date().getMonth() + 1);
console.log(new Date().getFullYear());

console.log(new Date().getMonth() < 10);

inputFecha.value = `${year}-${month < 10 ? '0' + month: month}-${day}`
// yyyy-MM-dd
// yyyy-M-dd