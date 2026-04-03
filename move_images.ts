import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const assetsDir = path.join(process.cwd(), 'src', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const files = fs.readdirSync(publicDir);
for (const file of files) {
  if (file.match(/\.(png|jpg|jpeg|svg|webp)$/)) {
    fs.renameSync(path.join(publicDir, file), path.join(assetsDir, file));
  }
}
console.log('Moved images to src/assets');
