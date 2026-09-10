---
title: "Cara Cek Tipe RAM & SSD yang Cocok untuk Laptop/PC Kamu"
pubDate: "2026-09-01"
category: "Aksesoris"
tags: ["ram", "ssd", "upgrade"]
description: "Panduan cek tipe RAM dan SSD yang cocok buat laptop/PC, lengkap sama rekomendasi merk dan lini produk spesifik dari yang paling unggul sampai paling ekonomis."
---

Kejadian yang sering banget kami temuin: orang udah semangat beli RAM atau SSD, sampai rumah dipasang, eh nggak kebaca. Bukan barangnya rusak — cuma nggak cocok sama slot atau tipe yang didukung laptopnya. Daripada rugi ongkos kirim balik, mending 5 menit cek dulu tipe yang pas. Caranya nggak susah, dan nggak butuh bongkar laptop (kecuali di bagian tertentu nanti kami kasih tau).

## Cek RAM: DDR berapa, sisa slot berapa

Ada dua cara. Cara 1 nggak perlu install apa-apa dan langsung nunjukkin sisa slot RAM, tapi nggak bisa mastiin DDR-nya. Buat itu, tetap perlu Cara 2 pakai CPU-Z — jadi anggap Cara 1 sebagai cek cepat duluan, bukan pengganti Cara 2 sepenuhnya.

**Cara 1 — tanpa install apa-apa (Windows 10/11):**

1. Tekan `Ctrl + Shift + Esc` di keyboard buat langsung buka Task Manager
2. Kalau tampilannya masih ringkas, klik "More details" dulu di pojok kiri bawah
3. Klik tab **Performance** di sisi kiri, terus klik **Memory**
4. Di pojok kanan atas ada angka seperti "8.0 GB (2 of 2 slots used)". Angka tersebut menunjukkan jumlah slot RAM yang dideteksi Windows beserta berapa yang sedang digunakan. "1 of 2 slots used" berarti Windows mendeteksi 2 slot dengan 1 slot sedang digunakan. Namun, informasi ini sebaiknya tetap dikonfirmasi lewat spesifikasi atau service manual laptop sebelum membeli RAM tambahan
5. Di bagian bawah ada baris **Speed** dan **Form factor**. Form factor menunjukkan bentuk fisik RAM, misalnya SODIMM pada laptop. Untuk memastikan DDR3, DDR4, atau DDR5, lanjut ke Cara 2 di bawah dan lihat bagian "Type" di CPU-Z

Cara ini paling cepat, tapi khusus laptop keluaran lama-menengah yang RAM-nya masih bisa dicopot-pasang. Kalau laptopnya tipis banget (ultrabook kelas atas), ada kemungkinan RAM-nya udah disolder langsung ke motherboard — nggak ada slot sama sekali, jadi nggak bisa diupgrade fisik walaupun di Task Manager kelihatan ada RAM-nya. Ini yang bikin sebagian orang kadung beli RAM tambahan sebelum sadar laptopnya sendiri emang nggak bisa di-upgrade.

**Cara 2 — pakai CPU-Z (lebih detail, gratis):**

1. Download [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) dari situs resminya, cpuid.com — jangan dari sembarang situs download biar nggak kebawa bundle software aneh-aneh
2. Install seperti biasa, buka aplikasinya
3. Klik tab **Memory**, lihat baris "Type" — di situ tertulis DDR3, DDR4, atau DDR5-nya. **Speed bisa jadi informasi tambahan, tapi jangan pakai angka speed doang buat nebak DDR3/DDR4/DDR5** — beberapa kecepatan bisa overlap antar generasi. Buat mastiin generasinya, patokan yang bener adalah baris "Type" ini, bukan angka Speed-nya.
4. Klik tab **SPD**, di kiri atas ada dropdown "Slot #1", "Slot #2", dan seterusnya sesuai jumlah slot fisik di laptop. Klik satu per satu — kalau kolomnya kosong, berarti CPU-Z nggak mendeteksi modul RAM di slot itu. **Tapi ini belum tentu berarti laptop kamu punya slot fisik yang bisa dipakai buat upgrade** — tetap cek spesifikasi atau service manual model laptopnya buat mastiin.

Buat kapasitas maksimal yang didukung laptopnya (misal max 16GB atau bisa sampai 32GB), CPU-Z nggak nunjukkin ini. Cara ngeceknya: cari nomor model laptop kamu (biasanya ada di stiker bagian bawah laptop), atau ketik perintah ini di Command Prompt:

