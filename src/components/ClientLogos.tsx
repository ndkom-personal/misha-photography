"use client";

export default function ClientLogos() {
  const companies = [
    "Google",
    "Salesforce",
    "Uber",
    "Airbnb",
    "Stripe",
    "Dropbox",
    "Slack",
    "Figma",
    "Coinbase",
    "Lyft",
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
              <span
                key={index}
                className="flex-shrink-0 mx-6 text-gray-400 font-semibold text-lg tracking-wide"
              >
                {company}
              </span>
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
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
