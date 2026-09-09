---
title: "Cara Cek Tipe RAM & SSD yang Cocok untuk Laptop/PC Kamu"
seoTitle: "Cara Cek Tipe RAM & SSD Laptop Sebelum Beli (DDR3/DDR4/DDR5, SATA/NVMe)"
pubDate: "2026-09-01"
category: "Aksesoris"
tags: ["ram", "ssd", "upgrade", "kompatibilitas"]
description: "Cara cek DDR RAM dan bentuk SSD yang cocok buat laptop kamu pakai Task Manager dan CPU-Z, plus rekomendasi merk per kelas harga sebelum checkout."
---

Kejadian yang sering banget kami temuin: orang udah semangat beli RAM atau SSD, sampai rumah dipasang, eh nggak kebaca. Bukan barangnya rusak — cuma nggak cocok sama slot atau tipe yang didukung laptopnya. Daripada rugi ongkos kirim balik, mending 5 menit cek dulu tipe yang pas sebelum checkout.

## 1. Cek RAM: DDR Berapa, Sisa Slot Berapa

**Lewat Task Manager dulu (nggak perlu install apa-apa):**

1. Tekan `Ctrl + Shift + Esc`, klik "More details" kalau tampilannya masih ringkas
2. Klik tab **Performance**, terus klik **Memory**
3. Di pojok kanan atas ada angka kayak "8.0 GB (2 of 2 slots used)" — itu artinya laptopnya punya 2 slot dan udah kepasang semua. Kalau "1 of 2 slots used", masih ada 1 slot kosong

Yang perlu diluruskan: baris **Form factor** di situ **bukan** penunjuk DDR3/DDR4/DDR5 — itu cuma nunjukkin bentuk fisiknya, SODIMM (laptop) atau DIMM (PC/desktop). Task Manager di banyak sistem memang nggak nunjukkin generasi DDR-nya sama sekali. Speed (misal 2400MHz, 3200MHz) bisa jadi petunjuk kasar — DDR3 umumnya di bawah 1866MHz, DDR4 di kisaran 2133-3200MHz, DDR5 mulai 4800MHz ke atas — tapi ini cuma perkiraan, bukan kepastian.

**Buat kepastiannya, pakai CPU-Z (gratis):**

