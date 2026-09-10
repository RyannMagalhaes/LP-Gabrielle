/**
 * Scroll-scrubbed "growth" reveal, powered by GSAP + ScrollTrigger.
 * Targets [data-grow] elements: each is revealed bottom-to-top via clip-path
 * (not display/visibility, so layout never shifts) and eased in with a
 * gentle scale, precisely tied to scroll position rather than a one-shot
 * IntersectionObserver fade. Skips entirely under prefers-reduced-motion,
 * where the element is simply shown at its resting state.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollGrow(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-grow]');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => {
      el.style.clipPath = 'inset(0% 0 0 0)';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  targets.forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(100% 0 0 0)', opacity: 0, scale: 0.88, transformOrigin: '50% 100%' },
      {
        clipPath: 'inset(0% 0 0 0)',
        opacity: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 45%',
          scrub: 0.6,
        },
      }
    );
  });
}

/**
 * Scroll-scrubbed "draw + turn", for the official vector marks (see brand
 * book). Deliberately a different motion language from initScrollGrow's
 * clip-path reveal: the stroke draws itself on (stroke-dashoffset, needs
 * pathLength="1" on the <path>) while the whole mark settles out of a slight
 * rotation - a turning/unfurling read rather than a rising/growing one, so
 * the page doesn't repeat the same "blooming" gesture everywhere.
 */
export function initScrollDraw(): void {
  const targets = document.querySelectorAll<SVGElement>('[data-scroll-draw]');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.querySelectorAll('path').forEach((path) => {
        path.style.strokeDashoffset = '0';
      });
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  targets.forEach((el) => {
    const rotateFrom = Number(el.dataset.scrollDraw) || -22;
    const paths = el.querySelectorAll('path');

    gsap.fromTo(
      el,
      { opacity: 0, rotate: rotateFrom, transformOrigin: '50% 50%' },
      {
        opacity: 1,
        rotate: 0,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 40%', scrub: 0.6 },
      }
    );

    paths.forEach((path) => {
      gsap.fromTo(
        path,
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 40%', scrub: 0.6 },
        }
      );
    });
  });
}
