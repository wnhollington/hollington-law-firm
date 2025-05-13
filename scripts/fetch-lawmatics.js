// scripts/fetch-lawmatics.js
const https = require("https");
const fs    = require("fs");
const path  = require("path");

const files = [
  {
    url: "https://navi.lawmatics.com/intake.min.js",
    dest: path.join(__dirname, "..", "static", "third-party", "lawmatics", "intake.min.js"),
  },
  {
    url: "https://navi.lawmatics.com/navi.min.js",
    dest: path.join(__dirname, "..", "static", "third-party", "lawmatics", "navi.min.js"),
  },
];

files.forEach(({ url, dest }) => {
  https.get(url, res => {
    if (res.statusCode !== 200) throw new Error(`${url} → ${res.statusCode}`);
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on("finish", () => file.close(() => console.log(`✔  ${path.basename(dest)} updated`)));
  });
});