import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Collaborate with Sofia Chepenik',
  description: 'Partner with Sofia Chepenik for speaking engagements, brand collaborations, media appearances, and strategic partnerships. Let\'s create something amazing together.',
  openGraph: {
    title: 'Collaborate with Sofia Chepenik',
    description: 'Partner with Sofia Chepenik for speaking engagements, brand collaborations, and strategic partnerships.',
  },
};

export default function CollaboratePage() {
  const collaborationTypes = [
    {
      title: "Speaking Engagements",
      description: "Inspire and motivate audiences with powerful keynote speeches and presentations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      topics: ["Mindset & Personal Development", "Leadership & Team Building", "Athletic Excellence", "Women's Empowerment"]
    },
    {
      title: "Brand Partnerships",
      description: "Authentic collaborations that align with values and create meaningful impact.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      topics: ["Product Endorsements", "Content Creation", "Event Appearances", "Social Media Campaigns"]
    },
    {
      title: "Media & Podcasts",
      description: "Share insights and stories through interviews, podcasts, and media appearances.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      topics: ["Podcast Interviews", "TV Appearances", "Radio Shows", "Digital Media"]
    },
    {
      title: "Content Creation",
      description: "Collaborate on articles, videos, and digital content that inspires and educates.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      topics: ["Guest Blogging", "Video Collaborations", "Social Media Takeovers", "Expert Interviews"]
    }
  ];

  const pastCollaborations = [
    {
      title: "TEDx Talk: The Power of Authentic Connection",
      partner: "TEDx",
      description: "Delivered an inspiring keynote on building meaningful relationships in the digital age.",
      link: "https://ted.com/example",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
    },
    {
      title: "Mindset Mastery Summit",
      partner: "Personal Development Conference",
      description: "Led a transformative workshop on overcoming limiting beliefs and achieving goals.",
      link: "https://example.com",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
    },
    {
      title: "Leadership in Sports Podcast",
      partner: "Sports Leadership Network",
      description: "Featured guest discussing authentic leadership and team dynamics in athletics.",
      link: "https://example.com",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
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
            Partner with Sofia
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. I'm open to speaking engagements, brand partnerships, media collaborations, and strategic alliances that align with my mission of empowering others.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="collaboration-types-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="collaboration-types-heading" className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Ways to Collaborate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
                aria-labelledby={`collaboration-${index}-heading`}
              >
                <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                  {type.icon}
                </div>
                <h3 id={`collaboration-${index}-heading`} className="text-2xl font-bold text-black mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2" role="list" aria-label={`${type.title} topics`}>
                  {type.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center" role="listitem">
                      <div className="w-2 h-2 bg-[#fe019a] rounded-full mr-3" role="presentation"></div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Sofia */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="why-partner-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="why-partner-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Partner with Sofia?
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Authentic Influence</h3>
              <p className="text-gray-600">
                Genuine connection with audiences and followers who trust Sofia's recommendations and insights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Diverse Audience</h3>
              <p className="text-gray-600">
                Reach across multiple demographics including athletes, professionals, students, and entrepreneurs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful partnerships and measurable impact for brands and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Collaborations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="past-collaborations-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="past-collaborations-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Recent Collaborations
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastCollaborations.map((collab, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                aria-labelledby={`collab-${index}-heading`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={collab.image}
                    alt={`${collab.title} collaboration image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`collab-${index}-heading`} className="text-lg font-bold text-black mb-2">
                    {collab.title}
                  </h3>
                  <p className="text-[#fe019a] font-semibold mb-2">{collab.partner}</p>
                  <p className="text-gray-600 mb-4">
                    {collab.description}
                  </p>
                  <a
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1"
                    aria-label={`Learn more about ${collab.title}`}
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NIL Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="nil-examples-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="nil-examples-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              NIL Partnership Examples
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Brand Integration</h3>
              <p className="text-gray-700 mb-6">
                Sofia has successfully partnered with leading brands to create authentic, engaging content that resonates with her audience while delivering measurable results for partners.
              </p>
              <div className="space-y-4" role="list" aria-label="NIL partnership examples">
                <div className="flex items-center" role="listitem">
                  <div className="w-3 h-3 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700">Authentic product endorsements</span>
                </div>
                <div className="flex items-center" role="listitem">
                  <div className="w-3 h-3 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700">Social media campaigns</span>
                </div>
                <div className="flex items-center" role="listitem">
                  <div className="w-3 h-3 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700">Event appearances</span>
                </div>
                <div className="flex items-center" role="listitem">
                  <div className="w-3 h-3 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700">Content creation</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">Partnership Benefits</h3>
              <div className="space-y-4" role="list" aria-label="Partnership benefits">
                <div className="flex items-start" role="listitem">
                  <svg className="w-5 h-5 text-[#fe019a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Access to engaged, diverse audience</span>
                </div>
                <div className="flex items-start" role="listitem">
                  <svg className="w-5 h-5 text-[#fe019a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Authentic brand alignment</span>
                </div>
                <div className="flex items-start" role="listitem">
                  <svg className="w-5 h-5 text-[#fe019a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Measurable ROI and results</span>
                </div>
                <div className="flex items-start" role="listitem">
                  <svg className="w-5 h-5 text-[#fe019a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Long-term partnership potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#fe019a] to-[#d80182] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to explore collaboration opportunities? I'm excited to hear about your vision and how we can work together to create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#fe019a] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#fe019a]"
              aria-label="Get in touch about collaboration"
            >
              Get in Touch
            </a>
            <a
              href="https://calendly.com/sofiachepenik/collaboration"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#fe019a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#fe019a]"
              aria-label="Schedule a collaboration call"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 