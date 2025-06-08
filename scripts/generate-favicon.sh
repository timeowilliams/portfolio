#!/bin/bash

# Create favicon directory if it doesn't exist
mkdir -p public/favicon

# Generate different sizes of ICO and PNG files
convert public/images/TW-logo.png -background none -resize 16x16 public/favicon/favicon-16x16.png
convert public/images/TW-logo.png -background none -resize 32x32 public/favicon/favicon-32x32.png
convert public/images/TW-logo.png -background none -resize 48x48 public/favicon/favicon-48x48.png
convert public/images/TW-logo.png -background none -resize 180x180 public/favicon/apple-touch-icon.png
convert public/images/TW-logo.png -background none -resize 192x192 public/favicon/android-chrome-192x192.png
convert public/images/TW-logo.png -background none -resize 512x512 public/favicon/android-chrome-512x512.png

# Create ICO file with multiple sizes
convert public/favicon/favicon-16x16.png public/favicon/favicon-32x32.png public/favicon/favicon-48x48.png public/favicon/favicon.ico

# Create manifest.json
cat > public/favicon/site.webmanifest << EOL
{
    "name": "Timeo Williams",
    "short_name": "TW",
    "icons": [
        {
            "src": "/favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/favicon/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#556B2F",
    "background_color": "#2F2F2F",
    "display": "standalone"
}
EOL

echo "Favicon files generated in public/favicon/" 