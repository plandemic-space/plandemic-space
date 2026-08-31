---
title: "Cara Cek Tipe RAM & SSD yang Cocok untuk Laptop/PC Kamu"
pubDate: "2026-09-01"
category: "Aksesoris"
tags: ["ram", "ssd", "upgrade", "kompatibilitas"]
description: "Panduan cek tipe RAM dan SSD yang cocok buat laptop/PC, lengkap sama rekomendasi merk dan lini produk spesifik dari yang paling unggul sampai paling ekonomis."
---

Kejadian yang sering banget kami temuin: orang udah semangat beli RAM atau SSD, sampai rumah dipasang, eh nggak kebaca. Bukan barangnya rusak — cuma nggak cocok sama slot atau tipe yang didukung laptopnya. Daripada rugi ongkos kirim balik, mending 5 menit cek dulu tipe yang pas. Caranya nggak susah, dan nggak butuh bongkar laptop (kecuali di bagian tertentu nanti kami kasih tau).

## Cek RAM: DDR berapa, sisa slot berapa

Ada dua cara, tinggal pilih mana yang lebih gampang buat kamu.

**Cara 1 — tanpa install apa-apa (Windows 10/11):**

1. Tekan `Ctrl + Shift + Esc` di keyboard buat langsung buka Task Manager
2. Kalau tampilannya masih ringkas, klik "More details" dulu di pojok kiri bawah
3. Klik tab **Performance** di sisi kiri, terus klik **Memory**
4. Di pojok kanan atas ada angka kayak "8.0 GB (2 of 2 slots used)" — itu artinya laptopnya punya 2 slot RAM dan udah kepasang semua. Kalau tertulis "1 of 2 slots used", berarti masih ada 1 slot kosong yang bisa ditambah
5. Di bagian bawah ada baris **Speed** dan **Form factor** — form factor inilah yang nunjukkin DDR3, DDR4, atau DDR5

Cara ini paling cepat, tapi khusus laptop keluaran lama-menengah yang RAM-nya masih bisa dicopot-pasang. Kalau laptopnya tipis banget (ultrabook kelas atas), ada kemungkinan RAM-nya udah disolder langsung ke motherboard — nggak ada slot sama sekali, jadi nggak bisa diupgrade fisik walaupun di Task Manager kelihatan ada RAM-nya. Ini yang paling sering bikin orang beli RAM padahal ternyata laptopnya emang nggak bisa di-upgrade.

**Cara 2 — pakai CPU-Z (lebih detail, gratis):**

1. Download CPU-Z dari situs resminya, cpuid.com — jangan dari sembarang situs download biar nggak kebawa bundle software aneh-aneh
2. Install seperti biasa, buka aplikasinya
3. Klik tab **Memory**, lihat baris "Type" — di situ tertulis DDR3, DDR4, atau DDR5-nya
4. Klik tab **SPD**, di kiri atas ada dropdown "Slot #1", "Slot #2", dan seterusnya sesuai jumlah slot fisik di laptop. Klik satu per satu — kalau kolomnya kosong berarti slot itu belum kepasang apa-apa, alias masih bisa ditambah

Buat kapasitas maksimal yang didukung laptopnya (misal max 16GB atau bisa sampai 32GB), CPU-Z nggak nunjukkin ini. Cara ngeceknya: cari nomor model laptop kamu (biasanya ada di stiker bagian bawah laptop), atau ketik perintah ini di Command Prompt:

```
wmic csproduct get name
```

Nomor model yang muncul itu tinggal dicari spesifikasi resminya di situs merk laptop tersebut, atau lewat pencarian "spesifikasi [nomor model] RAM maksimal".

Satu tips tambahan: kalau mau nambah RAM dan slotnya masih ada 2 kosong, lebih baik pasang sepasang keping yang identik (misal 2x8GB) daripada 1 keping besar sendirian (1x16GB). Ini soal dual-channel — dua keping yang jalan bareng bikin transfer datanya lebih cepat dibanding satu keping sendirian, walau totalnya sama-sama 16GB.

## Cek SSD: bentuknya yang mana, slotnya support apa

