# CATATAN PROJECT — Plandemic Space Landing Page
# Update terakhir: 30 Juni 2026 (sesi logo asli, favicon, OG image)

---

## UPDATE SESI INI: Logo Asli, Favicon, OG Image, Navbar

Owner upload logo asli (PNG + SVG, versi navy & gold) tanpa tulisan,
font logo terkonfirmasi: **Rajdhani**.

### File baru di folder `img/`

- `favicon.ico` — multi-resolusi (16/32/48px)
- `favicon-16.png`, `favicon-32.png` — favicon individual
- `apple-touch-icon.png` — 180x180, buat iOS homescreen
- `logo-512.png` — versi besar, cadangan
- `og-image.png` — 1200x630, background navy + logo gold + teks
  "PLANDEMIC SPACE" (font Rajdhani) buat preview link di WA/Facebook
- `logo.svg`, `logo_gold.svg` — file asli dari owner, disimpan sebagai master

Proses yang dilakukan:
- Logo asli (1024x1258, gak 1:1) dikasih padding biar jadi kotak
  proporsional sebelum di-resize ke ukuran favicon kecil (gak di-stretch)
- OG image dibikin manual pakai PIL: background navy `#1B2E4B`,
  logo gold di kiri, teks brand di kanan pakai font Rajdhani

### Perubahan di `index.html`

- `<link rel="icon">` lama (logo.png langsung) diganti jadi referensi
  favicon.ico + favicon-16.png + favicon-32.png + apple-touch-icon.png
- `og:image` diganti dari `logo.png` ke `img/og-image.png`
- **SVG navbar diganti** — sebelumnya SVG hasil coding manual ("P" generik),
  sekarang pakai path asli dari `logo_gold.svg` (3 path, warna gold,
  proporsi asli gak dipaksa kotak) → biar konsisten sama logo asli
  di favicon & OG image

### Perubahan di `style.css`

- `.nav-logo` ditambah `display: block` (minor, biar svg gak ada gap aneh)

### Yang TETAP Montserrat (dari sesi sebelumnya)

Label section, badge, nomor step/svc, tombol CTA — tidak berubah.

### Action wajib pas upload ke GitHub

1. Bikin folder `img/` di root project (kalau belum ada)
2. Upload semua file dari folder `img/` hasil sesi ini ke situ
3. Replace `index.html` dan `css/style.css` dengan versi terbaru

### Belum dikerjakan (PR selanjutnya)

1. **Foto asli untuk galeri** — PALING PENTING, belum ada progress
2. Cek ulang data WA/rating/ulasan masih akurat
3. Testimoni pelanggan asli (2-3 dari Maps/WA)
4. Jam operasional ditampilkan di web
5. Embed peta kecil di section Kontak
6. Test langsung di HP fisik (terutama tombol WA mengambang pas scroll)
7. robots.txt & sitemap.xml (SEO)
8. Daftar ke Google Search Console setelah semua live

---

(Catatan struktur halaman, warna, kontak, dll — lihat versi sebelumnya,
tidak berubah di sesi ini)