1. Download dari situs resminya, [cpuid.com](https://www.cpuid.com/softwares/cpu-z.html) — jangan dari sembarang situs biar nggak kebawa bundle software aneh
2. Klik tab **Memory**, baris **"Type"** di situ yang nunjukkin DDR3/DDR4/DDR5 secara pasti
3. Klik tab **SPD**, cek dropdown slot satu per satu — kolom kosong berarti slot itu masih bisa ditambah

Kalau laptopnya ultrabook tipis banget, ada kemungkinan RAM-nya udah disolder ke motherboard, nggak ada slot fisik sama sekali walau di Task Manager kelihatan ada RAM-nya — jadi nggak bisa diupgrade meski hasil cek di atas kelihatan "normal". Buat kapasitas maksimal yang didukung, cari nomor model laptopnya (stiker di bagian bawah, atau ketik `wmic csproduct get name` di Command Prompt), lalu cari spesifikasi resminya di situs merk laptop tersebut.

Satu catatan soal dual-channel: kalau ada 2 slot kosong, pasang sepasang keping identik memang bikin transfer data lebih cepat dibanding 1 keping besar sendirian. Tapi ini bukan keharusan mutlak — kalau kamu cuma nambah 1 keping ke slot kosong yang tersisa, laptopnya tetap jalan normal, cuma nggak dapat bonus kecepatan dual-channel itu. Bukan gagal, cuma kurang optimal dikit.

## 2. Cek SSD: Bentuk dan Slotnya Support Apa

Ada tiga bentuk SSD di pasaran:

- **2.5 inch SATA** — kotak tipis, mirip HDD lama yang mau diganti
- **M.2 SATA** — kartu kecil memanjang, kecepatannya setara SATA biasa
- **M.2 NVMe** — bentuk fisiknya mirip banget M.2 SATA, tapi lewat jalur PCIe yang jauh lebih cepat

M.2 SATA dan M.2 NVMe ini yang paling sering bikin salah beli karena bentuknya nyaris identik. Notch (potongan) di sisi konektornya bisa jadi petunjuk awal — cuma potongan kiri ("B key") biasanya SATA, cuma potongan kanan ("M key") biasanya NVMe, dua-duanya ("B+M key") berarti fisiknya bisa masuk ke slot mana aja. **Tapi notch doang belum cukup buat mastiin cocok** — itu cuma nunjukkin apa yang didukung SSD-nya, bukan apa yang didukung slot di laptop kamu. Slot laptop yang didesain khusus NVMe nggak akan baca SSD M.2 SATA meski notch-nya cocok dan fisiknya muat. Bahkan sebagian motherboard cuma nyediain jalur PCIe x2 buat slotnya, jadi SSD NVMe secepat apapun tetap ke-bottleneck di situ.

Cara mastiin slot laptopnya:

- Cek buku manual servis resmi laptop tersebut (cari "service manual [nomor model]") — ini yang paling akurat, karena nggak kebaca lewat software apapun
- Atau buka [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) (gratis) buat lihat interface SSD/HDD yang udah terpasang sekarang — langsung kelihatan tertulis SATA atau NVMe (PCIe)

Kalau masih ragu, apalagi buat laptop model lama yang manualnya susah dicari, foto langsung bagian dalam slot storage-nya (buka casing bawah, biasanya cukup lepas beberapa baut), lalu kirim ke kami via WhatsApp buat dicek dulu sebelum checkout.

## 3. Pastikan Kompatibilitasnya Sebelum Checkout

Sebelum ke toko, cek ulang tiga hal ini:

- **RAM:** DDR-nya udah pasti (dari CPU-Z, bukan tebakan speed), ada slot kosong atau perlu ganti yang lama, dan kapasitas totalnya nggak lewat batas maksimal laptop
- **SSD:** bentuknya cocok sama yang didukung slot laptop (bukan cuma notch-nya cocok), dan kalau NVMe, jalur PCIe slotnya cukup buat keluar kecepatan penuh
- Kalau salah satu masih belum yakin, lebih baik tanya dulu (ke kami atau siapapun yang paham) daripada nebak dan berisiko harus retur

## 4. Baru Pilih Produknya

Sekarang tinggal sesuaikan sama budget. Bukan ranking "paling bagus", tapi kelas harga — garansi tiap lini beda-beda, jadi tetap cek angka yang tertulis di listing sebelum checkout, jangan cuma percaya nama merknya.

**Kelas Premium**
- SSD [Samsung Memory](https://s.shopee.co.id/9AOFTxTTj1) (seri 980/990 EVO Plus) — salah satu dari sedikit merk yang bikin sendiri chip NAND-nya, garansi resmi 5 tahun di kedua lini, paling konsisten dari semua opsi. Harganya juga paling tinggi.
- RAM [Kingston](https://s.shopee.co.id/1qbek7VUt0) ValueRAM — garansi limited lifetime, salah satu yang paling sering kami pakai buat servis pelanggan karena minim masalah kompatibilitas.

**Kelas Menengah**
- RAM [Transcend](https://s.shopee.co.id/20v4ws4uRX) JetRam — garansi lifetime juga, tapi klaimnya lebih ketat soal kondisi fisik stiker/segel, jadi simpan baik-baik kalau pilih ini.
- SSD [SanDisk](https://s.shopee.co.id/2VrLZbEknh) SSD Plus — garansi resmi 3 tahun, sekarang satu grup sama Western Digital.
- SSD Kingston — lini A400 (SATA) konsisten 3 tahun, tapi lini NV2 (NVMe budget) di beberapa toko cuma tercantum garansi 1 tahun, jadi cek dulu listing-nya.
- SSD Transcend MTE220S — ini yang perlu hati-hati: SKU yang sama persis pernah kami temukan tercantum garansi 2 tahun di satu toko dan 5 tahun di toko lain, kemungkinan kebijakan berubah tapi listing lama belum diupdate. Jangan asumsi, cek angka yang tertulis di listing yang mau kamu beli.

**Kelas Ekonomis**
- RAM & SSD [V-GeN](https://s.shopee.co.id/20v4yq8hQA) (lini Rescue untuk RAM, Hyper untuk SSD) — paling terjangkau tapi bukan abal-abal, beberapa kali dapat Top Brand Award. Proses klaim garansinya juga paling praktis, nggak wajib bawa nota pembelian.

---

**Masih ragu tipe RAM/SSD yang cocok buat laptop kamu apa?** [Konsultasikan dulu ke Plandemic Space via WhatsApp](https://wa.me/6282241439784?text=Halo%2C%20saya%20mau%20upgrade%20RAM%2FSSD%20tapi%20belum%20yakin%20tipe%20yang%20cocok%20buat%20laptop%20saya%2C%20mau%20konsultasi), kirim aja foto atau nomor model laptopnya, biar kami bantu cek dulu sebelum kamu checkout.
