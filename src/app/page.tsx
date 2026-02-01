import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Capturing Your <span className="italic">Authentic</span> Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional portrait & family photography in San Francisco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Your Session
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-semibold text-xl mb-2">5+ Years Experience</h3>
              <p className="text-gray-600">
                Capturing San Francisco&apos;s most beautiful moments since 2019
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-xl mb-2">50% Below Market</h3>
              <p className="text-gray-600">
                Premium quality at prices that make professional photos accessible
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-xl mb-2">100+ Happy Clients</h3>
              <p className="text-gray-600">
                Trusted by individuals and families across the Bay Area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Photography Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional sessions tailored to capture your unique story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Portrait Session */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')",
                }}
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair text-2xl font-bold">Portrait Session</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-gray-900">$599</span>
                    <p className="text-sm text-gray-500 line-through">$1,200 typical</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for professional headshots, LinkedIn profiles, and personal branding.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    90-minute session
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited outfit changes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    20+ professionally edited photos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Iconic SF locations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online gallery delivery
                  </li>
                </ul>
                <a
                  href="#book"
                  className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Book This Session
                </a>
              </div>
            </div>

            {/* Service 2: Family Session */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80')",
                }}
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair text-2xl font-bold">Family Session</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-gray-900">$499</span>
                    <p className="text-sm text-gray-500 line-through">$1,050 typical</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Capture precious family moments in San Francisco&apos;s most scenic locations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    2-hour session
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 6 family members
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30+ professionally edited photos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multiple SF locations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Print-ready files included
                  </li>
                </ul>
                <a
                  href="#book"
                  className="block text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Book This Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Recent Work
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into the stories we&apos;ve helped capture
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80')",
              }}
            />
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                Meet Misha
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                With over 5 years of experience capturing portraits and family moments
                across San Francisco, I&apos;ve developed a signature style that blends
                natural light with the city&apos;s iconic backdrops.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                My approach is simple: create a relaxed, fun environment where your
                authentic personality shines through. Whether it&apos;s a professional
                headshot for your LinkedIn or candid family moments at Baker Beach,
                I&apos;m here to make the experience enjoyable and the results stunning.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Based in San Francisco, I know all the best spots—from the painted
                ladies to hidden gems in the Presidio. Let&apos;s create something beautiful
                together.
              </p>
              <a
                href="#book"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Marketing Director",
                text: "Misha made my headshot session so easy and fun. The photos turned out amazing—I've gotten so many compliments on LinkedIn!",
              },
              {
                name: "The Chen Family",
                role: "Family Session",
                text: "We were nervous about keeping our kids engaged, but Misha was incredible with them. The photos captured our family perfectly.",
              },
              {
                name: "David K.",
                role: "Startup Founder",
                text: "Professional, affordable, and the quality exceeded my expectations. Highly recommend for anyone needing corporate headshots.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Book Your Session
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to capture your story? Fill out the form below and I&apos;ll get back
              to you within 24 hours.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </>
  );
}
