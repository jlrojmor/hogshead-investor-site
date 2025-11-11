# GoDaddy DNS Setup Guide for GitHub Pages

**Domain:** `hhagavespirits.com`  
**Target:** `www.hhagavespirits.com` → GitHub Pages  
**GitHub Pages URL:** `jlrojmor.github.io`

---

## 🎯 Step-by-Step Instructions

### Step 1: Create CNAME File (✅ Already Done)
- Created `CNAME` file with: `www.hhagavespirits.com`
- This file will be committed to GitHub

---

### Step 2: Configure DNS at GoDaddy

#### Option A: CNAME Record (Recommended for www)

1. **Log into GoDaddy:**
   - Go to: https://www.godaddy.com
   - Log into your account
   - Go to "My Products" → "Domains"
   - Click on `hhagavespirits.com`
   - Click "DNS" or "Manage DNS"

2. **Add CNAME Record for www:**
   - Click "Add" or "+" to add a new record
   - **Type:** Select `CNAME`
   - **Name:** Enter `www`
   - **Value:** Enter `jlrojmor.github.io`
   - **TTL:** Leave as default (usually 600 seconds or 1 hour)
   - Click "Save"

3. **Verify the Record:**
   - You should see a record like:
     ```
     Type: CNAME
     Name: www
     Value: jlrojmor.github.io
     ```

#### Option B: A Records (For apex domain - hhagavespirits.com without www)

If you also want `hhagavespirits.com` (without www) to work:

1. **Add A Records:**
   - Click "Add" to add a new record
   - **Type:** Select `A`
   - **Name:** Enter `@` (or leave blank, depends on GoDaddy interface)
   - **Value:** Enter `185.199.108.153`
   - **TTL:** Leave as default
   - Click "Save"

2. **Add 3 More A Records:**
   Repeat the above for these IP addresses:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

**Note:** GitHub Pages supports both www and apex domains. You can set up both if you want.

---

### Step 3: Remove Conflicting Records

**Important:** If you have any existing A or CNAME records for `www` or `@`, you may need to remove or update them:

- Remove any existing A records pointing to other IPs
- Remove any existing CNAME records pointing to other domains
- Keep only the new records you just added

---

### Step 4: Update GitHub Pages Settings

1. **Go to GitHub Repository:**
   - Visit: https://github.com/jlrojmor/hogshead-investor-site
   - Click "Settings" tab
   - Click "Pages" in the left sidebar

2. **Configure Custom Domain:**
   - Under "Custom domain", enter: `www.hhagavespirits.com`
   - Click "Save"
   - GitHub will verify the DNS configuration

3. **Enable HTTPS (After DNS propagates):**
   - Once DNS is verified, check "Enforce HTTPS"
   - This may take a few minutes to hours after DNS propagation

---

### Step 5: Wait for DNS Propagation

- **DNS changes can take 24-48 hours to propagate globally**
- **Typically works within 1-2 hours**
- Check propagation status: https://www.whatsmydns.net/
- Enter: `www.hhagavespirits.com`
- Look for CNAME records pointing to `jlrojmor.github.io`

---

## 📋 GoDaddy DNS Records Summary

### For www.hhagavespirits.com:
```
Type: CNAME
Name: www
Value: jlrojmor.github.io
TTL: 600 (or default)
```

### For hhagavespirits.com (apex - optional):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

---

## ✅ Verification Steps

### 1. Check DNS Propagation:
- Visit: https://www.whatsmydns.net/
- Enter: `www.hhagavespirits.com`
- Check if CNAME points to `jlrojmor.github.io`

### 2. Check GitHub Pages Settings:
- Go to repository Settings → Pages
- Verify custom domain is set to `www.hhagavespirits.com`
- Check if DNS is verified (green checkmark)

### 3. Test the Domain:
- Visit: `http://www.hhagavespirits.com`
- Should redirect to: `https://www.hhagavespirits.com` (after HTTPS is enabled)
- Site should load your GitHub Pages site

### 4. Test HTTPS:
- After DNS propagates and GitHub enables HTTPS:
- Visit: `https://www.hhagavespirits.com`
- Should show secure connection (padlock icon)

---

## 🚨 Troubleshooting

### Domain Not Working:
1. **Check DNS propagation:** https://www.whatsmydns.net/
2. **Verify CNAME record:** Should point to `jlrojmor.github.io`
3. **Check GitHub Pages settings:** Custom domain should be set
4. **Wait longer:** DNS can take up to 48 hours

### HTTPS Not Working:
1. **Wait for DNS propagation:** HTTPS enables after DNS is verified
2. **Check GitHub Pages settings:** "Enforce HTTPS" should be checked
3. **Clear browser cache:** Try incognito/private mode
4. **Wait a few hours:** HTTPS certificate generation can take time

### Both www and non-www:
- If you want both `www.hhagavespirits.com` and `hhagavespirits.com` to work:
- Set up both CNAME (www) and A records (@)
- Create two CNAME files (not possible - GitHub only supports one)
- **Recommendation:** Use www subdomain (CNAME) - easier to manage

---

## 📝 Next Steps After DNS Setup

1. **Commit CNAME file to GitHub:**
   ```bash
   git add CNAME
   git commit -m "Add CNAME file for custom domain www.hhagavespirits.com"
   git push origin gh-pages
   ```

2. **Configure DNS at GoDaddy:**
   - Follow steps above
   - Add CNAME record for www

3. **Update GitHub Pages settings:**
   - Add custom domain in GitHub repository settings
   - Wait for DNS verification

4. **Wait for propagation:**
   - Check DNS propagation status
   - Wait 1-48 hours for full propagation

5. **Test:**
   - Visit www.hhagavespirits.com
   - Verify site loads correctly
   - Test contact form
   - Verify HTTPS is working

---

## 🎯 Quick Reference

**GoDaddy DNS Settings:**
- CNAME: `www` → `jlrojmor.github.io`

**GitHub Pages Settings:**
- Custom domain: `www.hhagavespirits.com`
- Enforce HTTPS: Enabled (after DNS verification)

**Expected Result:**
- `https://www.hhagavespirits.com` → Your GitHub Pages site

---

**Once DNS is configured at GoDaddy, the site will be accessible at www.hhagavespirits.com! 🚀**

