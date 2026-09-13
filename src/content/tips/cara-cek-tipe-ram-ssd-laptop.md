---
title: "Cara Cek Tipe RAM & SSD yang Cocok untuk Laptop/PC Kamu"
seoTitle: "Cara Cek Tipe RAM & SSD Laptop Sebelum Beli (5 Menit)"
pubDate: "2026-09-01"
category: "Aksesoris"
tags: ["ram", "ssd", "upgrade", "kompatibilitas"]
description: "Cara cek tipe RAM dan SSD yang cocok buat laptop/PC kamu dalam 5 menit — tanpa bongkar, tanpa nebak — plus apa yang perlu dipastikan sebelum checkout."
---

Kejadian yang sering banget kami temuin: orang udah semangat beli RAM atau SSD, sampai rumah dipasang, eh nggak kebaca. Bukan barangnya rusak — cuma nggak cocok sama slot atau tipe yang didukung laptopnya. Ujung-ujungnya rugi ongkir buat retur, kadang malah nggak bisa diretur sama sekali kalau segel produknya udah kebuka. Daripada kejadian gitu, mending 5 menit cek dulu tipe yang pas.

## Cek RAM: DDR Berapa, Sisa Slot Berapa

Tekan `Ctrl + Shift + Esc` → tab **Performance** → **Memory**. Ini cara paling cepat, cuma modal Windows bawaan, nggak perlu install apa-apa. Di pojok kanan atas ada angka kayak "8.0 GB (2 of 2 slots used)" — itu artinya laptopnya punya 2 slot RAM dan udah kepasang semua. Kalau tertulis "1 of 2 slots used", Windows mendeteksi ada 2 slot dengan 1 yang lagi kepasang — tapi tetap cek spesifikasi resmi atau service manual-nya, karena info dari Windows bukan jaminan slot itu beneran bisa dipakai buat upgrade (ada laptop yang punya kombinasi RAM onboard + 1 slot, dan cara pelaporannya di software bisa beda-beda).

Satu koreksi penting: baris **"Form factor"** di situ nunjukkin bentuk fisiknya (DIMM buat desktop, SODIMM buat laptop) — **bukan** generasi DDR-nya. Task Manager sendiri sering nggak nampilin DDR3/DDR4/DDR5 secara eksplisit, jadi jangan nebak generasi dari situ. Kalau mau mastiin generasinya, install [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) (dari situs resmi cpuid.com, jangan sembarang situs download biar nggak kebawa bundle software aneh-aneh), buka tab **Memory**, baris **"Type"** di situ yang nunjukkin DDR-nya beneran. Tab **SPD** di CPU-Z juga bisa dicek satu-satu per slot (ada dropdown "Slot #1", "Slot #2", dst) buat lihat kolom mana yang masih kosong — berguna kalau Task Manager tadi kurang jelas.

Kalau laptopnya tipis banget (ultrabook kelas atas), ada kemungkinan RAM-nya udah disolder langsung ke motherboard — nggak ada slot sama sekali walau di Task Manager kelihatan ada RAM-nya. Kondisi kayak gini bisa bikin orang beli RAM tambahan, padahal laptopnya ternyata nggak bisa di-upgrade secara fisik.

Soal dual-channel: pasang 2 keping identik (misal 2x8GB) memang biasanya lebih cepat dibanding 1 keping besar sendirian (1x16GB) buat kebutuhan yang berat di bandwidth memori (multitasking berat, editing). Tapi ini bukan syarat mutlak — kalau slotnya cuma 1 atau kamu cuma butuh nambah kapasitas buat kerjaan ringan-sedang, 1 keping besar tetap oke aja, nggak akan bikin laptop "rusak" atau nggak jalan.

## Cek SSD: Bentuknya yang Mana, Slotnya Support Apa

Ada tiga bentuk SSD yang beredar:

- **2.5" SATA** — kotak tipis, dipasang di bay yang sama dengan HDD lama
- **M.2 SATA** — kartu kecil memanjang, kecepatannya masih setara SATA biasa
- **M.2 NVMe** — bentuk fisiknya mirip M.2 SATA, tapi lewat jalur PCIe sehingga jauh lebih cepat

Bagian paling sering bikin salah beli: M.2 SATA dan M.2 NVMe bentuknya nyaris identik, tapi slot motherboard belum tentu support dua-duanya. Bentuk notch (potongan pin) di konektornya bisa jadi petunjuk awal, tapi **nggak cukup buat mastiin apakah SSD itu SATA atau NVMe** — notch yang cocok secara fisik nggak otomatis berarti slotnya bakal ngebaca atau jalan optimal; sebagian motherboard cuma nyediain jalur PCIe terbatas (misalnya cuma PCIe x2) buat slot M.2-nya, jadi SSD NVMe secepat apapun tetap ke-bottleneck. Cara paling pasti: cek buku manual servis resmi laptopnya (cari "service manual [nomor model laptop]"), karena ini nggak kebaca lewat software apapun.

Buat lihat interface yang **udah terpasang sekarang**, buka [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) — langsung kelihatan SATA atau NVMe (PCIe).

Satu hal praktis pas masang: matiin laptop total dan cabut charger dulu (kalau baterainya bisa dilepas, lepas juga), baru buka casing bawahnya. Pegang modul RAM/SSD di sisi tepinya, hindari nyentuh langsung ke bagian chip/pin emasnya — listrik statis dari tangan bisa merusak komponen di dalamnya walau nggak kelihatan efeknya langsung.

