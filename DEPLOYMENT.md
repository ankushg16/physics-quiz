# Deployment Guide for Physics Quiz

## Method 1: GitHub Pages (Easiest for Web Version)

### Prerequisites:
- GitHub account
- Git installed on your computer

### Step-by-Step:

#### 1. Create GitHub Repository
```bash
# Navigate to your project directory
cd /path/to/quiz/folder

# Initialize git
git init

# Add files
git add physics_quiz.html physics_quiz.py README.md

# Commit
git commit -m "Add physics quiz system"

# Create repository on GitHub (do this first on github.com)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/physics-quiz.git
git branch -M main
git push -u origin main
```

#### 2. Rename HTML File
- Rename `physics_quiz.html` to `index.html`
- Commit and push:
```bash
mv physics_quiz.html index.html
git add index.html
git commit -m "Rename to index.html for GitHub Pages"
git push
```

#### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in left sidebar
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes

#### 4. Access Your Quiz
Your quiz is now live at:
```
https://YOUR_USERNAME.github.io/physics-quiz/
```

### Updating the Quiz:
```bash
# Make changes to index.html
git add index.html
git commit -m "Update quiz questions"
git push
# Changes will be live in 1-2 minutes
```

---

## Method 2: Netlify (Alternative for Web)

### Steps:
1. Create account on netlify.com
2. Drag and drop your `physics_quiz.html` file
3. Rename to `index.html` if needed
4. Get instant deployment link
5. Optional: Configure custom domain

### Advantages:
- Faster deployment
- Better analytics
- Automatic HTTPS
- Custom domains easier

---

## Method 3: Self-Hosted Server

### For Web Version:

#### Using Apache:
```bash
# Copy file to web directory
sudo cp physics_quiz.html /var/www/html/index.html

# Set permissions
sudo chmod 644 /var/www/html/index.html

# Restart Apache
sudo systemctl restart apache2
```

#### Using Python Simple Server:
```bash
# Navigate to quiz directory
cd /path/to/quiz

# Start server
python -m http.server 8000

# Access at: http://localhost:8000/physics_quiz.html
```

---

## Method 4: Distribute Python Version

### Making Executable:

#### Linux/Mac:
```bash
# Add shebang to top of file (already included)
# Make executable
chmod +x physics_quiz.py

# Run
./physics_quiz.py
```

#### Windows:
```batch
# Just run with Python
python physics_quiz.py

# Or create batch file (quiz.bat):
@echo off
python physics_quiz.py
pause
```

### Creating Standalone Executable:

```bash
# Install PyInstaller
pip install pyinstaller

# Create executable
pyinstaller --onefile physics_quiz.py

# Executable will be in dist/ folder
```

---

## Method 5: Google Drive (Quick Share)

### For Testing/Sharing:

1. Upload `physics_quiz.html` to Google Drive
2. Right-click → Get link
3. Change to "Anyone with link can view"
4. Share link with students

**Note**: This won't run JavaScript properly. Use for viewing only.

---

## Method 6: Cloud Hosting Platforms

### Vercel:
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Railway:
- Connect GitHub repo
- Auto-deploy on push
- Free tier available

### Render:
- Static site hosting
- Connect to GitHub
- Automatic deploys

---

## Recommended Setup for Educational Use

### Best Option:
**GitHub Pages** - because:
- ✅ Free forever
- ✅ Easy to update
- ✅ Students can fork and modify
- ✅ Version control included
- ✅ Professional URL

### Setup Time: ~5 minutes

### URL Example:
```
https://samirmeher.github.io/baphy105-quiz/
```

---

## Customization After Deployment

### Update Questions:
1. Edit `index.html` locally
2. Test changes (open in browser)
3. Push to GitHub
4. Wait ~1 minute for deployment

### Track Usage:
- Add Google Analytics
- Use GitHub repository insights
- Monitor with Netlify/Vercel analytics

### Custom Domain:
1. Buy domain (optional)
2. In GitHub Pages settings:
   - Add custom domain
   - Enable HTTPS
3. Update DNS records

---

## Troubleshooting

### Quiz doesn't load:
- Check browser console (F12)
- Verify file name is `index.html`
- Clear browser cache

### GitHub Pages not working:
- Wait 2-3 minutes after enabling
- Check repository is public
- Verify branch is `main`

### Styling broken:
- CSS is inline, should work everywhere
- Check for ad-blockers
- Try different browser

---

## Security Considerations

### For Public Deployment:
- ✅ No server-side code (safe)
- ✅ No database (safe)
- ✅ No user data collection (safe)
- ✅ Pure client-side (secure)

### Privacy:
- No tracking by default
- No cookies used
- No data sent to servers
- Can work 100% offline

---

## Performance Optimization

### For Faster Loading:
1. Already optimized (single file)
2. Minify CSS/JS if needed
3. Enable CDN (automatic on GitHub Pages)

### For Many Students:
- GitHub Pages handles thousands of users
- No server load issues
- Automatically scales

---

## Maintenance

### Regular Updates:
- Add new questions periodically
- Fix typos in solutions
- Update styling based on feedback
- Add new topics

### Version Control:
```bash
# Tag releases
git tag -a v1.0 -m "Initial release"
git push origin v1.0

# Create branches for major changes
git checkout -b update-questions
# Make changes
git push origin update-questions
```

---

## Student Instructions

### How to Use:
1. Visit the quiz URL
2. Answer questions in order
3. Use hints wisely
4. Read all solutions
5. Retake to improve

### For Practice:
- Take quiz multiple times
- Try without hints first
- Review solutions carefully
- Make notes of mistakes

---

**Questions?** Open an issue on GitHub!