SSD yang beredar di pasaran ada tiga bentuk, dan nggak semuanya bisa dipasang sembarangan:

- **2.5 inch SATA** — bentuknya kotak tipis, mirip HDD external, dipasang di bay yang sama dengan HDD lama yang mau diganti
- **M.2 SATA** — bentuknya kartu kecil memanjang (mirip permen karet lonjong), tapi kecepatan transfernya masih setara SATA biasa
- **M.2 NVMe** — bentuk fisiknya mirip banget sama M.2 SATA, tapi jalur datanya lewat PCIe sehingga jauh lebih cepat

Nah, ini bagian yang paling sering bikin orang salah beli: M.2 SATA dan M.2 NVMe itu bentuknya nyaris identik, tapi slot di motherboard belum tentu support dua-duanya. Kalau slot laptop kamu cuma didesain buat NVMe, SSD M.2 SATA nggak akan kebaca meski secara fisik muat masuk. Bahkan sebagian motherboard cuma nyediain jalur PCIe x2 buat slot M.2-nya — jadi SSD NVMe secepat apapun tetap bakal ke-bottleneck, nggak keluar kecepatan penuhnya. Cara bedain slotnya:

1. Perhatikan bagian pin/notch (potongan) di sisi konektor SSD-nya — kalau potongannya cuma di satu sisi kiri (disebut "B key"), itu biasanya SATA. Kalau potongannya di sisi kanan ("M key"), itu NVMe. Kalau ada dua potongan sekaligus ("B+M key"), fisiknya bisa masuk ke slot mana aja, tapi kecepatannya tetap ngikutin slot motherboard-nya
2. Buat tau slot di laptop kamu support yang mana, cara paling aman adalah cek buku manual servis resmi laptop tersebut (biasanya ada PDF-nya kalau dicari "service manual [nomor model laptop]"), soalnya ini nggak kebaca lewat software
3. Kalau mau tau interface SSD/HDD yang **sudah terpasang sekarang**, buka software gratis **CrystalDiskInfo** — di situ langsung kelihatan tertulis interface-nya, SATA atau NVMe (PCIe)

Kalau setelah dicek masih ragu — misalnya laptopnya model lama yang susah dicari manualnya — cara paling gampang ya foto langsung bagian dalam slot storage-nya (buka casing bawah laptop, biasanya cukup lepas beberapa baut), lalu kirim ke kami lewat WhatsApp buat dicek dulu sebelum kamu checkout.

## Merk RAM: dari yang paling unggul sampai yang paling ekonomis

Ketiga merk ini sama-sama jual RAM laptop SODIMM DDR4 dengan beberapa pilihan kecepatan (2133/2666/3200MHz), jadi bedanya lebih ke soal keandalan dan urusan klaim garansi kalau kelak bermasalah:

