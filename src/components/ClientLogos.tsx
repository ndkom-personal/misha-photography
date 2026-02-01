"use client";

export default function ClientLogos() {
  // Using Simple Icons CDN which is more reliable
  const companies = [
    { name: "Google", slug: "google", color: "#4285F4" },
    { name: "Salesforce", slug: "salesforce", color: "#00A1E0" },
    { name: "Uber", slug: "uber", color: "#000000" },
    { name: "Airbnb", slug: "airbnb", color: "#FF5A5F" },
    { name: "Stripe", slug: "stripe", color: "#635BFF" },
    { name: "Dropbox", slug: "dropbox", color: "#0061FF" },
    { name: "Slack", slug: "slack", color: "#4A154B" },
    { name: "Figma", slug: "figma", color: "#F24E1E" },
    { name: "Coinbase", slug: "coinbase", color: "#0052FF" },
    { name: "Lyft", slug: "lyft", color: "#FF00BF" },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Trusted by professionals from
        </p>
        <div className="relative">
          <div className="flex animate-scroll items-center">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center gap-2 opacity-60 hover:opacity-100 transition duration-300"
              >
                <img
                  src={`https://cdn.simpleicons.org/${company.slug}/gray`}
                  alt={company.name}
                  className="h-6 w-6"
                  loading="lazy"
                />
                <span className="text-gray-600 font-medium text-sm">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
