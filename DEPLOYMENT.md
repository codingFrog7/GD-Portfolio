# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages at: `https://codingFrog7.github.io/GD-Portfolio/`

## Deployment Steps

1. **Make sure all changes are committed:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

2. **Build and deploy to GitHub Pages:**
   ```bash
      
   ```

This command will:
- Build your production-ready app
- Deploy it to the `gh-pages` branch
- Make it available at `https://codingFrog7.github.io/GD-Portfolio/`

## Important Notes

- The base path is set to `/GD-Portfolio/` in `vite.config.ts`
- If you change your repository name, update the `base` property in `vite.config.ts`
- The deployment creates a `gh-pages` branch automatically - don't edit this branch manually
- After deployment, it may take a few minutes for GitHub Pages to update

## Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Select `/ (root)` folder
7. Click **Save**

Your site will be available at: `https://codingFrog7.github.io/GD-Portfolio/`

## Troubleshooting

- If images don't load, make sure all image paths use relative paths or the base path
- Clear your browser cache after deployment
- Check that the `gh-pages` branch exists after running `npm run deploy`