- **[Kingston](https://s.shopee.co.id/1qbek7VUt0)** — lini ValueRAM-nya (kode produk biasanya diawali "KVR") yang paling umum dijual buat kebutuhan upgrade laptop harian, dan ini yang paling sering dijadiin acuan di industri servis karena hampir nggak pernah bikin masalah kompatibilitas aneh-aneh. Garansinya seumur hidup (limited lifetime). Kalau kamu tipe yang maunya sekali pasang langsung beres tanpa mikir lagi, ini pilihannya — harganya di kelas menengah-atas.
- **[Transcend](https://s.shopee.co.id/20v4ws4uRX)** — lini JetRam (kode produk diawali "JM"), garansinya juga seumur hidup. Yang perlu diperhatiin: proses klaim garansinya lebih rewel soal kondisi fisik stiker/segel dibanding V-GeN — kalau stikernya rusak dikit aja, klaimnya bisa ditolak. Jadi kalau pilih Transcend, simpan baik-baik kondisi fisiknya, dan jangan buang boks/segelnya.
- **[V-GeN](https://s.shopee.co.id/20v4yq8hQA)** — lini Rescue, paling murah dari tiga-tiganya tapi bukan berarti abal-abal. V-GeN udah beberapa kali dapat Top Brand Award di Indonesia, garansinya juga seumur hidup, dan proses klaimnya justru paling nggak ribet — nggak wajib bawa nota pembelian, tinggal bawa unitnya ke service center. Buat yang budgetnya pas-pasan tapi tetap mau garansi jelas, ini opsi paling masuk akal.

## Merk SSD: dari yang paling unggul sampai yang paling ekonomis

Beda sama RAM, garansi SSD ini nggak flat per merk — beda lini produk, beda tahun garansinya, bahkan kami nemuin kasus SKU yang sama persis dicantumin beda tahun garansi di toko yang berbeda (bakal dijelasin di bawah). Jadi angka di bawah ini sebagai gambaran umum, tapi tetap **cek garansi yang tertulis di listing produknya pas mau checkout**, jangan cuma percaya nama merknya doang.

- **[Samsung Memory](https://s.shopee.co.id/9AOFTxTTj1)** — salah satu dari sedikit merk yang bikin sendiri chip NAND flash-nya, bukan cuma beli chip terus dirakit. Lini yang biasa dijual buat upgrade laptop, seri 980 (NVMe PCIe 3.0) dan 990 EVO Plus (NVMe PCIe 4.0/5.0), sama-sama dapat garansi resmi 5 tahun di toko Indonesia — ini paling konsisten di antara semua opsi. Harganya juga paling mahal, tapi kalau laptopnya buat kerja yang datanya penting banget, ini yang paling minim risiko.
- **[Kingston](https://s.shopee.co.id/1qbek7VUt0)** — ada dua lini yang relevan: A400 (SATA 2.5 inch, entry-level) yang konsisten dapat garansi resmi 3 tahun, dan NV2 (M.2 NVMe, budget) yang justru perlu hati-hati — beberapa toko di Indonesia cuma nyantumin garansi 1 tahun buat NV2, meskipun harusnya SSD Kingston lain rata-rata 3-5 tahun. Jadi kalau incar NV2, pastikan baca dulu garansi yang tertulis di listing-nya sebelum checkout.
- **[SanDisk](https://s.shopee.co.id/2VrLZbEknh)** — sekarang satu grup sama Western Digital. Lini SSD Plus (SATA 2.5 inch) yang paling umum dijual buat upgrade laptop dapat garansi resmi 3 tahun. Di Indonesia mungkin lebih kamu kenal lewat flashdisk atau microSD-nya, tapi lini SSD-nya juga oke buat kebutuhan harian.
- **[Transcend](https://s.shopee.co.id/20v4ws4uRX)** — lini MTE220S (M.2 NVMe) adalah yang paling sering direkomendasikan buat budget terbatas. Nah ini yang kami maksud soal garansi nggak konsisten: SKU yang persis sama (misalnya TS512GMTE220S) ada toko yang nyantumin garansi 2 tahun, ada juga yang 5 tahun — kemungkinan karena kebijakan garansinya berubah seiring waktu tapi listing lama belum diupdate. Jangan asumsi, cek dulu angka yang tertulis di listing yang mau kamu beli.
- **[V-GeN](https://s.shopee.co.id/20v4yq8hQA)** — sama kayak Transcend, ada perbedaan antar lini: FAQ resmi V-GeN menyebut garansi SSD flat 3 tahun untuk semua tipe, tapi lini terbaru mereka, Hyper (M.2 NVMe), sudah dicantumin garansi resmi 5 tahun di situs resminya. Jadi kemungkinan garansi lini terbaru udah dinaikin. Paling ekonomis dari segi harga, dan proses klaimnya gampang sama kayak lini RAM-nya — cocok kalau tujuan utamanya cuma pengin laptop nggak lemot lagi tanpa keluar budget besar.

---

**Masih ragu tipe RAM/SSD yang cocok buat laptop kamu apa, atau bingung lini mana yang paling pas?** [Konsultasikan dulu ke Plandemic Space via WhatsApp](https://wa.me/6282241439784?text=Halo%2C%20saya%20mau%20upgrade%20RAM%2FSSD%20tapi%20belum%20yakin%20tipe%20yang%20cocok%20buat%20laptop%20saya%2C%20mau%20konsultasi), kirim aja foto atau nomor model laptopnya, biar kami bantu cek dulu sebelum kamu checkout.
