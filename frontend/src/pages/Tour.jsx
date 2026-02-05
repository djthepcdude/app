import { Calendar, MapPin, Clock, Ticket, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { EmailSignup } from '../components/EmailSignup';

const upcomingShows = [
  {
    id: 1,
    date: 'TBA',
    venue: 'Coming Soon',
    city: 'Seattle, WA',
    status: 'upcoming',
  },
];

const pastShows = [
  {
    date: '2024',
    venue: 'Local Seattle Venues',
    city: 'Seattle, WA',
  },
  {
    date: '2023',
    venue: 'Central District Events',
    city: 'Seattle, WA',
  },
];

const Tour = () => {
  return (
    <div className="pt-20" data-testid="tour-page">
      {/* Hero */}
      <section className="section bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            LIVE SHOWS
          </p>
          <h1 className="section-title mb-6">TOUR & SHOWS</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Catch Mafi D live. Experience authentic Seattle hip-hop in person.
          </p>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="section bg-[#0A0A0A]" data-testid="upcoming-shows">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Calendar className="text-emerald-400" size={24} />
            Upcoming Shows
          </h2>

          <div className="space-y-4">
            {upcomingShows.map((show) => (
              <div 
                key={show.id}
                className="tour-item ticket-stub"
                data-testid={`show-${show.id}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                  <div className="text-center sm:text-left min-w-[100px]">
                    <p className="text-emerald-400 font-heading text-2xl">{show.date}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{show.venue}</h3>
                    <p className="text-gray-400 flex items-center gap-2">
                      <MapPin size={14} />
                      {show.city}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                    Dates TBA
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No shows message */}
          <div className="card-dark p-8 mt-8 text-center" data-testid="no-shows-message">
            <Bell className="mx-auto text-emerald-400 mb-4" size={40} />
            <h3 className="text-white font-semibold text-xl mb-2">
              New Shows Coming Soon
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Sign up to be the first to know when new tour dates are announced.
            </p>
            <EmailSignup variant="inline" />
          </div>
        </div>
      </section>

      {/* Past Shows */}
      <section className="section bg-[#050505]" data-testid="past-shows">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <Clock className="text-gray-500" size={24} />
            Past Performances
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {pastShows.map((show, index) => (
              <div 
                key={index}
                className="card-dark p-6 opacity-70"
                data-testid={`past-show-${index}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{show.date}</p>
                    <h3 className="text-white font-medium">{show.venue}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={12} />
                      {show.city}
                    </p>
                  </div>
                  <span className="text-xs text-gray-600 uppercase">Past</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section bg-[#0A0A0A]" data-testid="booking-cta">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
            <Ticket size={40} className="text-emerald-400" />
          </div>
          <h2 className="font-heading text-3xl text-white mb-6">BOOK MAFI D</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Interested in booking Mafi D for your venue, event, or festival? Get in touch with the booking team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:booking@mafidaklick.com">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8" data-testid="booking-btn">
                Contact for Booking
              </Button>
            </a>
            <a href="/press">
              <Button variant="outline" className="border-white/20 hover:border-emerald-500/50" data-testid="press-btn">
                View Press Kit
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tour;