```
wmic csproduct get name
```

Nomor model yang muncul itu tinggal dicari spesifikasi resminya di situs merk laptop tersebut, atau lewat pencarian "spesifikasi [nomor model] RAM maksimal".

Satu tips tambahan soal dual-channel: kalau laptop punya dua slot RAM, konfigurasi dengan kapasitas yang seimbang seperti 2x8GB umumnya lebih ideal untuk memanfaatkan dual-channel dibanding 1x16GB. Namun kalau sudah ada satu keping RAM terpasang, menambah satu keping yang kompatibel juga tetap bisa menjadi pilihan praktis.

## Cek SSD: bentuknya yang mana, slotnya support apa

Untuk upgrade laptop, tiga jenis SSD yang paling sering ditemui adalah:

- **2.5 inch SATA** — bentuknya kotak tipis, mirip HDD external, dipasang di bay yang sama dengan HDD lama yang mau diganti
- **M.2 SATA** — bentuknya kartu kecil memanjang (mirip permen karet lonjong), tapi kecepatan transfernya masih setara SATA biasa
- **M.2 NVMe** — bentuk fisiknya mirip banget sama M.2 SATA, tapi jalur datanya lewat PCIe sehingga jauh lebih cepat

Nah, ini bagian yang paling sering bikin orang salah beli: M.2 SATA dan M.2 NVMe itu bentuknya nyaris identik, tapi slot di motherboard belum tentu support dua-duanya. Kalau slot laptop kamu cuma didesain buat NVMe, SSD M.2 SATA nggak akan kebaca meski secara fisik muat masuk. Bahkan sebagian motherboard cuma nyediain jalur PCIe x2 buat slot M.2-nya — jadi SSD NVMe secepat apapun tetap bakal ke-bottleneck, nggak keluar kecepatan penuhnya. Cara bedain slotnya:

1. Bentuk notch (potongan pin) di sisi konektor SSD bisa jadi petunjuk awal, tapi **nggak cukup buat mastiin apakah SSD itu SATA atau NVMe** — M.2 SATA dan NVMe bisa punya bentuk fisik yang sangat mirip, sementara dukungan slotnya beda-beda di tiap laptop. Notch itu langkah awal buat nebak, bukan kepastian akhir.
2. Buat tau slot di laptop kamu support yang mana, cara paling aman adalah cek buku manual servis resmi laptop tersebut (biasanya ada PDF-nya kalau dicari "service manual [nomor model laptop]"), soalnya ini nggak selalu kebaca lewat software
3. Kalau mau tau interface SSD/HDD yang sudah terpasang sekarang, buka software gratis [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) — di situ langsung kelihatan tertulis interface-nya, SATA atau NVMe (PCIe)

Kalau setelah dicek masih ragu — misalnya laptopnya model lama yang susah dicari manualnya — cara paling gampang ya foto langsung bagian dalam slot storage-nya (buka casing bawah laptop, biasanya cukup lepas beberapa baut), lalu kirim ke kami lewat WhatsApp buat dicek dulu sebelum kamu checkout.

## Merk RAM: dari menengah-atas, menengah, sampai ekonomis

Kelima merek ini punya pilihan RAM laptop SODIMM DDR4 yang cukup mudah ditemukan. Perbedaannya lebih ke posisi harga, pilihan produk, dan ketentuan garansi tiap lini — bukan soal mana yang "paling bagus":

