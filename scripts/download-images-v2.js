/**
 * Download food photography images for SoulFire Soups
 * Using reliable Unsplash source URLs
 * Run with: node scripts/download-images-v2.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Using reliable Unsplash photo IDs that are known to work
const images = [
  // Greens & Herbs - collard greens, herbs, soul food
  {
    name: 'greens-herbs.jpg',
    url: 'https://images.unsplash.com/photo-1610970881699-44a07b4d6919?auto=format&fit=crop&w=1200&q=80',
    description: 'Fresh collard greens and herbs'
  },
  // Simmering Pot - soup cooking on stove
  {
    name: 'simmering-pot.jpg',
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    description: 'Soup simmering in pot on stove'
  },
  // Roasted Roots / Peanut Stew - roasted sweet potatoes, roots
  {
    name: 'roasted-roots.jpg',
    url: 'https://images.unsplash.com/photo-1596097517162-37d92d91745f?auto=format&fit=crop&w=1200&q=80',
    description: 'Roasted sweet potatoes and root vegetables'
  },
  // Story Bowl - Southern staple, grits and greens
  {
    name: 'story-bowl.jpg',
    url: 'https://images.unsplash.com/photo-1627058740281-c1d24d306774?auto=format&fit=crop&w=1200&q=80',
    description: 'Bowl of soup with greens - Southern style'
  },
  // Shared Table - family/communal dining
  {
    name: 'shared-table.jpg',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    description: 'Family gathering around shared table'
  },
  // Corn Chowder - creamy corn soup
  {
    name: 'corn-chowder.jpg',
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    description: 'Creamy corn chowder bowl'
  },
];

const outputDir = path.join(__dirname, '../public/photos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const request = https.get(url, (response) => {
      // Handle redirects
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
        reject(new Error(`Failed to download: ${response.statusCode}`));
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
      reject(new Error('Request timeout'));
    });
  });
}

async function main() {
  console.log('Downloading food photography images...\n');

  for (const img of images) {
    const filepath = path.join(outputDir, img.name);
    try {
      console.log(`Downloading ${img.name}...`);
      await downloadImage(img.url, filepath);
      const stats = fs.statSync(filepath);
      console.log(`  ✓ Saved (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);