# 🚀 How to Publish Your Website

## Option 1: Free GitHub Pages (Recommended for beginners)

### Step 1: Build your website
```bash
cd /Users/yuvaneshs/personal-website
npm run build
```

### Step 2: Push to GitHub
```bash
# Initialize git if you haven't
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub first, then:
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select **Source**: "Deploy from a branch"
4. Select **Branch**: "main" and folder: "/root"
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/your-repo-name`

---

## Option 2: Vercel (Easiest & Free custom domain)

### Step 1: Sign up for Vercel
Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

### Step 2: Import your project
1. Click **"New Project"**
2. Select your GitHub repository
3. Vercel will automatically detect it's a React/Vite project
4. Click **"Deploy"**

### Step 3: Get your URL
Your site will be live at: `https://your-project-name.vercel.app`

---

## Option 3: Netlify (Also free & easy)

### Step 1: Build and create zip
```bash
npm run build
# This creates a 'dist' folder
```

### Step 2: Deploy via drag & drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up and drag your `dist` folder to the deploy area
3. Your site will be live instantly

---

## Option 4: Traditional Web Hosting

### Step 1: Build your site
```bash
npm run build
```

### Step 2: Upload files
1. The `dist` folder contains all your website files
2. Upload these files to your hosting provider (Bluehost, GoDaddy, etc.)
3. Point your domain to the uploaded files

---

## 🎯 **Recommended Approach: Vercel**

**Why Vercel is best for you:**
- ✅ Completely free
- ✅ Automatic deployments when you push to GitHub
- ✅ Custom domain support
- ✅ HTTPS automatically
- ✅ Global CDN (fast loading worldwide)
- ✅ Preview deployments for testing changes

---

## 🔧 **Before Publishing - Update These:**

### 1. Update metadata in `index.html`:
```html
<title>Your Actual Name - Portfolio</title>
<meta name="description" content="Your actual professional description">
```

### 2. Update social links in `App.jsx`:
```javascript
const personalInfo = {
  github: "https://github.com/your-real-username",
  linkedin: "https://linkedin.com/in/your-real-profile",
  twitter: "https://twitter.com/your-real-username"
};
```

### 3. Update project links:
```javascript
const projects = [
  {
    title: "Your Real Project",
    link: "https://github.com/yourusername/real-project"
  }
];
```

---

## 📱 **Mobile Optimization Check**

Before publishing, test on mobile:
1. Open your site on phone browser
2. Check responsive design
3. Test navigation menu
4. Verify all sections work properly

---

## 🎉 **After Publishing**

1. **Share your URL** on LinkedIn, Twitter, etc.
2. **Update your résumé** with the portfolio link
3. **Add to email signature**
4. **Submit to portfolio directories**

---

## 📊 **Analytics (Optional)**

Add Google Analytics to track visitors:
1. Sign up for [Google Analytics](https://analytics.google.com)
2. Get your tracking ID
3. Add the script to your `index.html`

---

### 🚀 **Quick Start with Vercel (3 minutes):**

1. `git add . && git commit -m "Ready to deploy"`
2. Push to GitHub
3. Import project on Vercel
4. Click Deploy
5. 🎉 **Your website is live!**

Which option interests you most? I can walk you through it step by step!