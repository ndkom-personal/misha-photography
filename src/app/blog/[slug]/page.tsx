import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<string, {
  title: string;
  date: string;
  category: string;
  image: string;
  content: string[];
}> = {
  "why-linkedin-photo-matters": {
    title: "Why Your LinkedIn Photo Matters More Than You Think",
    date: "2026-01-28",
    category: "Career",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
    content: [
      "In today's digital first world, your LinkedIn photo is often the first impression you make on potential employers, clients, and business partners. And that first impression happens in milliseconds.",
      "Research from LinkedIn shows that profiles with professional photos receive 21 times more profile views and 36 times more messages than those without. That is not a small difference. That is the difference between being seen and being invisible.",
      "## What Makes a Great LinkedIn Photo?",
      "A strong LinkedIn photo is not about looking like a model. It is about looking approachable, competent, and trustworthy. Here is what works:",
      "**Good lighting** is essential. Natural light or professional lighting eliminates harsh shadows and makes you look your best. This is why outdoor photos in San Francisco often outperform studio shots.",
      "**The right expression** matters more than you think. A genuine smile with eye contact conveys warmth and confidence. The fake, forced corporate smile does the opposite.",
      "**Professional but personal** is the sweet spot. You want to look polished without seeming unapproachable. A suit against a grey backdrop might work for some industries, but many Bay Area professionals find that a smart casual look against an urban backdrop feels more authentic.",
      "## Why San Francisco Backgrounds Work",
      "There is something about photographing professionals against the San Francisco skyline or in iconic locations like the Embarcadero that just works. It tells a story. It says you are part of this innovative, dynamic city.",
      "When someone views your profile and sees the Golden Gate Bridge or downtown SF in the background, they instantly understand something about you. You are not just another professional. You are a San Francisco professional.",
      "## The Investment Perspective",
      "A professional headshot typically costs between $400 and $1,200 in San Francisco. Compare that to the value of even one new client or job opportunity, and the math becomes obvious.",
      "Your LinkedIn photo is working for you 24/7. It is on your profile, in search results, in messages, in comments. It is one of the highest ROI investments you can make in your professional brand.",
      "## Ready to Upgrade Your LinkedIn Presence?",
      "If you are in the Bay Area and ready to invest in a professional headshot that actually represents who you are, I would love to help. My sessions are relaxed, fun, and focused on capturing the real you against San Francisco's most impressive backdrops.",
    ],
  },
  "business-photography-san-francisco": {
    title: "The Complete Guide to Business Photography in San Francisco",
    date: "2026-01-21",
    category: "Business",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
    content: [
      "San Francisco has become one of the most photographed cities in the world for business professionals. From startup founders raising their Series A to executives updating their company headshots, the Bay Area has a unique approach to professional photography.",
      "## Why Outdoor Business Photography?",
      "The traditional approach to business headshots involves a studio, a grey backdrop, and controlled lighting. It is safe. It is predictable. And increasingly, it is outdated.",
      "Bay Area professionals have embraced outdoor business photography for good reason. The city provides stunning backdrops that communicate success, innovation, and dynamism. A headshot taken in front of the Salesforce Tower or with the Bay Bridge in the background tells a story that a grey backdrop never could.",
      "## Best Locations for Business Photos in SF",
      "**Financial District**: The modern architecture and urban energy make this perfect for finance, consulting, and corporate professionals.",
      "**SOMA**: Tech companies dominate this neighborhood, making it ideal for startup founders and tech executives.",
      "**Embarcadero**: The waterfront setting provides beautiful light and a professional yet relaxed vibe.",
      "**Mission District**: For creative professionals who want something with more personality and color.",
      "**Presidio**: When you want nature combined with sophistication, this national park offers incredible options.",
      "## What to Expect from a Session",
      "A typical business photography session in San Francisco runs 60 to 90 minutes. This gives enough time to visit multiple locations and try different looks.",
      "Most clients bring 2 to 3 outfit changes. I recommend including at least one formal option and one smart casual look. This gives you versatility for different platforms and uses.",
      "You will receive 20 or more professionally edited photos, delivered digitally within 5 to 7 business days. These are high resolution files suitable for print, web, and social media.",
      "## Timing Your Session",
      "The famous San Francisco fog can work for or against you. Morning sessions before 10am often have softer, more diffused light. Late afternoon, around 4pm to 6pm, offers the golden hour light that photographers love.",
      "Weekday sessions mean fewer tourists at popular locations. This matters if you want shots at places like the Palace of Fine Arts or near the Golden Gate Bridge.",
    ],
  },
  "family-moments-worth-capturing": {
    title: "5 Family Moments You Will Regret Not Photographing",
    date: "2026-01-14",
    category: "Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    content: [
      "As a photographer and a father, I think about this constantly. Kids grow up so fast. The moments we think we will remember forever become hazy. The details fade.",
      "Professional family photos are not about perfection. They are about preservation. Here are five moments that families consistently tell me they wish they had captured.",
      "## 1. The Ages They Are Right Now",
      "Whatever age your kids are today, that is a moment worth capturing. Not because anything special is happening, but because they will never be exactly this age again.",
      "The way your 5 year old laughs. How your teenager reluctantly smiles. The chaos of your toddler refusing to sit still. These are the real moments.",
      "## 2. Three Generations Together",
      "If you are lucky enough to have three generations of your family alive and healthy, do not wait. These photos become priceless.",
      "I have had countless families tell me they regret not getting professional photos with grandparents while they could. It is one of those things people put off until it is too late.",
      "## 3. Before the Big Changes",
      "Starting school. Moving to a new house. A new sibling arriving. These transitions mark chapters in your family story.",
      "Having professional photos from just before a big change gives you something to look back on. A record of who you were in that moment.",
      "## 4. The Annual Tradition",
      "Many families book annual sessions at the same location. Over the years, these photos become a visual timeline of your family growing.",
      "Same spot at Baker Beach every October. Same poses each year. The kids getting taller. The parents getting greyer. It tells a story no single photo could.",
      "## 5. When Everyone Is Actually Getting Along",
      "Every family has seasons where everyone is busy, stressed, or going through something. And then there are moments when things are good. When everyone is healthy and happy and connected.",
      "Capture those moments. They are rarer than we realize.",
      "## Making It Happen",
      "The biggest barrier to family photos is logistics. Getting everyone dressed, fed, and in a good mood at the same time feels impossible.",
      "That is where working with an experienced family photographer helps. I know how to work with kids of all ages. I know the timing tricks. I know how to get genuine smiles instead of forced ones.",
      "If San Francisco is home and you have been putting off family photos, let us make it happen. Your future self will thank you.",
    ],
  },
  "first-impressions-online": {
    title: "How People Judge You Based on Your Profile Photo",
    date: "2026-01-07",
    category: "Psychology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    content: [
      "Researchers at Princeton found that people form impressions of trustworthiness, competence, and likability in just 100 milliseconds of seeing a face. One tenth of a second. That is all it takes.",
      "Your profile photo is not just a picture. It is a signal. And whether you like it or not, people are reading those signals and making judgments.",
      "## What Your Photo Communicates",
      "**Competence**: Formal attire, good lighting, and a direct gaze all increase perceived competence. Casual clothes, poor quality images, and looking away from the camera do the opposite.",
      "**Trustworthiness**: Genuine smiles with crinkled eyes signal trustworthiness. Fake smiles or neutral expressions can seem cold or untrustworthy.",
      "**Approachability**: Slightly tilted heads and open body language make you seem more approachable. Crossed arms or stern expressions create distance.",
      "## Common Photo Mistakes",
      "**The decade old photo**: If your photo is more than 5 years old, it is working against you. You want to look like yourself when people meet you.",
      "**The cropped group shot**: We have all seen it. Someone cropped out of a wedding photo or party pic. It reads as low effort.",
      "**The selfie**: Even well lit selfies lack the professionalism of a properly taken photo. The angle is always slightly off.",
      "**The vacation photo**: Sunglasses, casual clothes, drink in hand. Great memories, wrong context for professional networking.",
      "## What Actually Works",
      "The best professional photos share certain qualities. They are well lit, usually with natural light or professional lighting. They have clean backgrounds that do not distract. The subject is dressed appropriately for their industry.",
      "Most importantly, they capture something genuine. A real smile. A confident expression. Something that makes viewers feel like they are getting a glimpse of who you actually are.",
      "## The San Francisco Advantage",
      "One thing I love about photographing professionals in San Francisco is the flexibility. The city offers backdrops for every industry and personality.",
      "Finance professional? The Financial District works. Creative director? Mission murals. Tech founder? SOMA skyline. The background becomes part of your story.",
      "## Investing in Your Image",
      "Think about how many times your profile photo is seen. LinkedIn views. Email signatures. Conference bios. Podcast appearances. It adds up.",
      "A professional photo is one of those investments that keeps paying dividends. It works for you constantly, shaping how hundreds or thousands of people perceive you before any interaction.",
    ],
  },
  "best-sf-locations-headshots": {
    title: "10 Best San Francisco Locations for Professional Headshots",
    date: "2025-12-28",
    category: "Locations",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    content: [
      "After five years of photographing professionals across San Francisco, I have my favorite spots dialed in. These locations consistently produce stunning results while avoiding the tourist crowds.",
      "## 1. Embarcadero Waterfront",
      "The combination of the Bay, the Ferry Building, and the city skyline creates a backdrop that works for almost any industry. Morning light here is spectacular.",
      "## 2. Palace of Fine Arts",
      "The classical architecture provides an elegant, timeless backdrop. It works especially well for executives and professionals in traditional industries.",
      "## 3. Financial District",
      "Modern architecture and urban energy. The area around Salesforce Park offers interesting angles without the standard grey building backdrop.",
      "## 4. Presidio National Park",
      "Nature meets sophistication. The eucalyptus groves and bay views create a unique setting that stands out from typical urban headshots.",
      "## 5. Mission District Murals",
      "For creative professionals who want color and personality. The murals in Clarion Alley and along Valencia Street provide vibrant backgrounds.",
      "## 6. Baker Beach",
      "The Golden Gate Bridge in the background is iconic for a reason. Early morning or late afternoon for best light and fewer crowds.",
      "## 7. Crissy Field",
      "Similar Golden Gate views with a more natural, beachy feel. The marsh and beach areas offer variety.",
      "## 8. SOMA Tech Corridor",
      "The modern buildings and startup energy of SOMA work well for tech professionals and founders.",
      "## 9. Telegraph Hill",
      "The gardens and views near Coit Tower offer European vibes without leaving the city.",
      "## 10. Lands End Trail",
      "Dramatic coastal views and cypress trees create moody, artistic backgrounds for professionals who want something different.",
      "## Planning Your Session",
      "Each location has optimal times for light and minimal crowds. Morning sessions generally work best for popular spots. I can help you choose the right location based on your industry, style, and schedule.",
    ],
  },
  "what-to-wear-headshots": {
    title: "What to Wear for Your Professional Headshot Session",
    date: "2025-12-21",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80",
    content: [
      "What you wear to your headshot session matters more than you might think. The right outfit can make you look polished and professional. The wrong one can undermine an otherwise perfect photo.",
      "## The Basics",
      "**Solid colors work best**. Busy patterns, logos, and graphics distract from your face. Navy, charcoal, black, burgundy, and forest green photograph beautifully.",
      "**Fit matters more than style**. Whatever you wear should fit properly. Too tight looks uncomfortable. Too loose looks sloppy.",
      "**Layer up**. A blazer or jacket adds instant polish. You can always remove layers during the session to get different looks.",
      "## Colors to Avoid",
      "**Bright white** can blow out in photos and reflect light onto your face in unflattering ways. Off white and cream work better.",
      "**Neon colors** rarely photograph well. They can cast colored reflections on your skin.",
      "**Busy patterns** like small stripes or plaids can create visual distortion in photos. Stick to solids.",
      "## Industry Specific Tips",
      "**Tech and startups**: Smart casual is perfectly acceptable. A nice shirt without a tie, or a clean sweater, works well.",
      "**Finance and law**: More formal is expected. Suits, ties, and professional attire.",
      "**Creative industries**: You have more flexibility. Show personality while still looking put together.",
      "**Healthcare**: Clean and professional. Lab coats can work if that is part of your professional identity.",
      "## Practical Considerations",
      "**Bring options**. I recommend 2 to 3 outfit changes so we can try different looks during the session.",
      "**Iron everything**. Wrinkles show up in photos. Steam or iron your clothes the morning of.",
      "**Avoid brand new clothes**. Wear the outfit at least once before the session so you know it fits and feels comfortable.",
      "## Grooming",
      "Get haircuts a week before, not the day of. Fresh haircuts can look too sharp in photos.",
      "Keep makeup natural. Heavy makeup looks obvious in professional photos. Enhance rather than transform.",
      "For men, decide if you want to be clean shaven or keep facial hair. Either works, but avoid the in between stubble look unless that is your normal style.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Back to Blog
          </Link>
        </div>

        <div
          className="h-64 md:h-96 bg-cover bg-center rounded-2xl mb-8"
          style={{ backgroundImage: `url('${post.image}')` }}
        />

        <div className="flex items-center gap-4 mb-6">
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

        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="font-playfair text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <p key={index} className="font-semibold text-gray-900 mb-4">
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              );
            }
            return (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={i}>{part.replace(/\*\*/g, "")}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">
            Ready to Book Your Session?
          </h3>
          <p className="text-gray-600 mb-6">
            Let us capture your story in San Francisco.
          </p>
          <Link
            href="/#book"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Misha Photography`,
    description: post.content[0],
  };
}
