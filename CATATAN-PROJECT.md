# CATATAN PROJECT — Plandemic Space
# Update: 2 Februari 2026
# Status: Website solid — siap live, beberapa hal masih bisa ditingkatkan

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

## STATUS WEBSITE (per 2 Februari 2026)

### SECTION ORDER (sudah benar)
Hero → Cara Kerja → Layanan → Tentang Kami → Galeri → Nilai Kami → Testimoni → FAQ → Kontak

### META & SEO TEKNIS
- Title: "Plandemic Space | Servis Laptop, Komputer & Printer di Kemiri Purworejo" ✓
- Meta desc: lokasi spesifik (Dusun Ngemplak, Kemiri, Purworejo) ✓
- Schema: ["LocalBusiness", "RepairShop"] + hasOfferCatalog (6 layanan) ✓
- reviewCount: 32 (update manual kalau ulasan bertambah)
- robots.txt + sitemap.xml: sudah ada ✓
- Google Search Console: sudah didaftarkan ✓

### FONT
- 3 family: DM Serif Display (headline puitis) + Plus Jakarta Sans (body) + Rajdhani (brand name)
- Montserrat: sudah dihapus ✓

### COPYWRITING
**Hero:**
- Kicker: BUKA SETIAP HARI · 08.00–17.00
- H1: Ruang Solusi, Tumbuh Bersama.
- Sub: "Servis laptop, komputer & printer terpercaya di Kemiri, Purworejo — plus print, fotokopi, pengetikan dokumen, dan jual beli perangkat. Konsultasi & diagnosa gratis."

**Navbar:**
- Tagline: KEMIRI · PURWOREJO · JAWA TENGAH

**Cara Kerja:**
- Title: "Tiga langkah, beres."
- Step 1: angle analisa dulu, bukan "gratis" (sudah disebut di hero)
- Step 2: "Tidak ada biaya kejutan" — satu-satunya tempat kalimat ini di Cara Kerja
- Step 3: bisa ambil langsung atau diantar

**Layanan (6 card):**
- 01: Servis Laptop & Komputer (laptop, notebook, PC desktop, mini PC, AIO) · badge PANGGILAN
- 02: Servis Printer (infus, cartridge, perawatan) · badge PANGGILAN
- 03: Print, Fotokopi & Scan
- 04: Pengetikan Dokumen
- 05: Jual Beli HP & Laptop · badge SECOND & BARU
- 06: Servis HP (bantuan, bukan fokus utama — chat dulu)

**Tentang Kami:**
- P1: tidak lahir dari rencana bisnis + 10 tahun pengalaman
- P2: filosofi nama Plandemic (tangkis konspirasi → filosofi rencana-Nya → "Plandemic Space adalah salah satunya")
- Timeline 1: "Satu postingan, satu keputusan"
- Timeline 2: "Orderan pertama masuk"
- Timeline 3 (PlandemicNET): sinyal tidak ada, internet kabel belum masuk, paket data mahal → bangun sendiri → "Ada yang butuh, ada yang gerak"
- Timeline 4: "Multi service & digital dusun" (intentional — ada simbahngemplak.vercel.app)

**Nilai Kami (4 poin):**
1. Berbasis rumah, bukan toko besar
2. Jujur & transparan dari awal (diagnosa gratis, tidak ada biaya kejutan)
3. Tumbuh bersama kebutuhan warga (PlandemicNET → multi service)
4. Ada garansi pengerjaan ← naik dari FAQ, value prop penting

**Testimoni (5 review, semua real dari Google Maps):**
1. Wylda Maulana — HP mati total, sudah gagal di tempat lain, berhasil di sini + komunikatif
2. Nur Waidah — keyboard+speaker laptop, lebih murah dari kota
3. Wagiyah Ngisor — repeat customer, ga asal nyuruh beli yg mahal, laptop awet untuk kuliah
4. Sumi Hamdalah — HP tombol mangslep kirain ga bisa, ternyata bisa + bonus softcase
5. Grandpeaks (Local Guide) — keren, memuaskan

**FAQ (6 pertanyaan):**
1. Berapa lama servis? → 1-2 jam ringan, 1-3 hari hardware
2. Berapa biaya? → tidak ada biaya cek, estimasi dulu
3. Bisa panggilan? → bisa laptop/komputer/printer
4. HP bisa diservis? → bisa, chat dulu
5. Ada garansi? → ada
6. Jual laptop second? → ada, sudah dicek kondisinya

**CTA:** "Ceritakan dulu, kami dengarkan."

