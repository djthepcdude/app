import { ShoppingBag, Bell, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { EmailSignup } from '../components/EmailSignup';

const merchItems = [
  {
    id: 1,
    name: 'Klick Up Hoodie',
    price: '$65',
    category: 'Hoodies',
    status: 'Coming Soon',
  },
  {
    id: 2,
    name: 'Central District Tee',
    price: '$35',
    category: 'T-Shirts',
    status: 'Coming Soon',
  },
  {
    id: 3,
    name: 'Seattle Green Cap',
    price: '$30',
    category: 'Hats',
    status: 'Coming Soon',
  },
  {
    id: 4,
    name: 'East Union Tee',
    price: '$35',
    category: 'T-Shirts',
    status: 'Coming Soon',
  },
  {
    id: 5,
    name: 'Mafi D Logo Hoodie',
    price: '$65',
    category: 'Hoodies',
    status: 'Coming Soon',
  },
  {
    id: 6,
    name: 'Street Edition Cap',
    price: '$30',
    category: 'Hats',
    status: 'Coming Soon',
  },
];

const Shop = () => {
  return (
    <div className="pt-20" data-testid="shop-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            MERCH
          </p>
          <h1 className="section-title mb-6">SHOP</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Official Mafi D merchandise. Rep the Klick.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="section bg-[#0A0A0A] py-12" data-testid="shop-banner">
        <div className="max-w-7xl mx-auto">
          <div className="card-dark p-8 text-center border-emerald-500/20">
            <Bell className="mx-auto text-emerald-400 mb-4" size={40} />
            <h2 className="text-white font-semibold text-2xl mb-2">
              Merch Dropping Soon
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Be the first to know when official Mafi D merch drops. Sign up for exclusive early access.
            </p>
            <EmailSignup variant="inline" />
          </div>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="section bg-[#050505]" data-testid="merch-grid">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">Preview Collection</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchItems.map((item) => (
              <div 
                key={item.id}
                className="merch-card"
                data-testid={`merch-item-${item.id}`}
              >
                <div className="merch-image">
                  <ShoppingBag size={48} className="text-white/10" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-emerald-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">{item.price}</p>
                    <span className="text-xs px-2 py-1 bg-white/5 text-gray-500 rounded">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="section bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
            <ShoppingBag size={40} className="text-emerald-400" />
          </div>
          <h2 className="font-heading text-3xl text-white mb-6">STAY TUNED</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Official merch is on the way. Quality pieces that represent Seattle hip-hop and the Central District.
          </p>
          <Button 
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-testid="notify-btn"
          >
            Get Notified
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
