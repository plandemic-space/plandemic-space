# CATATAN PROJECT — Plandemic Space Landing Page
# Update terakhir: 30 Juni 2026 (sesi SEO + favicon gold + grid layanan)

---

## UPDATE SESI INI

### 1. Favicon diganti ke versi GOLD
Favicon sebelumnya pakai logo navy — nyaris invisible di browser tab
mode gelap (dark mode). Diganti ke logo gold, kontras lebih bagus di
tab mode terang maupun gelap. File yang diganti di `img/`:
favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png, logo-512.png

### 2. Grid Layanan dikunci 3 kolom (gak bolong lagi)
Sebelumnya pakai `auto-fit` yang bikin baris terakhir bolong 2 kotak
kosong di lebar layar tertentu. Sekarang dikunci:
- Desktop: 3 kolom x 2 baris (pas buat 6 layanan)
- Mobile (≤720px): 2 kolom x 3 baris
- Kalau nanti nambah jadi 8 layanan → tinggal ganti ke 4 kolom desktop

### 3. POSITIONING DIPERBAIKI — fokus utama Laptop/Komputer/Printer
Owner klarifikasi: basic usaha adalah servis **komputer, laptop, printer**.
Servis HP itu cuma bantu-bantu warga sesekali, sparepart masih nebeng
dari teman, kadang malah dilempar ke teman lain kalau susah. SEO &
konten sebelumnya kesannya HP jadi fokus utama — ini salah & bisa
bikin ekspektasi customer gak sesuai kapasitas owner.

Yang diubah:
- `<title>` — sebelumnya "Servis HP, Laptop & Print" → sekarang
  "Servis Laptop, Komputer & Printer" (HP dihapus dari title)
- `meta description` & `keywords` — laptop/komputer/printer di depan,
  HP cuma disebut "bantuan servis HP" di akhir kalimat
- `og:title` & `og:description` — sama, fokus laptop/komputer/printer
- **Card layanan "Servis HP" digeser ke nomor 06 (paling akhir)**,
  badge "PANGGILAN" dihapus dari card ini, deskripsi diganti jadi
  jujur: "Bantuan servis ringan, konsultasi dulu via WhatsApp untuk
  cek ketersediaan sparepart" — gak janji bisa semua kerusakan

### 4. File SEO baru: `robots.txt` & `sitemap.xml`
Taruh KEDUANYA di **root project** (sejajar sama `index.html`, BUKAN
di dalam folder manapun).
- `robots.txt` — kasih tau Google boleh crawl semua halaman + lokasi sitemap
- `sitemap.xml` — daftar URL halaman, baru ada 1 URL (homepage) karena
  situs masih single-page

### LANGKAH SELANJUTNYA buat SEO (belum dikerjakan, giliran owner)

1. **Daftarkan ke Google Search Console** (search.google.com/search-console)
   - Login pakai email yang sama dengan akun GitHub/Vercel
   - Tambah properti pakai URL: `https://plandemicspace.vercel.app`
   - Verifikasi kepemilikan (biasanya otomatis kalau pakai metode "URL prefix"
     + ada akses ke DNS, atau pakai metode upload file HTML verifikasi —
     nanti tanya saya kalau sampai langkah ini, saya bantu)
   - Submit sitemap: masukin `sitemap.xml` di menu "Sitemaps"
2. **Cek Google Business Profile** udah link ke web yang bener
   (`plandemicspace.vercel.app`, bukan link lama/salah)
3. Tunggu 1-2 minggu, baru cek di GSC apakah halaman udah ke-index

---

## File yang perlu diupload sesi ini

- `index.html` (root) — replace
- `robots.txt` (root) — file BARU
- `sitemap.xml` (root) — file BARU
- `img/favicon.ico`, `img/favicon-16.png`, `img/favicon-32.png`,
  `img/apple-touch-icon.png`, `img/logo-512.png` — replace (versi gold)
- `css/style.css` — replace (grid layanan 3 kolom)

---

## Belum dikerjakan (PR selanjutnya, urutan prioritas)

1. **Foto asli untuk galeri** — PALING PENTING, belum ada progress
2. Cek ulang data WA/rating/ulasan masih akurat
3. Testimoni pelanggan asli (2-3 dari Maps/WA)
4. Jam operasional ditampilkan di web
5. Embed peta kecil di section Kontak
6. Test langsung di HP fisik (terutama tombol WA mengambang pas scroll)
7. Daftar Google Search Console + submit sitemap (lihat langkah di atas)

---

(Catatan struktur halaman, warna, kontak, dll — lihat versi sebelumnya,
tidak berubah di sesi ini)


