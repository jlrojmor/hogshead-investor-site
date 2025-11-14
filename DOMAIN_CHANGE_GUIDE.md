# Complete Domain & Company Name Change Guide

## 🎯 What Needs to Change:

### 1. **Company Name:**
- **Old:** Hogshead Agave Spirits / Hogshead Agave Spirits LLC
- **New:** Hogshead Tequila Investments / Hogshead Tequila Investments, LLC

### 2. **Domain:**
- **Old:** `hhagavespirits.com` / `www.hhagavespirits.com`
- **New:** `[NEW DOMAIN]` (you need to provide this)

### 3. **Email:**
- **Old:** `contact@hhagavespirits.com`
- **New:** `[NEW EMAIL]` (you need to provide this)

### 4. **LinkedIn:**
- **Old:** `https://www.linkedin.com/company/hogshead-agave-spirits/`
- **New:** `[NEW LINKEDIN URL]` (you need to provide this)

---

## 📋 Information I Need From You:

**Before I can make all the changes, please provide:**

1. **New Domain Name:**
   - What will be the new domain? (e.g., `hogsheadtequilainvestments.com` or `htinvestments.com`)
   - Is it already registered? If yes, where?

2. **New Email Address:**
   - What will be the new contact email? (e.g., `contact@newdomain.com`)

3. **New LinkedIn URL:**
   - What's the new LinkedIn company page URL?
   - Or do you need to create one?

4. **Timeline:**
   - When do you need this completed?
   - Do you want to keep the old domain active during transition?

---

## ✅ What I'll Update in the Website:

### Files to Update:
1. **index.html** - Main website file
2. **privacy-policy.html** - Privacy policy document
3. **terms-of-service.html** - Terms of service document
4. **sitemap.xml** - Sitemap for search engines
5. **robots.txt** - Robots file
6. **CNAME** - GitHub Pages custom domain file

### Text Changes:
- All instances of "Hogshead Agave Spirits" → "Hogshead Tequila Investments"
- All instances of "Hogshead Agave Spirits LLC" → "Hogshead Tequila Investments, LLC"
- All domain references (`hhagavespirits.com`) → new domain
- All email references (`contact@hhagavespirits.com`) → new email
- All LinkedIn URLs → new LinkedIn URL

### SEO & Meta Tags:
- Page titles
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap URLs

---

## 🔧 Domain Migration Steps (After Website Updates):

### Step 1: Register New Domain
- Register the new domain with your registrar (GoDaddy, etc.)
- Make sure it's ready to use

### Step 2: Update GitHub Pages
1. **Update CNAME file:**
   - Change `CNAME` file content to new domain
   - Commit and push to GitHub

2. **Update GitHub Pages Settings:**
   - Go to: https://github.com/jlrojmor/hogshead-investor-site/settings/pages
   - Update custom domain to new domain
   - Wait for DNS check

### Step 3: Update DNS Records (GoDaddy)
1. **Remove Old Domain DNS:**
   - Remove A records for old domain
   - Remove CNAME for old domain

2. **Add New Domain DNS:**
   - Add 4 A records pointing to GitHub Pages:
     - A: @ → 185.199.108.153
     - A: @ → 185.199.109.153
     - A: @ → 185.199.110.153
     - A: @ → 185.199.111.153
   - Add CNAME: www → jlrojmor.github.io

### Step 4: Update Google Search Console
1. **Add New Property:**
   - Add new domain to Google Search Console
   - Verify ownership

2. **Submit New Sitemap:**
   - Submit sitemap for new domain

3. **Request Indexing:**
   - Request indexing for new domain

### Step 5: Update Email (If Using Custom Domain Email)
- Set up email forwarding or email service for new domain
- Update email addresses in all systems

### Step 6: Update LinkedIn
- Update company page URL if changed
- Update website link in LinkedIn profile

---

## ⚠️ Important Notes:

1. **Old Domain:**
   - You may want to keep old domain active temporarily
   - Set up redirect from old domain to new domain
   - Or let it expire after transition period

2. **SEO Impact:**
   - New domain will start fresh in Google
   - Old domain's SEO value won't transfer automatically
   - May take 1-3 months to regain search rankings

3. **Email Transition:**
   - Set up email forwarding from old to new
   - Notify contacts of email change
   - Update email in all business systems

4. **Legal Documents:**
   - Privacy Policy and Terms of Service will be updated
   - Make sure legal name matches your LLC registration

---

## 📝 Checklist:

### Before Changes:
- [ ] New domain registered
- [ ] New email address set up
- [ ] New LinkedIn page created (if needed)
- [ ] Backup current website (already done via git)

### Website Updates (I'll Do):
- [ ] Update all "Hogshead Agave Spirits" → "Hogshead Tequila Investments"
- [ ] Update all domain references
- [ ] Update all email references
- [ ] Update all LinkedIn URLs
- [ ] Update SEO meta tags
- [ ] Update structured data
- [ ] Update sitemap.xml
- [ ] Update robots.txt
- [ ] Update CNAME file
- [ ] Update privacy-policy.html
- [ ] Update terms-of-service.html

### After Website Updates (You'll Do):
- [ ] Update GitHub Pages custom domain
- [ ] Update DNS records in GoDaddy
- [ ] Update Google Search Console
- [ ] Update email service/forwarding
- [ ] Update LinkedIn profile
- [ ] Test new domain
- [ ] Notify contacts of domain/email change

---

**Please provide the new domain name, email address, and LinkedIn URL, and I'll update everything! 🚀**

