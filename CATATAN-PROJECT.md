# CATATAN PROJECT — Plandemic Space
# Update terakhir: 29 Agustus 2026 (migrasi HTML vanilla → Astro)
# Status: Konten & brand solid (Feb 2026) + kode dirapikan (Agu 2026) + migrasi Astro selesai & siap tayang (29 Agu 2026)

---

## RIWAYAT REVISI SINGKAT
- **2 Feb 2026** — Audit konten, copywriting, brand, SEO teknis. Lihat bagian "STATUS WEBSITE" & "SKOR AUDIT FINAL — Konten/Brand" di bawah.
- **28 Agu 2026** — Code cleanup & refactor versi HTML vanilla (bukan ubah konten/tampilan). Lihat bagian "RIWAYAT REFACTOR KODE (HTML VANILLA)".
- **29 Agu 2026** — Migrasi dari HTML vanilla ke Astro. Lihat bagian "RIWAYAT MIGRASI ASTRO" di bawah — ini sekarang jadi source of truth, bukan lagi folder HTML vanilla.

---

## KEPUTUSAN BRAND YANG DIKUNCI
> Jangan diubah tanpa data atau diskusi ulang

**Positioning:** Pusat layanan digital masyarakat — bukan toko servis biasa, bukan startup.
- Layer 1: Servis (laptop/komputer/printer) = yang cari nafkah, harus jelas dalam 3 detik
- Layer 2: Komunitas & cerita = yang bikin orang percaya dan cerita ke tetangga

**Karakter:** Lowprofile, jujur, tidak overclaim. Nada: santai-sopan, bukan korporat.

**Trade-off SEO vs Branding (disengaja, jangan diubah tanpa data GSC):**
- H1 "Ruang Solusi, Tumbuh Bersama" — tidak mengandung keyword, sengaja demi diferensiasi
- H2 section titles fokus ke konversi, bukan keyword
- Keyword sudah tercakup di: title tag, meta desc, hero subheadline, nama card layanan

---

## STRUKTUR FILE (ASTRO — per 29 Agu 2026)

```
astro-project/
├── CATATAN-PROJECT.md      ← dokumen ini
├── README.md               ← panduan setup & deploy
├── astro.config.mjs        ← site URL, trailingSlash: 'never', integrasi sitemap
├── vercel.json
├── package.json
├── src/
│   ├── layouts/
│   │   └── Layout.astro    ← <head> terpusat: meta, OG, font, schema injection
│   ├── components/
│   │   ├── SiteNav.astro
│   │   └── SiteFooter.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── jasa-digital.astro
│   │   ├── 404.astro
│   │   └── tips/
│   │       ├── index.astro       ← daftar semua tips
│   │       └── [...slug].astro   ← halaman tips dinamis dari content collection
│   ├── content/
│   │   ├── config.ts       ← schema Zod untuk collection "tips"
│   │   └── tips/*.md       ← 6 artikel tips (lihat daftar di bawah)
│   ├── data/
│   │   └── schema-*.json   ← JSON-LD (LocalBusiness, FAQPage, Service, BreadcrumbList)
│   └── assets/
│       └── galeri/*.webp   ← foto galeri, dioptimasi Astro saat build (astro:assets)
└── public/
    ├── css/style.css       ← tidak berubah dari versi HTML vanilla
    ├── js/main.js          ← tidak berubah dari versi HTML vanilla
    ├── img/site/           ← favicon, logo
    ├── img/og/             ← gambar Open Graph
    ├── robots.txt
    └── (sitemap digenerate otomatis saat build, bukan file statis)
```

**Kenapa foto galeri di `src/assets/` bukan `public/img/`?**
File di `src/assets/` diproses lewat komponen `<Image />` Astro saat build — otomatis dikompres ulang (biasanya turun 7-11%) dan dapat filename ber-hash untuk caching. File di `public/` tidak diproses sama sekali. Semua aset lain (favicon, CSS, JS, gambar OG) tetap di `public/` karena tidak butuh optimasi ini.

---

## HALAMAN TIPS (baru, 29 Agu 2026)

