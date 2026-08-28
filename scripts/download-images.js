/**
 * Download food photography images for SoulFire Soups
 * Run with: node scripts/download-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // Greens & Herbs (for "greens and herbs", "Chef's choice", "Gumbo Z'Herbes", "shared table")
  {
    name: 'greens-herbs.jpg',
    url: 'https://images.unsplash.com/photo-Gc-Gf7egfRg?auto=format&fit=crop&w=1200&q=80',
    description: 'Soulfood plate with collard greens and herbs'
  },
  // Simmering Pot (for "signature simmer", "Hearty", "Smoked Jollof Lentil")
  {
    name: 'simmering-pot.jpg',
    url: 'https://images.unsplash.com/photo-R_eO1SjCm2Q?auto=format&fit=crop&w=1200&q=80',
    description: 'Pot of soup simmering on stove'
  },
  // Roasted Roots / Peanut (for "roasted roots", "Signature", "Heritage Peanut Stew", "origin")
  {
    name: 'roasted-roots.jpg',
    url: 'https://images.unsplash.com/photo-5F_LLhyz23o?auto=format&fit=crop&w=1200&q=80',
    description: 'Roasted root vegetables with herbs'
  },
  // Story / Origin (for "story in every bowl", "origin")
  {
    name: 'story-bowl.jpg',
    url: 'https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80',
    description: 'Bowl of rice and greens - Southern staple'
  },
  // Shared Table / Communal (for "shared table", "story in every bowl")
  {
    name: 'shared-table.jpg',
    url: 'https://images.unsplash.com/photo-nEQY2vfKnt4?auto=format&fit=crop&w=1200&q=80',
    description: 'Family gathering around table'
  },
  // Corn Chowder (for "Seasonal", "Calypso Corn Chowder")
  {
    name: 'corn-chowder.jpg',
    url: 'https://images.unsplash.com/photo-gDwy_JEoz8k?auto=format&fit=crop&w=1200&q=80',
    description: 'Bowl of corn chowder'
  },
];

const outputDir = path.join(__dirname, '../public/photos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
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