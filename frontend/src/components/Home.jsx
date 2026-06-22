// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const topCategories = [
  { name: "Fashion",   icon: "👗" },
  { name: "Mobiles",   icon: "📱" },
  { name: "Laptops",   icon: "💻" },
  { name: "Home",      icon: "🏠" },
  { name: "Beauty",    icon: "💄" },
  { name: "Sports",    icon: "⚽" },
  { name: "Books",     icon: "📚" },
  { name: "Gaming",    icon: "🎮" },
  { name: "Footwear",  icon: "👟" },
  { name: "Travel",    icon: "✈️" },
];

const offers = [
  { icon: "👗", title: "Fashion Sale",    sub: "Up to 60% off on clothing & accessories", bg: "bg-pink-100",   text: "text-pink-900"   },
  { icon: "📱", title: "Electronics Fest",sub: "Best deals on mobiles & gadgets",          bg: "bg-yellow-100", text: "text-yellow-900" },
  { icon: "🏠", title: "Home Refresh",    sub: "Furniture & appliances at low prices",     bg: "bg-purple-100", text: "text-purple-900" },
  { icon: "📚", title: "Books & More",    sub: "Flat 40% off on bestsellers",              bg: "bg-green-100",  text: "text-green-900"  },
];

const whyUs = [
  { icon: "🚚", title: "Fast delivery",    sub: "Get your order delivered within 2–4 business days anywhere in India." },
  { icon: "🔄", title: "Easy returns",     sub: "Not happy? Return within 7 days, no questions asked." },
  { icon: "🔒", title: "Secure payments",  sub: "100% safe checkout with UPI, cards, and net banking." },
  { icon: "💰", title: "Best prices",      sub: "We compare thousands of sellers so you always get the best deal." },
];

const testimonials = [
  { stars: 5, text: '"Amazing experience! Got my order in 2 days and the quality was great."',     name: "Rohit S., Delhi"     },
  { stars: 5, text: '"Best prices I found anywhere online. Will definitely shop again!"',           name: "Priya M., Mumbai"    },
  { stars: 4, text: '"Easy return process and fast refund. Very trustworthy platform."',            name: "Arjun K., Bangalore" },
];

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

      {/* Hero */}
      <section className="bg-pink-100 rounded-2xl px-8 py-16 text-center">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-4 py-1 rounded-full border border-yellow-400 mb-5">
          ✦ Trusted by 10 lakh+ shoppers
        </span>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Everything you need,<br />
          <span className="text-yellow-600">delivered to your door</span>
        </h1>
        <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Shop from 30+ categories at the best prices. Fast delivery, easy returns, and great deals every day.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/product-list"
            className="bg-yellow-600 text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-yellow-700 transition">
            🛒 Shop Now
          </Link>
          <Link to="/product-list"
            className="border-2 border-yellow-600 text-yellow-600 px-7 py-3 rounded-lg text-sm font-medium hover:bg-yellow-50 transition">
            📂 Browse Categories
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4">
        {[
          { num: "10L+", label: "Happy customers" },
          { num: "30+",  label: "Categories"      },
          { num: "1L+",  label: "Products listed" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl py-5 text-center">
            <p className="text-2xl font-semibold text-yellow-600 mb-1">{s.num}</p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Top Categories */}
      <section>
        <h2 className="text-base font-medium text-gray-800 mb-4">Top categories</h2>
        <div className="grid grid-cols-5 gap-3">
          {topCategories.map((cat) => (
            <Link to={`/product-list?category=${cat.name}`} key={cat.name}
              className="bg-white border border-gray-200 rounded-xl py-3 px-2 text-center hover:border-yellow-500 transition">
              <div className="text-2xl mb-1">{cat.icon}</div>
              <p className="text-[11px] text-gray-500">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section>
        <h2 className="text-base font-medium text-gray-800 mb-4">Today's offers</h2>
        <div className="grid grid-cols-2 gap-4">
          {offers.map((o) => (
            <div key={o.title} className={`${o.bg} rounded-xl p-5`}>
              <div className="text-2xl mb-2">{o.icon}</div>
              <h3 className={`${o.text} font-medium text-sm mb-1`}>{o.title}</h3>
              <p className={`${o.text} text-xs opacity-70`}>{o.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section>
        <h2 className="text-base font-medium text-gray-800 mb-4">Why shop with us?</h2>
        <div className="grid grid-cols-2 gap-4">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-3">
              <span className="text-2xl">{w.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-800 mb-1">{w.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{w.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-base font-medium text-gray-800 mb-4">What our customers say</h2>
        <div className="grid grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-yellow-500 text-xs mb-2">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.text}</p>
              <p className="text-xs font-medium text-gray-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-stone-900 rounded-2xl px-8 py-7 flex items-center justify-between">
        <div>
          <h3 className="text-yellow-100 font-medium text-base mb-1">Get 20% off your first order</h3>
          <p className="text-stone-400 text-sm">
            Use code <span className="text-yellow-400 font-semibold">VECTOR20</span> at checkout
          </p>
        </div>
        <button className="bg-yellow-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-yellow-700 transition">
          Claim Offer
        </button>
      </section>

    </div>
  );
};

export default Home;