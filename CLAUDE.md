# Science Corps Website — Project Memory

## Project Overview
This is a static HTML website for Science Corps (science-corps.org), a nonprofit organization. It was migrated from WordPress to a static site hosted on GitHub Pages after a malware infection on the WordPress site.

## Tech Stack
- Pure HTML, CSS, JavaScript (no frameworks, no CMS)
- Hosted on: GitHub Pages
- Domain registrar: GoDaddy
- Repo: https://github.com/brubin-web/science-corps-website

## File Structure
- /index.html        → Home page
- /about-us.html     → About Us (Host Sites, Team, Partners, FAQs)
- /fellows.html      → Current and Former Fellows
- /apply.html        → Application page
- /donate.html       → Donation page
- /blog.html         → Blog listing
- /contact.html      → Contact page
- /css/style.css     → Main stylesheet
- /js/main.js        → JavaScript (nav, scroll, FAQ accordion, contact form)
- /images/           → All media/images
- /blog/             → Individual blog post pages

## Pages and Anchor Links
- About Us page uses: #host1, #team1, #partner1, #faq
- Fellows page uses: #currentfellows, #formerfellows1

## Blog Posts (migrated from WordPress)
1. blog/bianca-baldassarri-fellow-update.html — Nov 2024
2. blog/filipinas-in-stem-reinabelle-reyes.html — Dec 2023
3. blog/filipinas-in-stem-iris-bea-ramiro.html — Oct 2023
4. blog/filipinas-in-stem-ariane-peralta.html — Aug 2023
5. blog/filipinas-in-stem-hyacinth-suarez.html — Jun 2023
6. blog/filipinas-in-stem-series-launch.html — May 2023
7. blog/2020-nobel-prize-chemistry.html — Oct 2020
8. blog/photos-gabys-fellowship-aavishkaar.html — Feb 2020

## Key Contacts (from WordPress backup)
- fellows@science-corps.org — General / fellowship inquiries
- pnayga@science-corps.org — Donations and support
- ccho@science-corps.org — Chloe Cho (Co-Founder)

## Donation
- Platform: Flipcause
- Link: https://www.flipcause.com/secure/cause_pdetails/MjMyOTM4

## GitHub Pages Setup
- Branch: master
- GitHub Pages URL: https://brubin-web.github.io/science-corps-website
- Custom domain: science-corps.org (configured via GoDaddy DNS)

## GoDaddy DNS Records (already configured or pending)
- Type A    @    185.199.108.153
- Type A    @    185.199.109.153
- Type A    @    185.199.110.153
- Type A    @    185.199.111.153
- Type CNAME  www  brubin-web.github.io

## Migration History
- Original CMS: WordPress (retired due to malware/spam injection)
- WordPress backup files are in: March 16 2026 Wordpress Backup/
- Malware was found injected into page revisions (obscene spam links) — NOT in any HTML files in this repo
- Migration date: March 2026
- WordPress DB: backup_2026-03-16-1903_Science_Corps_295f178c3b7c-db (73MB SQL dump)
- Uploads: 1,589 images extracted to the backup uploads folder

## How to Update the Site
1. Edit the relevant HTML file directly
2. Run: git add . && git commit -m "describe your change"
3. Run: git push
4. GitHub Pages auto-deploys within ~1 minute

## Common Tasks
- Add a new blog post: Create a new .html file in /blog/,
  then add a card linking to it in blog.html and index.html
- Update team/staff info: Edit about-us.html under the #team1 section
- Update fellows: Edit fellows.html under #currentfellows or #formerfellows1
- Update donation link: Edit donate.html (currently points to Flipcause)

## TODO Items (marked with [TODO: fill in] throughout the site)
- Complete Filipinas in STEM interview transcripts (Hyacinth, Ariane, Iris Bea, Reinabelle)
- Add Cassidy Childs bio on fellows.html
- Add Helena's last name and bio on fellows.html
- Add additional host sites and partners
- Add gallery photos to Gaby's fellowship post
- Add full team bios and photos to about-us.html
- Consider adding a CNAME file for custom domain
