import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About Sofia Chepenik',
  description: 'Learn about Sofia Chepenik\'s journey from high school to collegiate leadership, her mission to empower others, and her commitment to authentic transformation.',
  openGraph: {
    title: 'About Sofia Chepenik',
    description: 'Learn about Sofia Chepenik\'s journey from high school to collegiate leadership, her mission to empower others, and her commitment to authentic transformation.',
  },
};

export default function AboutPage() {
  const bioSections = [
    {
      title: "High School Journey",
      content: "My journey began in high school where I discovered my passion for leadership and personal development. I learned early on that success isn't just about talent—it's about mindset, discipline, and the willingness to push beyond your comfort zone."
    },
    {
      title: "Collegiate Leadership",
      content: "At the collegiate level, I took on leadership roles that challenged me to grow both personally and professionally. These experiences taught me the importance of authentic leadership and the power of leading by example."
    },
    {
      title: "Building Influence",
      content: "Through consistent effort and genuine connection, I built a platform that allows me to reach and inspire others. My influence comes from sharing real experiences, vulnerabilities, and the lessons learned along the way."
    },
    {
      title: "Mindset Transformation",
      content: "I believe that true transformation starts from within. My approach focuses on shifting limiting beliefs, developing resilience, and creating sustainable habits that lead to lasting change."
    },
    {
      title: "Mission & Purpose",
      content: "My mission is to empower individuals to unlock their full potential and create lives they love. I'm committed to helping others build confidence, develop authentic relationships, and achieve their goals."
    },
    {
      title: "Values & Principles",
      content: "I operate from a foundation of authenticity, integrity, and genuine care for others. My coaching and collaborations are built on trust, transparency, and a commitment to real results."
    },
    {
      title: "Personal Growth",
      content: "I'm constantly learning, growing, and evolving. My own journey of self-discovery and improvement allows me to bring fresh insights and proven strategies to those I work with."
    },
    {
      title: "Professional Development",
      content: "I've invested in my own education and development to ensure I can provide the highest level of support to my clients. Continuous learning is a core value in everything I do."
    },
    {
      title: "Community Impact",
      content: "Beyond individual coaching, I'm passionate about creating positive change in communities. I believe in the ripple effect of empowered individuals making a difference in the world."
    },
    {
      title: "Future Vision",
      content: "I envision a world where more people have the tools, confidence, and support they need to create meaningful, fulfilling lives. My work is dedicated to making this vision a reality."
    },
    {
      title: "Authentic Connection",
      content: "I believe in the power of real, human connection. My relationships with clients, collaborators, and community members are built on mutual respect, understanding, and genuine care."
    },
    {
      title: "Join the Journey",
      content: "Whether you're looking for coaching, collaboration, or simply inspiration, I invite you to join me on this journey of growth and transformation. Together, we can create something extraordinary."
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
      <section
        className="relative min-h-[60vh] md:min-h-screen flex items-start justify-center pt-8 md:pt-16 px-4 sm:px-6 lg:px-8 bg-black"
        role="banner"
        style={{ minHeight: '60vh' }}
      >
        <img
          src="/IMG_9468 2.JPG"
          alt="Sofia Chepenik"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ minHeight: '60vh' }}
          loading="eager"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/80 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center text-white pt-4 pb-8 md:pt-8 md:pb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cursive drop-shadow-lg">
            About Sofia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Empowering others to unlock their potential and create authentic, meaningful lives through mindset transformation and strategic guidance.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Bio Sections */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="bio-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="bio-heading" className="sr-only">Biography sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bioSections.map((section, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                aria-labelledby={`section-${index}-heading`}
              >
                <h3 id={`section-${index}-heading`} className="text-2xl font-bold text-black mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Authenticity</h3>
              <p className="text-gray-600">
                I believe in being genuine, transparent, and true to myself in all interactions and relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Growth</h3>
              <p className="text-gray-600">
                I'm committed to continuous learning, personal development, and helping others grow beyond their limitations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fe019a] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Connection</h3>
              <p className="text-gray-600">
                I value meaningful relationships and believe in the power of authentic human connection to create positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to unlock your potential and create the life you've always dreamed of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/coaching"
              className="px-8 py-4 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
              aria-label="Explore coaching programs"
            >
              Explore Coaching
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-[#fe019a] text-[#fe019a] font-semibold rounded-lg hover:bg-[#fe019a] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
              aria-label="Get in touch"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 