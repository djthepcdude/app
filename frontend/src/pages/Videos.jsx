import { Youtube, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

const videos = [
  {
    id: 1,
    title: 'Official Music Video',
    embedId: 'videoseries?list=UU-lHJZR3Gqxm24_Vd_AJ5Yw',
    description: 'Latest visual from Mafi D',
  },
];

const Videos = () => {
  return (
    <div className="pt-20" data-testid="videos-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            VISUALS
          </p>
          <h1 className="section-title mb-6">VIDEOS</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Watch official music videos, live performances, and behind-the-scenes content from Mafi D.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section bg-[#0A0A0A]" data-testid="featured-video">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Youtube className="text-red-500" size={24} />
            Featured Content
          </h2>
          <div className="embed-container rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UU-lHJZR3Gqxm24_Vd_AJ5Yw"
              title="Mafi D Official Videos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Video Grid Placeholders */}
      <section className="section bg-[#050505]" data-testid="video-grid">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">All Videos</h2>
          <div className="video-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num} 
                className="card-dark overflow-hidden group"
                data-testid={`video-card-${num}`}
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative flex items-center justify-center">
                  <Youtube size={48} className="text-white/20 group-hover:text-red-500/50 transition-colors" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" 
                        style={{ borderLeftWidth: '16px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Video Title {num}</h3>
                  <p className="text-gray-500 text-sm">Official Music Video</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="section bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
            <Youtube size={40} className="text-red-500" />
          </div>
          <h2 className="font-heading text-3xl text-white mb-6">SUBSCRIBE ON YOUTUBE</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Don't miss any new visuals. Subscribe to the official Mafi D YouTube channel for music videos, live sessions, and exclusive content.
          </p>
          <a
            href="https://www.youtube.com/@OfficialMafiD/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-8" data-testid="youtube-subscribe-btn">
              <Youtube size={18} className="mr-2" />
              Subscribe Now
              <ExternalLink size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Videos;
