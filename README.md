# Ajay Jeevan Jose — Portfolio

Personal portfolio: a journey from physics to production AI, with every project opening in a side panel.
Built with Next.js (App Router) + TypeScript and plain CSS. No UI or animation libraries.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

Needs Node.js 20.9 or newer.

## Edit content

All the text lives in **`data/profile.ts`**: projects, education, skills, certifications and links.
Change it there. The components only handle layout.

- **Photo:** replace `public/ajay.jpg`. Keep the file name, or update `components/PhotoTile.tsx`.
- **Résumé:** replace `public/Ajay_Jeevan_Jose_Resume.pdf`. Keep the file name.
- **Deep link to a project:** `https://your-site/#project-mlr` opens that project's panel on load.

## Deploy to Vercel

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/jeev-jo/portfolio.git
   git push -u origin main
   ```
2. On vercel.com, click **Add New → Project** and import the repo.
3. Keep the defaults (Vercel detects Next.js) and click **Deploy**.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain, for example `https://ajayjeevan.dev`, so link previews use it.

Every push to `main` redeploys the site automatically.

## Structure

```
app/            layout (fonts, SEO), page, global styles, favicon
components/     Header, Hero, Globe (CSS 3D), PhotoTile, Journey, ProjectCard,
                ProjectDrawer, Toolkit, Contact, Reveal, useTilt
data/profile.ts all site content
public/         photo and résumé PDF
```
