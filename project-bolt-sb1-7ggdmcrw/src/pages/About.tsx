import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
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

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Story
          </h1>
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
            <h2 className="text-3xl font-bold text-black mb-6">
              Tradition Meets Innovation
            </h2>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gold-200">
                <feature.icon className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                To create exceptional baked goods that bring joy to our community while preserving 
                traditional baking methods and supporting local suppliers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to sustainability, quality, and the belief that food made with 
                passion and care can make every day a little brighter.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh baked goods"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;