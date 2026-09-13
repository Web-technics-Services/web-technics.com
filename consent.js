(() => {
  const measurementId = "G-MMMGPHD62R";
  const storageKey = "webTechnicsAnalyticsConsent";
  const consentVersion = 1;
  const consentLifetime = 180 * 24 * 60 * 60 * 1000;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  const analytics = window.webTechnicsAnalytics = window.webTechnicsAnalytics || {
    consent: "pending",
    queue: [],
    track(name, parameters = {}) {
      if (this.consent === "granted") {
        window.gtag("event", name, parameters);
      } else if (this.consent === "pending") {
        this.queue.push([name, parameters]);
      }
    },
  };

  const readConsent = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      if (
        stored?.version === consentVersion &&
        ["accepted", "rejected"].includes(stored.choice) &&
        Date.now() - stored.createdAt < consentLifetime
      ) {
        return stored.choice;
      }
    } catch (error) {
      console.warn("Cookie preference could not be read.", error);
    }
    return null;
  };

  const saveConsent = (choice) => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ choice, createdAt: Date.now(), version: consentVersion })
      );
    } catch (error) {
      console.warn("Cookie preference could not be saved.", error);
    }
  };

  const flushQueuedEvents = () => {
    const queuedEvents = analytics.queue.splice(0);
    queuedEvents.forEach(([name, parameters]) => window.gtag("event", name, parameters));
  };

  const loadAnalytics = () => {
    if (analytics.consent === "granted") return;

    analytics.consent = "granted";
    window[`ga-disable-${measurementId}`] = false;
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    if (!document.querySelector(`script[data-google-analytics="${measurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.googleAnalytics = measurementId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }

    flushQueuedEvents();
    document.dispatchEvent(new CustomEvent("analytics-consent-granted"));
  };

  const removeAnalyticsCookies = () => {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname}; SameSite=Lax`;
      }
    });
  };

  const disableAnalytics = () => {
    analytics.consent = "denied";
    analytics.queue.length = 0;
    window[`ga-disable-${measurementId}`] = true;
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    removeAnalyticsCookies();
  };

  const hideBanner = () => {
    document.querySelector("[data-cookie-banner]")?.remove();
  };

  const showBanner = () => {
    hideBanner();

    const banner = document.createElement("section");
    banner.className = "cookie-banner";
    banner.dataset.cookieBanner = "";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "false");
    banner.setAttribute("aria-labelledby", "cookie-banner-title");
    banner.innerHTML = `
      <div class="cookie-banner__content">
        <div>
          <h2 id="cookie-banner-title">Your privacy choices</h2>
          <p>We use optional Google Analytics cookies to understand website use. You can accept or reject analytics. Read our <a href="privacy.html">privacy policy</a>.</p>
        </div>
        <div class="cookie-banner__actions">
          <button class="cookie-choice" type="button" data-reject-analytics>Reject analytics</button>
          <button class="cookie-choice" type="button" data-accept-analytics>Accept analytics</button>
        </div>
      </div>`;

    banner.querySelector("[data-reject-analytics]").addEventListener("click", () => {
      saveConsent("rejected");
      disableAnalytics();
      hideBanner();
    });
    banner.querySelector("[data-accept-analytics]").addEventListener("click", () => {
      saveConsent("accepted");
      loadAnalytics();
      hideBanner();
    });

    document.body.appendChild(banner);
    banner.querySelector("[data-reject-analytics]").focus();
  };

  const initializeConsent = () => {
    const consent = readConsent();
    if (consent === "accepted") {
      loadAnalytics();
    } else {
      analytics.consent = consent === "rejected" ? "denied" : "pending";
      if (consent === "rejected") {
        disableAnalytics();
      } else {
        showBanner();
      }
    }

    document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
      button.addEventListener("click", showBanner);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeConsent);
  } else {
    initializeConsent();
  }
})();
