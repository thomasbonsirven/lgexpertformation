(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const tabs = Array.from(document.querySelectorAll("[role='tab']"));
  const panels = Array.from(document.querySelectorAll("[role='tabpanel']"));
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("aria-controls");
        tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
        panels.forEach((panel) => {
          panel.hidden = panel.id !== target;
        });
      });
    });
  }

  const form = document.querySelector("[data-contact-form]");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Demande de formation — ${String(data.get("projet") || "")}`);
      const body = encodeURIComponent(
        [
          `Nom : ${data.get("nom") || ""}`,
          `Email : ${data.get("email") || ""}`,
          `Entreprise : ${data.get("entreprise") || ""}`,
          `Téléphone : ${data.get("tel") || ""}`,
          `Projet : ${data.get("projet") || ""}`,
          "",
          String(data.get("message") || ""),
        ].join("\n"),
      );
      window.location.href = `mailto:contact@lgexpertformation.fr?subject=${subject}&body=${body}`;
    });
  }
})();
