# Copy-Paste Method for GitHub Upload

## Method: Copy-Paste File Contents

Since downloads aren't working, you can copy-paste the file contents directly:

### Step 1: Go to GitHub
https://github.com/kburke119/mainstreetdigital.github.io

### Step 2: Replace Files
For each file below, click on the file in GitHub, then "Edit this file", and replace the content with the new version.

### Step 3: Files to Update

**Main Files:**
1. `index.html` - Copy from Replit file explorer
2. `our-apps.html` - Copy from Replit file explorer  
3. `assets/css/main.css` - Copy from Replit file explorer

**Files to Download from Replit:**
- `assets/images/Digital Marketing Audit Example.gif` (this needs to be downloaded and uploaded)
- `assets/images/main-street-logo.png` (if changed)

### Step 4: Commit Changes
After each file edit, commit with message: "Updated website design"

## Alternative: GitHub CLI (if you have it)
```bash
gh repo clone kburke119/mainstreetdigital.github.io
# Copy files to local directory
gh repo push
```

This method ensures you get all the improvements without dealing with Git locks!