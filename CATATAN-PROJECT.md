# CATATAN PROJECT — Plandemic Space
# Update terakhir: 13 September 2026 (2 artikel baru soal WhatsApp/HP lama ditambahkan + fact-check, klarifikasi aturan CTA link)
# Status: Konten & brand solid (Feb 2026) + kode dirapikan (Agu 2026) + migrasi Astro selesai (29 Agu 2026) + halaman Tips di-restore & disepakati (1 Sep 2026) + fix sinkronisasi font & kategori (9 Sep 2026) + 2 artikel baru & fact-check (13 Sep 2026)

---

## RIWAYAT REVISI SINGKAT
- **2 Feb 2026** — Audit konten, copywriting, brand, SEO teknis. Lihat bagian "STATUS WEBSITE" & "SKOR AUDIT FINAL — Konten/Brand" di bawah.
- **28 Agu 2026** — Code cleanup & refactor versi HTML vanilla (bukan ubah konten/tampilan). Lihat bagian "RIWAYAT REFACTOR KODE (HTML VANILLA)".
- **29 Agu 2026** — Migrasi dari HTML vanilla ke Astro. Lihat bagian "RIWAYAT MIGRASI ASTRO" di bawah — ini sekarang jadi source of truth, bukan lagi folder HTML vanilla.
- **9 Sep 2026** — Fix: font judul artikel Tips (h1/h2/related/cover watermark) sempat kebawa balik ke
  `Roboto Slab` setelah commit sesi lain di-merge dengan patch konten dari sesi ini — dibalikin lagi ke
  `DM Serif Display` yang final (lihat "HALAMAN TIPS"), dan `Roboto+Slab` dihapus dari Google Fonts import
  di `Layout.astro` (font `Roboto` biasa tetap dipakai, itu untuk subteks, bukan judul). Juga dibenerin
  2 artikel yang masih pakai nama kategori lama "Tips Perawatan" (harusnya "Perawatan" dan "Aksesoris").
- **13 Sep 2026** — 2 artikel baru ditambahkan (`whatsapp-tidak-bisa-di-hp-lama-android` kategori HP,
  `hp-murah-untuk-whatsapp` kategori Beli), lewat riset bertahap + fact-check ke sumber resmi/marketplace
  (bukan langsung dari pengetahuan umum — banyak spesifikasi & harga HP berubah cepat). Juga klarifikasi
  aturan CTA link (lihat "HALAMAN TIPS") dan beberapa catatan baru soal HP/harga yang sifatnya cepat basi
  — lihat "CATATAN KHUSUS ARTIKEL HP/WHATSAPP" di bawah, bagian baru.

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

## HALAMAN TIPS (per 13 Sep 2026 — update dari versi 1 Sep)

9 artikel, kategori final (JANGAN pakai lagi nama kategori lama "Tips Perawatan/Beli" —
sudah diseragamkan jadi kategori 1 kata: Laptop/HP/Printer/Perawatan/Beli/Aksesoris):
1. `bahaya-charge-semalaman` — kategori **Perawatan** — mitos/fakta charge HP semalaman
2. `cek-sebelum-beli-second` — kategori **Beli** — 4 hal wajib dicek beli laptop/HP second
3. `hp-mati-total-kena-air-jatuh` — kategori **HP** — pertolongan pertama HP kena air/jatuh
4. `print-bergaris-atau-buram` — kategori **Printer** — penyebab umum hasil print bermasalah
5. `tanda-laptop-butuh-servis` — kategori **Laptop** — 5 tanda awal laptop butuh servis
6. `upgrade-ram-ssd-vs-beli-baru` — kategori **Aksesoris** — kapan upgrade vs beli baru
7. `cara-cek-tipe-ram-ssd-laptop` — kategori **Aksesoris** — panduan cek kompatibilitas RAM/SSD
8. `whatsapp-tidak-bisa-di-hp-lama-android` — kategori **HP** — kenapa WhatsApp berhenti dukung
   Android lama per 8 Sep 2026, cara diagnosis, opsi custom ROM, kapan harus ganti HP (baru, 13 Sep 2026)
