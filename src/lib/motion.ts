/**
 * Vanilla motion utilities - no animation library.
 * All effects are progressive enhancement: content is fully visible/usable
 * without JS, and everything is skipped under prefers-reduced-motion.
 */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-reveal: elements with [data-reveal] fade/rise into place once.
 * Optional [data-reveal-delay="80"] (ms) staggers siblings declaratively.
 * Must run after DOMContentLoaded is not required; call from an inline
 * script placed after the elements, or defer.
 */
export function initScrollReveal(): void {
  // .js-reveal-ready is added synchronously in <head> (see BaseLayout) before
  // first paint, so there's never a flash of visible-then-hidden content.
  if (prefersReducedMotion()) return;

  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;

  targets.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Discreet parallax for grafismos / the "respiro emocional" photo.
 * [data-parallax="16"] sets the max translateY amplitude in px.
 * Only runs while the element intersects the viewport; transform-only.
 */
export function initParallax(): void {
  if (prefersReducedMotion()) return;

  const targets = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!targets.length) return;

  const active = new Set<HTMLElement>();
  let rafId: number | null = null;

  const tick = () => {
    for (const el of active) {
      const amplitude = Number(el.dataset.parallax) || 16;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elCenter = rect.top + rect.height / 2;
      const progress = (viewportCenter - elCenter) / window.innerHeight;
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.transform = `translateY(${(clamped * amplitude).toFixed(2)}px)`;
    }
    rafId = active.size ? requestAnimationFrame(tick) : null;
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        active.add(entry.target as HTMLElement);
        if (rafId === null) rafId = requestAnimationFrame(tick);
      } else {
        active.delete(entry.target as HTMLElement);
      }
    }
  });

  targets.forEach((el) => observer.observe(el));
}

/**
 * Shows an element (e.g. the floating WhatsApp button) after the user
 * scrolls past a threshold, or immediately if reduced motion is set
 * (no entrance animation needed - it just appears).
 */
export function initScrollAppear(
  selector: string,
  { threshold = 300 }: { threshold?: number } = {}
): void {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  if (prefersReducedMotion()) {
    el.classList.add('is-visible');
    return;
  }

  const onScroll = () => {
    if (window.scrollY > threshold) {
      el.classList.add('is-visible');
      window.removeEventListener('scroll', onScroll);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
