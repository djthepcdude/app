import { useState } from 'react';
import { Mail, MapPin, Send, Instagram, Facebook, Youtube, Twitter, Music2, Music } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mafidklickup/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/MafiDKlickUp/' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@OfficialMafiD/videos' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/mafidklickup' },
  { name: 'Spotify', icon: Music2, url: 'https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm' },
  { name: 'SoundCloud', icon: Music, url: 'https://soundcloud.com/mafi_d' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiry_type: 'general',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent!', {
          description: 'We\'ll get back to you as soon as possible.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiry_type: 'general',
        });
      } else {
        const data = await response.json();
        toast.error(data.detail || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20" data-testid="contact-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            GET IN TOUCH
          </p>
          <h1 className="section-title mb-6">CONTACT</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Booking inquiries, press requests, collaborations, and business opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-[#0A0A0A]" data-testid="contact-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Inquiry Type</label>
                  <select
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:border-emerald-500"
                    data-testid="contact-type-select"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking / Shows</option>
                    <option value="press">Press / Media</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="business">Business / Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                    data-testid="contact-subject-input"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 resize-none"
                    data-testid="contact-message-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 w-full sm:w-auto"
                  data-testid="contact-submit-btn"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Email */}
              <div className="card-dark p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Booking & Press</h3>
                </div>
                <a 
                  href="mailto:booking@mafidaklick.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  data-testid="contact-info-email"
                >
                  booking@mafidaklick.com
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  For bookings, press, and business inquiries
                </p>
              </div>

              {/* Location */}
              <div className="card-dark p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Location</h3>
                </div>
                <p className="text-gray-300">Seattle, Washington</p>
                <p className="text-gray-500 text-sm mt-1">Central District / East Union Street</p>
              </div>

              {/* Social */}
              <div className="card-dark p-6">
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.name}
                      data-testid={`contact-social-${social.name.toLowerCase()}`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
