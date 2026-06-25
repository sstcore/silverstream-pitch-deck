# SilverStream Trading - Interactive Pitch Deck

This repository contains the interactive, web-based pitch deck for SilverStream Trading FZCO. It serves as a modern, high-end replacement for a traditional PowerPoint presentation.

It is built as a **pure static HTML/CSS/JS site**. No Node.js, Webpack, or build steps are required. You can run it simply by opening the file in your browser.

## How to View Locally (No Node.js Required)

1. Open the folder containing these files on your computer.
2. Double-click on `presentation.html`.
3. It will open directly in Chrome/Safari/Edge and function perfectly.

## How to Deploy to GitHub Pages (For Free Hosting)

1. **Initialize a Git Repository**
   Open your terminal in this directory and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SilverStream Pitch Deck"
   ```

2. **Create a Repository on GitHub**
   - Go to [GitHub.com](https://github.com) and create a new public or private repository named `silverstream-deck`.
   - Do NOT initialize it with a README, .gitignore, or license.

3. **Push Code to GitHub**
   Link your local repository to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/silverstream-deck.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Navigate to your repository on GitHub.
   - Click on **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and the `/ (root)` folder.
   - Click **Save**.

5. **Final Step: Set the Index Page**
   Since the main file is named `presentation.html`, GitHub Pages will look for an `index.html` by default. 
   You can either:
   A) Rename `presentation.html` to `index.html` before pushing, OR
   B) Send investors the exact link: `https://YOUR_USERNAME.github.io/silverstream-deck/presentation.html`

## Technical Architecture

- **CSS Scroll Snapping**: Creates the "slide deck" presentation feel without heavy JS libraries.
- **GSAP (GreenSock)**: Triggers high-end fade and slide animations when a slide snaps into view.
- **Dynamic DOM Elements**: The Level-2 Order book on Slide 4 is built entirely using animated HTML elements via `js/orderbook.js`. No backend required.
