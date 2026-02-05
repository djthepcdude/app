import { ExternalLink, Music2, Apple, Music as MusicIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

const streamingLinks = [
  {
    name: 'Spotify',
    icon: Music2,
    url: 'https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm',
    color: 'bg-green-500',
  },
  {
    name: 'Apple Music',
    icon: Apple,
    url: 'https://music.apple.com/us/artist/mafi-d/1111484310',
    color: 'bg-pink-500',
  },
  {
    name: 'SoundCloud',
    icon: MusicIcon,
    url: 'https://soundcloud.com/mafi_d',
    color: 'bg-orange-500',
  },
];

const discography = [
  {
    title: 'Latest Release',
    type: 'Single',
    year: '2024',
    description: 'Fresh tracks from the Central District',
  },
  {
    title: 'Street Chronicles',
    type: 'EP',
    year: '2023',
    description: 'Stories from East Union Street',
  },
  {
    title: 'Seattle State of Mind',
    type: 'Album',
    year: '2022',
    description: 'Full-length debut showcasing Seattle hip-hop',
  },
];

const MusicPage = () => {
  return (
    <div className="pt-20" data-testid="music-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            DISCOGRAPHY
          </p>
          <h1 className="section-title mb-6">MUSIC</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Stream Mafi D's music on all major platforms. From Seattle streets to your speakers.
          </p>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="section bg-[#0A0A0A]" data-testid="streaming-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">Stream Now</h2>
          <div className="flex flex-wrap gap-4">
            {streamingLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-4 flex items-center gap-4 hover:border-emerald-500/30 transition-colors min-w-[200px]"
                data-testid={`stream-${platform.name.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                  <platform.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{platform.name}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    Listen <ExternalLink size={12} />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="section bg-[#050505]" data-testid="spotify-full-embed">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">On Spotify</h2>
          <div className="music-card p-6">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/0TboE335UT8BpAg6aSpoAm?utm_source=generator&theme=0"
              width="100%" 
              height="500" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Mafi D Spotify Artist Page"
            />
          </div>
        </div>
      </section>

      {/* Apple Music Embed */}
      <section className="section bg-[#0A0A0A]" data-testid="apple-full-embed">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">On Apple Music</h2>
          <div className="music-card p-6">
            <iframe 
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
              frameBorder="0" 
              height="500" 
              style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
              src="https://embed.music.apple.com/us/artist/mafi-d/1111484310"
              title="Mafi D Apple Music Artist Page"
            />
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="section bg-[#050505]" data-testid="discography-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">Discography</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {discography.map((release, index) => (
              <div 
                key={index} 
                className="card-dark p-6 hover:border-emerald-500/30 transition-colors"
                data-testid={`release-${index}`}
              >
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                  <Music2 size={48} className="text-emerald-400/50" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                    {release.type}
                  </span>
                  <span className="text-gray-500 text-sm">{release.year}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{release.title}</h3>
                <p className="text-gray-400 text-sm">{release.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white mb-6">SUPPORT THE MUSIC</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Follow Mafi D on your favorite streaming platform. Save tracks, share with friends, and help spread the Seattle sound.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8" data-testid="cta-spotify">
                Follow on Spotify
              </Button>
            </a>
            <a
              href="https://music.apple.com/us/artist/mafi-d/1111484310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-white/20 hover:border-emerald-500/50" data-testid="cta-apple">
                Follow on Apple Music
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;
