const canvas=document.querySelector('#myCanvas');
const rtx = canvas.getContext('2d');
const player = {x:50,y:50}
draw();

function draw(){
    //show text in canvas
    let output = `Pos X ${player.x} Y ${player.y}`;     //output adalah string yang menampilkan posisi x dan y pemain.
    rtx.fillStyle = '#ffffff';                          //Warna latar belakang persegi
    rtx.fillRect(player.x, player.y, 100, 100);         //Menggambar persegi
    rtx.font = '24px serif';                            // Mengatur font
    rtx.textAlign = 'center';                           // Mengatur perataan teks
    rtx.fillStyle = 'red';                              // Mengatur warna teks
    rtx.fillText(output, 300, 30);                      // Menggambar teks
    
    //triangle
    rtx.beginPath();                                    // Memulai jalur baru
    rtx.fillStyle = 'blue';                             // Mengatur warna segitiga
    rtx.moveTo(50, 200);                                // Titik awal segitiga
    rtx.lineTo(150, 250);                               // Titik kedua
    rtx.lineTo(150, 150);                               // Titik ketiga
    rtx.fill();                                         // Mengisi segitiga dengan warna

    //circle
    rtx.beginPath();                                    // Memulai jalur baru
    rtx.fillStyle = 'green';                            // Mengatur warna lingkaran
    rtx.arc(150, 300, 50, 0, 2 * Math.PI);              // Menggambar lingkaran
    rtx.strokeStyle = 'yellow';                         // Mengatur warna garis tepi
    rtx.fill();                                         // Mengisi lingkaran
    rtx.stroke();                                       // Menggambar garis tepi lingkaran
    //rtx.rect
    //rtx.fill();
}
