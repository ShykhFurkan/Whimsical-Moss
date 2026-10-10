import { SITE_CONFIG } from "./site-config";

export interface WhatsAppEnquiryOptions {
  craftType?: string;
  itemTitle?: string;
  customIdea?: string;
  preferredColours?: string;
}

export function buildWhatsAppUrl(options?: WhatsAppEnquiryOptions): string {
  const number = SITE_CONFIG.whatsapp.number;

  let message = `Hi! I found Whimsical Moss through your website and would love to ask about a custom creation.\n\n`;

  if (options?.itemTitle) {
    message += `I'm interested in something inspired by: "${options.itemTitle}"\n`;
  }
  if (options?.craftType) {
    message += `Craft type: ${options.craftType}\n`;
  }
  if (options?.customIdea) {
    message += `My idea: ${options.customIdea}\n`;
  } else if (!options?.itemTitle) {
    message += `My idea: \n`;
  }
  if (options?.preferredColours) {
    message += `Preferred colours/style: ${options.preferredColours}\n`;
  } else {
    message += `Preferred colours/style (optional): \n`;
  }

  message += `Date needed (optional): \n\nI can share reference photos or sketches here too!`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
