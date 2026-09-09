---
title: "Cara Cek Tipe RAM & SSD yang Cocok untuk Laptop/PC Kamu"
seoTitle: "Cara Cek Tipe RAM & SSD Laptop Sebelum Beli (DDR3/DDR4/DDR5, SATA/NVMe)"
pubDate: "2026-09-01"
category: "Aksesoris"
tags: ["ram", "ssd", "upgrade", "kompatibilitas"]
description: "Panduan lengkap cek tipe RAM dan SSD yang cocok buat laptop/PC pakai Task Manager dan CPU-Z, plus rekomendasi merk per kelas harga sebelum checkout."
---

Kejadian yang sering banget kami temuin: orang udah semangat beli RAM atau SSD, sampai rumah dipasang, eh nggak kebaca. Bukan barangnya rusak — cuma nggak cocok sama slot atau tipe yang didukung laptopnya. Daripada rugi ongkos kirim balik, mending 5 menit cek dulu tipe yang pas. Caranya nggak susah, dan nggak butuh bongkar laptop kecuali di bagian tertentu yang nanti kami kasih tau.

## Cek RAM: DDR Berapa, Sisa Slot Berapa

Ada dua cara buat ngecek ini, tinggal pilih mana yang lebih gampang.

**Cara 1 — tanpa install apa-apa (Windows 10/11):**

1. Tekan `Ctrl + Shift + Esc` buat langsung buka Task Manager
2. Kalau tampilannya masih ringkas, klik "More details" dulu di pojok kiri bawah
3. Klik tab **Performance**, terus klik **Memory**
4. Di pojok kanan atas ada angka kayak "8.0 GB (2 of 2 slots used)" — itu artinya laptopnya punya 2 slot RAM dan udah kepasang semua. Kalau tertulis "1 of 2 slots used", berarti masih ada 1 slot kosong yang bisa ditambah

Satu hal yang perlu diluruskan: baris **Form factor** yang muncul di situ **bukan** penunjuk DDR3, DDR4, atau DDR5. Form factor cuma nunjukkin bentuk fisik modulnya — SODIMM (buat laptop) atau DIMM (buat PC/desktop). Faktanya, Task Manager di banyak versi Windows memang nggak nunjukkin generasi DDR sama sekali, jadi jangan dipaksakan nebak dari situ. Baris **Speed** bisa jadi petunjuk kasar — DDR3 umumnya di bawah 1866MHz, DDR4 di kisaran 2133-3200MHz, DDR5 mulai dari 4800MHz ke atas — tapi ini cuma perkiraan berdasarkan pola umum, bukan kepastian, apalagi kalau speed-nya pas di angka ambang antara dua generasi.

Cara ini paling cepat, tapi khusus laptop yang RAM-nya masih bisa dicopot-pasang. Kalau laptopnya tipis banget (ultrabook kelas atas), ada kemungkinan RAM-nya udah disolder langsung ke motherboard — nggak ada slot sama sekali, jadi nggak bisa diupgrade fisik walaupun di Task Manager kelihatan ada RAM-nya. Ini yang paling sering bikin orang beli RAM padahal ternyata laptopnya emang nggak bisa di-upgrade.

**Cara 2 — pakai CPU-Z, buat kepastian generasi DDR-nya (gratis):**

1. Download [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) dari situs resminya, cpuid.com — jangan dari sembarang situs download biar nggak kebawa bundle software aneh-aneh
2. Install seperti biasa, buka aplikasinya
3. Klik tab **Memory**, lihat baris **"Type"** — di situ tertulis DDR3, DDR4, atau DDR5-nya secara pasti, beda sama Form factor di Task Manager yang cuma nunjukkin bentuk fisik
4. Klik tab **SPD**, di kiri atas ada dropdown "Slot #1", "Slot #2", dan seterusnya sesuai jumlah slot fisik di laptop. Klik satu per satu — kalau kolomnya kosong berarti slot itu belum kepasang apa-apa, alias masih bisa ditambah

Buat kapasitas maksimal yang didukung laptopnya (misal max 16GB atau bisa sampai 32GB), CPU-Z nggak nunjukkin ini. Cara ngeceknya: cari nomor model laptop kamu (biasanya ada di stiker bagian bawah laptop), atau ketik perintah ini di Command Prompt:

```
wmic csproduct get name
```

Nomor model yang muncul itu tinggal dicari spesifikasi resminya di situs merk laptop tersebut, atau lewat pencarian "spesifikasi [nomor model] RAM maksimal".

Satu tips tambahan soal dual-channel: kalau slotnya masih ada 2 kosong, pasang sepasang keping yang identik (misal 2x8GB) memang bikin transfer data lebih cepat dibanding 1 keping besar sendirian (1x16GB), karena dua keping yang jalan bareng punya jalur data yang lebih lebar. Tapi ini bukan keharusan mutlak — kalau kamu cuma nambah 1 keping ke slot kosong yang tersisa (nggak sepasang), laptopnya tetap jalan normal, kapasitasnya tetap nambah, cuma nggak dapat bonus kecepatan dual-channel itu. Jadi bukan gagal, cuma kurang optimal dikit — worth dipertimbangkan kalau memang budgetnya cukup buat beli sepasang sekaligus.

