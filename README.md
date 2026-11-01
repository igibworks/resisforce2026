# Integrative Approaches in Health and Wellness

**Satellite Meeting of RESISFORCE 2026**
CSIR-Institute of Genomics and Integrative Biology (CSIR-IGIB), New Delhi
**24 – 26 November 2026**

*Uniting global science to outsmart microbes and safeguard health.*

A static website with the introduction, themes, day-wise schedule, posters and venue of the symposium.
No build step, no dependencies: plain HTML, CSS and JavaScript.

## Themes
- Antimicrobial Resistance
- Oral Microbiome & Biofilms
- Genomics & Computation
- One Health & Global Health

## Project structure
```
index.html          main page
css/style.css       styling
js/schedule.js      <-- EDIT THIS to change the programme
js/main.js          schedule tabs/filters, countdown, mobile menu
assets/hero.svg     hero illustration
assets/favicon.svg  site icon
assets/posters/     poster-1.jpg, poster-2.jpg (the two official posters)
.github/workflows/pages.yml   auto-deploy to GitHub Pages
```

## Run locally
Open `index.html` in a browser, or:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Publish on GitHub Pages
1. Upload all these files to your repository (keep the folder structure).
2. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**
   (or choose "Deploy from a branch" → `main` / root).
3. Your site will be at `https://<username>.github.io/<repository>/`.

## Updating the schedule
The schedule shown now is a **draft placeholder**. Edit `js/schedule.js`
(times, titles, speakers, tracks) and commit. Also fill in the venue address and
contact/registration details in `index.html`.

## Notes
The CSIR-IGIB and RESISFORCE logos are not included; add them with the
organisers' permission. Posters belong to the organisers.
