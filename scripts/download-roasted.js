/**
 * Download roasted roots image
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1540420773420-210779b3a184?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1608891258062-fd134d4f5b69?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1592841200221-4e8a3c6a6c1e?auto=format&fit=crop&w=1200&q=80',
];

const filepath = path.resolve(__dirname, '../public/photos/roasted-roots.jpg');

console.log(`Target filepath: ${filepath}`);
console.log(`Dirname: ${__dirname}`);
console.log(`Public photos dir exists: ${fs.existsSync(path.resolve(__dirname, '../public/photos'))}`);

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    console.log(`  Starting download from ${url}`);
    const file = fs.createWriteStream(filepath);
    let dataReceived = false;

    const request = https.get(url, (response) => {
      console.log(`  Response status: ${response.statusCode}`);

      if (response.statusCode === 301 || response.statusCode === 302) {
        if (response.headers.location) {
          console.log(`  Redirect to: ${response.headers.location}`);
          downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
          return;
        }
      }

      if (response.statusCode === 200) {
        response.on('data', () => { dataReceived = true; });
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  File stream finished, dataReceived: ${dataReceived}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`  Request error: ${err.message}`);
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      file.close();
      fs.unlink(filepath, () => {});
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  console.log('Downloading roasted-roots.jpg...\n');

  for (const url of urls) {
    try {
      await downloadImage(url, filepath);
      console.log(`  After download, file exists: ${fs.existsSync(filepath)}`);
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        console.log(`  ✓ Saved to ${filepath} (${(stats.size / 1024).toFixed(1)} KB)`);
        return;
      } else {
        console.log(`  ✗ File not found after download!`);
      }
    } catch (err) {
      console.log(`  ✗ Failed: ${err.message}`);
    }
  }

  console.log('\nAll URLs failed!');
}

main().catch(console.error);