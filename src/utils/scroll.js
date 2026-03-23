/**
 * Smoothly scrolls to a DOM element by id, adjusted by a fixed offset.
 * Offset compensates for fixed/sticky UI elements (e.g. navbar).
 */
export function scrollToSection(id, offset = 100) {
  const element = document.getElementById(id);
  if (!element) return;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
}
