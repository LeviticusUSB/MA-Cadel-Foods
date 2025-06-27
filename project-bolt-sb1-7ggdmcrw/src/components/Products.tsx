import React from 'react';
import { Star } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      title: 'Artisan Pastries',
      items: [
        {
          name: 'Classic Croissants',
          description: 'Buttery, flaky perfection with a golden exterior',
          price: '$3.50',
          image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'Pain au Chocolat',
          description: 'Rich dark chocolate wrapped in delicate pastry',
          price: '$4.25',
          image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'Almond Danish',
          description: 'Sweet almond filling with a hint of vanilla',
          price: '$4.75',
          image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=500'
        }
      ]
    },
    {
      title: 'Signature Cakes',
      items: [
        {
          name: 'Chocolate Ganache Cake',
          description: 'Decadent layers of chocolate with silky ganache',
          price: '$32.00',
          image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'Vanilla Bean Cheesecake',
          description: 'Creamy New York style with Madagascar vanilla',
          price: '$28.00',
          image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'Red Velvet Layer Cake',
          description: 'Classic red velvet with cream cheese frosting',
          price: '$35.00',
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500'
        }
      ]
    },
    {
      title: 'Fresh Breads',
      items: [
        {
          name: 'Artisan Sourdough',
          description: 'Traditional sourdough with a perfect crust',
          price: '$6.50',
          image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'Multigrain Loaf',
          description: 'Hearty blend of seeds and whole grains',
          price: '$7.25',
          image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=500'
        },
        {
          name: 'French Baguette',
          description: 'Crispy exterior with soft, airy interior',
          price: '$4.00',
          image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=500'
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of artisan pastries, signature cakes, 
            and fresh breads, all made with the finest ingredients.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <span className="text-2xl font-bold text-amber-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;