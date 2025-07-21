# DNS Setup for mainstreetdigitalconsulting.com

## Quick Fix for Your 404 Error

Your GitHub Pages site is now configured for `mainstreetdigitalconsulting.com`. Here's what you need to do:

## Step 1: Update Your GitHub Repository
1. **Upload the new files** (including the updated CNAME file)
2. **Go to your GitHub repository Settings**
3. **Scroll to Pages section**
4. **Under Custom domain**, enter: `mainstreetdigitalconsulting.com`
5. **Save the changes**

## Step 2: Configure DNS at Your Domain Provider

### For GoDaddy, Namecheap, or similar providers:

**Add these DNS records:**

1. **CNAME Record:**
   - Name: `www` 
   - Value: `yourusername.github.io`
   - TTL: 1 Hour

2. **A Records (for apex domain):**
   - Name: `@` (or leave blank)
   - Value: `185.199.108.153`
   - TTL: 1 Hour

   - Name: `@` (or leave blank)
   - Value: `185.199.109.153`
   - TTL: 1 Hour

   - Name: `@` (or leave blank)
   - Value: `185.199.110.153`
   - TTL: 1 Hour

   - Name: `@` (or leave blank)
   - Value: `185.199.111.153`
   - TTL: 1 Hour

## Step 3: Wait for DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- You can check status at: https://www.whatsmydns.net/
- Enter your domain: `mainstreetdigitalconsulting.com`

## Step 4: Enable HTTPS (After DNS propagates)
1. Go back to GitHub repository Settings → Pages
2. Check "Enforce HTTPS" (this will appear after DNS is working)

## Troubleshooting

**If still getting 404:**
1. Check that your repository is public
2. Verify GitHub Pages is enabled in Settings
3. Make sure CNAME file contains exactly: `mainstreetdigitalconsulting.com`
4. Wait for DNS propagation (can take up to 48 hours)

**Quick Test:**
- Try accessing: `https://yourusername.github.io/repository-name`
- If this works, the issue is DNS configuration
- If this doesn't work, check GitHub Pages settings

## Alternative: GitHub Pages Default URL
While waiting for DNS setup, you can use:
`https://yourusername.github.io/repository-name`

Your site should be working within 24-48 hours once DNS propagates!