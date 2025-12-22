import sharp from 'sharp';
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const inputPath = join(process.cwd(), 'public', 'diamond-logo.png');
const outputPath = join(process.cwd(), 'public', 'diamond-logo.png');
const webpPath = join(process.cwd(), 'public', 'diamond-logo.webp');

try {
    // Get original file size
    const originalBuffer = readFileSync(inputPath);
    const originalSize = originalBuffer.length / 1024; // KB
    
    console.log(`Original size: ${originalSize.toFixed(2)} KB`);
    
    // Get image metadata to check current dimensions
    const metadata = await sharp(inputPath).metadata();
    console.log(`Current dimensions: ${metadata.width}x${metadata.height}`);
    
    // Resize to 343x343 to match displayed dimensions (PageSpeed recommendation)
    // Even if file size increases slightly, matching dimensions is important for performance
    console.log(`Resizing from ${metadata.width}x${metadata.height} to 343x343...`);
    
    // Create optimized PNG at correct size
    const optimizedPng = await sharp(inputPath)
        .resize(343, 343, {
            fit: 'inside',
            withoutEnlargement: true,
        })
        .png({
            compressionLevel: 6,
        })
        .toBuffer();
    
    // Also create WebP version (typically 25-35% smaller than PNG)
    const optimizedWebp = await sharp(inputPath)
        .resize(343, 343, {
            fit: 'inside',
            withoutEnlargement: true,
        })
        .webp({
            quality: 85,
        })
        .toBuffer();
    
    const optimizedPngSize = optimizedPng.length / 1024; // KB
    const optimizedWebpSize = optimizedWebp.length / 1024; // KB
    const pngSavings = originalSize - optimizedPngSize;
    
    console.log(`Optimized PNG size: ${optimizedPngSize.toFixed(2)} KB`);
    console.log(`Optimized WebP size: ${optimizedWebpSize.toFixed(2)} KB`);
    console.log(`PNG savings: ${pngSavings.toFixed(2)} KB (${((pngSavings / originalSize) * 100).toFixed(1)}% ${pngSavings > 0 ? 'reduction' : 'increase'})`);
    console.log(`WebP savings: ${(originalSize - optimizedWebpSize).toFixed(2)} KB (${(((originalSize - optimizedWebpSize) / originalSize) * 100).toFixed(1)}% reduction)`);
    
    // Always resize to correct dimensions (matching displayed size is more important than file size)
    // This fixes the PageSpeed issue: "This image file is larger than it needs to be (400x400) for its displayed dimensions (343x343)"
    
    // Write WebP first (smaller, better compression)
    writeFileSync(webpPath, optimizedWebp);
    
    // Write PNG (may be larger but needed for fallback)
    // Use a temporary file approach to avoid file locking issues
    const tempPngPath = join(process.cwd(), 'public', 'diamond-logo-temp.png');
    writeFileSync(tempPngPath, optimizedPng);
    
    // Replace original if temp file was created successfully
    if (existsSync(tempPngPath)) {
        try {
            if (existsSync(outputPath)) {
                unlinkSync(outputPath);
            }
            writeFileSync(outputPath, optimizedPng);
            unlinkSync(tempPngPath);
        } catch (err) {
            console.warn('Could not replace original PNG file (may be in use):', err.message);
            console.log('Temporary optimized file created at:', tempPngPath);
        }
    }
    
    console.log('✓ Image resized to 343x343 (matching displayed dimensions)');
    console.log('✓ WebP version created for better compression');
    console.log('⚠ Note: File size may increase slightly, but matching dimensions improves performance');
} catch (error) {
    console.error('Error optimizing image:', error.message);
    process.exit(1);
}

