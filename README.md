# AIKids website

A lightweight static website for the AIKids initiative, a hub for AI education activities for children. It uses plain **HTML, CSS and JavaScript**: no build tools, no frameworks, no backend. It is designed to be hosted free on **GitHub Pages** with a custom domain from **123 Reg**.

---

## 1. What's in the folder

```
AIKids/
├── index.html          Home page
├── about.html          About page (mission, goals, meet Spark)
├── activities.html     All activities (cards grid + "coming soon" placeholders)
├── 404.html            Friendly "page not found" page (GitHub Pages uses it automatically)
├── style.css           All styling. Colours and fonts are at the top
├── script.js           Mobile menu, fade-in on scroll, footer year
├── .nojekyll           Tells GitHub Pages to serve the files exactly as they are
├── images/
│   ├── aikids-logo.png Header logo
│   └── spark.png       Spark the mascot
└── assets/
    ├── favicon.png     Browser tab icon
    └── apple-touch-icon.png
```

### Preview it on your computer
Double-click `index.html` to open it in your browser. Everything works offline except the Google Fonts, which fall back to system fonts.

---

## 2. Making common edits

Every editable section is marked in the HTML with a comment like `<!-- EDITABLE: ... -->`.

| I want to… | Where |
|---|---|
| Change site colours or fonts | Top of `style.css`, in the section called **1. DESIGN TOKENS** |
| Change homepage text | `index.html`, in the sections marked `EDITABLE` |
| Change what Spark says | Search the HTML for `speech-bubble` |
| Set the contact email and social links | Footer of **each** page. Contact and YouTube are hidden inside `HIDDEN FOR NOW` comments; delete the `<!--` and `-->` around them to show them again. Put the real URLs in place of `mailto:hello@example.com` and `href="#"`. |
| Add a new activity | See below |
| Replace the logo or mascot | Overwrite `images/aikids-logo.png` / `images/spark.png`, keeping the same file names |

> **Note:** the header and footer are copied into every page (index, about, activities, snowy-quest, 404). If you change a nav link or footer link, change it in all of them.

### Adding a new activity
1. Open `activities.html` and find `<div class="activity-grid">`.
2. Copy an entire `<article class="card"> … </article>` block (e.g. the Snowy Quest one).
3. Paste it after the last real activity, then change the title, description, tags and the button's `href`.
4. Remove a "Coming soon" placeholder card if you don't need it any more.
5. Activities can live anywhere. Spark's Snowy Quest is its own GitHub repository (`spark-snowy-code-quest`), and its **Start Activity** buttons link straight to https://aikids-public.github.io/spark-snowy-code-quest/. For a new activity, put its web address in the button's `href`.

The grid automatically re-arranges for desktop, tablet and mobile.

---

## 3. Deploying to GitHub Pages

### Step 1: Create a GitHub repository
1. Sign in at [github.com](https://github.com) (create a free account if needed).
2. Click **+** (top right) → **New repository**.
3. **Repository name:** e.g. `aikids-website`.
4. Set visibility to **Public**. Free GitHub Pages requires a public repository.
5. Leave "Add a README" **unticked** (this folder already has one).
6. Click **Create repository**.

### Step 2: Upload the site files

**Option A: in the browser (easiest)**
1. On the new repo's page, click **uploading an existing file**.
2. Open the `AIKids` folder on your computer, select **everything inside it** (not the folder itself) and drag it into the browser window. The `images` and `assets` folders upload with it.
   - On a Mac, files starting with a dot (`.nojekyll`) are hidden. Press **Cmd + Shift + .** in Finder to show them.
3. Write a commit message such as `First version of site`, then click **Commit changes**.
4. Check that `index.html` appears at the **top level** of the repository, not inside a sub-folder.

**Option B: from the Terminal (with Git installed)**
```bash
cd ~/Documents/AIKids/AIKids
git init
git add .
git commit -m "First version of AIKids site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aikids-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In the repository, go to **Settings** → **Pages** (left sidebar, under "Code and automation").
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.

### Step 4: Publish publicly
- After 1–2 minutes, the Pages settings screen shows **"Your site is live at …"**, e.g. `https://your-username.github.io/aikids-website/`.
- Progress is visible under the repository's **Actions** tab (a green tick means it's published).
- The site is public as soon as it's live. Anyone with the link can view it.

### Step 5: Updating the site later
- **In the browser:** open the file on GitHub → click the ✏️ pencil icon → make the change → **Commit changes**. To replace images, use **Add file → Upload files** and upload a file with the same name.
- **From the Terminal:**
  ```bash
  cd ~/Documents/AIKids/AIKids
  git add .
  git commit -m "Describe what you changed"
  git push
  ```
- Changes go live in about a minute. If you don't see them, hard-refresh with **Cmd + Shift + R** (Mac) or **Ctrl + F5** (Windows).

---

## 4. Connecting your 123 Reg domain

