import React from 'react';

const dishes = [
  {
    name: 'Truffle-infused Wagyu Delight',
    price: '$25.00',
    description: 'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'
  },
  {
    name: 'Ocean Symphony Risotto',
    price: '$12.00',
    description: 'Creamy saffron-infused risotto with fresh lobster, scallops, and peas, finished with parmesan zest.'
  },
  {
    name: 'Golden Crispy Duck Confit',
    price: '$30.00',
    description: 'Sautéed duck leg confit served with seasonal truffle sauce, paired with buttery roasted potatoes.'
  },
  {
    name: 'Velvet Chocolate Lava Cake',
    price: '$10.00',
    description: 'Decadent chocolate lava cake served with vanilla ice cream and fresh berries.'
  },
];

function SignatureMenu() {
  return (
    <section className="bg-brown-700 text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Signature Menu</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {dishes.map((dish, idx) => (
          <div key={idx} className="bg-white text-black p-4 rounded shadow hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
              <span>Image</span>
            </div>
            <h3 className="font-bold text-lg">{dish.name}</h3>
            <p className="text-sm my-2">{dish.description}</p>
            <p className="font-bold">{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SignatureMenu;