9. `hp-murah-untuk-whatsapp` — kategori **Beli** — rekomendasi HP pengganti kelas Rp1,6-2,4 jutaan,
   artikel turunan dari #8 (baru, 13 Sep 2026) — lihat "CATATAN KHUSUS ARTIKEL HP/WHATSAPP" di bawah
   soal alasan pemilihan produk & riwayat judul

**Font judul SEMUA yang berhubungan dengan Tips (cover watermark, listing Tips, dan halaman
artikel — h1, h2, "artikel terkait") — FINAL per 9 Sep 2026: `Roboto Slab` bold (serif), BUKAN
DM Serif Display sama sekali.** Owner tegas: DM Serif Display gak nyaman dibaca dan gak kepake
di manapun yang berhubungan sama Tips — bukan cuma di halaman artikel, tapi juga cover
(`TipCover.astro`) dan listing (`tips/index.astro`, hero title + judul kartu). DM Serif Display
tetap dipakai di HALAMAN LAIN yang bukan Tips (mis. `404.astro`), itu gak masalah.
Referensinya itkoding.com — dicek pakai DevTools Computed style TEPAT di elemen `h1.title.single-title`
(bukan div/body pembungkusnya, itu jebakan karena container umum bisa nunjukkin font warisan buat teks
biasa, bukan font judul yang sebenarnya dipakai). Hasil final: `"Roboto Slab", Arial, sans-serif`,
font-weight 700, font-size 36px. Body paragraf artikel (`.tip-body`) tetap `Roboto` biasa (bukan
Slab), sama kayak font subteks yang sebelumnya. Kalau mau ganti font lagi, diskusikan dulu dan
verifikasi pakai Inspect Element langsung ke elemen judulnya (h1/h2), bukan ke container umum di
sekitarnya.

**Link afiliasi Shopee** sudah terpasang di 5 artikel (charger/powerbank di artikel 1,
tinta printer di artikel 4, brand RAM/SSD di artikel 6 & 7, dan ~14 link produk HP/aksesoris
di artikel 9 `hp-murah-untuk-whatsapp`) — semua link nyata (bukan placeholder `#`), sumbernya
dari riset merek + link yang dikirim owner langsung. **JANGAN dihapus/di-generic-kan lagi**
kalau lagi convert/rewrite konten artikel ini.

**CTA WhatsApp (dan link affiliate lain) di penutup/isi artikel HARUS berupa link aktif yang
beneran bisa diklik** — bukan teks polos yang nyebut "via WhatsApp" tanpa link (ini sempat
kejadian ke-revert beberapa kali, teksnya kelihatan normal tapi gak bisa diklik).

**Update 13 Sep 2026 — klarifikasi format link:** boleh pakai markdown biasa
(`[teks](https://wa.me/...)`) ATAU tag HTML `<a href="..." target="_blank" rel="noopener noreferrer">teks</a>`
kalau butuh link kebuka di tab baru (biar pembaca gak keluar dari artikel pas klik ke WA/Shopee).
Markdown biasa gak bisa nambahin `target="_blank"`, jadi kalau butuh itu, HTML `<a>` adalah pilihan yang
tepat, BUKAN penyimpangan dari aturan. Yang penting cuma satu: link-nya beneran aktif & bisa diklik,
format markdown vs HTML gak masalah selama itu terpenuhi. 2 artikel terbaru (`whatsapp-tidak-bisa-di-hp-lama-android`
dan `hp-murah-untuk-whatsapp`) pakai HTML `<a target="_blank">` secara konsisten — biarkan seperti itu,
jangan direvert ke markdown biasa.

