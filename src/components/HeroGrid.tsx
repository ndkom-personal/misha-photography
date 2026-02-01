"use client";

export default function HeroGrid() {
  // Different photos from portfolio section - mix of SF landmarks and people
  const images = [
    // Row 1
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80", position: "center" }, // Golden Gate
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", position: "center 25%" }, // Business man
    { src: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=400&q=80", position: "center" }, // Transamerica Pyramid
    { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80", position: "center 25%" }, // Woman smiling
    // Row 2
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", position: "center" }, // SF Victorian houses
    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", position: "center 25%" }, // Man portrait
    { src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&q=80", position: "center" }, // SF cable car
    { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", position: "center 25%" }, // Woman portrait
    // Row 3
    { src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80", position: "center 25%" }, // Man smiling
    { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80", position: "center" }, // SF skyline
    { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", position: "center 25%" }, // Woman professional
    { src: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&q=80", position: "center" }, // Bay Bridge
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-60">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-cover"
          style={{
            backgroundImage: `url('${img.src}')`,
            backgroundPosition: img.position,
          }}
        />
      ))}
    </div>
  );
}
