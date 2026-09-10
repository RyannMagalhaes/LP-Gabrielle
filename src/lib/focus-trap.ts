/**
 * Minimal focus trap for the mobile navigation overlay.
 * Traps Tab/Shift+Tab within the container, closes on Escape,
 * and restores focus to the trigger element when closed.
 */

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function createFocusTrap(container: HTMLElement, onClose: () => void) {
  let triggerEl: HTMLElement | null = null;

  function getFocusable(): HTMLElement[] {
    return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (el) => el.offsetParent !== null
    );
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return {
    activate(trigger: HTMLElement) {
      triggerEl = trigger;
      document.addEventListener('keydown', handleKeydown);
      const focusable = getFocusable();
      focusable[0]?.focus();
    },
    deactivate() {
      document.removeEventListener('keydown', handleKeydown);
      triggerEl?.focus();
      triggerEl = null;
    },
  };
}