6 artikel awal, semua kategori "Tips Perawatan/Beli/Laptop/HP/Printer":
1. `bahaya-charge-semalaman` — mitos/fakta charge HP semalaman
2. `cek-sebelum-beli-second` — 4 hal wajib dicek beli laptop/HP second
3. `hp-mati-total-kena-air-jatuh` — pertolongan pertama HP kena air/jatuh
4. `print-bergaris-atau-buram` — penyebab umum hasil print bermasalah
5. `tanda-laptop-butuh-servis` — 5 tanda awal laptop butuh servis
6. `upgrade-ram-ssd-vs-beli-baru` — kapan upgrade vs beli baru

Tiap artikel otomatis dapat:
- Schema `Article` (headline, datePublished, author, publisher) + `BreadcrumbList`
- Meta title/description/canonical sendiri, di-generate dari frontmatter
- Masuk sitemap otomatis

**Cara nambah artikel baru:** taruh file `.md` baru di `src/content/tips/`, isi frontmatter (title, pubDate, category, tags, description), tulis isi pakai markdown biasa (## untuk subjudul). Astro otomatis bikin halaman & masuk ke daftar `/tips` serta sitemap — tidak perlu sentuh kode lain.

**Catatan:** `pubDate` ke-6 artikel awal ini sama semua (29 Agu 2026, tanggal migrasi) karena ditulis dalam satu batch. Kalau mau tanggal publikasi yang lebih natural/bertahap, edit manual di masing-masing file `.md`.

---

## RIWAYAT MIGRASI ASTRO (29 Agustus 2026)

Migrasi dari HTML vanilla (`plandemic-space-main/`) ke Astro (`astro-project/`).
Konten, copywriting, dan tampilan **tidak berubah** — sudah divalidasi dengan diff teks
otomatis antara HTML lama dan hasil build Astro (identik, kecuali penambahan link "Tips"
di navbar yang memang fitur baru).

**Yang dipindah 1:1 (tanpa perubahan):**
- `css/style.css` dan `js/main.js` — di-copy byte-for-byte
- Semua schema JSON-LD (LocalBusiness, FAQPage, Service, BreadcrumbList) — hanya path
  gambar yang disesuaikan ke struktur folder baru (`img/og/`, `img/site/`)
- Copywriting, section order, dan struktur HTML tiap section

**Perubahan struktural (arsitektur, bukan konten):**
- Navbar & footer jadi komponen (`SiteNav.astro`, `SiteFooter.astro`) — sebelumnya
  di-duplikat manual di `index.html` dan `jasa-digital.html`
- `<head>` (meta, OG, font, schema injection) jadi satu `Layout.astro` — sebelumnya
  boilerplate yang sama ditulis ulang di tiap file HTML

**Fitur baru yang ditambahkan sekalian saat migrasi:**
- Halaman `/tips` (content collection, 6 artikel awal) — lihat bagian "HALAMAN TIPS" di atas
- Sitemap otomatis via `@astrojs/sitemap` — sebelumnya `sitemap.xml` ditulis manual dan
  gampang basi (dulu cuma nyantumin 2 URL, gak ke-update kalau ada halaman baru)
- Schema `Article`/`CollectionPage`/`BreadcrumbList` di semua halaman Tips
- Optimasi gambar galeri lewat `astro:assets` — kompresi otomatis + cache-busting hash
- Halaman `404.astro` custom (sebelumnya belum ada sama sekali)
- `.gitignore` (sebelumnya belum ada — `node_modules`/`dist` berisiko ke-commit)
- `trailingSlash: 'never'` di config biar URL sitemap konsisten sama canonical tag dan
  `vercel.json` (`cleanUrls: true`)

**Masalah yang ketemu & dibenerin selama migrasi:**
- `@astrojs/sitemap` versi terbaru (3.7.3) ternyata gak kompatibel sama Astro 4.16
  yang dipakai project ini (error `reduce` pas build) → di-downgrade ke `3.2.1` yang
  cocok dan sudah divalidasi build sukses

**Validasi yang dilakukan sebelum dianggap "siap tayang":**
- `npm install` bersih dari nol, `astro build` sukses tanpa error
- 10 halaman ter-generate (`/`, `/jasa-digital`, `/404`, `/tips`, 6 artikel tips)
- Diff teks otomatis: `index.html` dan `jasa-digital.html` hasil build vs versi HTML
  vanilla lama — identik
- Semua `href` internal dicek, tidak ada link mati
- Schema JSON-LD tiap halaman divalidasi strukturnya (`@type` benar semua)
- Sitemap dicek isinya mencakup semua 8 URL (bukan cuma 2 seperti sitemap.xml lama)

**File yang TIDAK ikut di-migrasi (folder HTML vanilla lama):**
Folder `plandemic-space-main/` (HTML vanilla) sekarang statusnya arsip — Astro project
ini yang jadi source of truth baru. Kalau mau develop lagi, mulai dari `astro-project/`,
bukan dari HTML vanilla lama.

---

## STATUS WEBSITE (konten, per 2 Februari 2026 — masih berlaku)

### SECTION ORDER (sudah benar)
Hero → Cara Kerja → Layanan → Tentang Kami → Galeri → Nilai Kami → Testimoni → FAQ → Kontak

### META & SEO TEKNIS
- Title: "Plandemic Space | Servis Laptop, Komputer & Printer di Kemiri Purworejo" ✓
- Meta desc: lokasi spesifik (Dusun Ngemplak, Kemiri, Purworejo) ✓
- Schema: ["LocalBusiness", "RepairShop"] + hasOfferCatalog (6 layanan) ✓
- reviewCount: 32 (update manual kalau ulasan bertambah — sekarang di
  `src/data/schema-index-0.json`, cari "reviewCount")
- robots.txt: ada ✓, sitemap sekarang digenerate otomatis saat build ✓
- Google Search Console: sudah didaftarkan ✓

### FONT
- 3 family: DM Serif Display (headline puitis) + Plus Jakarta Sans (body) + Rajdhani (brand name)

### COPYWRITING
Tidak berubah dari audit 2 Feb 2026 — lihat versi lama CATATAN-PROJECT.md kalau butuh
detail lengkap tiap section (Hero, Cara Kerja, Layanan, Tentang Kami, Nilai Kami,
Testimoni, FAQ, CTA, Footer). Semua sudah dipindah 1:1 ke Astro tanpa perubahan teks.

### GALERI (bento CSS grid, 3 kolom × 4 baris)
Urutan & kelas sama seperti sebelumnya, sekarang pakai komponen `<Image />`:
1. gal-4-meja-kerja.webp → gal-wide
2. gal-1-servis-laptop.webp → gal-tall
3. gal-5-printer.webp → reguler
4. gal-7-laptop-merah.webp → gal-tall
5. gal-6-mainboard.webp → reguler
6. gal-2-heatsink.webp → gal-tall
7. gal-3-keyboard.webp → gal-wide

---

## YANG MASIH PENDING (urutan prioritas)

### PRIORITAS 1 — Bisa dikerjakan sekarang
- [ ] Test di HP fisik (Android minimal 2 perangkat berbeda kelas)
      Fokus: tombol WA mengambang, ukuran tombol, keterbacaan teks
      Ini belum pernah dilakukan sama sekali

- [ ] Jalankan ulang Google PageSpeed Insights setelah deploy versi Astro
      Terakhir kali (versi HTML vanilla, 28 Agu 2026): Performance 90-91 mobile.
      Optimasi gambar galeri di migrasi Astro ini kemungkinan besar naikin skor —
      perlu dicek ulang setelah live di domain asli.

### PRIORITAS 2 — Konten
- [ ] Update reviewCount di `src/data/schema-index-0.json` kalau ulasan bertambah
- [ ] Foto galeri tambahan ke depan:
      - Area print/fotokopi (belum ada foto layanan ini)
      - Hasil servis yang bersih/rapi (bukan proses)
      - Suasana tempat lebih luas
- [ ] Tambah artikel Tips baru secara berkala (SEO jangka panjang, lihat cara di
      bagian "HALAMAN TIPS" di atas)

### PRIORITAS 3 — Pertimbangkan, belum urgent
- [ ] Gallery max-width: sekarang 880px, bisa naik ke 1080px
- [ ] Jam operasional di hero atau navbar sticky
- [ ] Embed Google Maps kecil di section Kontak
- [ ] Pantau GSC setelah 2-4 minggu (khususnya cek apakah halaman Tips baru mulai
      ke-index dan bawa traffic)
- [ ] Tanggal `pubDate` di 6 artikel Tips awal masih sama semua (tanggal migrasi) —
      bisa disebar biar lebih natural kalau dirasa perlu

---

## KONTEKS BISNIS (tidak semua perlu masuk website)

**PlandemicNET:**
- Aktif, ~10 rumah tetangga, model iuran bukan langganan
- Sengaja tidak ekspansi: modal terbatas + tidak mau ganggu ISP lokal berizin
- Free untuk yatim/tidak mampu: dihentikan (disalahgunakan)

**Servis HP:**
- Bukan fokus utama, dimulai dari niat bantu satu warga
- Sparepart via jaringan teman, selalu konsultasi WA dulu
- Efek samping: dikenal "serba bisa" termasuk magicom/kipas/setrika

**Proyek UMKM (simbahngemplak.vercel.app):**
- Belum dibuka resmi: kapasitas teknis masih belajar + sadar website saja tidak cukup
- Pelajaran dari edukasi Maps warga: tanpa strategi konten, bosan 1-2 bulan, balik ke marketplace

---

## WORKFLOW ANTAR SESI

**Masalah yang sering terjadi:**
Setiap kali upload versi baru, beberapa fix dari sesi sebelumnya hilang karena
user edit manual file lama (bukan file output dari Claude).

**Cara yang benar:**
1. Selalu mulai dari file output Claude sebagai base (sekarang: folder `astro-project/`,
   BUKAN lagi `plandemic-space-main/` HTML vanilla)
2. Kalau ada edit manual, ceritakan perubahannya ke Claude dulu
3. Claude akan merge perubahan ke file yang sudah benar
4. Baru upload ke GitHub / deploy ke Vercel

---

## SKOR AUDIT FINAL — Konten/Brand (2 Feb 2026, masih berlaku)

| Aspek | Skor | Catatan |
|---|---|---|
| Storytelling | 8.5/10 | PlandemicNET kuat, filosofi nama jelas |
| Branding | 8/10 | Karakter konsisten dari hero sampai footer |
| Copywriting | 8/10 | Semua section solid, redundansi terkontrol |
| Hook | 8/10 | "Diagnosa gratis" + "garansi" = 2 hook utama |
| Testimoni | 8.5/10 | 5 review real, spesifik, ada cerita |
| UI/Galeri | 7.5/10 | Bento grid rapi, foto autentik |
| UX | 7/10 | Mobile belum ditest fisik |
| SEO Teknis | 7.5/10 | Schema solid, H1 trade-off disengaja |
| Konversi | 7.5/10 | CTA hangat, FAQ bantu keputusan |
| **Overall** | **7.9/10** | Potensi 8.5+ setelah mobile test & GSC data |

## SKOR AUDIT — Kualitas Kode

| Aspek | HTML vanilla (28 Agu) | Astro (29 Agu) |
|---|---|---|
| Struktur folder | 8/10 | 9/10 — komponen & content collection |
| Maintainability | 8.5/10 | 9/10 — nav/footer/head gak perlu duplikat manual |
| SEO teknis (sitemap, schema) | 8/10 | 9/10 — sitemap otomatis, schema Tips lengkap |
| Performance (gambar) | 8.5/10 | 9/10 — optimasi build-time via astro:assets |
| Accessibility | 8/10 | 8/10 — tidak berubah dari versi HTML vanilla |

*(Skor konten/brand dan skor kode independen, jangan disamakan.)*

---

(Disusun dari sesi panjang bersama Claude/Anthropic — 2 Februari 2026, konten/brand)
(Diperbarui dengan sesi code cleanup & refactor HTML vanilla — 28 Agustus 2026)
(Diperbarui dengan sesi migrasi ke Astro — 29 Agustus 2026)
