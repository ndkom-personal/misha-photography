import Link from "next/link";

// Sample blog posts - in production, these would come from a CMS or MDX files
const blogPosts = [
  {
    slug: "best-photo-locations-san-francisco",
    title: "10 Best Photo Locations in San Francisco for Portraits",
    excerpt:
      "Discover the most photogenic spots in the city for your next portrait session, from iconic landmarks to hidden gems.",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    category: "Locations",
  },
  {
    slug: "what-to-wear-professional-headshots",
    title: "What to Wear for Professional Headshots: Complete Guide",
    excerpt:
      "Tips on colors, patterns, and styles that photograph best for LinkedIn profiles and corporate headshots.",
    date: "2026-01-08",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "Tips",
  },
  {
    slug: "family-photo-session-tips",
    title: "How to Prepare Kids for a Family Photo Session",
    excerpt:
      "Practical advice for keeping children engaged and happy during your family photography session.",
    date: "2026-01-01",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    category: "Family",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Photography Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tips, inspiration, and behind-the-scenes insights from a San Francisco photographer
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-playfair text-xl font-bold mb-2 hover:text-gray-600 transition">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 font-semibold hover:text-gray-600 transition"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let&apos;s capture your story in San Francisco&apos;s most beautiful locations.
          </p>
          <Link
            href="/#book"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Photography Blog | Misha Photography San Francisco",
  description:
    "Tips, guides, and inspiration for portrait and family photography in San Francisco. Learn about the best locations, what to wear, and how to prepare.",
};
