import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Coaching Programs',
  description: 'Transform your mindset and unlock your potential with Sofia Chepenik\'s personalized coaching programs. Choose from individual sessions, group programs, or intensive workshops.',
  openGraph: {
    title: 'Coaching Programs - Sofia Chepenik',
    description: 'Transform your mindset and unlock your potential with personalized coaching programs.',
  },
};

export default function CoachingPage() {
  const programs = [
    {
      name: "Mindset Mastery",
      price: "$497",
      duration: "8 weeks",
      description: "Transform your limiting beliefs and develop a growth mindset that propels you toward your goals.",
      features: [
        "Weekly 1-on-1 coaching sessions",
        "Personalized mindset assessment",
        "Daily accountability check-ins",
        "Access to exclusive resources",
        "Lifetime access to course materials",
        "Private community access"
      ],
      cta: "Book Discovery Call",
      ctaLink: "https://calendly.com/sofiachepenik/mindset-mastery"
    },
    {
      name: "Business Breakthrough",
      price: "$997",
      duration: "12 weeks",
      description: "Scale your business with proven strategies and build authentic relationships that drive growth.",
      features: [
        "Bi-weekly strategy sessions",
        "Business model optimization",
        "Marketing and branding guidance",
        "Networking and partnership strategies",
        "Revenue optimization techniques",
        "Ongoing support and accountability"
      ],
      cta: "Book Discovery Call",
      ctaLink: "https://calendly.com/sofiachepenik/business-breakthrough"
    },
    {
      name: "Life Transformation",
      price: "$1,497",
      duration: "16 weeks",
      description: "Complete life transformation program covering mindset, relationships, health, and purpose.",
      features: [
        "Weekly comprehensive coaching sessions",
        "360-degree life assessment",
        "Goal setting and achievement framework",
        "Relationship and communication skills",
        "Health and wellness optimization",
        "Purpose and vision clarity"
      ],
      cta: "Book Discovery Call",
      ctaLink: "https://calendly.com/sofiachepenik/life-transformation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content: "Sofia's coaching completely transformed my mindset. I went from doubting myself to confidently launching my business. Her approach is both practical and inspiring.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Executive",
      content: "Working with Sofia helped me break through limiting beliefs that were holding me back in my career. Her insights and strategies are game-changing.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "Sofia's guidance helped me find my purpose and develop the confidence to pursue my dreams. Her authentic approach made all the difference.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I know which coaching program is right for me?",
      answer: "I offer a complimentary discovery call where we'll discuss your goals, challenges, and aspirations. This helps me recommend the program that best fits your needs and timeline."
    },
    {
      question: "What if I'm not satisfied with the coaching?",
      answer: "I'm committed to your success. If you're not completely satisfied within the first two weeks, I offer a full refund. Your transformation is my priority."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients begin to see positive changes within the first few weeks. However, lasting transformation requires commitment and consistent application of the strategies we work on together."
    },
    {
      question: "Can I work with you if I'm outside the US?",
      answer: "Absolutely! I work with clients worldwide through video calls. Time zone differences are easily accommodated, and all sessions are recorded for your convenience."
    },
    {
      question: "What makes your coaching approach different?",
      answer: "My approach combines practical strategies with deep mindset work. I focus on authentic transformation rather than quick fixes, ensuring lasting change that aligns with your true self."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, I offer flexible payment plans for all programs. We can discuss options during your discovery call to find what works best for your situation."
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
            Coaching Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your mindset, unlock your potential, and create lasting change with personalized coaching designed for your unique journey.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="programs-heading" className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Choose Your Transformation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                aria-labelledby={`program-${index}-heading`}
              >
                <div className="p-8">
                  <h3 id={`program-${index}-heading`} className="text-2xl font-bold text-black mb-2">
                    {program.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-[#fe019a]">{program.price}</span>
                    <span className="text-gray-600 ml-2">/ {program.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8" role="list" aria-label={`${program.name} features`}>
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start" role="listitem">
                        <svg className="w-5 h-5 text-[#fe019a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={program.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg text-center hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                    aria-label={`Book discovery call for ${program.name} program`}
                  >
                    {program.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              What My Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <blockquote 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                aria-labelledby={`testimonial-${index}-author`}
              >
                <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <footer>
                  <cite id={`testimonial-${index}-author`} className="not-italic">
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                aria-labelledby={`faq-${index}-question`}
              >
                <summary 
                  className="cursor-pointer font-semibold text-black text-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 rounded px-2"
                  id={`faq-${index}-question`}
                >
                  {faq.question}
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#fe019a] to-[#d80182] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's work together to unlock your potential and create the life you've always dreamed of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/sofiachepenik/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#fe019a] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#fe019a]"
              aria-label="Book a discovery call"
            >
              Book Discovery Call
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#fe019a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#fe019a]"
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