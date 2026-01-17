import React, { useState } from "react";
import "../styles/Gallery.css";
import Button from "../components/Button";
import HeroImg from "../assets/Gallery/restaurant view.png";
import Dining from "../assets/Gallery/dining.png";
import FamilyReunion from "../assets/Gallery/corporate event.jpg"
import PrivateWedding1 from "../assets/Gallery/gallery-hero.png";
import FamilyReunion2 from "../assets/Gallery/habesha-restaurant.jpg";
import Buffet from "../assets/Gallery/image.png";
import Wedding1 from "../assets/Gallery/wedding1.png";
import Wedding2 from "../assets/Gallery/wedding2.png";
import Birthday1 from "../assets/Gallery/birthday.png";
import Birthday2 from "../assets/Gallery/birthday2.png";
import DiningTable from "../assets/Gallery/seating arrangement.jpg";
import LastImage from "../assets/Gallery/image2.png";



// 1. Hero Section (Updated to use your custom Button.jsx)
const HeroSection = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-title">
        Reserve Your Table, Savor Every Moment with Us
      </h1>

      <div className="hero-grid">
        <div className="image-wrapper">
          <img 
            src={HeroImg}
            alt="Restaurant Interior" 
            className="main-hero-img"
          />
          <div className="quality-card">
            <p>Your perfect dining experience awaits</p>
          </div>
        </div>

        <div className="text-wrapper">
          <p className="description">
            Book your table effortlessly and enjoy a delightful dining experience 
            with exceptional flavors, warm ambiance, and outstanding service.
          </p>
          <div className="cta-group">
            <Button text="View Menu" variant="yellow" to="/menu" />
            <Button text="Explore More" variant="white" to="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Photo Section (Filterable Bento Grid)
const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Private Wedding', 'Family Reunion', 'Private Dining', 'Birthday Celebration'];

  // Mock data for the grid items
  const galleryItems = [
    { id: 1, category: 'Private Wedding', size: 'large', img: Wedding1 },
    { id: 2, category: 'Family Reunion', size: 'square', img: FamilyReunion2 },
    { id: 3, category: 'Private Dining', size: 'square', img: FamilyReunion },
    { id: 4, category: 'Private Wedding', size: 'small', img: PrivateWedding1 },
    { id: 5, category: 'Private Dining', size: 'small', img: Dining},
    { id: 6, category: 'Family Reunion', size: 'wide', img: Buffet },
    { id: 7, category: 'Private Wedding', size: 'square', img: Wedding2 },
    { id: 8, category: 'Birthday Celebration', size: 'square', img: Birthday2 },
    { id: 9, category: 'Private Dining', size: 'square', img: DiningTable },
    { id: 10, category: 'Birthday Celebration', size: 'square', img: Birthday1 },
    { id: 11, category: 'Family Reunion', size: 'wide', img: LastImage },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1>Capturing Moments, <br /> Creating Lasting Memories Together.</h1>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button 
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bento-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className={`grid-item ${item.size}`}
            style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}
          >
            <div className="grid-overlay">{item.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 3. Video Section (3D Cinema Style with Playlist)
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playlist = [
    { 
      id: "local-1", 
      type: "local", 
      title: "Main Venue Tour", 
      // Import your local video at the top of the file: import VenueVid from "../assets/video.mp4"
      src: "/path-to-your-local-video.mp4", 
      thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
    },
    { 
      id: "dQw4w9WgXcQ", 
      type: "youtube", 
      title: "Private Dining Experience", 
      thumb: "https://images.unsplash.com/photo-1559339352-11d035aa65de" 
    },
    { 
      id: "3X3X3X3X3X3", 
      type: "youtube", 
      title: "Traditional Coffee Ceremony", 
      thumb: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" 
    }
  ];

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true); 
  };

  const currentVideo = playlist[currentVideoIndex];
  const nextIdx = (currentVideoIndex + 1) % playlist.length;
  const prevIdx = (currentVideoIndex - 1 + playlist.length) % playlist.length;

  return (
    <section className="video-tour">
      <div className="video-header">
        <h2 className="glitch-text">Experience the Atmosphere</h2>
        <span>Take a virtual journey through our stunning spaces</span>
        <p className="current-title">Watching: {currentVideo.title}</p>
      </div>

      <div className="video-stage-container">
        <div className={`video-stage ${isPlaying ? "is-playing" : ""}`}>
          
          <div className="video-wing left-wing" onClick={() => handleVideoChange(prevIdx)}>
            <div className="wing-overlay"><span>PREVIOUS</span></div>
            <div className="wing-content" style={{backgroundImage: `url(${playlist[prevIdx].thumb})`}}></div>
          </div>

          <div className="video-main-screen">
            {!isPlaying ? (
              <div 
                className="video-poster-overlay" 
                onClick={() => setIsPlaying(true)}
                style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentVideo.thumb})`, cursor: 'pointer'}}
              >
                <div className="play-pulse-container">
                  <div className="pulse-ring"></div>
                  <div className="play-btn-glass"><span className="play-icon-large">▶</span></div>
                </div>
              </div>
            ) : (
              // CONDITIONAL RENDERING LOGIC
              currentVideo.type === "youtube" ? (
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&modestbranding=1`} 
                  title={currentVideo.title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                ></iframe>
              ) : (
                <video 
                  width="100%" height="100%" 
                  controls autoPlay 
                  className="local-video-player"
                >
                  <source src={currentVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>

          <div className="video-wing right-wing" onClick={() => handleVideoChange(nextIdx)}>
            <div className="wing-overlay"><span>NEXT UP</span></div>
            <div className="wing-content" style={{backgroundImage: `url(${playlist[nextIdx].thumb})`}}></div>
          </div>
          
        </div>
        <div className="stage-floor"></div>
      </div>
    </section>
  );
};
// 4. Instagram Section (Clickable User Profiles)
const InstagramSection = () => {
  const posts = [
    { id: 1, user: "estherhoward", profileUrl: "https://instagram.com/estherhoward", img: Birthday2, description:"My baby boy just turned 10. Thank you for an amazing service Habesha Fest. # Celebrations" },
    { id: 2, user: "habesha_fan", profileUrl: "https://instagram.com/habesha_fan", img: FamilyReunion2, description:"Had a wonderful family reunion here. The ambiance and food were top-notch! #FamilyTime" },
    { id: 3, user: "Selamawit Abay", profileUrl: "https://instagram.com/foodie_ethiopia", img: Wedding2, description:"The perfect venue for our wedding! Everything was flawless. #WeddingGoals" },
  ]; 

  return (
    <section className="instagram-section">
      <div className="insta-header">
        <div className="header-left"><h1>Real Moments, Real Customers</h1></div>
        <button className="see-more-btn" onClick={() => window.open('https://instagram.com/habesha_fest', '_blank')}>See More</button>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="insta-card">
            {/* Clicking this takes user to Instagram profile */}
            <div className="card-user" onClick={() => window.open(post.profileUrl, '_blank')} style={{cursor: 'pointer'}}>
              <div className="user-avatar"></div>
              <span className="user-name">@{post.user}</span>
            </div>
            <div className="card-image-placeholder" style={{backgroundImage: `url(${post.img})`, backgroundSize: 'cover'}}></div>
            <div className="card-caption">
              <strong>{post.user}</strong> {post.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const GalleryPage = () => {
  return (
    <main className="gallery-page-wrapper">
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <InstagramSection />
    </main>
  );
};

export default GalleryPage;