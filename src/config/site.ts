// Site Configuration
// Edit this file to update website content without touching component code

export const siteConfig = {
  // Business Info
  businessName: "Misha Photography",
  tagline: "Professional Photography in San Francisco",
  email: "hello@mishaphoto.com", // Change this to your actual email
  phone: "(415) 555-1234", // Change this to your actual phone

  // Social Links
  instagram: "https://instagram.com/mishaphoto", // Update with real link

  // Pricing (update these as needed)
  pricing: {
    business: {
      price: 599,
      duration: "90 minutes",
      photos: "20+",
    },
    family: {
      price: 499,
      duration: "2 hours",
      photos: "30+",
    },
  },

  // About Misha (edit bio here)
  about: {
    yearsExperience: 5,
    sonAge: 9,
    story: [
      "Photography has been my passion for as long as I can remember. I got my first camera at 12 and never looked back. There is something magical about freezing a moment in time, capturing the real essence of a person that words simply cannot describe.",
      "After moving to San Francisco over five years ago, I fell in love with this city. The light here is incredible. The fog rolling over the Golden Gate, the sunset at Baker Beach, the energy of downtown. Every corner tells a story, and I love helping my clients become part of it.",
      "When I am not behind the camera, I am exploring the city with my 9 year old son, finding new spots and seeing San Francisco through his eyes. Being a father has taught me patience and the importance of capturing genuine moments. These are the skills I bring to every session.",
      "Whether you need a professional headshot that stands out on LinkedIn or want to capture your family at the Painted Ladies, I am here to make it happen. Let us create something amazing together.",
    ],
  },

  // Client companies for the logo slider
  // Edit this list to add or remove companies
  clientCompanies: [
    "Google",
    "Meta",
    "Salesforce",
    "Uber",
    "Airbnb",
    "Stripe",
    "Square",
    "Dropbox",
    "Twitter",
    "LinkedIn",
    "Adobe",
    "Slack",
    "Figma",
    "Notion",
    "Coinbase",
    "DoorDash",
    "Instacart",
    "Lyft",
    "Pinterest",
    "Yelp",
  ],

  // Portfolio images (replace with real photos when available)
  // Use Unsplash URLs for now, replace with your own hosted images later
  portfolioImages: [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
  ],

  // Testimonials (edit or add more)
  testimonials: [
    {
      name: "Sarah M.",
      role: "Marketing Director at a Tech Startup",
      text: "Misha made my headshot session so easy and fun. We shot near the Embarcadero and the photos turned out amazing. I have gotten so many compliments on LinkedIn!",
    },
    {
      name: "The Chen Family",
      role: "Family Session at Baker Beach",
      text: "We were nervous about keeping our kids engaged, but Misha was incredible with them. He knew exactly how to make them laugh. The photos captured our family perfectly.",
    },
    {
      name: "David K.",
      role: "Startup Founder",
      text: "Needed professional photos for our company website and investor deck. Misha delivered exactly what we needed. Highly recommend for anyone in the Bay Area tech scene.",
    },
  ],

  // SF Locations for shoots
  locations: [
    { name: "Golden Gate Bridge", icon: "🌉" },
    { name: "Baker Beach", icon: "🏖️" },
    { name: "Palace of Fine Arts", icon: "🏛️" },
    { name: "Embarcadero", icon: "⚓" },
    { name: "Painted Ladies", icon: "🏠" },
    { name: "Presidio", icon: "🌲" },
    { name: "Mission District", icon: "🎨" },
    { name: "Financial District", icon: "🏙️" },
  ],
};

export type SiteConfig = typeof siteConfig;
