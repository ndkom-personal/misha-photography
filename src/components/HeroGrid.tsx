"use client";

export default function HeroGrid() {
  const images = [
    // Row 1: SF Landmarks + Faces
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80", // Golden Gate
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", // Professional woman
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80", // SF skyline
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", // Professional man
    // Row 2: Faces + SF
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80", // Family
    "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=400&q=80", // Transamerica
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", // Woman smiling
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&q=80", // SF cable car
    // Row 3: Mix
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80", // Man in suit
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", // Woman portrait
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&q=80", // Golden Gate fog
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80", // Young man
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 opacity-60">
      {images.map((src, index) => (
        <div
          key={index}
          className="bg-cover bg-center"
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </div>
  );
}
