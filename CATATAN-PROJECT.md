# CATATAN PROJECT — Plandemic Space Landing Page
# Update terakhir: 30 Juni 2026

---

## STATUS

Landing page sudah dirapikan dari draft v3/v4 sebelumnya. Struktur final:
multi-file (index.html + css/style.css + js/main.js), siap deploy ke Vercel.

---

## KEPUTUSAN DESAIN (FINAL)

### Warna
- Navy #1B2E4B    → dominan (hero, navbar, values, footer)
- Gold #C9A84C    → aksen dan CTA
- Pastel #E0EEF3  → background section Tentang & Galeri
- Cream #F7F4EF   → background section layanan
- White #FFFFFF   → cara kerja, galeri, card

### Font
- DM Serif Display  → headline & tagline
- Plus Jakarta Sans → body text
- Montserrat        → label kecil, badge, nav

### Lebar konten
- max-width 880px (sebelumnya 660px, diperlebar biar tidak kosong di desktop besar)

---

## STRUKTUR HALAMAN

1. Navbar — logo SVG "P" + nama, ada hamburger menu mobile
2. Hero — headline, 2 tombol, stats, + tombol WA mengambang
3. Tentang Kami — origin story + timeline 4 milestone
4. Cara Kerja — 3 langkah
5. Layanan — grid 6 kartu nomor 01-06
6. Galeri — 3 foto placeholder + link ke Google Maps
7. Nilai Kami — 3 nilai format list
8. Kontak / CTA — tombol WA + 4 sosmed
9. Footer — 3 kolom: nama+copyright, alamat, link cepat

---

## YANG SUDAH ADA DI VERSI INI

- Mobile nav (hamburger menu) — sebelumnya navbar tidak responsive
- Tombol WA mengambang di hero
- Section Galeri (placeholder, tunggu foto asli)
- Favicon pakai logo asli (logo.png)
- Meta SEO lengkap: canonical URL, og:image, og:locale
- Footer 3 kolom dengan link navigasi cepat

## YANG BELUM ADA (PR SELANJUTNYA)

### PENTING — sebelum live
1. Foto asli (galeri, tempat, aktivitas servis) — paling krusial, placeholder galeri masih ikon kosong, belum membangun trust calon pelanggan
2. Cek ulang akurasi data: nomor WA 6282241439784 masih aktif? Rating 4.9★ & 28+ ulasan masih sesuai kondisi terkini?
3. Favicon proper — resize logo.png ke 16x16 & 32x32, jangan pasang file besar langsung (blur di tab browser)
4. OG image custom rasio 1200x630 — saat ini pakai logo.png (rasio 1:1), bakal terpotong aneh kalau link di-share ke WA/Facebook

### BAGUS UNTUK DITAMBAH — menaikkan kredibilitas
5. Testimoni pelanggan (2-3 testimoni asli dari Maps/WA) — field ini ada di umkm.json lama tapi "sudah tidak dipakai", justru relevan untuk landing page baru
6. Jam operasional lebih spesifik ditampilkan di halaman (sekarang hanya "hubungi WA" di file lama, belum ada di tampilan web)
7. Embed peta kecil di section Kontak — saat ini cuma link keluar ke Maps, idealnya ada peta kecil langsung kelihatan di halaman

### TEKNIS — sebelum deploy
8. Test langsung di HP fisik — terutama pastikan tombol WA mengambang tidak menutupi konten penting saat scroll
9. robots.txt & sitemap.xml — untuk SEO, bisa dicontoh dari project SIMBAH yang sudah ada
10. Deploy ke Vercel (project baru, bukan reuse SIMBAH)
11. Daftarkan ke Google Search Console setelah live

---

## DATA KONTAK & SOSMED

WA      : 6282241439784
Maps    : https://maps.app.goo.gl/W6FxkN82ArRKb5NT9
IG      : https://www.instagram.com/zns.srr/
FB      : https://www.facebook.com/zainus.surur/
TikTok  : https://www.tiktok.com/@hisssdeneng
YouTube : https://www.youtube.com/@Sururr
Alamat  : Ngemplak 02/02, Dusun III, Samping, Kec. Kemiri, Kab. Purworejo, Jawa Tengah 54262

---

## LAYANAN YANG DITAMPILKAN (6)

01. Servis Laptop & PC     → badge: PANGGILAN
02. Servis HP              → badge: PANGGILAN
03. Servis Printer
04. Print, Fotokopi & Scan
05. Pengetikan Dokumen
06. Jual Beli HP & Laptop  → badge: 2ND

JANGAN tampilkan: Obras/jahit, Penggilingan tepung, Parut kelapa
(itu usaha orang tua, tidak relevan untuk Plandemic Space)

---

## TIMELINE MILESTONE

31 Juli 2020     → Pertama kali promosi di Instagram
4 Oktober 2020   → Orderan pertama dari Maps/IG (titik balik)
5 Agustus 2021   → PlandemicNET lahir (internet iuran warga)
Sekarang         → Multi service + digitalisasi UMKM

---

## CATATAN PENTING

### Tentang file yang TIDAK dipakai dari draft lama
- umkm.json → ini data SIMBAH (semua UMKM dusun), bukan khusus Plandemic Space, tidak dipakai
- File arsip (banner lama, wallpaper, logo PlandemicNET lama) → cukup jadi referensi sejarah, tidak ditampilkan di web

### Tentang Domain
- Vercel.app sudah cukup untuk sekarang
- Custom domain .my.id sekitar Rp25-35rb/tahun kalau mau upgrade nanti

### Tentang PlandemicNET
- Bukan layanan aktif, cukup jadi origin story di section Tentang
- Ceritanya: wifi iuran gotong royong warga saat pandemi → berkembang jadi multi service

---

## LANGKAH SELANJUTNYA

Lihat daftar "YANG BELUM ADA (PR SELANJUTNYA)" di atas — sudah diurutkan
berdasarkan prioritas (Penting → Bagus untuk ditambah → Teknis).

Urutan kerja yang disarankan:
1. Kumpulkan foto asli dulu (poin #1) — ini paling menentukan kualitas akhir
2. Sambil nunggu foto, cek ulang data (poin #2) dan siapkan favicon + OG image (poin #3-4)
3. Setelah foto & data fix, baru deploy ke Vercel (poin #10)
4. Tambahan testimoni & peta (poin #5-7) bisa menyusul setelah live, tidak perlu nunggu
