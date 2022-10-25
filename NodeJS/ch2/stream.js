const fs = require("fs");

const rs = fs.createReadStream("./node.js/ch2//files/lorem.txt", {
  encoding: "utf8",
});

const ws = fs.createWriteStream("./node.js/ch2/files/new-lorem.txt");
/*
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});*/

rs.pipe(ws);
