---
layout: post
title: "SatisClean: a small tool for duplicate files"
date: 2026-10-02
---

Over time, folders like Downloads or Pictures can fill up with duplicate files. I built **SatisClean**, a small command-line tool in Go, to help find and manage them.

SatisClean scans folders recursively and compares file hashes to find identical files. It can also recognize common numbered copies, such as `photo_1.jpg` or `photo (1).jpg`, and help keep the original filename.

You can preview what would be removed before deleting anything:

```bash
satisclean scan --path ~/Pictures --dry-run
```

When you are ready, choose interactive mode to review duplicates one by one, or let SatisClean handle them automatically. It can also save a JSON report with details about the scan and the space that could be reclaimed.

I made the tool for a straightforward task: finding duplicate files without having to compare folders by hand. If that sounds useful, take a look at [SatisClean on GitHub](https://github.com/hons82/SatisClean) for installation instructions and all available options.
