/**
 * Download remaining food photography images for SoulFire Soups
 * Run with: node scripts/download-images-v3.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Try different reliable Unsplash photo IDs
const images = [
  // Greens & Herbs - collard greens, herbs, soul food
  {
    name: 'greens-herbs.jpg',
    urls: [
      'https://images.unsplash.com/photo-1622209011435-371613f5b255?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Fresh collard greens and herbs'
  },
  // Roasted Roots / Peanut Stew - roasted sweet potatoes, roots
  {
    name: 'roasted-roots.jpg',
    urls: [
      'https://images.unsplash.com/photo-1596097517162-37d92d91745f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540420773420-210779b3a184?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Roasted sweet potatoes and root vegetables'
  },
  // Story Bowl - Southern staple, grits and greens
  {
    name: 'story-bowl.jpg',
    urls: [
      'https://images.unsplash.com/photo-1627058740281-c1d24d306774?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Bowl of soup with greens - Southern style'
  },
];

const outputDir = path.join(__dirname, '../public/photos');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        if (response.headers.location) {
          downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
          return;
        }
      }

      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed: ${response.statusCode}`));
      }
    }).on('error', (err) => {
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

async function tryUrls(urls, filepath) {
  for (const url of urls) {
    try {
      await downloadImage(url, filepath);
      return true;
    } catch (err) {
      // Try next URL
    }
  }
  return false;
}

async function main() {
  console.log('Downloading remaining food photography images...\n');

  for (const img of images) {
    const filepath = path.join(outputDir, img.name);
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      console.log(`✓ ${img.name} already exists (${(stats.size / 1024).toFixed(1)} KB)`);
      continue;
    }
    try {
      console.log(`Downloading ${img.name}...`);
      const success = await tryUrls(img.urls, filepath);
      if (success) {
        const stats = fs.statSync(filepath);
        console.log(`  ✓ Saved (${(stats.size / 1024).toFixed(1)} KB)`);
      } else {
        console.error(`  ✗ All URLs failed`);
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);