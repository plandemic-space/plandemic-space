# Plandemic Space

Website Plandemic Space — servis laptop, komputer & printer di Kemiri, Purworejo.
Dibangun pakai [Astro](https://astro.build).

Untuk konteks bisnis, keputusan brand, dan riwayat perubahan, lihat `CATATAN-PROJECT.md`.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Buka `http://localhost:4321`.

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/`. Perintah ini juga otomatis generate `sitemap-index.xml`
dan mengoptimasi semua gambar galeri.

## Preview hasil build (opsional, sebelum deploy)

```bash
npm run preview
```

## Deploy

Project ini sudah dikonfigurasi untuk Vercel (`vercel.json`, `cleanUrls: true`).
Tinggal hubungkan repo ke Vercel — build command `astro build`, output directory `dist`
(biasanya otomatis terdeteksi).

## Nambah artikel Tips baru

Taruh file `.md` baru di `src/content/tips/`, contoh:

```markdown
---
title: "Judul Artikel"
pubDate: "2026-09-01"
category: "Laptop"
tags: ["laptop", "tips"]
description: "Ringkasan singkat 1-2 kalimat, dipakai untuk meta description & card."
---

Isi artikel pakai markdown biasa.

## Sub judul pakai h2
```

Halaman, meta tag, schema `Article`, dan entri sitemap otomatis ter-generate saat build —
tidak perlu sentuh kode lain.

## Struktur singkat

- `src/pages/` — halaman (`index`, `jasa-digital`, `404`, `tips/`)
- `src/layouts/Layout.astro` — `<head>` terpusat (meta, OG, font, schema)
- `src/components/` — navbar & footer
- `src/content/tips/` — artikel Tips (markdown)
- `src/data/` — JSON-LD schema untuk tiap halaman
- `src/assets/galeri/` — foto galeri (dioptimasi otomatis saat build)
- `public/` — aset statis yang tidak diproses (CSS, JS, favicon, gambar OG)
