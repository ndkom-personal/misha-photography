"use client";

export default function HeroGrid() {
  // Mix of SF landmarks and professional portraits - NO duplicates with portfolio
  const images = [
    // Row 1
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80", alt: "Golden Gate Bridge", position: "center" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", alt: "Professional man", position: "top" },
    { src: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=400&q=80", alt: "Transamerica Pyramid", position: "center" },
    { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80", alt: "Woman smiling", position: "top" },
    // Row 2
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "SF Victorian houses", position: "center" },
    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", alt: "Man portrait", position: "top" },
    { src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&q=80", alt: "SF cable car", position: "center" },
    { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", alt: "Woman portrait", position: "top" },
    // Row 3
    { src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80", alt: "Man smiling", position: "top" },
    { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80", alt: "SF skyline", position: "center" },
    { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", alt: "Woman professional", position: "top" },
    { src: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&q=80", alt: "Bay Bridge", position: "center" },
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-60">
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: img.position }}
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
}
