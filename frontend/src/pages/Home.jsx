
import React from "react";
import "../styles/Home.css";
import Button from "../components/Button";  
import FAQ from "../components/FAQ";

// =======================
// HERO COMPONENT
// =======================
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          We provide the <br /> best food for you
        </h1>
        <p className="hero-description">
          We only use the five star quality for our menu, come and 
          get the richness in every meals we serve.
        </p>
        <div className="hero-btns">
          <Button text="Menu" className="btn-menu" to="/menu" />
          <Button text="Book a table" className="btn-book-hero" />
        </div>

        <div className="hero-socials">
          <div className="social-icon">
            <img src='src/assets/icons/Fb.png' alt='facebook' className='fb-img'/>
          </div>
          <div className="social-icon">
            <img src='src/assets/icons/Ig.png' alt='instagram'/>
          </div>
          <div className="social-icon">
            <img src='src/assets/icons/twitter.png' alt='twitter' className='ig-img'/>
          </div>
          <hr style={{width: '100px', border: '0.5px solid #eee', marginLeft: '10px'}} />
        </div>
      </div>

      <div className="hero-image-container">
        <img 
          src="/src/assets/homeAssets/HeroImage.png" 
          alt="Restaurant Interior" 
          className="main-hero-img" 
        />
      </div>
    </section>
  );
};