The steps below use `aikids.example` as a placeholder. Swap in your real domain (e.g. `aikids.co.uk`).
We'll set it up so that **both** `aikids.example` and `www.aikids.example` work, with `www` as the main address.

### Step 1: Tell GitHub about the domain
1. Create a file called `CNAME` (all capitals, no file extension) in the top level of the repo. Its only content is your domain, on a single line, e.g.
   ```
   www.aikids.example
   ```
   No `https://`, no trailing slash. Commit/upload it. (Don't add this file until you have the real domain, or the github.io address will redirect to a domain that doesn't work yet.)
2. In GitHub: **Settings → Pages → Custom domain**, enter `www.aikids.example` and click **Save**.
   (Doing this also creates or updates the `CNAME` file for you. Either way is fine, but the two must match.)

> **Recommended: verify your domain** to stop anyone else ever claiming it on GitHub:
> GitHub → your profile picture → **Settings → Pages → Add a domain**. GitHub gives you a **TXT record** to add in 123 Reg (same screen as below). Once it's added, click **Verify**.

### Step 2: Configure DNS in 123 Reg
1. Log in at [123-reg.co.uk](https://www.123-reg.co.uk) → **Control Panel**.
2. Find your domain and choose **Manage** → **DNS** (shown as **"Manage DNS"** or **"Advanced DNS"**).
3. **Remove any existing records that conflict:**
   - Any **A** or **AAAA** record for `@` (the root) that points to 123 Reg parking or website builder IPs.
   - Any **CNAME** or **A** record for `www`.
   - If 123 Reg has **web forwarding / domain forwarding** turned on, switch it **off**, because it overrides these records.
   - ⚠️ **Do not delete MX records** if you use email on this domain.
4. **Add these four A records** (they point the root domain at GitHub Pages):

   | Type | Hostname | Destination / Value | TTL |
   |---|---|---|---|
   | A | `@` | `185.199.108.153` | default |
   | A | `@` | `185.199.109.153` | default |
   | A | `@` | `185.199.110.153` | default |
   | A | `@` | `185.199.111.153` | default |

5. **Optional, for IPv6:** add these four **AAAA** records:

   | Type | Hostname | Value |
   |---|---|---|
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |

6. **Add one CNAME record** for `www`:

   | Type | Hostname | Destination / Value |
   |---|---|---|
   | CNAME | `www` | `your-username.github.io` |

   Use **your GitHub username** followed by `.github.io`. Do **not** include the repository name. Some 123 Reg screens want a trailing dot (`your-username.github.io.`). If it asks, add it.

7. Save the changes.

> These IP addresses come from GitHub's official docs. Check them once before you set things up:
> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### Step 3: Wait for DNS to update
DNS changes usually take **15 minutes to a few hours**, and can take up to **48 hours**. You can check progress at [dnschecker.org](https://dnschecker.org), or in Terminal:
```bash
dig aikids.example +short        # should list the four 185.199.x.153 addresses
dig www.aikids.example +short    # should show your-username.github.io
```
Back on **Settings → Pages**, GitHub shows **"DNS check successful"** once it can see the records.

### Step 4: Turn on HTTPS (SSL)
- GitHub issues a **free SSL certificate** (via Let's Encrypt) automatically once DNS is correct. This can take up to an hour or so after the DNS check passes.
- When it's ready, tick **Enforce HTTPS** on the **Settings → Pages** screen. Visitors are then always sent to the secure `https://` version.
- If the box is greyed out with "unavailable for your site because your domain is not properly configured", wait a bit longer. If it stays that way, **remove the custom domain, click Save, re-add it, and Save again**. That re-triggers the certificate request.
- You do **not** need to buy an SSL certificate from 123 Reg.

### Troubleshooting
| Problem | Likely fix |
|---|---|
| 123 Reg parking page still shows | An old A record for `@` or web forwarding is still active. Remove it. |
| `www` works but the root doesn't (or vice-versa) | Check that you have **both** the four A records **and** the `www` CNAME. |
| GitHub says "Domain's DNS record could not be retrieved" | DNS hasn't spread yet. Wait and re-check. |
| Custom domain disappears after uploading files | The `CNAME` file was overwritten or deleted. Make sure it's in the repo and contains your domain. |
| Site looks unstyled | `style.css` isn't at the top level of the repo, or the file name's case differs (GitHub is case-sensitive). |
| "404 – There isn't a GitHub Pages site here" | Pages isn't enabled, or `index.html` isn't in the repo root. |

---

## 5. Accessibility and performance notes
- Text colours meet WCAG AA contrast on white. Base font size is 18px.
- Keyboard-friendly: "Skip to content" link, visible focus outlines, the mobile menu closes with **Esc**.
- Animations are subtle, and are **switched off automatically** for anyone whose device has "Reduce motion" enabled.
- Content stays visible even if JavaScript is disabled.
- No libraries. Total page weight is roughly 200 KB including images.
