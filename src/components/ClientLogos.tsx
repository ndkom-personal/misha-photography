"use client";

import Image from "next/image";

export default function ClientLogos() {
  const companies = [
    { name: "Google", domain: "google.com" },
    { name: "Salesforce", domain: "salesforce.com" },
    { name: "Uber", domain: "uber.com" },
    { name: "Airbnb", domain: "airbnb.com" },
    { name: "Stripe", domain: "stripe.com" },
    { name: "Dropbox", domain: "dropbox.com" },
    { name: "Slack", domain: "slack.com" },
    { name: "Figma", domain: "figma.com" },
    { name: "Coinbase", domain: "coinbase.com" },
    { name: "Lyft", domain: "lyft.com" },
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
                className="flex-shrink-0 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={`https://logo.clearbit.com/${company.domain}`}
                  alt={company.name}
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
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
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
