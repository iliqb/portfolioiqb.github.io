document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".project-thumbnail");
  const closeButtons = document.querySelectorAll(".lightbox-close");

  // Abrir la lightbox correspondiente al proyecto
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const projectDiv = thumbnail.closest(".project");
      const projectId = projectDiv.getAttribute("data-project");
      const lightbox = document.getElementById(`lightbox-${projectId}`);
      if (lightbox) {
        lightbox.style.display = "flex";
      }
    });
  });

  // Cerrar la lightbox
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const closeId = btn.getAttribute("data-close");
      const lightbox = document.getElementById(`lightbox-${closeId}`);
      if (lightbox) {
        lightbox.style.display = "none";
      }
    });
  });

  // También puedes cerrar al hacer click fuera del contenido
  document.querySelectorAll(".lightbox-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  });
});
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");
const dotsNav = document.querySelector(".carousel-dots");

let currentSlide = 0;

// Crear puntos
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  if (index === 0) dot.classList.add("active");
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateCarousel(index) {
  track.style.transform = `translateX(-${500 * index}px)`; // 320px = ancho
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentSlide = index;
}

nextButton.addEventListener("click", () => {
  let newIndex = (currentSlide + 1) % slides.length;
  updateCarousel(newIndex);
});

prevButton.addEventListener("click", () => {
  let newIndex = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel(newIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateCarousel(index));
});
