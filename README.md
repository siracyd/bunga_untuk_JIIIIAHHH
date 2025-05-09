# bunga_untuk_JIIIIAHHH
[Uploading scrconst rose = document.getElementById("rose");
const text = document.getElementById("text");
const bouquet = document.getElementById("bouquet");
const shine = document.getElementById("shine");

let count = 0;

function moveRose() {
  const maxX = window.innerWidth - rose.offsetWidth;
  const maxY = window.innerHeight - rose.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  rose.style.left = `${randomX}px`;
  rose.style.top = `${randomY}px`;
}

rose.addEventListener("click", () => {
  count++;
  if (count < 10) {
    text.textContent = "Eits tidak kena";
    moveRose();
  } else {
    text.textContent = "Nih untuk kamu >\\<";
    rose.remove();

    // Setelah 3 detik, sembunyikan teks lalu tampilkan emoji & sinar
    setTimeout(() => {
      text.style.display = "none"; // sembunyikan teks
      bouquet.style.display = "block";
      shine.style.display = "block";
    }, 3000);
  }
});

body {
  margin: 0;
  background-color: #0d0d0d;
  color: #ffffff;
  font-family: sans-serif;
  text-align: center;
  overflow: hidden;
}

#container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#rose {
  position: absolute;
  font-size: 64px;
  cursor: pointer;
  transition: 0.4s ease;
}

#text {
  position: absolute;
  bottom: 80px;
  width: 100%;
  font-size: 22px;
}

#bouquet {
  font-size: 500px;
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  z-index: 2;
}

/* Sinar */
#shine {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 70%);
  animation: rotate 4s linear infinite;
  z-index: 1;
  display: none;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Bunga Mawar & Edelweiss</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="container">
    <div id="rose">🌹</div>
    <p id="text">Ambil dong jiah</p>

    <div id="bouquet">💐</div>
  </div> 
  <div id="bouquet">💐</div>
<div id="shine"></div>

  <script src="script.js"></script>
</body>
</html>
ipt.js…]()
