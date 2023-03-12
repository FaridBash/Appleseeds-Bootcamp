// import { appendFile } from 'node:fs';

const fs = require("fs");
fs.writeFileSync("myTxtFile.txt", "this file was created with nodejs");

fs.copyFileSync("myTxtFile.txt", "CopyFile.txt", fs.constants.COPYFILE_txt);
fs.renameSync("CopyFile.txt", "NewCopy.txt");



const testFolder = './';

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});


fs.appendFile('myTxtFile.txt', '. data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});