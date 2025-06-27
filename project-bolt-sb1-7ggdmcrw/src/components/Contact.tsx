import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Dansoman-Market, Accra, Ghana']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+233 (53) 916-8228']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['cadelpastriesandmore@gmail.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sun: 6:00 AM - 12:00 AM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             Where Every Bite Tells a Story of Quality, 
            Taste, and Tradition! <br>
            Let's Drink, Let's Eat, Let's Vibe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">
                {info.title}
              </h4>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-300 mb-1">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">Find Our Bakery</h3>
            <div className="bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <p className="text-xl text-gray-300 mb-2">Interactive Map</p>
                <p className="text-gray-400">
                  Located in the heart of Bakery District
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;