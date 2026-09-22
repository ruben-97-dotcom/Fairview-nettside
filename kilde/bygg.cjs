// Bygger index.html (én fil) fra kilde/fairview.src.html:
// bakér inn bildene fra bilder/ og skriptene fra kilde/vendor/.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
let s = fs.readFileSync(path.join(__dirname, 'fairview.src.html'), 'utf8');
s = s.replace(/\{\{IMG:([\w-]+)\}\}/g, (m, n) =>
  'data:image/webp;base64,' + fs.readFileSync(path.join(root, 'bilder', `app-${n}-light.webp`)).toString('base64'));
s = s.replace(/\{\{SCRIPT:([\w-]+)\}\}/g, (m, n) =>
  fs.readFileSync(path.join(__dirname, 'vendor', `${n}.min.js`), 'utf8').replace(/<\/script/gi, '<\/script'));
fs.writeFileSync(path.join(root, 'index.html'), s);
console.log('index.html', s.length, 'tegn');
