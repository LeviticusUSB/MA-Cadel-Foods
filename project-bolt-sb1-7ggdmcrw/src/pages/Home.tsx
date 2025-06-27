import React from 'react';
import { ArrowRight, Star, Heart, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every pastry is crafted with care and attention to detail, using traditional techniques passed down through generations.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients to ensure exceptional taste and quality in every bite.'
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: 'A family-owned business with over 25 years of experience in creating memorable culinary experiences.'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All our products are baked fresh daily to guarantee the best flavor and texture for our customers.'
    }
  ];

  const featuredProducts = [
    {
      name: 'Classic Croissants',
      description: 'Buttery, flaky perfection with a golden exterior',
      price: '$3.50',
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'pastries'
    },
    {
      name: 'Chocolate Ganache Cake',
      description: 'Decadent layers of chocolate with silky ganache',
      price: '$32.00',
      image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'cakes'
    },
    {
      name: 'Artisan Sourdough',
      description: 'Traditional sourdough with a perfect crust',
      price: '$6.50',
      image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'breads'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-gold-400 fill-current" />
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-gold-400">MA Cadel</span>
            <br />
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Your home for healthy local and continental dishes, top pastries, and convenient meal subscription offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pastries"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              View Our Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Cadel, we believe that great food brings people together. Our journey began with a simple 
              passion for creating exceptional pastries and has grown into a beloved destination for food lovers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/1028537/pexels-photo-1028537.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cadel bakery interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Tradition Meets Innovation
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our master bakers combine time-honored techniques with modern culinary innovation 
                to create pastries that are both familiar and surprising. From classic croissants 
                to contemporary flavor combinations, we're constantly pushing the boundaries of taste.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every morning, our team arrives before dawn to begin the careful process of mixing, 
                shaping, and baking that fills our shop with irresistible aromas and brings joy to our community.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gold-200">
                  <feature.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Delights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular items, carefully selected to showcase the best of what Cadel has to offer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                    <Star className="h-4 w-4 text-gold-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-black">
                      {product.name}
                    </h4>
                    <span className="text-2xl font-bold text-gold-600">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link 
                    to={`/${product.category}`}
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 block text-center"
                  >
                    View Category
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;