## Cek SSD: Bentuknya yang Mana, Slotnya Support Apa

SSD yang beredar di pasaran ada tiga bentuk, dan nggak semuanya bisa dipasang sembarangan:

- **2.5 inch SATA** — bentuknya kotak tipis, mirip HDD external, dipasang di bay yang sama dengan HDD lama yang mau diganti
- **M.2 SATA** — bentuknya kartu kecil memanjang (mirip permen karet lonjong), tapi kecepatan transfernya masih setara SATA biasa
- **M.2 NVMe** — bentuk fisiknya mirip banget sama M.2 SATA, tapi jalur datanya lewat PCIe sehingga jauh lebih cepat

Nah, ini bagian yang paling sering bikin orang salah beli: M.2 SATA dan M.2 NVMe itu bentuknya nyaris identik. Cara paling gampang buat mulai membedakan adalah lihat notch (potongan) di sisi konektor SSD-nya — kalau potongannya cuma di satu sisi kiri (disebut "B key"), itu biasanya SATA. Kalau potongannya di sisi kanan ("M key"), itu NVMe. Kalau ada dua potongan sekaligus ("B+M key"), fisiknya bisa masuk ke slot mana aja.

Tapi ini penting: **notch cuma nunjukkin apa yang didukung SSD-nya, bukan apa yang didukung slot di laptop kamu** — dua hal yang beda dan sering ketuker. Slot laptop yang didesain khusus buat NVMe nggak akan bisa baca SSD M.2 SATA meski secara fisik muat masuk, walaupun notch-nya keliatan cocok. Bahkan sebagian motherboard cuma nyediain jalur PCIe x2 buat slot M.2-nya — jadi SSD NVMe secepat apapun tetap bakal ke-bottleneck di situ, nggak keluar kecepatan penuhnya. Jadi notch itu langkah awal buat nebak, bukan kepastian akhir.

Cara mastiin slot laptopnya beneran support yang mana:

1. Cek buku manual servis resmi laptop tersebut (biasanya ada PDF-nya kalau dicari "service manual [nomor model laptop]") — ini cara paling akurat, soalnya info ini nggak kebaca lewat software apapun
2. Kalau mau tau interface SSD/HDD yang sudah terpasang sekarang, buka software gratis [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) — di situ langsung kelihatan tertulis interface-nya, SATA atau NVMe (PCIe)

Kalau setelah dicek masih ragu — misalnya laptopnya model lama yang susah dicari manualnya — cara paling gampang ya foto langsung bagian dalam slot storage-nya (buka casing bawah laptop, biasanya cukup lepas beberapa baut), lalu kirim ke kami lewat WhatsApp buat dicek dulu sebelum kamu checkout.

## Sebelum Checkout, Cocokkan Dulu Semuanya

Setelah dua langkah di atas, kamu harusnya udah tau: DDR RAM-nya berapa, ada slot kosong atau nggak, kapasitas maksimal laptopnya berapa, dan SSD-nya (atau slot kosongnya) support bentuk apa. Sebelum bayar, cek ulang tiga hal ini bareng-bareng:

- RAM yang mau dibeli DDR-nya sama persis kayak yang kebaca di CPU-Z (bukan cuma nebak dari speed)
- Kapasitas total setelah upgrade nggak lewat batas maksimal yang didukung laptop
- SSD yang mau dibeli bentuknya cocok sama yang didukung slot laptop kamu — bukan cuma notch-nya yang keliatan pas

Kalau ada satu aja dari tiga poin itu yang masih meragukan, mending tanya dulu sebelum checkout — daripada telanjur beli dan ternyata harus ribet retur.

## Pilih Produknya: Sesuaikan sama Budget

Sekarang tinggal pilih merk & lini produknya. Ini bukan ranking "mana yang paling bagus", tapi lebih ke kelas harga dan tingkat keandalan garansi — jadi sesuaikan sama kebutuhan dan budget kamu.

**Kelas Premium**