**Footer:** © 2020–2026 · Dari rumah, untuk warga.

### GALERI (bento CSS grid, 3 kolom × 4 baris)
Urutan & kelas:
1. gal-4-meja-kerja.webp → gal-wide (landscape, hero galeri)
2. gal-1-servis-laptop.webp → gal-tall (square, proses kerja)
3. gal-5-printer.webp → reguler (landscape)
4. gal-7-laptop-merah.webp → gal-tall (portrait)
5. gal-6-mainboard.webp → reguler (landscape)
6. gal-2-heatsink.webp → gal-tall (portrait)
7. gal-3-keyboard.webp → gal-wide (landscape, keyboard replacement)

CSS: grid-template-rows: 190px × 4, gap: 0.75rem
Mobile: 2 kolom, semua span direset, height: 150px

### REDUNDANSI YANG MASIH ADA (terkontrol, tidak perlu dikurangi lagi)
- "biaya kejutan": 3x (Step 2, Nilai Kami, FAQ) — tiga konteks berbeda, OK
- "diagnosa gratis": 3x — satu di hero sub, satu di card, satu di Nilai Kami
- "gratis": 6x total — masih agak banyak tapi nilai prop utama, bisa monitor
- "warga": 6x — brand language, intentional
- "transparan": 3x — masih OK

---

## YANG MASIH PENDING (urutan prioritas)

### PRIORITAS 1 — Bisa dikerjakan sekarang
- [ ] Test di HP fisik (Android minimal 2 perangkat berbeda kelas)
      Fokus: tombol WA mengambang, ukuran tombol, keterbacaan teks
      Ini belum pernah dilakukan sama sekali

- [ ] Jalankan Google PageSpeed Insights
      URL: https://pagespeed.web.dev/
      Catat score mobile vs desktop, laporkan ke sesi berikutnya

### PRIORITAS 2 — Konten
- [ ] Update reviewCount di schema kalau ulasan bertambah
      Ada di index.html baris schema, cari "reviewCount"

- [ ] Foto galeri tambahan ke depan:
      - Area print/fotokopi (belum ada foto layanan ini)
      - Hasil servis yang bersih/rapi (bukan proses)
      - Suasana tempat lebih luas

### PRIORITAS 3 — Pertimbangkan, belum urgent
- [ ] Gallery max-width: sekarang 880px, bisa naik ke 1080px
      Perlu cek konsistensi dengan section lain

- [ ] Jam operasional di hero atau navbar sticky
      Sekarang hanya di kicker dan footer

- [ ] Embed Google Maps kecil di section Kontak

- [ ] Pantau GSC setelah 2-4 minggu
      Cek: query apa yang membawa traffic, halaman mana terindex
      Ini akan kasih data untuk keputusan SEO berikutnya

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

## STRUKTUR FILE

```
/
├── index.html              ← file utama, source of truth
├── CATATAN-PROJECT.md      ← dokumen ini
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css           ← font, grid galeri, semua styling
├── js/
│   └── main.js             ← tidak berubah dari awal
└── img/
    ├── favicon.ico / favicon-*.png / apple-touch-icon.png
    ├── logo.svg / logo_gold.svg / logo-512*.png / og-image.png
    └── gallery/
        ├── gal-1-servis-laptop.webp    (1200×1200, square)
        ├── gal-2-heatsink.webp         (675×1200, portrait)
        ├── gal-3-before-after.webp     (tidak dipakai di HTML, bisa dihapus)
        ├── gal-3-keyboard.webp         (1456×816, landscape) ← pengganti
        ├── gal-4-meja-kerja.webp       (1200×675, landscape)
        ├── gal-5-printer.webp          (1200×675, landscape)
        ├── gal-6-mainboard.webp        (1200×675, landscape)
        └── gal-7-laptop-merah.webp     (675×1200, portrait)
```

---

## SKOR AUDIT FINAL

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

---

## WORKFLOW ANTAR SESI

**Masalah yang sering terjadi:**
Setiap kali upload versi baru, beberapa fix dari sesi sebelumnya hilang karena
user edit manual file lama (bukan file output dari Claude).

**Cara yang benar:**
1. Selalu mulai dari file output Claude sebagai base
2. Kalau ada edit manual, ceritakan perubahannya ke Claude dulu
3. Claude akan merge perubahan ke file yang sudah benar
4. Baru upload ke GitHub

---

(Disusun dari sesi panjang bersama Claude/Anthropic — 2 Februari 2026)