// =======================
// SPECIAL DISHES
// =======================
const DishCard = ({ item }) => {
  if (!item) return null;
  return (
    <div className="dish-card-v2">
      <div className="heart-badge">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white"/>
        </svg>
      </div>
      <img src={item.img} alt={item.name} className="dish-img-v2" />
      <div className="card-content-v2">
        <h3>{item.name}</h3>
        <p className="desc">Description of the item</p>
        <div className="card-footer-v2">
          <span className="price-v2">{item.price}</span>
          <span className="rating-v2">
            <span>★</span> {item.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const SpecialDishes = () => {
  const specialData = [
    { id: 1, name: "Tibs", price: "$12.00", rating: "5", img: "/src/assets/menuAssets/tibs.png" },
    { id: 2, name: "Chicken Salad", price: "$40.00", rating: "4.9", img: "/src/assets/menuAssets/chicken salad.png "},
    { id: 3, name: "Kitfo", price: "$50.00", rating: "4.9", img:"/src/assets/menuAssets/kitfo.jpg"  },
    { id: 4, name: "Fish Cotelete", price: "$50.00", rating: "4.9", img: "/src/assets/menuAssets/fish cot.png" },
  ];

  return (
    <section className="special-menu-section">
      <p className="special-subtitle">Today's Special</p>
      <h2 className="special-description">
        Special menu oftenly comes different everyday, <br />
        this is our special food for today
      </h2>
      <h1 className="special-title">Our Special Dishes</h1>

      <div className="slider-controls">
        <Button text="View More" className="btn-book-hero" to="/menu" />
      </div>

      <div className="special-cards-grid">
        {specialData.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

// =======================
// HEAD CHEF
// =======================
const HeadChef = () => {
  const qualities = [
    { id: 1, icon: "🍜", title: "Master of Cooking Techniques", desc: "Expert in global cuisines and traditional cooking methods perfected over the years." },
    { id: 2, icon: "🏆", title: "Award-Winning Culinary Achievements", desc: "Recognized in international competitions and honored for outstanding contributions to the culinary arts." },
    { id: 3, icon: "🎖️", title: "Certified Culinary Professional", desc: "Trained at prestigious institutions with multiple certifications and continuous learning in the culinary field." }
  ];

  return (
    <section className="chef-section">
      <div className="chef-content">
        <h2 className="chef-title">Meet Our Head Chef</h2>
        <p className="chef-description">
          With decades of culinary expertise and a passion for crafting unforgettable dishes, our head chef leads the kitchen with creativity, precision, and love for flavor.
        </p>
        <div className="chef-qualities">
          {qualities.map((item) => (
            <div className="quality-item" key={item.id}>
              <div className="quality-icon-circle">{item.icon}</div>
              <div className="quality-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chef-visuals-wrapper">
        <img src="/src/assets/homeAssets/HeadChef.png" alt="Head Chef" className="chef-img" />
      </div>
    </section>
  );
};

// =======================
// SERVICES
// =======================
const ServiceCard = ({ icon, title, desc }) => (
  <div className="service-card">
    <div className="service-icon-wrapper">
      <img src={icon} alt={title} className="service-icon-img" />
    </div>
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-desc">{desc}</p>
  </div>
);

const Services = () => {
  const services = [
    { id: 1, title: "Catering", desc: "Delight your guests with our flavors and presentation", icon: "src/assets/icons/catering.png" },
    { id: 2, title: "Fast Delivery", desc: "We deliver your order promptly to your door", icon: "src/assets/icons/fastDelivery.png" },
    { id: 3, title: "Online Ordering", desc: "Explore menu & order with ease using our Online Ordering", icon: "src/assets/icons/ordering.png" },
    { id: 4, title: "Gift Cards", desc: "Give the gift of exceptional dining with Foodi Gift Cards", icon: "src/assets/icons/giftcards.png" }
  ];

  return (
    <section className="services-section">
      <div className="services-content">
        <h4 className="services-subtitle">Our Story & Services</h4>
        <h2 className="services-title">Our Culinary Journey <br /> And Services</h2>
        <p className="services-description">
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
        </p>
        
        <Button text="Explore" variant="yellow" className="explore-btn"  to="/events"  />
      </div>
      <div className="services-grid">
        {services.map(s => (
          <ServiceCard key={s.id} title={s.title} desc={s.desc} icon={s.icon} />
        ))}
      </div>
    </section>
  );
};

// =======================
// NEWSLETTER
// =======================
const Newsletter = () => (
  <section className="newsletter-section">
    <div className="newsletter-banner">
      <h2 className="newsletter-title">
        Get Your Promo Code by <br /> Subscribing To our Newsletter
      </h2>
      <div className="newsletter-input-wrapper">
        <input type="email" placeholder="Enter your email" className="newsletter-input" />
        <Button text="Subscribe" variant="yellow" className="subscribe-btn" />
      </div>
    </div>
  </section>
);

// =======================
// TESTIMONIALS
// =======================
const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Yonas Birhan", role: "Verified Customer", image: "/src/assets/customers/Yonas Birhan.jpg", text: "A truly authentic experience! The flavors of the communal platters reminded me so much of home. The service was warm and personal, and the live music added a beautiful, soulful touch to our anniversary dinner. We've been to many restaurants, but none capture the heart and heritage of our culture quite like this place. It was more than just a meal; it was a celebration of identity.", },
    { id: 2, name: "Lulit Mekonnen", role: "Verified Customer", image: "/src/assets/customers/Lulit Mekonnen.jpg", text:"The corporate event was handled with such professionalism. The catering was exquisite, and the ambiance was exactly what we needed for our partners. Every detail was taken care of, from the presentation of the appetizers to the seamless flow of the evening program. It provided the perfect sophisticated backdrop for our high-level networking and partnership discussions.", }
  ];

  return (
    <section className="home-testimonials-section">
      <div className="home-testimonials-header">
        <h2 className="home-testimonials-title">Our Happy Customers</h2>
      </div>
      <div className="home-testimonials-grid">
        {reviews.map(r => (
          <div className="home-testimonial-card" key={r.id}>
            <div className="home-testimonial-avatar"><img src={r.image} alt={r.name} /></div>
            <div className="home-testimonial-content">
              <div className="stars">★★★★★</div>
              <p className="home-testimonial-text">{r.text}</p>
              <h4 className="customer-name">{r.name}</h4>
              <p className="customer-role">{r.role}</p>
            </div>
          </div>
          
        ))}
      </div>
<Button 
  text="View More" 
  className="btn-book-hero" 
  to="/events" 
/>
    </section>
  );
};


const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Hero />
      <SpecialDishes />
      <HeadChef />
      <Testimonials />
      <Services />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default Home;
