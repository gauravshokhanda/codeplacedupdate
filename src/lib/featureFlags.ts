/**
 * Central feature flags for temporarily toggling site sections/routes.
 * Set NEXT_PUBLIC_SHOW_INDUSTRIES="true" to re-enable all Industries UI and routes.
 */
export const SHOW_INDUSTRIES =
  process.env.NEXT_PUBLIC_SHOW_INDUSTRIES === "true";

