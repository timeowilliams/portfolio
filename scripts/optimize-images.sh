#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download and optimize images
# Note: You'll need to manually add the actual project screenshots
# For now, creating placeholder images with proper dimensions

# Deep Focus
convert -size 800x400 xc:#556B2F \
  -gravity center \
  -pointsize 40 \
  -fill white \
  -draw "text 0,0 'Deep Focus'" \
  public/images/deep-focus.png

# AI Legislation Tracker
convert -size 800x400 xc:#556B2F \
  -gravity center \
  -pointsize 40 \
  -fill white \
  -draw "text 0,0 'AI Legislation Tracker'" \
  public/images/ai-tracker.png

# Williams Real Estate
convert -size 800x400 xc:#556B2F \
  -gravity center \
  -pointsize 40 \
  -fill white \
  -draw "text 0,0 'Williams Real Estate'" \
  public/images/williams-re.png

# Optimize all images
for img in public/images/*.png; do
  convert "$img" -strip -quality 85 "$img"
done

echo "Images created and optimized in public/images/" 