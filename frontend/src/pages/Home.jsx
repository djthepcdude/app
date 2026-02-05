import { Link } from 'react-router-dom';
import { Play, Music2, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { EmailSignup } from '../components/EmailSignup';

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div 
          className="hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1619549801312-f24d5602516d?w=1920&q=80')`,
          }}
        />
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <div className="animate-fade-in-up">
            <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
              SEATTLE HIP-HOP
            </p>
            <h1 className="hero-title">
              MAFI D
            </h1>
            <p className="hero-tagline">
              Central District. East Union Street. Authentic Seattle sound.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                data-testid="hero-listen-btn"
              >
                <Play size={18} fill="currentColor" /> Listen Now
              </a>
              <Link 
                to="/videos"
                className="btn-outline flex items-center gap-2"
                data-testid="hero-watch-btn"
              >
                <Youtube size={18} /> Watch Latest
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="section bg-[#050505]" data-testid="featured-music-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title flex items-center gap-4">
              <Music2 className="text-emerald-400" size={32} />
              Featured Music
            </h2>
            <Link 
              to="/music"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium"
              data-testid="music-view-all"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Spotify Embed */}
            <div className="music-card p-4" data-testid="spotify-embed">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                Spotify
              </h3>
              <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/0TboE335UT8BpAg6aSpoAm?utm_source=generator&theme=0"
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Mafi D on Spotify"
              />
            </div>

            {/* Apple Music Embed */}
            <div className="music-card p-4" data-testid="apple-music-embed">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full" />
                Apple Music
              </h3>
              <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameBorder="0" 
                height="450" 
                style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/artist/mafi-d/1111484310"
                title="Mafi D on Apple Music"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="section bg-[#0A0A0A]" data-testid="latest-video-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title flex items-center gap-4">
              <Youtube className="text-red-500" size={32} />
              Latest Video
            </h2>
            <Link 
              to="/videos"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium"
              data-testid="videos-view-all"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="embed-container rounded-lg overflow-hidden border border-white/10" data-testid="youtube-embed">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UU-lHJZR3Gqxm24_Vd_AJ5Yw"
              title="Mafi D Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-[#050505]" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
                THE ARTIST
              </p>
              <h2 className="section-title">STRAIGHT FROM THE CENTRAL DISTRICT</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Born and raised in Seattle's Central District, Mafi D brings authentic West Coast hip-hop rooted in the streets of East Union. With raw lyrics and a grounded flow, he represents the real Seattle sound – no gimmicks, no filters.
              </p>
              <Link 
                to="/about"
                className="btn-outline inline-flex items-center gap-2"
                data-testid="about-read-more"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-transparent rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1549923478-1ba2705402fa?w=800&q=80"
                  alt="Concert atmosphere"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-accent text-emerald-400 text-2xl transform -rotate-3">
                    Real Music
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="section bg-[#0A0A0A]" data-testid="signup-section">
        <div className="max-w-7xl mx-auto flex justify-center">
          <EmailSignup />
        </div>
      </section>
    </div>
  );
};

export default Home;
