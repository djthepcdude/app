import { Download, Mail, ExternalLink, Music2, Youtube, FileText, Image, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

const streamingLinks = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/mafi-d/1111484310' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/mafi_d' },
  { name: 'YouTube', url: 'https://www.youtube.com/@OfficialMafiD/videos' },
];

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/mafidklickup/' },
  { name: 'Facebook', url: 'https://www.facebook.com/MafiDKlickUp/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mafidklickup' },
  { name: 'Twitter/X', url: 'https://twitter.com/mafidklickup' },
];

const Press = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('booking@mafidaklick.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20" data-testid="press-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            EPK
          </p>
          <h1 className="section-title mb-6">PRESS KIT</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Everything you need for press coverage, features, and media inquiries.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section bg-[#0A0A0A]" data-testid="quick-info">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-2">Artist Name</h3>
              <p className="text-white text-xl font-semibold">Mafi D</p>
              <p className="text-gray-500 text-sm mt-1">aka Mafi Klick / Mafia Klick</p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-2">Genre</h3>
              <p className="text-white text-xl font-semibold">Hip-Hop / Rap</p>
              <p className="text-gray-500 text-sm mt-1">West Coast, Seattle Sound</p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-2">Location</h3>
              <p className="text-white text-xl font-semibold">Seattle, WA</p>
              <p className="text-gray-500 text-sm mt-1">Central District / East Union St</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bios */}
      <section className="section bg-[#050505]" data-testid="bios-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <FileText className="text-emerald-400" size={24} />
            Artist Bios
          </h2>

          <div className="space-y-6">
            {/* Short Bio */}
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-4">Short Bio (150 words)</h3>
              <p className="text-gray-300 leading-relaxed">
                Mafi D is a Seattle-based hip-hop artist from the Central District. Known for his authentic West Coast sound and street-wise lyricism, he represents the raw, unfiltered voice of Seattle hip-hop. Growing up around East Union Street, Mafi D developed a style that's both grounded and powerful – drawing from real experiences and community influence. His music pays homage to Seattle's urban culture while pushing the local sound forward. With a catalog spanning singles, EPs, and collaborative work, Mafi D continues to build his presence across streaming platforms and live performances. No gimmicks, no pretense – just authentic music from someone who lived it.
              </p>
            </div>

            {/* One-liner */}
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-4">One-Liner</h3>
              <p className="text-white text-xl italic">
                "Seattle hip-hop straight from the Central District – authentic, raw, and real."
              </p>
            </div>

            {/* Long Bio */}
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-4">Full Bio</h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Mafi D, also known as Mafi Klick or Mafia Klick, is a hip-hop artist born and raised in Seattle, Washington. Growing up in the Central District, specifically around East Union Street, Mafi D developed his sound surrounded by the authentic energy of Seattle's urban core.
                </p>
                <p>
                  His music reflects the raw, unfiltered reality of street life while maintaining a confident, grounded perspective. Drawing from his experiences in the Central District, Mafi D brings a distinct West Coast flavor to his tracks – one that's uniquely Seattle.
                </p>
                <p>
                  With a style that's street-wise but polished, Mafi D represents the next generation of Seattle hip-hop. His work pays homage to his roots while pushing the Seattle sound forward into new territory. From hard-hitting street anthems to introspective tracks, his versatility showcases the depth of his artistry.
                </p>
                <p>
                  Available on all major streaming platforms including Spotify, Apple Music, and SoundCloud, Mafi D continues to expand his reach while staying true to his Central District roots. For booking inquiries, press features, and collaborations, reach out to his team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Photos */}
      <section className="section bg-[#0A0A0A]" data-testid="press-photos">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Image className="text-emerald-400" size={24} />
            Press Photos
          </h2>

          <div className="press-grid mb-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center"
                data-testid={`press-photo-${num}`}
              >
                <Image size={32} className="text-white/20" />
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center mb-4">
            High-resolution press photos coming soon. Contact for current assets.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="border-white/20 hover:border-emerald-500/50"
              disabled
              data-testid="download-photos-btn"
            >
              <Download size={16} className="mr-2" />
              Download Press Photos (Coming Soon)
            </Button>
          </div>
        </div>
      </section>

      {/* Music Links */}
      <section className="section bg-[#050505]" data-testid="music-links">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Music2 className="text-emerald-400" size={24} />
            Streaming Links
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-4 flex items-center justify-between hover:border-emerald-500/30 transition-colors"
                data-testid={`press-link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                <span className="text-white font-medium">{link.name}</span>
                <ExternalLink size={16} className="text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section bg-[#0A0A0A]" data-testid="social-links">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8">Social Media</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-4 flex items-center justify-between hover:border-emerald-500/30 transition-colors"
                data-testid={`social-link-${link.name.toLowerCase().replace('/', '-')}`}
              >
                <span className="text-white font-medium">{link.name}</span>
                <ExternalLink size={16} className="text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-[#050505]" data-testid="press-contact">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
            <Mail size={40} className="text-emerald-400" />
          </div>
          <h2 className="font-heading text-3xl text-white mb-6">PRESS & BOOKING CONTACT</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            For press inquiries, interviews, features, and booking requests.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:booking@mafidaklick.com"
              className="text-emerald-400 hover:text-emerald-300 text-xl font-medium transition-colors"
              data-testid="press-email-link"
            >
              booking@mafidaklick.com
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/20 hover:border-emerald-500/50"
              onClick={copyEmail}
              data-testid="copy-email-btn"
            >
              {copied ? <Check size={14} className="mr-2" /> : <Copy size={14} className="mr-2" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
