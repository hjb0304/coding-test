let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let day = date.getDate();

console.log(`${year}-${month}-${day}`);