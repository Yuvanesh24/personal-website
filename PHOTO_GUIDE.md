# 📸 Photo Setup Guide

## ✅ **Your Photo Is Now Integrated!**

Your photo will appear in two places:
1. **Hero Section** - Large circular photo with animated background
2. **About Section** - Smaller professional headshot

---

## 📁 **Where to Place Your Photo:**

### **Primary Location:**
```
/Users/yuvaneshs/personal-website/public/
```

### **File Naming:**
- ✅ Recommended: `profile-photo.jpg`
- ✅ Also works: `avatar.png`, `headshot.jpg`, etc.

### **Supported Formats:**
- 📸 **JPEG** - Best for photos (smaller file size)
- 🖼️ **PNG** - Good if you need transparency
- 📱 **WebP** - Modern format (smaller + quality)

---

## ⚙️ **How to Change Photo Name:**

In `src/App.jsx`, line 15:
```javascript
const personalInfo = {
  // ... other info
  photo: "/profile-photo.jpg"  // ✏️ Change this if needed
};
```

**Examples:**
```javascript
photo: "/my-photo.jpg"     // If your file is my-photo.jpg
photo: "/avatar.png"       // If your file is avatar.png
photo: "/headshot.webp"    // If your file is headshot.webp
```

---

## 🎨 **Photo Recommendations:**

### **Hero Section (Large photo):**
- ✅ **Size:** 400x400px minimum
- ✅ **Format:** Square (1:1 ratio)
- ✅ **Style:** Professional headshot
- ✅ **Background:** Clean, uncluttered

### **Good Photo Examples:**
- 🎯 Professional headshot
- 🎯 Clean background
- 🎯 Good lighting
- 🎯 Smile/friendly expression

---

## 🔄 **If Photo Doesn't Appear:**

1. **Check file location:** Make sure it's in `/public/` folder
2. **Check filename:** Update the `photo` value in `personalInfo`
3. **Refresh browser:** Hard refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
4. **Check file extension:** `.jpg`, `.png`, `.webp` all work

---

## 📱 **Mobile Optimization:**

The photos automatically:
- ✅ Scale properly on mobile
- ✅ Maintain circular shape
- ✅ Stay centered and responsive

---

## 🚀 **Ready to Test:**

1. Place your photo in `/public/`
2. Update filename if needed in `App.jsx`
3. Refresh `http://localhost:5173/`
4. Your photo should appear in both sections!

---

## 🎨 **Bonus: Multiple Photos**

If you want different photos for each section:

```javascript
const personalInfo = {
  heroPhoto: "/hero-photo.jpg",    // Large hero section
  aboutPhoto: "/about-photo.jpg",  // Smaller about section
  // ... rest of your info
};
```

Your website is now ready for your professional photo! 🎉