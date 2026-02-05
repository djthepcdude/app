import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Mail, ArrowRight } from 'lucide-react';

export const EmailSignup = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Welcome to the Klick!', {
          description: 'You\'ll be the first to know about new music and shows.',
        });
        setEmail('');
      } else {
        const data = await response.json();
        toast.error(data.detail || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2" data-testid="email-signup-inline">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 flex-1"
          required
          data-testid="email-input"
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6"
          data-testid="email-submit-btn"
        >
          {loading ? '...' : <ArrowRight size={18} />}
        </Button>
      </form>
    );
  }

  return (
    <div className="card-dark p-8 max-w-xl" data-testid="email-signup-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Mail className="text-emerald-400" size={20} />
        </div>
        <h3 className="font-heading text-2xl text-white">JOIN THE KLICK</h3>
      </div>
      <p className="text-gray-400 mb-6">
        Get exclusive updates, new music, tour dates, and behind-the-scenes content.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 flex-1"
          required
          data-testid="email-input"
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 whitespace-nowrap"
          data-testid="email-submit-btn"
        >
          {loading ? 'Joining...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};
