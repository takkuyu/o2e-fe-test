const modal = (function () {
  const modalEl = document.querySelector(".modal");
  const main = document.querySelector("main");
  const body = document.querySelector("body");
  const FOCUSABLE_SELECTORS =
    "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
  let dialogOpen = false;

  const openModal = () => {
    modalEl.style.display = "block";
    // Focus the first element within the modal.
    modalEl.querySelector(FOCUSABLE_SELECTORS).focus();
    // Trap the tab focus by disable tabbing on all elements outside of the modal.
    const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS);
    focusableElements.forEach((el) => el.setAttribute("tabindex", "-1"));
    // Trap the screen reader focus as well with aria roles.
    modalEl.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    // Disable page scrolling.
    body.classList.add("scroll-disabled");
    dialogOpen = true;
  };

  const closeModal = () => {
    modalEl.style.display = "none";
    // Untrap the tab focus by removing tabindex=-1.
    const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS);
    focusableElements.forEach((el) => el.removeAttribute("tabindex"));
    // Untrap screen reader focus.
    modalEl.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    // Enable scrolling.
    body.classList.remove("scroll-disabled");
    dialogOpen = false;
  };

  // Close modal when Escape key is pressed.
  document.addEventListener("keydown", function (e) {
    const isEscaped = e.key === "Escape" || e.key === "Esc";
    if (dialogOpen && isEscaped) {
      closeModal();
    }
  });

  return {
    openModal,
    closeModal,
  };
})();

export default modal;
