//navbar
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




//homepage-section
// Optional: Scroll Reveal Animation
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-section");
  const scrollY = window.scrollY + window.innerHeight;

  if (scrollY > hero.offsetTop + 100) {
    hero.classList.add("visible");
  }
});




//featured-products-sections
// Animate featured products on scroll
window.addEventListener("scroll", () => {
  const section = document.querySelector(".featured-products");
  const sectionTop = section.offsetTop;
  const scrollY = window.scrollY + window.innerHeight;

  if (scrollY > sectionTop + 100) {
    section.classList.add("visible");
  }
});




//product-categories-section
function filterCategory(categoryName) {
  alert(`You selected the ${categoryName} category!`);
  // You can navigate or filter actual products here in your full app
}


//customer-reviews-sections
const toggleBtn = document.querySelector(".toggle-review-form");
const reviewForm = document.querySelector(".review-form");
const stars = document.querySelectorAll(".star");
const selectedRating = document.getElementById("selectedRating");
const reviewList = document.getElementById("reviewList");
const form = document.querySelector(".review-form");

// Toggle form visibility
toggleBtn.addEventListener("click", () => {
  reviewForm.classList.toggle("hidden");
});

// Star rating selection
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-rating"));
    selectedRating.value = rating;
    stars.forEach((s) => {
      s.classList.toggle(
        "selected",
        parseInt(s.getAttribute("data-rating")) <= rating
      );
    });
  });
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const rating = selectedRating.value;

  if (!name || !message || rating === "0") {
    alert("Please fill all fields and select a rating.");
    return;
  }

  const reviewHTML = `
    <div class="review-item">
      <h4>${name}</h4>
      <p class="review-rating">${"★".repeat(rating)}${"☆".repeat(
    5 - rating
  )}</p>
      <p>${message}</p>
    </div>
  `;

  reviewList.insertAdjacentHTML("afterbegin", reviewHTML);
  form.reset();
  stars.forEach((s) => s.classList.remove("selected"));
  selectedRating.value = "0";
  reviewForm.classList.add("hidden");
});



// Optional: Copy social media link to clipboard on right-click
const icons = document.querySelectorAll('.social-icons a');
const copyMessage = document.getElementById('copyMessage');

icons.forEach(icon => {
  icon.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const link = icon.href;

    // Copy to clipboard
    navigator.clipboard.writeText(link).then(() => {
      copyMessage.style.display = 'block';
      copyMessage.textContent = `Link copied: ${link}`;
      setTimeout(() => {
        copyMessage.style.display = 'none';
      }, 2500);
    });
  });
});
