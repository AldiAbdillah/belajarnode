const fs = require("fs");

// menulis file sync
// try {
// fs.writeFileSync(
//     "data/test.txt",
//     "Halo saya sedang menulis file secara synchronus !!!"
// );
// } catch (e) {
// console.log(e);
// }

// menulis file async
// fs.writeFile("data/testasync.txt", "saya menulis file secara async", (e) => {
//   console.log(e);
// });

// membaca file sync
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca file secara async
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan no hp anda : ", (noHp) => {
    const contact = {
      nama,
      noHp,
    };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terimakasih sudah memasukan data");

    rl.close();
  });
});
