# 🚀 How to Deploy Your Website

## Method 1: Vercel (Recommended - Easiest & Free)

### Step 1: Build Your Website
```bash
cd /Users/yuvaneshs/personal-website
npm run build
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/Yuvanesh24/personal-website.git
git push -u origin main
```

### Step 3: Deploy with Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect it's a React app
6. Click **"Deploy"**
7. Your site will be live at: `https://personal-website.vercel.app`

---

## Method 2: Netlify (Also Free & Easy)

### Step 1: Build Website
```bash
npm run build
```

### Step 2: Drag & Drop Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up and click **"Sites" → "Add new site"**
3. Drag your `dist` folder to the deploy area
4. Your site will be live at: `https://random-name.netlify.app`

---

## Method 3: GitHub Pages (Completely Free)

### Step 1: Update vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/personal-website/' // Add this line
})
```

### Step 2: Build and Deploy
```bash
npm run build
# Copy dist folder content to a new folder called 'personal-website'
# Push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/personal-website"
4. Click **Save**
5. Site live at: `https://Yuvanesh24.github.io/personal-website`

---

## 🎯 Quick Deployment Script

Create this script in your project:

### deploy.sh
```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Step 1: Build
npm run build

# Step 2: Git operations
git add .
git commit -m "Deploy website - $(date)"
git push origin main

# Step 3: Vercel deploy (if installed)
if command -v vercel &> /dev/null; then
    echo "📦 Deploying to Vercel..."
    vercel --prod
else
    echo "✅ Pushed to GitHub! Deploy manually at Vercel"
fi

echo "🎉 Deployment complete!"
echo "🌐 Your site should be live soon!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

---

## 🔧 Before Deployment Checklist

### ✅ Required Changes:
1. **Update all content** in App.jsx with your real details
2. **Add your 4 logos** to `/public/` folder
3. **Test locally:** `npm run dev` and check everything works
4. **Fix any console errors** in browser DevTools

### ✅ Optimization Tips:
1. **Optimize images:** Use WebP format, compress logos
2. **Check responsive design:** Test on mobile devices
3. **Verify all links:** GitHub, LinkedIn, projects should work
4. **Test contact form:** Ensure submit works properly

---

## 📊 Best Hosting Options

| Platform | Cost | Speed | Custom Domain | CI/CD | Best For |
|----------|-------|--------|---------------|---------|------------|
| **Vercel** | Free | ⭐⭐⭐ | ✅ | ✅ | React/Vue apps |
| **Netlify** | Free | ⭐⭐⭐ | ✅ | ✅ | Static sites |
| **GitHub Pages** | Free | ⭐⭐ | ✅ | ❌ | Open source |
| **Cloudflare Pages** | Free | ⭐⭐⭐ | ✅ | ✅ | Static sites |
| **AWS S3** | Paid | ⭐⭐⭐ | ✅ | ❌ | Enterprise |

---

## 🌐 Custom Domain Setup

### After Deployment:

#### Vercel:
```bash
vercel --prod
# Then in Vercel dashboard → Settings → Domains → Add custom domain
```

#### Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as shown

---

## 🔍 Debug Common Issues

### Build Errors:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Failures:
- Check for missing files in `/public/` folder
- Verify all image paths are correct
- Check console for 404 errors
- Ensure no absolute paths in production

### Image Loading Issues:
- Verify file names match EXACTLY
- Check file extensions (.png vs .jpg)
- Test image URLs manually

---

## 📱 Mobile Testing

Before final deployment:
1. **Chrome DevTools:** Toggle device view
2. **Real devices:** Test on actual phones
3. **Browser compatibility:** Safari, Chrome, Firefox

---

## 🎉 Post-Deployment

### After your site is live:
1. **Share on LinkedIn** with your portfolio link
2. **Add to email signature**
3. **Update résumé** with website URL
4. **Submit to design portfolios** if desired
5. **Monitor with Google Analytics** (optional)

---

## 🚀 Quick Start Commands

```bash
# 1. Go to project
cd /Users/yuvaneshs/personal-website

# 2. Build for production
npm run build

# 3. Choose your deployment method:
# Vercel: Push to GitHub and deploy via Vercel
# Netlify: Drag `dist` folder to Netlify
# GitHub Pages: Configure as shown above

# 4. Your professional website is live! 🌟
```

---

## 🎯 Recommended: Vercel

**Why Vercel is best for you:**
- ✅ Completely free
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ HTTPS automatically
- ✅ Global CDN (fast worldwide)
- ✅ Preview deployments
- ✅ Perfect for React apps
- ✅ Easy rollback to previous versions

**Your website will look professional and load fast globally!** 🌐✨