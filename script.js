///la vitesse de la video
const video = document.getElementById("clip");
video.playbackRate = 0.5;

//la machine a ecrire
const phrases = [
  "<span>R</span>EDEFINE <span>Y</span>OUR <span>L</span>IMITS",
  "<span>S</span>TRONGER <span>B</span>ODY, <span>S</span>HARPER <span>M</span>IND",
  "<span>P</span>USH <span>Y</span>OUR <span>B</span>OUNDARIES",
  "<span>T</span>RAIN <span>S</span>MART, <span>T</span>RAIN <span>I</span>NTENSE",
  "<span>E</span>LEVATE <span>E</span>VERY <span>R</span>EP",
];

const titleEl = document.getElementById("rotating-title");
let idx = 0;

function setPhrase(i) {
  titleEl.classList.remove("typewriter");
  void titleEl.offsetWidth; // reflow to restart animation
  titleEl.innerHTML = phrases[i];
  titleEl.classList.add("typewriter");
}

setPhrase(idx);
setInterval(() => {
  idx = (idx + 1) % phrases.length;
  setPhrase(idx);
}, 5000);
const flips = document.querySelectorAll(".flip");

window.addEventListener("scroll", () => {
  flips.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
const trsl = document.querySelectorAll(".translat");

window.addEventListener("scroll", () => {
  trsl.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