**RAM kelas menengah-atas**
- **[Kingston](https://s.shopee.co.id/1qbek7VUt0)** — lini ValueRAM-nya (kode produk biasanya diawali "KVR") cukup umum ditemukan buat kebutuhan upgrade laptop harian. Garansi seumur hidup (limited lifetime).

**RAM kelas menengah**
- **[Transcend](https://s.shopee.co.id/20v4ws4uRX)** — lini JetRam (kode produk diawali "JM"), garansi seumur hidup.
- **[Team Group](https://s.shopee.co.id/8fSEeiljJ1)** — produsen RAM/SSD asal Taiwan. Kami belum menemukan angka garansi resmi yang konsisten khusus untuk lini RAM laptopnya, jadi tetap cek ketentuan garansi yang tertulis di listing produk sebelum checkout.
- **[Adata](https://s.shopee.co.id/60RTV3QmHS)** — lini Premier Series SODIMM DDR4, di sejumlah listing resmi tercantum garansi seumur hidup (syarat & ketentuan berlaku sesuai listing).

**RAM lebih ekonomis**
- **[V-GeN](https://s.shopee.co.id/20v4yq8hQA)** — lini Rescue, garansi seumur hidup, udah beberapa kali dapat Top Brand Award di Indonesia. Buat yang budgetnya pas-pasan tapi tetap mau garansi jelas, ini opsi yang masuk akal.

## Merk SSD: gambaran umum garansi per lini produk

Beda sama RAM, garansi SSD ini nggak flat per merk — beda lini produk, beda tahun garansinya. Jadi angka di bawah ini sebagai gambaran umum, tapi tetap cek garansi yang tertulis di listing produknya pas mau checkout, jangan cuma percaya nama merknya doang.

- **[Samsung](https://s.shopee.co.id/9AOFTxTTj1)** — lini 990 EVO Plus (NVMe PCIe 4.0/5.0) tercatat dapat garansi terbatas resmi 5 tahun dari Samsung. Lini 980 (NVMe PCIe 3.0) juga tersedia untuk upgrade laptop — tapi cek dulu garansi yang tertulis di listing spesifik yang mau kamu beli, jangan asumsi semua lini Samsung otomatis dapat masa garansi yang sama. Harganya juga cenderung lebih mahal dari opsi lain di bawah.
- **[Kingston](https://s.shopee.co.id/1qbek7VUt0)** — A400 (SATA 2.5 inch, entry-level) dan NV2 (M.2 NVMe, budget) sama-sama tercantum dengan garansi terbatas 3 tahun dalam kebijakan resmi Kingston. Tetap cek ketentuan garansi pada toko/distributor tempat kamu membeli sebelum checkout, karena beberapa lini Kingston lainnya bisa punya masa garansi berbeda.
- **[SanDisk](https://s.shopee.co.id/2VrLZbEknh)** — sekarang satu grup sama Western Digital. Lini SSD Plus (SATA 2.5 inch) tersedia untuk kebutuhan upgrade laptop dan tercatat mendapat garansi resmi 3 tahun. Di Indonesia mungkin lebih kamu kenal lewat flashdisk atau microSD-nya, tapi lini SSD-nya juga oke buat kebutuhan harian.
- **[Transcend](https://s.shopee.co.id/20v4ws4uRX)** — lini MTE220S (M.2 NVMe) merupakan salah satu opsi untuk upgrade laptop dengan budget terbatas, dan saat ini tercantum dengan garansi 5 tahun menurut kebijakan resmi Transcend. Saat membeli, tetap cek ketentuan garansi pada penjual, karena layanan klaim dapat mengikuti kebijakan distributor atau toko tempat pembelian.
- **[V-GeN](https://s.shopee.co.id/20v4yq8hQA)** — FAQ resmi V-GeN menyebut garansi SSD 3 tahun untuk semua tipe, sementara lini Hyper (M.2 NVMe) di situs resminya tercantum dengan garansi 5 tahun. Karena ketentuan garansi bisa beda menurut lini produk, cek garansi model yang mau kamu beli sebelum checkout.

## Sebelum checkout, cocokkan dulu 3 hal ini

- **DDR-nya harus sama** — DDR4 lama nggak bisa gantiin/digabung sama DDR3 atau DDR5, beda generasi beda bentuk fisik pin-nya
- **Kapasitas nggak boleh lewat batas maksimum** yang didukung laptop, meskipun slotnya masih kosong
- **SSD harus sesuai dukungan slot** — 2.5" SATA, M.2 SATA, atau M.2 NVMe, jangan cuma modal "asal muat secara fisik"

---

**Masih ragu tipe RAM/SSD yang cocok buat laptop kamu apa, atau bingung lini mana yang paling pas?** [Konsultasikan dulu ke Plandemic Space via WhatsApp](https://wa.me/6282241439784?text=Halo%2C%20saya%20mau%20upgrade%20RAM%2FSSD%20tapi%20belum%20yakin%20tipe%20yang%20cocok%20buat%20laptop%20saya%2C%20mau%20konsultasi), kirim aja foto atau nomor model laptopnya, biar kami bantu cek dulu sebelum kamu checkout.
