// Enkel JavaScript för mobilmeny och enklare klickspårning.
// När GA4 är installerat kan data-track användas för att skicka egna events.

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    const eventName = element.getAttribute("data-track");
    console.log("Tracking event:", eventName);

    // GA4-exempel när gtag finns installerat:
    // if (typeof gtag === "function") {
    //   gtag("event", eventName, {
    //     event_category: "engagement",
    //     event_label: element.innerText
    //   });
    // }
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", () => {
    const formName = form.getAttribute("data-form-name") || "form_submit";
    console.log("Form submit:", formName);

    // GA4-exempel:
    // if (typeof gtag === "function") {
    //   gtag("event", "generate_lead", {
    //     form_name: formName
    //   });
    // }
  });
});
