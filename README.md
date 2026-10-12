# hons82.github.io

Personal website and blog of Hannes Tribus, published with GitHub Pages. The homepage is a static HTML portfolio; Jekyll builds the Markdown blog posts and the blog index.

## Local preview

Install Ruby and Jekyll, then run from the repository root:

```sh
gem install jekyll
jekyll serve
```

Open [http://localhost:4000](http://localhost:4000). Jekyll rebuilds the site as files change.

## Blog posts

Add posts as Markdown files in `_posts`, using the filename format `YYYY-MM-DD-short-title.md` and the front matter described in [BLOG.md](BLOG.md). GitHub Pages publishes the site when changes are pushed to the configured branch.

## Project structure

- `index.html` — portfolio homepage
- `_posts/` — blog articles
- `_layouts/` — Jekyll layouts for the blog
- `blog/index.html` — generated blog index
- `assets/` — styles, scripts, images, and vendor assets
- `_config.yml` — Jekyll site configuration
