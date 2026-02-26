# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Serve the site locally
bundle exec jekyll serve
# or simply:
./run.sh

# Build the site (output to _site/)
bundle exec jekyll build
```

## Architecture

This is a Jekyll-based personal academic website using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) remote theme (`mmistakes/minimal-mistakes@4.19.2`). It is deployed to GitHub Pages.

### Content structure

- `_pages/` — Static pages: `publications.md`, `students.md`, `about.md`, `teaching.md`, `service.md`, etc.
- `_posts/` — Blog posts, named `YYYY-MM-DD-title.md`
- `_data/navigation.yml` — Top navigation menu
- `lost+found/` — PDF files for research papers (referenced in `publications.md`)
- `images/` — Image assets

### Key pages to update

- **Publications**: `_pages/publications.md` — entries grouped by year in reverse chronological order, formatted as numbered Markdown lists with author links and PDF links pointing to `lost+found/`.
- **Students**: `_pages/students.md` — current students and alumni sections.

### Front matter defaults

All posts default to `layout: single` with `author_profile: true`, `read_time: true`, `share: true`, and `related: true` (set in `_config.yml`). Pages use `layout: single` with `author_profile: true`.

### Theme customization

Custom Sass overrides go in `_sass/`. Layout and include overrides go in `_layouts/` and `_includes/` respectively, which take precedence over the remote theme's files.
