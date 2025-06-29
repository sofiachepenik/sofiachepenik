import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Media & Content',
  description: 'Explore Sofia Chepenik\'s latest articles, podcasts, speaking engagements, and media appearances. Stay updated with insights on mindset, leadership, and personal transformation.',
  openGraph: {
    title: 'Media & Content - Sofia Chepenik',
    description: 'Explore Sofia Chepenik\'s latest articles, podcasts, speaking engagements, and media appearances.',
  },
};

export default function MediaPage() {
  const mediaSections = [
    {
      title: "Articles",
      items: [
        {
          title: "The Power of Authentic Leadership",
          source: "Forbes",
          date: "March 2024",
          link: "https://forbes.com/example",
          description: "How authentic leadership transforms teams and drives results."
        },
        {
          title: "Building Resilience in Uncertain Times",
          source: "Harvard Business Review",
          date: "February 2024",
          link: "https://hbr.org/example",
          description: "Strategies for developing mental toughness and adaptability."
        },
        {
          title: "The Future of Personal Development",
          source: "Medium",
          date: "January 2024",
          link: "https://medium.com/example",
          description: "Emerging trends in coaching and mindset transformation."
        }
      ]
    },
    {
      title: "Podcasts",
      items: [
        {
          title: "The Mindset Mastery Show",
          source: "Spotify",
          date: "Weekly",
          link: "https://spotify.com/example",
          description: "Weekly insights on mindset, habits, and personal growth."
        },
        {
          title: "Leadership Unlocked",
          source: "Apple Podcasts",
          date: "Bi-weekly",
          link: "https://apple.co/example",
          description: "Deep dives into leadership principles and practices."
        },
        {
          title: "The Growth Mindset Podcast",
          source: "Google Podcasts",
          date: "Monthly",
          link: "https://podcasts.google.com/example",
          description: "Exploring the science behind personal transformation."
        }
      ]
    },
    {
      title: "Awards & Recognition",
      items: [
        {
          title: "Top 30 Under 30 Coaches",
          source: "Coaching Federation",
          date: "2024",
          link: "#",
          description: "Recognized for excellence in coaching and mentorship."
        },
        {
          title: "Best Mindset Coach",
          source: "Personal Development Awards",
          date: "2023",
          link: "#",
          description: "Awarded for innovative approaches to mindset transformation."
        },
        {
          title: "Leadership Excellence Award",
          source: "Business Leaders Association",
          date: "2023",
          link: "#",
          description: "Honored for outstanding leadership and community impact."
        }
      ]
    },
    {
      title: "News & Press",
      items: [
        {
          title: "Sofia Chepenik Named Rising Star in Coaching",
          source: "Business Insider",
          date: "December 2023",
          link: "https://businessinsider.com/example",
          description: "Feature article on Sofia's innovative coaching methods."
        },
        {
          title: "The Future of Personal Development",
          source: "TechCrunch",
          date: "November 2023",
          link: "https://techcrunch.com/example",
          description: "How technology is transforming the coaching industry."
        },
        {
          title: "Meet the Coach Changing Lives",
          source: "Entrepreneur Magazine",
          date: "October 2023",
          link: "https://entrepreneur.com/example",
          description: "Profile piece on Sofia's journey and impact."
        }
      ]
    },
    {
      title: "Speaking Engagements",
      items: [
        {
          title: "TEDx Talk: The Power of Authentic Connection",
          source: "TEDx",
          date: "March 2024",
          link: "https://ted.com/example",
          description: "How authentic relationships drive success and fulfillment."
        },
        {
          title: "Keynote: Mindset Mastery Summit",
          source: "Personal Development Conference",
          date: "February 2024",
          link: "https://example.com",
          description: "Opening keynote on transforming limiting beliefs."
        },
        {
          title: "Workshop: Leadership in the Digital Age",
          source: "Business Leadership Forum",
          date: "January 2024",
          link: "https://example.com",
          description: "Interactive workshop on modern leadership principles."
        }
      ]
    },
    {
      title: "Video Content",
      items: [
        {
          title: "Daily Mindset Tips",
          source: "YouTube",
          date: "Daily",
          link: "https://youtube.com/@sofiachepenik",
          description: "Quick, actionable mindset tips for daily life."
        },
        {
          title: "Behind the Scenes",
          source: "Instagram",
          date: "Weekly",
          link: "https://instagram.com/sofiachepenik",
          description: "Authentic glimpses into Sofia's daily routine and insights."
        },
        {
          title: "Live Q&A Sessions",
          source: "TikTok",
          date: "Bi-weekly",
          link: "https://tiktok.com/@sofiachepenik",
          description: "Interactive sessions answering your burning questions."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white" role="banner">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 font-cursive">
            Media & Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore my latest articles, podcasts, speaking engagements, and insights on mindset, leadership, and personal transformation.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Media Sections */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="media-sections-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="media-sections-heading" className="sr-only">Media sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaSections.map((section, sectionIndex) => (
              <section 
                key={sectionIndex} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                aria-labelledby={`section-${sectionIndex}-heading`}
              >
                <div className="bg-[#fe019a] text-white p-6">
                  <h3 id={`section-${sectionIndex}-heading`} className="text-xl font-bold">
                    {section.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6" role="list" aria-label={`${section.title} items`}>
                    {section.items.map((item, itemIndex) => (
                      <article 
                        key={itemIndex} 
                        className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        role="listitem"
                      >
                        <h4 className="font-semibold text-black mb-2">
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#fe019a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1"
                            aria-label={`Read ${item.title} on ${item.source}`}
                          >
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {item.source} • {item.date}
                        </p>
                        <p className="text-gray-700 text-sm">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="featured-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Content
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Featured TEDx Talk - The Power of Authentic Connection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  TEDx Talk: The Power of Authentic Connection
                </h3>
                <p className="text-gray-600 mb-6">
                  In this powerful talk, I share how authentic relationships are the foundation of true success and fulfillment. Learn the principles that have transformed my life and the lives of thousands of others.
                </p>
                <a
                  href="https://ted.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Watch TEDx Talk on authentic connection"
                >
                  Watch Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Featured Article - The Power of Authentic Leadership"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  The Power of Authentic Leadership
                </h3>
                <p className="text-gray-600 mb-6">
                  Published in Forbes, this article explores how authentic leadership transforms teams, drives results, and creates lasting positive change in organizations and communities.
                </p>
                <a
                  href="https://forbes.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Read Forbes article on authentic leadership"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="newsletter-heading" className="text-4xl md:text-5xl font-bold text-black mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get notified about my latest content, speaking engagements, and exclusive insights delivered straight to your inbox.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form 
              action="https://formsubmit.co/sofiacchepenik@gmail.com" 
              method="POST"
              className="space-y-4"
              aria-label="Newsletter subscription form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                  required
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                  required
                  aria-label="Your email address"
                />
              </div>
              
              {/* FormSubmit Enhancements */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New newsletter subscription from SofiaChepenik.com" />
              <input type="hidden" name="_next" value="https://sofiachepenik.com/thank-you" />
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                aria-label="Subscribe to newsletter"
              >
                Subscribe to Updates
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 