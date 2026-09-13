(() => {
  const analytics = window.webTechnicsAnalytics;
  if (!analytics) {
    console.error("Analytics consent must be initialized before event tracking.");
    return;
  }

  const track = (name, parameters = {}) => analytics.track(name, parameters);
  const linkLabel = (link) =>
    (link.dataset.cta || link.textContent || link.getAttribute("aria-label") || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 100);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.href;
    const label = linkLabel(link);
    if (link.classList.contains("btn")) {
      track("cta_click", { cta_text: label, link_url: href });
    }

    if (link.protocol === "mailto:" || link.protocol === "tel:") {
      track("generate_lead", {
        method: link.protocol === "mailto:" ? "email" : "phone",
        link_text: label,
      });
      return;
    }

    if (link.origin !== location.origin) {
      track("click", {
        outbound: true,
        link_domain: link.hostname,
        link_text: label,
        link_url: href,
      });
    }
  });

  document.querySelectorAll("form").forEach((form) => {
    const startForm = () => {
      track("form_start", { form_name: form.dataset.formName || form.id || "contact" });
    };
    form.addEventListener("input", startForm, { once: true });
    form.addEventListener("submit", () => {
      track("generate_lead", {
        method: "contact_form",
        form_name: form.dataset.formName || form.id || "contact",
      });
    });
  });

  let searchTimer;
  let previousSearch = "";
  document.querySelectorAll('input[type="search"]').forEach((input) => {
    input.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const searchTerm = input.value.trim();
        if (searchTerm && searchTerm !== previousSearch) {
          previousSearch = searchTerm;
          track("search", { search_term: searchTerm });
        }
      }, 800);
    });
  });

  const reachedDepths = new Set();
  const recordScrollDepth = () => {
    const available = document.documentElement.scrollHeight - innerHeight;
    if (available <= 0) return;
    const depth = Math.round((scrollY / available) * 100);
    [25, 50, 75, 90].forEach((threshold) => {
      if (depth >= threshold && !reachedDepths.has(threshold)) {
        reachedDepths.add(threshold);
        track("scroll", { percent_scrolled: threshold });
      }
    });
  };
  addEventListener("scroll", recordScrollDepth, { passive: true });
})();
