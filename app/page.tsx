import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transform your mindset, unlock your potential, and create lasting change with Sofia Chepenik. Professional coaching, speaking engagements, and authentic leadership.',
  openGraph: {
    title: 'Sofia Chepenik - Coach, Collaborator & Creator',
    description: 'Transform your mindset, unlock your potential, and create lasting change with Sofia Chepenik.',
  },
};

export default function Home() {
  const sections = [
    { name: 'Coaching', href: '/coaching', description: 'Transform your mindset' },
    { name: 'Collaborate', href: '/collaborate', description: 'Work together' },
    { name: 'Shop', href: '/shop', description: 'Browse products' },
    { name: 'Media', href: '/media', description: 'Watch & listen' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
    { name: 'About Me', href: '/about', description: 'Learn more' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Full-width Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-600/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
            alt="Hero background - Beautiful beach sunset scene"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cursive">
            Become Your Best Self
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Mindset, Habits and Implementation
          </p>
          <a 
            href="#newsletter"
            className="inline-block px-8 py-4 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Subscribe to newsletter"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>

      {/* Six Image Tiles Section */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="sections-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="sections-heading" className="sr-only">Main sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <a
                key={section.name}
                href={section.href}
                className="group block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                aria-label={`Navigate to ${section.name} page`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                    alt={`${section.name} section - Beautiful beach sunset scene`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#fe019a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Learn More</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#fe019a] transition-colors duration-200">
                    {section.name}
                  </h3>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">About Me</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate coach and collaborator dedicated to helping people unlock their potential and build authentic relationships. With years of experience in personal development and business strategy, I've guided countless individuals toward their goals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My approach combines practical wisdom with intuitive guidance, creating a unique blend of strategy and soul. Whether you're looking to transform your personal life or scale your business, I'm here to support your journey.
              </p>
              <div className="flex flex-wrap gap-4" role="list" aria-label="Areas of expertise">
                <span className="px-4 py-2 bg-[#fe019a] text-white rounded-full text-sm font-medium" role="listitem">Life Coach</span>
                <span className="px-4 py-2 bg-[#fe019a] text-white rounded-full text-sm font-medium" role="listitem">Business Strategist</span>
                <span className="px-4 py-2 bg-[#fe019a] text-white rounded-full text-sm font-medium" role="listitem">Speaker</span>
              </div>
            </div>
            <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                alt="Sofia Chepenik profile image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section id="coaching" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="coaching-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="coaching-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Coaching</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#fe019a] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Personal Development</h3>
              <p className="text-gray-600 mb-6">
                Discover your authentic self and build confidence through personalized coaching sessions designed to unlock your potential.
              </p>
              <a href="/contact" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1">Learn More →</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#fe019a] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Business Strategy</h3>
              <p className="text-gray-600 mb-6">
                Scale your business with proven strategies and actionable insights tailored to your unique goals and market position.
              </p>
              <a href="/contact" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1">Learn More →</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#fe019a] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Relationship Building</h3>
              <p className="text-gray-600 mb-6">
                Master the art of authentic connections and build meaningful relationships in both personal and professional spheres.
              </p>
              <a href="/contact" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="collaborate-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="collaborate-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Collaborate</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Let's Create Something Amazing Together</h3>
              <p className="text-lg text-gray-700 mb-8">
                I'm always open to exciting collaborations, speaking engagements, and partnerships that align with my mission of empowering others. Whether you're looking for a keynote speaker, podcast guest, or strategic partner, let's explore how we can work together.
              </p>
              <div className="space-y-4" role="list" aria-label="Collaboration opportunities">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700" role="listitem">Speaking Engagements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700" role="listitem">Podcast Appearances</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700" role="listitem">Strategic Partnerships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#fe019a] rounded-full mr-4" role="presentation"></div>
                  <span className="text-gray-700" role="listitem">Content Collaborations</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-black mb-4">Get in Touch</h4>
              <p className="text-gray-600 mb-6">
                Ready to collaborate? Send me a message and let's discuss how we can create something impactful together.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                aria-label="Start a conversation about collaboration"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="shop-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="shop-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Shop</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Digital Workbook product image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Digital Workbook</h3>
                <p className="text-gray-600 mb-4">Transform your mindset with this comprehensive digital workbook.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#fe019a]">$29</span>
                  <button className="px-4 py-2 bg-[#fe019a] text-white rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2" aria-label="Add Digital Workbook to cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Online Course product image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Online Course</h3>
                <p className="text-gray-600 mb-4">Master the art of authentic leadership with this comprehensive course.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#fe019a]">$197</span>
                  <button className="px-4 py-2 bg-[#fe019a] text-white rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2" aria-label="Add Online Course to cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Coaching Package product image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Coaching Package</h3>
                <p className="text-gray-600 mb-4">Personalized 1-on-1 coaching sessions to accelerate your growth.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#fe019a]">$497</span>
                  <button className="px-4 py-2 bg-[#fe019a] text-white rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2" aria-label="Add Coaching Package to cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="media-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="media-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Media</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Building Authentic Connections video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">Building Authentic Connections</h3>
                <p className="text-gray-600 mb-4">Learn how to create meaningful relationships in today's digital world.</p>
                <a href="#" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1" aria-label="Watch Building Authentic Connections video">Watch Now →</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Mindset Mastery video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">Mindset Mastery</h3>
                <p className="text-gray-600 mb-4">Transform your thinking and unlock your full potential.</p>
                <a href="#" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1" aria-label="Watch Mindset Mastery video">Watch Now →</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Business Growth Strategies video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">Business Growth Strategies</h3>
                <p className="text-gray-600 mb-4">Proven strategies to scale your business authentically.</p>
                <a href="#" className="text-[#fe019a] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1" aria-label="Watch Business Growth Strategies video">Watch Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">Contact</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form 
              action="https://formsubmit.co/sofiacchepenik@gmail.com" 
              method="POST"
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                    required
                    aria-describedby="firstName-error"
                  />
                  <div id="firstName-error" className="sr-only" role="alert"></div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                    required
                    aria-describedby="lastName-error"
                  />
                  <div id="lastName-error" className="sr-only" role="alert"></div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                  required
                  aria-describedby="email-error"
                />
                <div id="email-error" className="sr-only" role="alert"></div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">Select a subject</option>
                  <option value="coaching">Coaching Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="general">General Inquiry</option>
                </select>
                <div id="subject-error" className="sr-only" role="alert"></div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                  placeholder="Tell me more about what you're looking for..."
                  required
                  aria-describedby="message-error"
                ></textarea>
                <div id="message-error" className="sr-only" role="alert"></div>
              </div>

              {/* FormSubmit Enhancements */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from SofiaChepenik.com" />
              <input type="hidden" name="_next" value="https://sofiachepenik.com/thank-you" />
              <input type="hidden" name="_template" value="table" />

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
