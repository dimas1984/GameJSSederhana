# GameJSSederhana
1. Membuat Game board ( app.js )
2. Snippet Simple HTML ( app.js )
3. Menggambar pada Element Canvas HTML 5 ( AppDraw.js )
4. menambahkan event listener untuk keyboard ( AppDrawKeyboard.js)
5. menambahkan pemain kedua ( second.js )
6. menambahkan animation frame ( AnimationFrame.js )
7. menambahkan collision detection ( collider.js )
8. menambahkan bouncing ball ( bouncing.js )
9. Final code ( FinalCode.js )

## Deskripsi
penjelasan code ( Final Code )
### 1. Inisialisasi Kanvas dan Kontrol
![Screenshot](/ss/canvas.png)
- Mendapatkan elemen kanvas dengan ID myCanvas dan menginisialisasi konteks 2D untuk menggambar.

### 2. Tombol Reset
![Screenshot](/ss/reset.png)
- Membuat tombol "Game Reset" yang akan mengatur ulang skor pemain dan posisi bola serta pemain saat tombol ditekan.

### 3. Variabel Game
![Screenshot](/ss/VariabelGame.png)
- speed menentukan kecepatan bola.
- player1 dan player2 adalah objek yang menyimpan informasi posisi, kecepatan, ukuran, dan skor masing-masing pemain.
- ball menyimpan informasi posisi dan kecepatan bola.

### 4. Status Tombol untuk Pemain
![Screenshot](/ss/Status.png)
- keyz1 dan keyz2 menyimpan status tombol yang digunakan untuk menggerakkan pemain 1 dan pemain 2.

### 5. Fungsi Event Listener
![Screenshot](/ss/event.png)
- Memanggil fungsi draw secara berulang menggunakan requestAnimationFrame, dan menambahkan pendengar untuk mendeteksi saat tombol ditekan (keydown) dan dilepas (keyup).

### 6. Fungsi untuk Mengatur Status Tombol
![Screenshot](/ss/Fungsi.png)
- Fungsi keyDown dan keyUp memperbarui status tombol berdasarkan input dari pengguna.

### 7. Fungsi Reset Bola
![Screenshot](/ss/reset.png)
- Mengatur ulang posisi bola ke tengah kanvas dan mengatur kecepatan bola.

### 8. Fungsi untuk Menggerakkan Pemain dan Bola
![Screenshot](/ss/gerak.png)
- Fungsi ini menggerakkan pemain berdasarkan status tombol, memperbarui posisi bola, dan memeriksa apakah bola keluar dari batas kanvas atau bertabrakan dengan pemain.

### 9. Fungsi untuk Memeriksa Tabrakan
![Screenshot](/ss/Collider.png)
- Memeriksa apakah dua objek (bola dan pemain) bertabrakan berdasarkan posisi dan ukuran mereka.

### 10. Fungsi Draw
![Screenshot](/ss/Draw.png)
- Menghapus konten lama dari kanvas, memperbarui posisi objek, menggambar pemain dan bola, serta menampilkan skor