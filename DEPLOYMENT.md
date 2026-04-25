# Vercel Deployment Guide

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project directory**:
   ```bash
   cd "One piece"
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Confirm you want to deploy to Vercel
   - Select your scope (personal account)
   - Choose a project name (or use default)
   - Accept default settings

5. **Your site will be live at**:
   ```
   https://[project-name].vercel.app
   ```

### Option 2: Using Vercel Dashboard (Web UI)

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign in with your GitHub/GitLab/Bitbucket account**

3. **Click "New Project"**

4. **Import your repository** or upload the project folder

5. **Configure settings**:
   - Framework: React (auto-detected)
   - Build Command: `npm run build` (auto-configured)
   - Install Command: `npm install` (auto-configured)
   - Output Directory: `dist` (auto-configured)

6. **Click "Deploy"** and wait for the build to complete

### Option 3: GitHub Integration (Best for Continuous Deployment)

1. **Push your project to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and connect your GitHub account**

3. **Click "Import Project"** and select your repository

4. **Vercel will auto-detect all settings** (Framework, Build, etc.)

5. **Click "Deploy"**

6. **After each push to main branch, Vercel auto-deploys!**

## Environment Variables (if needed in future)

If you need environment variables:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (they'll auto-sync to `process.env`)

Example in code:
```javascript
const apiUrl = process.env.VITE_API_URL || 'https://api.example.com';
```

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add your custom domain
   - Update DNS records at your domain provider

2. **DNS Records to Add**:
   ```
   Type: CNAME
   Name: www (or root)
   Value: cname.vercel.app
   ```

## Monitoring & Analytics

After deployment, you can:
- View real-time logs in Vercel Dashboard
- Check analytics and visitor stats
- Monitor performance metrics
- Set up automatic rollbacks

## Troubleshooting

### Build Failed?
- Check `vercel logs` for errors
- Ensure all dependencies are in `package.json`
- Verify build command: `npm run build`

### 404 Errors on Routes?
- Make sure you're using a client-side router
- For SPA (Single Page App), routes redirect to `index.html`

### Slow Performance?
- Check Vercel Analytics
- Optimize images and assets
- Use Vercel Edge Functions if needed

## Project Ready!

Your portfolio is configured and ready for Vercel. Key files for deployment:
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ `package.json` - Dependencies and scripts
- ✅ `vite.config.js` - Build configuration

Just deploy and your One Piece portfolio will be live! 🏴‍☠️
