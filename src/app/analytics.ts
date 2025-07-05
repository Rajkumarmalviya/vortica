// Analytics Event Tracking

// Type definitions for window properties
declare global {
  interface Window {
    fbq: (event: string, eventName: string, params?: object) => void;
    gtag: (command: string, eventName: string, params?: object) => void;
  }
}

// Facebook Pixel Events
export const trackFacebookEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Google Analytics Events
export const trackGoogleEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Combined Analytics Events
export const trackEvent = (eventName: string, params?: object) => {
  trackFacebookEvent(eventName, params);
  trackGoogleEvent(eventName, params);
};

// Predefined Events
export const AnalyticsEvents = {
  // Page Views
  VIEW_HOME: 'view_home',
  VIEW_SERVICES: 'view_services',
  
  // Service Category Views
  VIEW_SERVICE_CATEGORY: 'view_service_category',
  
  // Contact Form Events
  START_FORM: 'start_form',
  FORM_SUBMIT: 'form_submit',
  FORM_SUCCESS: 'form_success',
  
  // Service Interactions
  SERVICE_CLICK: 'service_click',
  
  // Scroll Depth
  SCROLL_DEPTH: 'scroll_depth'
};