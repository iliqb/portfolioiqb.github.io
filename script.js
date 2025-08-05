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
