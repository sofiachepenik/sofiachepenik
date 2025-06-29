import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Shop - Sofia Chepenik',
  description: 'Discover exclusive products, coaching programs, and resources designed to support your personal growth and transformation journey.',
  openGraph: {
    title: 'Shop - Sofia Chepenik',
    description: 'Discover exclusive products, coaching programs, and resources designed to support your personal growth.',
  },
};

export default function ShopPage() {
  const products = [
    {
      name: "Gait Whip 2",
      category: "Equipment",
      price: "$89.99",
      description: "Premium lacrosse stick designed for optimal performance and control.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: true
    },
    {
      name: "Draw-M",
      category: "Equipment",
      price: "$129.99",
      description: "Professional-grade draw control tool for mastering face-offs.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: true
    },
    {
      name: "Glory 2 Goggles",
      category: "Equipment",
      price: "$79.99",
      description: "High-performance protective eyewear with superior visibility.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: true
    },
    {
      name: "Mindset Mastery Workbook",
      category: "Digital",
      price: "$29.99",
      description: "Comprehensive digital workbook for transforming your mindset and habits.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: true
    },
    {
      name: "Leadership Excellence Course",
      category: "Digital",
      price: "$197.00",
      description: "Complete online course on authentic leadership and team building.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: true
    },
    {
      name: "Sofia Chepenik Jersey",
      category: "Apparel",
      price: "$59.99",
      description: "Official replica jersey featuring Sofia's signature and number.",
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70",
      inStock: false
    }
  ];

  const categories = ["All", "Equipment", "Digital", "Apparel"];

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
            Shop
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover exclusive products, coaching programs, and resources designed to support your personal growth and transformation journey.
          </p>
          <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="main-content" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="products-heading" className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Featured Products
          </h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4" role="tablist" aria-label="Product categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white border-2 border-[#fe019a] text-[#fe019a] font-semibold rounded-lg hover:bg-[#fe019a] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  role="tab"
                  aria-selected={category === "All"}
                  aria-label={`Filter by ${category} category`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Product list">
            {products.map((product, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                role="listitem"
                aria-labelledby={`product-${index}-name`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} product image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#fe019a] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`product-${index}-name`} className="text-xl font-bold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#fe019a]">{product.price}</span>
                    <button 
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2 ${
                        product.inStock 
                          ? 'bg-[#fe019a] text-white hover:bg-[#d80182]' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="collections-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="collections-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Collections
            </h2>
            <div className="w-24 h-1 bg-[#fe019a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Equipment collection - Premium lacrosse gear"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Premium Equipment</h3>
                <p className="text-gray-600 mb-6">
                  Professional-grade lacrosse equipment designed for optimal performance and durability.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Browse premium equipment collection"
                >
                  Shop Equipment
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-beach-free-image-after-sunset-sky-free-photo.jpeg?w=2210&quality=70"
                  alt="Digital resources collection - Mindset and leadership courses"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Digital Resources</h3>
                <p className="text-gray-600 mb-6">
                  Transform your mindset and leadership skills with our comprehensive digital courses and workbooks.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-[#fe019a] text-white font-semibold rounded-lg hover:bg-[#d80182] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#fe019a] focus:ring-offset-2"
                  aria-label="Browse digital resources collection"
                >
                  Shop Digital
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
            Be the first to know about new products, exclusive offers, and special releases.
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