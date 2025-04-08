const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  const [h, w, n] = input[i].split(" ");
  let floor = n % h;
  let room = 1 + parseInt(n / h);
  if (floor === 0) {
    floor = h;
    room--;
  }
  if (room < 10) {
    room = "0" + room;
  }
  console.log(+(floor + "" + room));
}