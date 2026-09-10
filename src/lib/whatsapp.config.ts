/**
 * Single source of truth for WhatsApp CTAs across the site.
 * Never hardcode a wa.me URL anywhere else - always go through buildWhatsAppUrl().
 *
 * TODO: replace WHATSAPP_NUMBER with Gabrielle's real number (E.164, digits only,
 * no "+" - e.g. "5511999999999") once it's provided.
 */

export const WHATSAPP_NUMBER = '5500000000000';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá, Gabrielle! Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia online.';

export type WhatsAppContext = 'header' | 'hero' | 'final-cta' | 'floating-button';

// Per-context message overrides are intentionally empty - the spec provides one
// suggested message only. Populate here if differentiated copy is ever requested.
const CONTEXT_MESSAGES: Partial<Record<WhatsAppContext, string>> = {};

export function buildWhatsAppUrl(context?: WhatsAppContext, message?: string): string {
  const text = message ?? (context && CONTEXT_MESSAGES[context]) ?? WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
