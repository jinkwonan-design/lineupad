export const FB_PIXEL_ID = "1467347224331079";

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const trackContact = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
};

export const trackLead = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
};

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}
