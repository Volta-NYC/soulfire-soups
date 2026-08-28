/**
 * Download actual dish photography for SoulFire Soups menu items
 * Uses the correct Unsplash photo IDs from search results
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Map of local filename -> Unsplash photo page URL (to extract actual image)
// We'll try the direct CDN URL format first, then try to get the actual image URL
const images = [
  // Heritage Peanut Stew (Signature) - West African maafe style
  // Photo: "A bowl of stew next to a bowl of rice" - vegan chickpea curry/stew
  {
    name: 'heritage-peanut-stew.jpg',
    photoId: '61OW9QrD4bw',
    urls: [
      'https://images.unsplash.com/photo-61OW9QrD4bw?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-61OW9QrD4bw?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Rich orange-brown stew in bowl (vegan chickpea curry style - similar to maafe)'
  },
  // Smoked Jollof Lentil (Hearty) - Red lentil stew
  // Photo: "Brown and Green Dish on Brown Ceramic Bowl" - lentil stew
  {
    name: 'smoked-jollof-lentil.jpg',
    photoId: 'LrMh_BR7SWs',
    urls: [
      'https://images.unsplash.com/photo-LrMh_BR7SWs?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-LrMh_BR7SWs?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Brown and green lentil stew in ceramic bowl'
  },
  // Gumbo Z'Herbes (Chef's choice) - Greens-forward Creole
  // Photo: "A bowl filled with rice and greens" - grits and collard greens
  {
    name: 'gumbo-zherbes.jpg',
    photoId: 'yItVmeh1XA8',
    urls: [
      'https://images.unsplash.com/photo-yItVmeh1XA8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-yItVmeh1XA8?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Collard greens/grits bowl - Southern staple'
  },
  // Calypso Corn Chowder (Seasonal) - Caribbean corn chowder
  // Photo: "A bowl of soup with vegetables" - Caribbean tagged
  {
    name: 'calypso-corn-chowder.jpg',
    photoId: 'kVHwk4FROtc',
    urls: [
      'https://images.unsplash.com/photo-kVHwk4FROtc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-kVHwk4FROtc?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Caribbean-themed soup with vegetables'
  },
  // Shared table - Family gathering
  {
    name: 'shared-table.jpg',
    photoId: 'nEQY2vfKnt4',
    urls: [
      'https://images.unsplash.com/photo-nEQY2vfKnt4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-nEQY2vfKnt4?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Family gathering around table with fire'
  },
  // Simmering pot - for "signature simmer" hero
  {
    name: 'simmering-pot.jpg',
    photoId: 'R_eO1SjCm2Q',
    urls: [
      'https://images.unsplash.com/photo-R_eO1SjCm2Q?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-R_eO1SjCm2Q?w=1200&q=80&auto=format&fit=crop',
    ],
    description: 'Pot of soup simmering on stove'
  },
];

const outputDir = path.join(__dirname, '../public/photos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    let dataReceived = false;

    const request = https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        if (response.headers.location) {
          console.log(`  Redirect: ${response.headers.location}`);
          downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
          return;
        }
      }

      if (response.statusCode === 200) {
        response.on('data', () => { dataReceived = true; });
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          if (dataReceived) {
            resolve();
          } else {
            fs.unlink(filepath, () => {});
            reject(new Error('No data received'));
          }
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
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
      console.log(`  Trying: ${url}`);
      await downloadImage(url, filepath);
      return true;
    } catch (err) {
      console.log(`  Failed: ${err.message}`);
    }
  }
  return false;
}

async function main() {
  console.log('Downloading dish photography...\n');

  for (const img of images) {
    const filepath = path.join(outputDir, img.name);
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      console.log(`✓ ${img.name} already exists (${(stats.size / 1024).toFixed(1)} KB)`);
      continue;
    }
    console.log(`Downloading ${img.name} (${img.photoId})...`);
    const success = await tryUrls(img.urls, filepath);
    if (success) {
      const stats = fs.statSync(filepath);
      console.log(`  ✓ Saved (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
      console.error(`  ✗ All URLs failed for ${img.name}`);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);