'use client';

import { useState } from 'react';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    // FormSubmit will handle the submission
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/sofiachepenik',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@sofiachepenik',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@sofiachepenik',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Sign-up */}
          <section aria-labelledby="newsletter-heading">
            <h3 id="newsletter-heading" className="text-xl font-semibold text-black mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to my newsletter for updates, insights, and exclusive content.
            </p>
            <form 
              action="https://formsubmit.co/sofiacchepenik@gmail.com" 
              method="POST"
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Newsletter subscription form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:border-transparent"
                required
                aria-label="Your email address"
              />
              
              {/* FormSubmit Enhancements */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New newsletter subscription from SofiaChepenik.com" />
              <input type="hidden" name="_next" value="https://sofiachepenik.com/thank-you" />
              
              <button
                type="submit"
                className="px-6 py-3 bg-[#fe019a] text-white font-medium rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-600 mt-2 text-sm" role="status" aria-live="polite">
                Thank you for subscribing! Please check your email to confirm.
              </p>
            )}
          </section>

          {/* Social Media */}
          <section aria-labelledby="social-heading">
            <h3 id="social-heading" className="text-xl font-semibold text-black mb-4">
              Follow Me
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with me on social media for daily inspiration and behind-the-scenes content.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-[#fe019a] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label={`Follow Sofia on ${social.name}`}
                  role="listitem"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="font-cursive text-2xl font-semibold text-black">Sofia Chepenik</div>
              <p className="text-gray-600 text-sm mt-1">© {currentYear} All rights reserved.</p>
            </div>
            <nav className="flex space-x-6 text-sm text-gray-600" aria-label="Footer navigation">
              <a 
                href="/privacy" 
                className="hover:text-[#fe019a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="hover:text-[#fe019a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-1"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 