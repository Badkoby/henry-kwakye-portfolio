# Favicon Assets

This folder contains the favicon assets for the Henry Kwakye Portfolio website.

## Current Assets
- `favicon.svg` - Vector favicon with HK logo design
- `site.webmanifest` - Web app manifest for PWA features

## Missing Assets (To Generate)
The following PNG assets need to be generated from the `favicon.svg`:

1. **favicon.ico** - 16x16, 32x32, 48x48 multi-size ICO file
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels  
4. **apple-touch-icon.png** - 180x180 pixels
5. **android-chrome-192x192.png** - 192x192 pixels
6. **android-chrome-512x512.png** - 512x512 pixels

## How to Generate PNG Assets

### Method 1: Using Online Tools
1. Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload the `favicon.svg` file
3. Configure settings for different platforms
4. Download the generated favicon package
5. Extract and place files in the `/public` directory

### Method 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Convert SVG to different PNG sizes
magick favicon.svg -resize 16x16 favicon-16x16.png
magick favicon.svg -resize 32x32 favicon-32x32.png
magick favicon.svg -resize 180x180 apple-touch-icon.png
magick favicon.svg -resize 192x192 android-chrome-192x192.png
magick favicon.svg -resize 512x512 android-chrome-512x512.png

# Create multi-size ICO file
magick favicon.svg -resize 16x16 temp16.png
magick favicon.svg -resize 32x32 temp32.png
magick favicon.svg -resize 48x48 temp48.png
magick temp16.png temp32.png temp48.png favicon.ico
rm temp*.png
```

## HTML References
The following favicon links are already included in `index.html`:
- Standard favicon and icon references
- Apple touch icon for iOS devices
- Android Chrome icons for PWA
- Web app manifest reference

## Design
The favicon features the "HK" initials in a modern, gradient design that represents Henry Kwakye's personal brand.
