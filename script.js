// Q&A Interactive Box
document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submitBtn');
  const questionInput = document.getElementById('question');
  const responseDiv = document.getElementById('response');

  submitBtn.addEventListener('click', function () {
    const question = questionInput.value.trim().toLowerCase();

    if (question.includes("hostel")) {
      responseDiv.textContent = "Hostel life is unforgettable! Late-night Maggi, bonding with wingies, and events!";
    } else if (question.includes("fests") || question.includes("techfest")) {
      responseDiv.textContent = "Techfest and Mood Indigo are the soul of IITB. A must-experience!";
    } else if (question.includes("study") || question.includes("exam")) {
      responseDiv.textContent = "Study smart! Balance your academics with activities you love.";
    } else if (question.length === 0) {
      responseDiv.textContent = "Please type a question first.";
    } else {
      responseDiv.textContent = "Interesting! But I don't have an answer for that yet.";
    }
  });
});
// Image slider logic
let currentIndex = 0;
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Initialize slider position
updateSlider();
