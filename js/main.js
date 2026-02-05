document.addEventListener("DOMContentLoaded", function () {
  // Hamburger with mobile menu
  document.querySelectorAll(".navbar__toggler").forEach((toggler) => {
    toggler.addEventListener("click", () => {
      const headerArea = toggler.closest(".header");
      if (headerArea) {
        headerArea.classList.toggle("is-mobile");
      }
      toggler.classList.toggle("change");
      document.body.classList.toggle("overflow-hidden");
    });
  });

  // Sticky Header
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  });

  // Animated Cards
  const cards = document.querySelectorAll(".initiative__card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent document click
      cards.forEach((c) => c.classList.remove("is-active"));
      card.classList.add("is-active");
    });
  });

  // click outside cards
  document.addEventListener("click", () => {
    cards.forEach((card) => card.classList.remove("is-active"));
  });
});
