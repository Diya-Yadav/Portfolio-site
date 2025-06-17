// Typewriter Effect
const typingText = document.getElementById("typing-text");
const phrases = ["Cloud Enthusiast", "DevOps Learner", "Web Developer"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = phrases[i];
  if (isDeleting) {
    typingText.textContent = current.substring(0, j--);
  } else {
    typingText.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
}
window.addEventListener("load", () => {
  const skills = document.querySelectorAll(".skill-level");
  skills.forEach(skill => {
    const level = skill.getAttribute("data-level");
    skill.style.width = level;
  });
});


type();
