const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const tempPath = path.join(imagesDir, `temp_${file}`);
    const stat = fs.statSync(filePath);
    
    // Skip small files like logos and favicons (less than 500KB)
    if (stat.size < 500 * 1024) {
      console.log(`Skipping ${file} (already small: ${Math.round(stat.size / 1024)}KB)`);
      continue;
    }

    try {
      console.log(`Optimizing ${file}...`);
      
      const image = sharp(filePath);
      const metadata = await image.metadata();
      
      // Determine max dimension based on file type
      let maxDim = 1920; // Default for hero/backgrounds
      if (file.startsWith('Gallery_')) {
        maxDim = 1080;
      }
      
      // Resize if needed
      let processor = image;
      if (metadata.width > maxDim || metadata.height > maxDim) {
        if (metadata.width >= metadata.height) {
           processor = processor.resize(maxDim, null, { withoutEnlargement: true });
        } else {
           processor = processor.resize(null, maxDim, { withoutEnlargement: true });
        }
      }
      
      // Compress
      if (file.endsWith('.png')) {
        processor = processor.png({ quality: 80, compressionLevel: 8 });
      } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        processor = processor.jpeg({ quality: 80 });
      }
      
      await processor.toFile(tempPath);
      
      // Replace original
      fs.renameSync(tempPath, filePath);
      
      const newStat = fs.statSync(filePath);
      console.log(`✅ ${file} optimized: ${Math.round(stat.size / 1024 / 1024 * 10) / 10}MB -> ${Math.round(newStat.size / 1024 / 1024 * 10) / 10}MB`);
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error);
    }
  }
  
  console.log('All done!');
}

optimizeImages();
