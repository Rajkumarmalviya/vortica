export const AnalyticsEvents = {
  VIEW_HOME: "view_home",
  VIEW_SERVICES: "view_services",
  VIEW_SERVICE_DETAIL: "view_service_detail",
  CTA_CLICK: "cta_click",
  FORM_SUBMIT: "form_submit",
};

export const trackEvent = (eventName: string, params?: object) => {
  if (typeof window === "undefined") return;

  const win = window as Window & {
    fbq?: (event: string, eventName: string, payload?: object) => void;
    gtag?: (command: string, eventName: string, payload?: object) => void;
  };

  if (typeof win.fbq === "function") {
    win.fbq("track", eventName, params);
  }

  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, params);
  }
};
