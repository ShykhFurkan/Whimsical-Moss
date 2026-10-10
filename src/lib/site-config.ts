export interface SiteConfig {
  brandName: string;
  tagline: string;
  shortDescription: string;
  whatsapp: {
    number: string; // International format without + or spaces, e.g. "919876543210"
    isVerified: boolean;
    defaultMessage: string;
  };
  instagram: {
    handle: string;
    url: string;
    isVerified: boolean;
  };
  email?: string;
  domain?: string;
  isProductionReady: boolean;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "Whimsical Moss",
  tagline: "Little things, made with love.",
  shortDescription:
    "Handmade crafts, calligraphy, paintings, and one-of-a-kind creations, made with care and a little imagination.",
  whatsapp: {
    // Development placeholder until confirmed with brand owner in OPEN_DECISIONS.md
    number: "000000000000",
    isVerified: false,
    defaultMessage: `Hi! I found Whimsical Moss through your website and would love to ask about a custom creation.

My idea: 
Craft type: 
Preferred colours/style: 
Date needed (optional): `,
  },
  instagram: {
    // Development placeholder until confirmed with brand owner in OPEN_DECISIONS.md
    handle: "@whimsicalmoss",
    url: "https://instagram.com",
    isVerified: false,
  },
  domain: "whimsicalmoss.com",
  isProductionReady: false,
};
