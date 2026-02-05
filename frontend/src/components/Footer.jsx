import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Music2,
  Twitter,
  Music
} from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mafidklickup/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/MafiDKlickUp/' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@OfficialMafiD/videos' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/mafidklickup' },
  { name: 'Spotify', icon: Music2, url: 'https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm' },
  { name: 'SoundCloud', icon: Music, url: 'https://soundcloud.com/mafi_d' },
];

const footerLinks = [
  { name: 'Music', path: '/music' },
  { name: 'Videos', path: '/videos' },
  { name: 'Tour', path: '/tour' },
  { name: 'Shop', path: '/shop' },
  { name: 'Press', path: '/press' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-white mb-4">MAFI D</h3>
            <p className="text-gray-400 text-sm mb-6">
              Seattle Hip-Hop. Central District. East Union Street.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Booking & Press</h4>
            <a 
              href="mailto:booking@mafidaklick.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              data-testid="footer-email"
            >
              booking@mafidaklick.com
            </a>
            <p className="text-gray-500 text-sm mt-4">
              For business inquiries, features, and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mafi D. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Seattle, Washington
          </p>
        </div>
      </div>
    </footer>
  );
};
