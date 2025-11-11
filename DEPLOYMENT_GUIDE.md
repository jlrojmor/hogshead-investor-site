# Deployment Guide - Hogshead Agave Spirits Investor Site

**Target Domain:** `www.hhagavespirits.com`  
**GitHub Repository:** `jlrojmor/hogshead-investor-site`  
**Current Branch:** `gh-pages`

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Current Setup) ✅
**URL:** `https://jlrojmor.github.io/hogshead-investor-site/`

**Pros:**
- Free hosting
- Already set up
- Easy deployment
- Automatic HTTPS

**Cons:**
- Custom domain requires DNS setup
- URL includes your GitHub username

---

### Option 2: Custom Domain (www.hhagavespirits.com) 🌐
**URL:** `https://www.hhagavespirits.com`

**Requirements:**
1. Own the domain `hhagavespirits.com`
2. Configure DNS settings
3. Add CNAME file to GitHub Pages
4. Update GitHub Pages settings

**Steps:**
1. Purchase domain (if not already owned)
2. Configure DNS:
   - Add CNAME record: `www` → `jlrojmor.github.io`
   - Or A records pointing to GitHub Pages IPs
3. Create `CNAME` file in repository root with: `www.hhagavespirits.com`
4. Update GitHub Pages settings to use custom domain

---

## 📋 Deployment Steps (GitHub Pages)

### Step 1: Commit All Changes
```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "Add compliance features: Privacy Policy, Terms of Service, enhanced disclaimers, functional contact form, accessibility improvements"

# Push to GitHub
git push origin gh-pages
```

### Step 2: Verify Deployment
1. Go to: `https://github.com/jlrojmor/hogshead-investor-site/settings/pages`
2. Verify GitHub Pages is enabled
3. Check that `gh-pages` branch is selected
4. Wait 1-2 minutes for deployment
5. Visit: `https://jlrojmor.github.io/hogshead-investor-site/`

### Step 3: Test Live Site
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Test Privacy Policy link
- [ ] Test Terms of Service link
- [ ] Verify emails are received
- [ ] Check Formspree dashboard for submissions
- [ ] Test on mobile devices
- [ ] Test on different browsers

---

## 🌐 Setting Up Custom Domain (www.hhagavespirits.com)

### Prerequisites:
- [ ] Own the domain `hhagavespirits.com`
- [ ] Have access to domain DNS settings
- [ ] GitHub Pages repository is set up

### Step 1: Create CNAME File
Create a file named `CNAME` (no extension) in the repository root with:
```
www.hhagavespirits.com
```

### Step 2: Configure DNS
In your domain registrar's DNS settings, add:

**Option A: CNAME Record (Recommended)**
- Type: `CNAME`
- Name: `www`
- Value: `jlrojmor.github.io`
- TTL: 3600 (or default)

**Option B: A Records**
- Type: `A`
- Name: `@` (or blank)
- Value: `185.199.108.153`
- Also add: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### Step 3: Update GitHub Pages Settings
1. Go to: `https://github.com/jlrojmor/hogshead-investor-site/settings/pages`
2. Under "Custom domain", enter: `www.hhagavespirits.com`
3. Check "Enforce HTTPS" (after DNS propagates)
4. Save

### Step 4: Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate
- Check DNS propagation: https://www.whatsmydns.net/
- Once propagated, HTTPS will be available

---

## ✅ Pre-Deployment Checklist

### Code Ready:
- [x] All features implemented
- [x] Contact form working
- [x] Privacy Policy created
- [x] Terms of Service created
- [x] Disclaimers added
- [x] Accessibility improvements
- [x] SEO meta tags
- [x] Mobile responsive
- [x] Debug code removed
- [x] No linter errors

### Configuration:
- [x] Formspree endpoint configured
- [x] Contact email: `contact@hhagavespirits.com`
- [x] Governing law: Texas
- [x] Website domain updated in legal pages

### Testing:
- [x] Form submission tested locally
- [x] Emails received successfully
- [x] Submissions appear in Formspree dashboard
- [ ] Final testing on live site (after deployment)

---

## 🚀 Quick Deploy Commands

```bash
# Navigate to project directory
cd /Users/JLRM/Desktop/hogshead-investor-site

# Check current branch (should be gh-pages)
git branch

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Launch: Add compliance features, Privacy Policy, Terms of Service, functional contact form, accessibility improvements"

# Push to GitHub
git push origin gh-pages
```

---

## 📝 Post-Deployment

### Immediate Actions:
1. Visit live site: `https://jlrojmor.github.io/hogshead-investor-site/`
2. Test contact form on live site
3. Verify email delivery
4. Check all links work
5. Test on mobile devices

### First 24 Hours:
- Monitor form submissions
- Check email delivery
- Monitor for any errors
- Check analytics (if available)

### Ongoing:
- Monitor form submissions
- Keep legal documents up to date
- Monitor Formspree usage (50/month limit on free tier)
- Regular backups

---

## 🆘 Troubleshooting

### Form Not Working on Live Site:
- Check browser console for errors
- Verify Formspree endpoint is correct
- Check Formspree dashboard for submissions
- Verify email is verified in Formspree

### Custom Domain Not Working:
- Check DNS propagation status
- Verify CNAME file exists in repository
- Check GitHub Pages settings
- Wait 24-48 hours for DNS propagation

### Links Not Working:
- Check file paths (should be relative)
- Verify all files are committed
- Check GitHub Pages build status

---

## 📞 Support

- **GitHub Pages:** https://docs.github.com/en/pages
- **Formspree:** https://formspree.io/help
- **DNS Issues:** Contact your domain registrar

---

**Ready to deploy! 🚀**

**Current Status:**
- ✅ Code is production-ready
- ✅ All features implemented and tested
- ✅ Configuration complete
- ✅ Ready for GitHub Pages deployment

**Next Step:** Run the deployment commands above to push to GitHub!