Buat SSD, **[Samsung Memory](https://s.shopee.co.id/9AOFTxTTj1)** ada di kelas ini — salah satu dari sedikit merk yang bikin sendiri chip NAND flash-nya, bukan cuma beli chip dari pihak lain terus dirakit. Lini yang biasa dijual buat upgrade laptop, seri 980 (NVMe PCIe 3.0) dan 990 EVO Plus (NVMe PCIe 4.0/5.0), sama-sama dapat garansi resmi 5 tahun di toko Indonesia — konsistensi garansi ini yang bikin merk ini masuk kelas atas, bukan sekadar nama besar. Harganya juga paling tinggi dari opsi lain, jadi paling masuk akal kalau laptopnya buat kerja yang datanya penting.

Buat RAM, **[Kingston](https://s.shopee.co.id/1qbek7VUt0)** lini ValueRAM (kode produk biasanya diawali "KVR") ada di kelas serupa. Garansinya seumur hidup (limited lifetime), dan ini salah satu yang paling sering kami pakai buat servis pelanggan karena jarang bikin masalah kompatibilitas aneh-aneh. Harganya di kelas menengah-atas, cocok buat yang maunya sekali pasang langsung beres tanpa mikir lagi.

**Kelas Menengah**

Di kelas ini ada beberapa opsi tergantung mau RAM atau SSD. Buat RAM, **[Transcend](https://s.shopee.co.id/20v4ws4uRX)** lini JetRam (kode produk diawali "JM") garansinya juga seumur hidup, cuma yang perlu diperhatiin: proses klaim garansinya lebih rewel soal kondisi fisik stiker/segel dibanding V-GeN — kalau stikernya rusak dikit aja, klaimnya bisa ditolak. Jadi kalau pilih ini, simpan baik-baik kondisi fisiknya, jangan buang boks/segelnya.

Buat SSD, ada tiga opsi di kelas menengah. **[SanDisk](https://s.shopee.co.id/2VrLZbEknh)** — sekarang satu grup sama Western Digital — lini SSD Plus (SATA 2.5 inch) yang paling umum dijual buat upgrade laptop dapat garansi resmi 3 tahun. Di Indonesia mungkin lebih dikenal lewat flashdisk atau microSD-nya, tapi lini SSD-nya juga solid buat kebutuhan harian.

Kingston juga punya opsi di kelas SSD menengah: lini A400 (SATA 2.5 inch, entry-level) konsisten dapat garansi resmi 3 tahun. Tapi hati-hati sama lini NV2-nya (M.2 NVMe, budget) — beberapa toko di Indonesia cuma nyantumin garansi 1 tahun buat lini ini, meskipun SSD Kingston lain rata-rata 3-5 tahun. Jadi kalau incar NV2, pastikan baca dulu garansi yang tertulis di listing-nya sebelum checkout.

Transcend lini MTE220S (M.2 NVMe) juga sering direkomendasikan buat budget menengah, tapi ini contoh nyata kenapa nggak boleh asumsi soal garansi: SKU yang persis sama (misalnya TS512GMTE220S) pernah kami temukan ada toko yang nyantumin garansi 2 tahun, ada juga yang 5 tahun — kemungkinan karena kebijakan garansinya berubah seiring waktu tapi listing lama belum diupdate. Cek dulu angka yang tertulis di listing yang mau kamu beli, jangan cuma percaya nama produknya.

**Kelas Lebih Hemat**

**[V-GeN](https://s.shopee.co.id/20v4yq8hQA)** ada di kelas ini buat RAM maupun SSD-nya. Lini Rescue (RAM) paling murah dari tiga merk RAM yang dibahas di atas, tapi bukan berarti abal-abal — V-GeN udah beberapa kali dapat Top Brand Award di Indonesia, garansinya juga seumur hidup, dan proses klaimnya justru paling praktis karena nggak wajib bawa nota pembelian, tinggal bawa unitnya ke service center.

Buat SSD-nya, lini Hyper (M.2 NVMe) juga di kelas paling ekonomis dari segi harga. Soal garansi agak mirip kasus Transcend tadi: FAQ resmi V-GeN menyebut garansi SSD flat 3 tahun untuk semua tipe, tapi lini terbaru mereka, Hyper, udah dicantumin garansi resmi 5 tahun di situs resminya — kemungkinan garansi lini terbaru ini emang udah dinaikin dari kebijakan lama. Cocok buat yang tujuan utamanya cuma pengin laptop nggak lemot lagi tanpa keluar budget besar.

## Kapan Sebaiknya Minta Bantuan Teknisi

Kalau dari semua langkah di atas kamu masih ragu — entah nggak yakin baca hasil CPU-Z, nggak nemu manual servis laptopnya, atau bingung nentuin slot yang kosong itu bener-bener kosong atau enggak — itu tandanya udah waktunya tanya, bukan asal beli dan berharap cocok. Salah beli tipe RAM/SSD itu bukan cuma rugi ongkir, tapi juga buang waktu nunggu retur sementara laptopnya tetap lemot.

---

**Masih ragu tipe RAM/SSD yang cocok buat laptop kamu apa, atau bingung lini mana yang paling pas?** [Konsultasikan dulu ke Plandemic Space via WhatsApp](https://wa.me/6282241439784?text=Halo%2C%20saya%20mau%20upgrade%20RAM%2FSSD%20tapi%20belum%20yakin%20tipe%20yang%20cocok%20buat%20laptop%20saya%2C%20mau%20konsultasi), kirim aja foto atau nomor model laptopnya, biar kami bantu cek dulu sebelum kamu checkout.