## Pastikan Dulu Sebelum Checkout

Dua hal ini yang paling sering kelewat, padahal nentuin banget:

1. **Kapasitas maksimal yang didukung laptopnya.** CPU-Z atau Task Manager nggak nunjukkin ini — keduanya cuma baca RAM yang udah terpasang, bukan batas maksimal yang didukung motherboard/BIOS-nya. Cari nomor model laptop dari stiker di bagian bawah, atau lewat Command Prompt:

```
wmic csproduct get name
```

Lalu cari spesifikasi resminya di situs merk laptop atau service manual-nya. Ini kenapa penting: ada laptop yang secara fisik bisa dipasangin RAM 32GB, tapi BIOS-nya cuma baca sampai 16GB — sisanya kepasang tapi mubazir.
2. **Slot SSD-nya beneran support tipe yang mau kamu beli** — bukan cuma "muat secara fisik". Kalau ragu, service manual tetap sumber paling akurat.

Kalau setelah dicek masih ragu — laptop model lama yang susah dicari manualnya, misalnya — cara paling gampang: buka casing bawah laptop, foto langsung bagian dalam slot storage/RAM-nya, kirim ke kami lewat WhatsApp buat dicek dulu sebelum kamu checkout.

Ringkasnya, sebelum klik "beli", ini yang harusnya udah kamu pastikan:

<ul class="tip-checklist">
<li>Generasi DDR RAM-nya udah dicek lewat CPU-Z (bukan cuma nebak dari "Form factor" di Task Manager)</li>
<li>Slot RAM-nya beneran ada dan masih kosong (bukan onboard/disolder)</li>
<li>Kapasitas maksimal yang didukung laptop udah dicek dari spek resmi/service manual, bukan cuma dari kapasitas yang kepasang sekarang</li>
<li>Bentuk & interface SSD-nya (SATA/M.2 SATA/M.2 NVMe) udah dicocokkan sama slot motherboard, bukan cuma dari bentuk notch-nya doang</li>
</ul>

## Pilih Produk Sesuai Kelas

Setelah tipe RAM/SSD-nya jelas dan kompatibilitasnya udah dipastikan di atas, baru masuk ke pilihan produk. Pilihan di bawah bukan ranking merek terbaik, tapi gambaran kelas produk berdasarkan lini yang umum ditemukan dan posisi harganya. Karena garansi bisa berbeda menurut lini produk, tetap cek model yang dipilih sebelum checkout.

<ul class="tip-checklist">
<li><strong>Kelas premium — <a href="https://s.shopee.co.id/9AOFTxTTj1">Samsung</a>:</strong> SSD NVMe seri 980/990 EVO Plus, dengan garansi resmi 5 tahun</li>
<li><strong>Kelas premium — <a href="https://s.shopee.co.id/1qbek7VUt0">Kingston</a>:</strong> RAM ValueRAM garansi seumur hidup; SSD A400 dan NV2 sama-sama garansi terbatas 3 tahun</li>
<li><strong>Kelas menengah — <a href="https://s.shopee.co.id/20v4ws4uRX">Transcend</a>:</strong> RAM JetRam garansi seumur hidup; SSD MTE220S garansi 5 tahun menurut kebijakan resmi Transcend</li>
<li><strong>Kelas menengah — <a href="https://s.shopee.co.id/2VrLZbEknh">SanDisk</a>:</strong> SSD Plus, garansi resmi 3 tahun, satu grup sama Western Digital</li>
<li><strong>Kelas menengah — <a href="https://s.shopee.co.id/8fSEeiljJ1">Team Group</a>:</strong> produsen RAM/SSD asal Taiwan yang juga umum dipakai buat upgrade laptop — cek ketentuan garansi di listing produknya, belum ada angka garansi resmi yang konsisten khusus buat lini RAM laptopnya</li>
<li><strong>Kelas menengah — <a href="https://s.shopee.co.id/60RTV3QmHS">Adata</a>:</strong> lini Premier Series SODIMM DDR4, di sejumlah listing resmi tercantum garansi seumur hidup (syarat & ketentuan berlaku)</li>
<li><strong>Kelas ekonomis — <a href="https://s.shopee.co.id/20v4yq8hQA">V-GeN</a>:</strong> RAM (lini Platinum/Rescue/Tsunami) garansi seumur hidup; lini SSD-nya punya ketentuan garansi yang berbeda menurut model, jadi cek produk yang dipilih sebelum checkout</li>
</ul>

Garansi tiap merk bisa beda-beda tergantung lini dan waktu listing dibuat — jangan cuma percaya nama mereknya, tetap cek angka garansi yang tertulis di listing yang mau kamu checkout.

---

**Masih ragu tipe RAM/SSD yang cocok buat laptop kamu apa, atau bingung lini mana yang paling pas?** [Konsultasikan dulu ke Plandemic Space via WhatsApp](https://wa.me/6282241439784?text=Halo%2C%20saya%20mau%20upgrade%20RAM%2FSSD%20tapi%20belum%20yakin%20tipe%20yang%20cocok%20buat%20laptop%20saya%2C%20mau%20konsultasi), kirim aja foto atau nomor model laptopnya, biar kami bantu cek dulu sebelum kamu checkout.

Belum yakin laptopnya emang butuh upgrade RAM, SSD, atau malah lebih masuk akal beli baru? Cek dulu gejalanya di [artikel kapan upgrade vs beli laptop baru](/tips/upgrade-ram-ssd-vs-beli-baru).
