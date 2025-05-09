const rose = document.getElementById("rose");
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