**CSS artikel yang WAJIB ada di `<style>` [...slug].astro** (sering ke-drop kalau ada
overwrite parsial dari sesi lain):
- `.tip-article-inner h1` dan `.tip-body h2` → `color: var(--navy)`
- `.tip-body` → `color: #2D2D2D` (bukan `var(--ink)`, sengaja dilembutkan buat kenyamanan baca)
- `.tip-body ol` → nomor custom (lingkaran navy solid, bukan angka polos browser)
- `.tip-body ul` → bullet custom (kotak kecil gold, bukan titik/checkmark)
- `.tip-body h2` → ada `border-bottom: dashed`
- `.tip-share-wa/.tip-share-fb/.tip-share-x` → warna solid brand (hijau/biru/hitam)

Tiap artikel otomatis dapat: Schema `Article` + `BreadcrumbList`, meta title/description/
canonical dari frontmatter, masuk sitemap otomatis, cover SVG auto-generate per kategori
(`TipCover.astro`), related articles (kategori sama), tombol share (WA/FB/X/Salin Link).

**Cara nambah artikel baru:** taruh file `.md` baru di `src/content/tips/`, isi frontmatter
(title, pubDate, category — pakai salah satu dari 6 kategori final di atas, jangan bikin
baru tanpa diskusi, tags, description), tulis isi pakai markdown biasa (## untuk subjudul,
CTA WhatsApp di akhir wajib link aktif). Astro otomatis bikin halaman & masuk ke daftar
`/tips` serta sitemap.

---

## CATATAN KHUSUS ARTIKEL HP/WHATSAPP (baru, 13 Sep 2026)

Ini catatan spesifik buat 2 artikel `whatsapp-tidak-bisa-di-hp-lama-android` dan
`hp-murah-untuk-whatsapp` — biar sesi berikutnya gak salah paham dan ubah sesuatu yang
sebenarnya udah sengaja begitu.

**Kebijakan WhatsApp Android 6.0 itu snapshot, bukan aturan permanen.** Per 8 September 2026,
WhatsApp naikkan syarat minimum dari Android 5.0 ke 6.0 — ini kebijakan yang berlaku SAAT
ARTIKEL DITULIS. WhatsApp bisa aja naikkan syarat minimum lagi di masa depan (riwayatnya emang
udah beberapa kali). Kalau udah lama dari 13 Sep 2026 dan mau publish ulang/update artikel ini,
**cek dulu ke WhatsApp Help Center resmi** apakah syaratnya masih sama atau udah berubah lagi,
jangan asumsi Android 6.0 masih jadi batasnya.

**Kenapa Redmi A7 Pro yang jadi "⭐ Paling Direkomendasikan" di `hp-murah-untuk-whatsapp`,
bukan Samsung Galaxy A07** — ini KEPUTUSAN SENGAJA, bukan kelupaan atau kurang riset:
- Samsung A07 emang punya chipset lebih kencang (Helio G99 vs Unisoc T7250) dan jaminan
  update yang setara/lebih banyak (6x update OS vs Redmi 4x, sama-sama 6 tahun security).
- Tapi Redmi A7 Pro lebih murah (~Rp2,1jt vs ~Rp2,3-2,9jt) dan target artikel ini spesifik:
  budget paling efisien buat WhatsApp + pemakaian harian, bukan performa maksimal.
- Penjelasan lengkapnya udah ada di section "Soal Chipset: Kenapa Banyak Reviewer Sering
  Rekomendasiin Helio G99?" di dalam artikel — JANGAN dihapus section ini, itu yang bikin
  pemilihan produk kelihatan jujur & gak asal comot rekomendasi termurah.

**Harga HP di rentang Rp1,5-3 jutaan naik cukup signifikan (20-40%) dalam beberapa bulan
setelah rilis** — ini pola yang konsisten ketemu di HAMPIR SEMUA HP yang dicek buat 2 artikel
ini (Tecno Spark Go 3 naik dari Rp1,4jt ke Rp2jt+, dst). Jadi kalau nanti cek ulang dan harga
udah beda jauh dari yang ketulis di artikel, itu WAJAR — bukan berarti data lama salah. Tapi
tetap perlu diupdate berkala biar gak makin melenceng dari harga real.

