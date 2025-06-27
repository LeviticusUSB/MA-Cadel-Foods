import React from 'react';
import { Star } from 'lucide-react';

const Cakes = () => {
  const cakes = [
    {
      name: 'Chocolate Ganache Cake',
      description: 'Decadent layers of chocolate sponge with silky smooth ganache',
      price: '$32.00',
      image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Vanilla Bean Cheesecake',
      description: 'Creamy New York style cheesecake with Madagascar vanilla',
      price: '$28.00',
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Red Velvet Layer Cake',
      description: 'Classic red velvet with cream cheese frosting and elegant finish',
      price: '$35.00',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Lemon Drizzle Cake',
      description: 'Moist lemon sponge with tangy lemon glaze',
      price: '$26.00',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Black Forest Cake',
      description: 'Chocolate sponge with cherries, cream, and chocolate shavings',
      price: '$38.00',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Tiramisu Cake',
      description: 'Coffee-soaked layers with mascarpone cream and cocoa dust',
      price: '$34.00',
      image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Signature Cakes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrate life's special moments with our collection of handcrafted cakes. 
            Each cake is a masterpiece of flavor and artistry, perfect for any occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                  <Star className="h-4 w-4 text-gold-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-black">
                    {cake.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-600">
                    {cake.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {cake.description}
                </p>
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cakes;