import Link from "next/link";

const blogPosts = [
  {
    slug: "why-linkedin-photo-matters",
    title: "Why Your LinkedIn Photo Matters More Than You Think",
    excerpt:
      "Studies show that profiles with professional photos get 21x more views and 36x more messages. Learn why investing in a quality headshot is one of the best career moves you can make.",
    date: "2026-01-28",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    category: "Career",
  },
  {
    slug: "business-photography-san-francisco",
    title: "The Complete Guide to Business Photography in San Francisco",
    excerpt:
      "From startup founders to corporate executives, discover why San Francisco professionals choose outdoor business photography over traditional studio shots.",
    date: "2026-01-21",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    category: "Business",
  },
  {
    slug: "family-moments-worth-capturing",
    title: "5 Family Moments You Will Regret Not Photographing",
    excerpt:
      "Kids grow up fast. These are the milestones and everyday moments that families wish they had captured professionally before it was too late.",
    date: "2026-01-14",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    category: "Family",
  },
  {
    slug: "first-impressions-online",
    title: "How People Judge You Based on Your Profile Photo",
    excerpt:
      "Research from Princeton shows people form impressions in just 100 milliseconds. Here is what your current photo might be saying about you.",
    date: "2026-01-07",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "Psychology",
  },
  {
    slug: "best-sf-locations-headshots",
    title: "10 Best San Francisco Locations for Professional Headshots",
    excerpt:
      "Forget the boring studio backdrop. These iconic SF locations will make your professional photos stand out from everyone else in your industry.",
    date: "2025-12-28",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    category: "Locations",
  },
  {
    slug: "what-to-wear-headshots",
    title: "What to Wear for Your Professional Headshot Session",
    excerpt:
      "Colors, patterns, and styles that photograph well. Plus common mistakes that can ruin an otherwise perfect shot.",
    date: "2025-12-21",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    category: "Tips",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Photography Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tips and insights on professional photography, personal branding, and capturing life in San Francisco
          </p>
        </div>

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
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let us capture your story in San Francisco.
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
    "Tips, guides, and inspiration for professional headshots and family photography in San Francisco. Learn about LinkedIn photos, best locations, and more.",
};
