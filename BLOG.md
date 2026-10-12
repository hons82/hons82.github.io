# Writing blog posts

The site uses GitHub Pages and Jekyll to publish Markdown posts.

1. Create a file in `_posts` named `YYYY-MM-DD-short-title.md`, for example `_posts/2026-10-02-my-first-post.md`.
2. Start the file with front matter:

   ```yaml
   ---
   layout: post
   title: "My first post"
   date: 2026-10-02
   ---
   ```

3. Write the article below the front matter using Markdown.
4. Commit and push the file. GitHub Pages builds the article automatically, adds it to `/blog/`, and shows its title among the three latest posts on the homepage.

`_posts/2026-10-02-post-template.md` is an unpublished example and is not shown on the live site.
