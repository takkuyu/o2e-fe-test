import modal from "../../03-organisms/modal/modal.js";

const wonderThumbnail = (function () {
  const init = () => {
    const wonderThumbnails = document.querySelectorAll(".wonder-thumbnail");

    if (!wonderThumbnails.length > 0) {
      return;
    }

    const overlay = document.querySelector(".modal");
    const modalTitle = overlay.querySelector("#modalTitle");
    const modalImage = overlay.querySelector(".wonder-overlay img");
    const closeModalBtn = document.querySelector(".modal .close-modal-btn");
    let currentThumbnail;

    wonderThumbnails.forEach((thumbnail, index) => {
      const wonderTitle = thumbnail.dataset.wonderTitle;
      const thumbnailButton = thumbnail.querySelector("button");
      const wonderImage = thumbnailButton.querySelector("img");
      const wonderImageAlt = wonderImage.alt;
      const currentSrc = wonderImage.currentSrc;
      const wonderImageSrc = currentSrc ? currentSrc : wonderImage.src;

      thumbnailButton.addEventListener("click", () => {
        // Update modal title and image.
        modalTitle.innerText = wonderTitle;
        modalImage.src = wonderImageSrc;
        modalImage.alt = wonderImageAlt;
        // Open Overlay.
        modal.openModal();
        currentThumbnail = index;
      });
    });

    closeModalBtn.addEventListener("click", () => {
      modal.closeModal();
      // Unset modal title and image.
      modalTitle.innerHTML = "&nbsp;";
      modalImage.src = "#";
      modalImage.alt = "#";
      // Restore focus to the previously focused thumbnail.
      wonderThumbnails[currentThumbnail].querySelector("button").focus();
    });
  };

  return {
    init,
  };
})();

export default wonderThumbnail;
