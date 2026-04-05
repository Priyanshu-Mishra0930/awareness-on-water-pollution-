console.log("i am here");
// INIT AOS (scroll animation)
gsap.registerPlugin(ScrollTrigger);
console.log("i am here");
AOS.init({
    duration: 1000,
    once: true
});
console.log("i am here");

// HERO TEXT ANIMATION
gsap.from(".hero h1", {
  y: -150,
  opacity: 0,
  duration: 2,
  ease: "power4.out"
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  duration: 2,
  delay: 0.5
});


// SECTION TEXT ANIMATION (on scroll)
gsap.utils.toArray(".text").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1.2
  });
});


// IMAGE ANIMATION
gsap.utils.toArray(".image").forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 1.5
  });
});


// COUNTER ANIMATION
let count = 0;
let counter = document.createElement("div");
counter.className = "counter";
counter.innerText = "0%";

// auto add counter in effects section
let effectsSection = document.querySelector(".effects");
if(effectsSection){
  effectsSection.appendChild(counter);
}

let interval = setInterval(() => {
  if (count < 100) {
    count++;
    counter.innerText = count + "%";
  }
}, 30);


// BUTTON CLICK EFFECT
function takeAction() {
  alert("You are now part of change 🌍");
}


// PARALLAX EFFECT (mouse move)
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  gsap.to(".hero", {
    x: x,
    y: y,
    duration: 1
  });
});


// SCROLL PROGRESS BAR
let progress = document.createElement("div");
progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "5px";
progress.style.background = "cyan";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;
  let width = (scrollTop / height) * 100;
  progress.style.width = width + "%";
});
function takeAction() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}