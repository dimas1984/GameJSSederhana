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
### Inisialisasi Kanvas dan Kontrol
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
Mendapatkan elemen kanvas dengan ID myCanvas dan menginisialisasi konteks 2D untuk menggambar.

### Tombol Reset
const btn = document.createElement('button');
const div = document.createElement('div');
btn.textContent = "Game Reset";
btn.addEventListener('click', () => {
  //reset game
  player1.score = 0;
  player2.score = 0;
  ballReset();
  player1.x = 50;
  player2.x = canvas.width - (50 + player2.width);
  player1.y = canvas.height / 2 - player1.height / 2;
  player2.y = canvas.height / 2 - player2.height / 2;
});
document.body.prepend(div);
div.append(btn);
Membuat tombol "Game Reset" yang akan mengatur ulang skor pemain dan posisi bola serta pemain saat tombol ditekan.
