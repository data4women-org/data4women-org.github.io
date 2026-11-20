# Data4Women website

The official Data4Women website, built as a lightweight static site for GitHub Pages.

## Preview locally

Open `index.html` directly in a browser, or serve this directory with any static web server.

## Structure

- `index.html` — homepage
- `about.html` — organisation profile
- `approach.html` — working approach
- `palette.css` — shared color palette and translucent variants; edit colors here
- `style.css` — site styles, importing the shared palette
- `theme-color.js` — applies the palette color to browser theme metadata
- `projects/` — individual project pages

Bootstrap 5.3 is loaded from the official jsDelivr CDN. No build step is required.

## U.S. House dashboard

Data viz Studio embeds `assets/women-in-elections-usa/index.html` through `women-in-us-house.html`.

The dashboard is synchronized only after a pull request is merged into `main` in `data4women-org/women-in-elections-usa`. Closing a PR without merging or pushing directly to the source repository does not synchronize it. There is no schedule.

The source workflow `Sync dashboard after merge` copies the current `main` version of the generated HTML and commits it to this site's `main` only when the file differs. This triggers `Publish site with latest U.S. House dashboard`, which deploys the static site. Normal website pushes also deploy the site using its tracked dashboard copy.

### One-time activation

1. Create a fine-grained GitHub personal access token with access only to `data4women-org/data4women-org.github.io` and **Contents: Read and write**. The organization may require approval. The token owner must be allowed to push to `main` under the site's branch rules.
2. In `women-in-elections-usa` → Settings → Secrets and variables → Actions, save the token as **WEBSITE_SYNC_TOKEN**. A separate token is necessary because the source repository's `GITHUB_TOKEN` cannot write to this website repository.
3. Merge this site's dashboard files and deployment workflow into `main`, and select **GitHub Actions** in Settings → Pages → Build and deployment → Source.
4. Merge the source synchronization workflow and generated `index.html` into `women-in-elections-usa/main`. Ensure the workflow exists on the default branch before relying on subsequent merge events.
5. Check the source synchronization run and the resulting website deployment in Actions. Renew the token when it expires.

### Updating the dashboard

After editing data or `dashboard.html`, regenerate with `uv run python app.py` in `women-in-elections-usa`. Commit the generated `index.html` in a pull request and merge it into `main`. The merge triggers synchronization automatically; no manual copy is needed. If there is no HTML change, no website commit or deployment is made.

For a local preview, refresh the tracked copy from the shared workspace:

```sh
cp women-in-elections-usa/index.html data4women-org.github.io/assets/women-in-elections-usa/index.html
```

Open `women-in-us-house.html` or use any static web server. The generated HTML embeds Plotly, aggregated data, and the logo; map boundaries require internet access.
