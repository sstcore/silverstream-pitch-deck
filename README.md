# SilverStream Trading - Interactive Pitch Deck

[![Website](https://img.shields.io/badge/Website-silverstreamtrading.com-00d2ff?style=for-the-badge)](https://silverstreamtrading.com)
[![Live Deck](https://img.shields.io/badge/Live_Deck-sstcore.github.io-F3BA2F?style=for-the-badge)](https://sstcore.github.io/silverstream-pitch-deck/)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML_/_CSS_/_JS-2ed573?style=for-the-badge)](#)

This repository contains the interactive, web-based pitch deck for SilverStream Trading FZCO. It serves as a modern, high-end replacement for a traditional PowerPoint presentation.

It is built as a **pure static HTML/CSS/JS site**. No Node.js, Webpack, or build steps are required. You can run it simply by opening the file in your browser.

## Official Links
- **Website:** [silverstreamtrading.com](https://silverstreamtrading.com)
- **Live Pitch Deck:** [https://sstcore.github.io/silverstream-pitch-deck/](https://sstcore.github.io/silverstream-pitch-deck/)

## How to View Locally (No Node.js Required)

1. Open the folder containing these files on your computer.
2. Double-click on `index.html`.
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
   - Go to [GitHub.com](https://github.com) and create a new public or private repository named `silverstream-pitch-deck`.
   - Do NOT initialize it with a README, .gitignore, or license.

3. **Push Code to GitHub**
   Link your local repository to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/silverstream-pitch-deck.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Navigate to your repository on GitHub.
   - Click on **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and the `/ (root)` folder.
   - Click **Save**.

5. **Final Step: Visit the URL**
   GitHub Pages will look for your `index.html` by default. Your live pitch deck will be available at:
   `https://YOUR_USERNAME.github.io/silverstream-pitch-deck/`

## Technical Architecture

- **CSS Scroll Snapping**: Creates the "slide deck" presentation feel without heavy JS libraries.
- **GSAP (GreenSock)**: Triggers high-end fade and slide animations when a slide snaps into view.
- **Dynamic DOM Elements**: The Level-2 Order book on Slide 4 is built entirely using animated HTML elements via `js/orderbook.js`. No backend required.

## Structure Overview

This pitch deck is divided into three primary strategy pillars:
1. **Proprietary Algorithmic Trading**: Our highly-confidential alpha models, execution engines, and risk management.
2. **Market Making & Liquidity Provision**: Our high-frequency continuous quoting infrastructure across CEXs and DEXs.
3. **Institutional Trade Finance**: Our real-world asset bridge, using BTC as overcollateralized security to fund physical commodity trades.

## Contact

For inquiries regarding investment or capital deployment, please see the final slide of the presentation.