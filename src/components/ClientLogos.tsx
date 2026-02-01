"use client";

export default function ClientLogos() {
  const companies = [
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
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Trusted by professionals from
        </p>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 text-2xl font-bold text-gray-300 hover:text-gray-400 transition"
              >
                {company}
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
