# GitHub Repository Reset & Rename Guide

## Step 1: Delete Old Repository

1. Go to **github.com/YOUR_USERNAME/virelo-finds**
2. Click **Settings** tab (top right of repo page)
3. Scroll down to **Danger Zone** section
4. Click **Delete this repository**
5. Type `YOUR_USERNAME/virelo-finds` to confirm
6. Click **I understand, delete this repository**

⚠️ **Warning:** This permanently deletes all code, issues, and history. Make sure you have backups!

## Step 2: Create New Repository

1. Click **+** (top right) → **New repository**
2. **Repository name:** `virelo-finds` (or your preferred name)
3. **Description:** "Curated AliExpress deals and affiliate product finder"
4. Check **Add a README file**
5. Click **Create repository**

## Step 3: Upload Site Files

### Option A: GitHub Web Upload (Easiest)
1. In your new repo, click **Add file** → **Upload files**
2. Drag & drop all files from the `site-files` folder
3. Add commit message: `"Initial commit: Virelo Finds affiliate site"`
4. Click **Commit changes**

### Option B: Git Command Line
```bash
git clone https://github.com/YOUR_USERNAME/virelo-finds.git
cd virelo-finds
cp -r /path/to/site-files/* .
git add .
git commit -m "Initial commit: Virelo Finds affiliate site"
git push origin main
```

## Step 4: Enable GitHub Pages

1. Go to **Settings** → **Pages** (left sidebar)
2. **Source:** Select **Deploy from a branch**
3. **Branch:** Select **main** → **/ (root)**
4. Click **Save**
5. Wait 2-5 minutes for deployment
6. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/virelo-finds
   ```

## Step 5: Custom Domain (Optional)

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `virelofinds.com`)
3. Click **Save**
4. Add DNS records at your domain registrar:
   - **Type:** A → **Value:** `185.199.108.153`
   - **Type:** A → **Value:** `185.199.109.153`
   - **Type:** A → **Value:** `185.199.110.153`
   - **Type:** A → **Value:** `185.199.111.153`
   - **Type:** CNAME → **Name:** `www` → **Value:** `YOUR_USERNAME.github.io`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not showing | Wait 5-10 minutes, check Pages settings |
| 404 error | Ensure `index.html` is in root, not a subfolder |
| Images not loading | Check file paths are relative (e.g., `./assets/logo.png`) |
| CSS not applying | Ensure `style.css` is in same folder as `index.html` |

## Rename Repository

If you want to rename without deleting:
1. Go to **Settings** → **General**
2. Under **Repository name**, enter new name
3. Click **Rename**
4. GitHub Pages URL will update automatically
