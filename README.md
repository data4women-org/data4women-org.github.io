# Data4Women website

The official Data4Women website, built as a lightweight static site for GitHub Pages.

## Preview locally

Open `index.html` directly in a browser, or serve this directory with any static web server.

## Structure

- `index.html` — homepage
- `about.html` — organisation profile
- `approach.html` — working approach
- `style.css` — site styles
- `projects/` — individual project pages

Bootstrap 5.3 is loaded from the official jsDelivr CDN. No build step is required.

## Streamlit dashboard

The site's Streamlit app uses the Data4Women repository `data4women-org/women-in-elections-usa`.

To preview the app from the shared workspace:

```sh
cd women-in-elections-usa
uv run --locked --no-dev streamlit run app.py --server.headless true --server.address 127.0.0.1 --server.port 8501
```

For the public site, deploy `app.py` from the `main` branch of `data4women-org/women-in-elections-usa` in Streamlit Community Cloud under its own subdomain. Set the iframe's `data-public-url` in `women-in-us-house.html` to that deployment's HTTPS URL with `?embed=true`. Changes pushed to that branch will update the embedded app.
