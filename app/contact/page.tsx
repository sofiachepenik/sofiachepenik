import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact Sofia Chepenik',
  description: 'Get in touch with Sofia Chepenik for coaching inquiries, speaking engagements, collaborations, or general questions. Start your transformation journey today.',
  openGraph: {
    title: 'Contact Sofia Chepenik',
    description: 'Get in touch with Sofia Chepenik for coaching inquiries, speaking engagements, collaborations, or general questions.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 font-cursive">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your journey? Have a question? Want to collaborate? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Send a Message</h2>
              <form 
                action="https://formsubmit.co/sofiacchepenik@gmail.com" 
                method="POST"
                className="space-y-6"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                      aria-describedby="firstName-error"
                    />
                    <div id="firstName-error" className="sr-only" role="alert"></div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                      aria-describedby="lastName-error"
                    />
                    <div id="lastName-error" className="sr-only" role="alert"></div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className="sr-only" role="alert"></div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                    aria-describedby="subject-error"
                  >
                    <option value="">Select a subject</option>
                    <option value="coaching">Coaching Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media Request</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <div id="subject-error" className="sr-only" role="alert"></div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                    placeholder="Tell me more about what you're looking for..."
                    aria-describedby="message-error"
                  ></textarea>
                  <div id="message-error" className="sr-only" role="alert"></div>
                </div>

                {/* FormSubmit Enhancements */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from SofiaChepenik.com" />
                <input type="hidden" name="_next" value="https://sofiachepenik.com/thank-you" />
                <input type="hidden" name="_template" value="table" />

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#fe019a] text-white font-bold text-lg rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#fe019a] rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Email</h3>
                      <a href="mailto:hello@sofiachepenik.com" className="text-gray-600 hover:text-[#fe019a] transition-colors duration-200">
                        hello@sofiachepenik.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#fe019a] rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Location</h3>
                      <p className="text-gray-600">Tampa, Florida</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#fe019a] rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Response Time</h3>
                      <p className="text-gray-600">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-[#fe019a] to-[#d80182] text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                <p className="text-white/90 mb-6">
                  Subscribe to my newsletter for updates, exclusive content, and behind-the-scenes insights.
                </p>
                <form 
                  action="https://formsubmit.co/sofiacchepenik@gmail.com" 
                  method="POST"
                  className="space-y-4"
                  aria-label="Newsletter subscription form"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
                    required
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
                    required
                    aria-label="Your email address"
                  />
                  
                  {/* FormSubmit Enhancements */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New newsletter subscription from SofiaChepenik.com" />
                  <input type="hidden" name="_next" value="https://sofiachepenik.com/thank-you" />
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-white text-[#fe019a] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#fe019a]"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-black mb-6">Follow Sofia</h2>
                <p className="text-gray-600 mb-6">
                  Connect with me on social media for daily inspiration, behind-the-scenes content, and real-time updates.
                </p>
                <div className="grid grid-cols-3 gap-4" role="list" aria-label="Social media links">
                  <a
                    href="https://instagram.com/sofiachepenik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-[#fe019a] hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                    aria-label="Follow Sofia on Instagram"
                    role="listitem"
                  >
                    <svg className="w-8 h-8 mb-2 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://tiktok.com/@sofiachepenik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-[#fe019a] hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                    aria-label="Follow Sofia on TikTok"
                    role="listitem"
                  >
                    <svg className="w-8 h-8 mb-2 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <span className="text-sm font-medium">TikTok</span>
                  </a>
                  <a
                    href="https://youtube.com/@sofiachepenik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-[#fe019a] hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                    aria-label="Follow Sofia on YouTube"
                    role="listitem"
                  >
                    <svg className="w-8 h-8 mb-2 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm font-medium">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-black mb-4">How quickly will I receive a response?</h3>
              <p className="text-gray-700">
                I typically respond to all inquiries within 24-48 hours. For urgent matters, please indicate this in your message.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-black mb-4">What information should I include in my message?</h3>
              <p className="text-gray-700">
                Please include your name, contact information, the purpose of your inquiry, and any relevant details about your project or request.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-black mb-4">Do you offer virtual consultations?</h3>
              <p className="text-gray-700">
                Yes! I offer virtual consultations via Zoom, Teams, or other video platforms. This allows me to connect with clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 