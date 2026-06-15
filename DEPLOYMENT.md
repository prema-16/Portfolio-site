# Deployment Guide

This guide covers deploying your Premanand Londhe portfolio to various platforms.

## Pre-Deployment Checklist

- [ ] All content updated with your information
- [ ] Social links configured
- [ ] Email service integrated (optional)
- [ ] Resume file added
- [ ] Images optimized and added
- [ ] Project links verified
- [ ] SEO meta tags updated
- [ ] Contact form tested
- [ ] Performance checked
- [ ] Mobile responsiveness verified

---

## Deployment Options

### Option 1: Vercel (Recommended for Vite + React)

**Advantages:**
- Free tier available
- Automatic deployments
- Custom domain support
- Environment variables management
- Analytics included

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
vercel
```

4. **Link custom domain** (optional)
```bash
vercel --prod
```

**Configuration file** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "https://api.example.com"
  }
}
```

---

### Option 2: Netlify

**Advantages:**
- Generous free tier
- Built-in CI/CD
- Form handling
- Serverless functions
- Easy rollbacks

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Connect via Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy
```

3. **Or use Git**
   - Push to GitHub
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

**Netlify.toml configuration:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### Option 3: GitHub Pages

**Advantages:**
- Free hosting
- Integrates with GitHub
- Simple setup
- Good for portfolios

**Steps:**

1. **Update vite.config.js**
```javascript
export default {
  base: '/portfolio/', // Replace with your repo name
  // ... rest of config
}
```

2. **Update package.json**
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
  }
}
```

3. **Build and deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Select "Build and deployment"
   - Choose "Deploy from a branch"
   - Select `gh-pages` branch

---

### Option 4: AWS Amplify

**Advantages:**
- Powerful infrastructure
- Automatic CI/CD
- Custom domain
- Analytics
- Performance monitoring

**Steps:**

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to AWS Amplify**
   - Go to AWS Amplify console
   - Click "New app" → "Host web app"
   - Connect your GitHub account
   - Select repository and branch
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`

3. **Configure environment variables** (if needed)
   - Add in Amplify console
   - Auto-deploy on git push

---

### Option 5: Heroku

**Advantages:**
- Simple deployment
- Environment variables
- Custom domain support

**Steps:**

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create app**
```bash
heroku create your-portfolio-name
```

4. **Deploy**
```bash
npm run build
git add dist -f
git commit -m "Build files"
git push heroku main
```

---

### Option 6: Self-Hosted / VPS

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist` folder to your server**
```bash
scp -r dist/* user@your-server.com:/var/www/portfolio/
```

3. **Configure Nginx** (reverse proxy)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /var/www/portfolio;
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Enable HTTPS** (using Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Custom Domain Setup

### For all platforms:

1. **Purchase domain** from:
   - Namecheap
   - GoDaddy
   - Domain.com
   - Google Domains

2. **Update DNS records** to point to your hosting provider:
   - A record: points to hosting server IP
   - CNAME record: points to hosting platform domain

3. **Configure SSL/HTTPS**
   - Most platforms provide free SSL
   - Enable automatic HTTPS redirect

---

## Environment Variables

Create `.env` file (example):
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=https://api.example.com
```

For production, set these in your hosting platform's environment variables dashboard.

---

## Performance Optimization

### Before Deployment:

1. **Optimize images**
```bash
# Using ImageOptim or similar tools
```

2. **Build analysis**
```bash
npm install --save-dev rollup-plugin-visualizer
```

3. **Check bundle size**
```bash
npm run build
# Check dist folder size
```

4. **Enable compression**
   - Gzip compression on server
   - Brotli compression (better)

### After Deployment:

1. **Monitor performance**
   - Use Lighthouse
   - Check Core Web Vitals
   - Monitor loading times

2. **Set up analytics**
```javascript
// Add to src/App.jsx
import { useEffect } from 'react';

useEffect(() => {
  // Add Google Analytics, Mixpanel, etc.
}, []);
```

---

## SSL/HTTPS Certificate

### Automatic (Recommended):
- Vercel: Automatic
- Netlify: Automatic
- Amplify: Automatic

### Manual:
```bash
# Using Let's Encrypt
sudo certbot certonly --standalone -d yourdomain.com
```

---

## Monitoring & Analytics

### Option 1: Google Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Option 2: Vercel Analytics
- Built-in for Vercel deployments
- No additional setup needed

### Option 3: Plausible Analytics
```html
<!-- Add to index.html -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## Troubleshooting Deployment

### Issue: 404 errors on routes
**Solution:** Configure `try_files` or redirects
```nginx
# Nginx
try_files $uri $uri/ /index.html;
```

### Issue: Static assets not loading
**Solution:** Update `base` in vite.config.js
```javascript
base: '/portfolio/' // if deploying to subdirectory
```

### Issue: CORS errors
**Solution:** Configure proxy or headers
```javascript
// vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:5000'
  }
}
```

### Issue: Build fails
**Solution:** Clear cache and reinstall
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## Post-Deployment

1. **Test website** thoroughly
2. **Check mobile responsiveness**
3. **Verify all links work**
4. **Test contact form** (if applicable)
5. **Check SEO** (meta tags, sitemap)
6. **Monitor analytics**
7. **Set up monitoring alerts**
8. **Keep dependencies updated**

---

## Maintenance

### Monthly:
- Check for security updates
- Review analytics
- Check website performance

### Quarterly:
- Update dependencies
- Review and update content
- Test all functionality

### Annually:
- Renew domain
- Renew SSL certificate
- Full security audit
- Performance review

---

## Quick Deploy Commands

```bash
# Vercel
npm run build && vercel --prod

# Netlify
npm run build && netlify deploy --prod

# GitHub Pages
npm run build && git add dist -f && git commit -m "Deploy" && git subtree push --prefix dist origin gh-pages

# AWS Amplify
git push origin main  # Auto-deploys

# Docker (for self-hosted)
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Check error messages carefully
- Ask on community forums (Stack Overflow, etc.)

---

Good luck with your deployment! 🚀
