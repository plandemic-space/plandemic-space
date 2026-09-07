---
title: "Kapan Sebaiknya Upgrade RAM/SSD Dibanding Beli Laptop Baru?"
pubDate: "2026-08-29"
category: "Tips Perawatan"
tags: ["upgrade", "ram", "ssd"]
description: "Laptop mulai lemot bukan berarti harus langsung ganti baru. Kenali kapan upgrade komponen jadi pilihan yang lebih masuk akal."
---

Laptop yang mulai terasa lemot sering langsung disimpulkan "sudah waktunya ganti baru". Padahal, di banyak kasus, penyebab lemotnya laptop bukan karena laptopnya sudah terlalu tua secara keseluruhan, tapi karena satu-dua komponen di dalamnya yang sudah nggak sesuai kebutuhan pemakaian sekarang — dan ini bisa dipastikan lewat Task Manager, bukan sekadar tebak-tebakan.

## Cara Cek Bottleneck Sebenarnya: Task Manager

1. Tekan `Ctrl + Shift + Esc` buat buka **Task Manager**, klik tab **Performance**.
2. Buka aplikasi seperti biasa (browser dengan banyak tab, Word, dsb), lalu perhatikan tiga grafik: **CPU**, **Memory**, dan **Disk**.
3. **Kalau grafik Memory konsisten di atas 80-90%** saat multitasking normal — ini tanda kapasitas RAM sudah nggak cukup, dan menambah RAM biasanya langsung terasa dampaknya.
4. **Kalau grafik Disk sering nyangkut di 90-100%** padahal CPU dan Memory masih longgar — ini tanda penyimpanan jadi bottleneck. Cek juga jenis disk-nya: klik kanan Start > **Device Manager > Disk drives**, kalau namanya masih menyebut "ST" atau ada kata "HDD" dan bukan "SSD"/"NVMe", upgrade ke SSD biasanya kasih lompatan kecepatan booting dan loading aplikasi yang paling signifikan dari semua jenis upgrade — seringkali lebih terasa daripada upgrade CPU sekalipun.
5. **Kalau grafik CPU yang konsisten 100%** bahkan cuma buka aplikasi ringan — ini yang paling penting dibedakan, karena beda solusinya (lihat bagian bawah).

## Kapan Upgrade RAM/SSD Jadi Pilihan yang Masuk Akal?

Upgrade komponen biasanya kasih hasil maksimal kalau:

- Body, engsel, dan layar laptop masih dalam kondisi baik (nggak ada rencana ganti karena fisik)
- Dari cek Task Manager di atas, yang jadi bottleneck adalah **Memory atau Disk**, bukan CPU
- Cek model CPU di **Task Manager > Performance > CPU** (nama modelnya tertera di kanan atas), lalu cari tahu generasinya — kalau masih Intel Core generasi 8 ke atas atau AMD Ryzen seri 2000 ke atas, prosesornya umumnya masih memadai untuk kebutuhan harian (browsing, office, video call), asal RAM dan storage-nya yang dibenahi

## Kapan Sebaiknya Pertimbangkan Beli Baru?

Kebalikannya, upgrade RAM/SSD nggak akan banyak membantu kalau dari Task Manager ternyata **CPU** yang jadi bottleneck utama (grafiknya nempel di 100% bahkan untuk tugas ringan) — ini artinya prosesornya sendiri yang sudah nggak sanggup, dan RAM/SSD secanggih apapun nggak bisa menutupi keterbatasan itu. Beli baru juga lebih masuk akal kalau ada beberapa komponen inti yang bermasalah bersamaan (misalnya CPU sudah lemah **dan** motherboard mulai bermasalah), karena biaya upgrade satu-dua bagian saja nggak akan sepadan dengan hasil yang didapat.

## Patokan Kasar Soal Biaya

Sebagai gambaran umum: kalau total biaya upgrade RAM + SSD masih di kisaran 30-40% dari harga laptop baru yang setara, dan bottleneck-nya memang benar di RAM/Disk (bukan CPU), upgrade jelas lebih hemat. Tapi angka ini cuma berguna kalau langkah cek Task Manager di atas sudah dilakukan dulu — kalau ternyata CPU-nya yang bottleneck, berapapun murahnya upgrade RAM/SSD, itu duit yang nggak menyelesaikan masalah utama.

---

**Laptop kamu mulai lemot dan bingung upgrade atau ganti baru?** Konsultasikan dulu ke Plandemic Space via WhatsApp, kirim screenshot Task Manager (tab Performance) kamu biar kami bantu cek dulu apa yang sebenarnya paling dibutuhkan.