**Riwayat judul `hp-murah-untuk-whatsapp`** (slug/filename gak berubah, cuma title/seoTitle):
awalnya "HP 1 Jutaan yang Masih Layak untuk WhatsApp" → ternyata gak ada lagi HP beneran
di bawah Rp1,5 juta yang worth it → diganti beberapa kali sampai final: "HP Lama Udah Nggak
Bisa Buat WA? Ini Rekomendasi HP Pengganti Paling Realistis di 2026". Kalau mau ganti title
lagi, boleh, tapi jangan ganti slug filenya kecuali siap pasang redirect 301 (belum pernah
live sebelum 13 Sep 2026 jadi kemungkinan besar gak perlu redirect, tapi cek dulu).

**Urutan rekomendasi HP di `hp-murah-untuk-whatsapp` sengaja diurutkan dari termurah ke
termahal** (itel A100CS → POCO C71 → POCO C81 Pro → Tecno Spark Go 3 → Redmi A7 Pro ⭐ →
Samsung A07 → Realme Note 80 → itel Power 80), bukan dari "paling direkomendasikan" duluan.
Kalau nambah/hapus produk, jaga urutan harga ini.

---

**PENDING (disepakati tapi belum dieksekusi, per 1 Sep 2026):**
- [ ] Checkmark hijau buat step yang super granular/klik-per-klik (terinspirasi itkoding) —
      HATI-HATI: jangan pakai checkmark buat list "hal yang harus DIHINDARI", cuma buat
      list "hal yang harus DILAKUKAN"
- [ ] Subjudul bernomor ("1. Muncul kode error X") khusus buat artikel `tanda-laptop-butuh-servis`
      dan `cek-sebelum-beli-second` (isinya emang "list beberapa tanda/hal", cocok direstruktur)
- [ ] Tabel spesifikasi (kayak tabel Nama/File/Support di itkoding) — belum ada elemen tabel
      sama sekali di artikel manapun

**pubDate ke-7 artikel sudah disebar** (bukan tanggal migrasi semua lagi) — item ini di
PRIORITAS 3 di bawah sudah SELESAI, jangan dikerjakan ulang.

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

**Masalah yang sering terjadi (update per 1 Sep 2026 — lebih spesifik dari versi lama):**
Bukan cuma "user edit manual" — masalah yang beneran kejadian adalah **2+ jalur kerja
paralel di file yang sama** (misal: Claude sesi ini + AI/tim lain, sama-sama ngedit
`[...slug].astro` atau file artikel Tips secara terpisah, gak saling tau). Begitu salah
satu jalur di-upload ke GitHub, hasil kerja jalur yang lain hilang — bukan karena
disengaja, tapi karena upload berikutnya nimpa total, gak di-merge otomatis. Ini
sempat kejadian sampai 3x berturut-turut (font ganti-ganti sendiri, warna CSS balik ke
default, link afiliasi hilang, placeholder `#` balik lagi) sebelum ketauan.

**Cara yang benar (WAJIB diikuti):**
1. **Kalau ada lebih dari satu AI/tim yang bakal megang file yang sama dalam periode
   berdekatan, selesaikan SATU jalur dulu sampai tuntas & ke-upload ke GitHub, baru
   pindah ke jalur lain.** Jangan biarkan dua-duanya jalan bersamaan di file yang sama.
2. Kalau mau lanjut sesi baru (device/tab/AI apapun), **bilang dulu di awal** kalau ada
   pekerjaan lain yang mungkin udah/lagi jalan di file yang sama — biar sesi baru itu
   ngecek dulu sebelum nimpa.
3. Selalu export/upload zip project **langsung dari GitHub** (bukan dari file lokal lama
   yang mungkin ketinggalan) sebagai titik awal sesi baru.
4. Kalau ada edit manual di luar Claude, ceritakan perubahannya dulu sebelum minta fix lain.
5. Sebelum minta fix baru di file yang sebelumnya udah pernah di-fix, **sebutkan fix apa
   aja yang seharusnya udah ada** (atau minta di-cross-check dulu) — biar ketauan dari
   awal kalau ternyata ada yang hilang, bukan ketauan belakangan pas udah bandingin lama.

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
