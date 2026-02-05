import { MapPin, Music2, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20" data-testid="about-page">
      {/* Hero */}
      <section className="section bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1549923478-1ba2705402fa?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <p className="text-emerald-400 font-medium mb-4 tracking-widest text-sm">
            THE ARTIST
          </p>
          <h1 className="section-title mb-6">ABOUT MAFI D</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Seattle's own. Central District raised. East Union Street made.
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="section bg-[#0A0A0A]" data-testid="bio-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-lg overflow-hidden border border-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1549923478-1ba2705402fa?w=800&q=80"
                  alt="Mafi D"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="font-accent text-emerald-400 text-xl transform -rotate-2">
                    Central District
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="font-heading text-4xl text-white">STRAIGHT FROM THE STREETS</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Mafi D, also known as Mafi Klick or Mafia Klick, is a hip-hop artist born and raised in Seattle, Washington. Growing up in the Central District, specifically around East Union Street, Mafi D developed his sound surrounded by the authentic energy of Seattle's urban core.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                His music reflects the raw, unfiltered reality of street life while maintaining a confident, grounded perspective. Drawing from his experiences in the Central District, Mafi D brings a distinct West Coast flavor to his tracks – one that's uniquely Seattle.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                With a style that's street-wise but polished, Mafi D represents the next generation of Seattle hip-hop. No gimmicks, no pretense – just authentic music from someone who lived it. His work pays homage to his roots while pushing the Seattle sound forward.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="text-emerald-400" size={18} />
                  <span>Seattle, WA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Music2 className="text-emerald-400" size={18} />
                  <span>Hip-Hop / Rap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="section bg-[#050505]" data-testid="highlights-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-dark p-6 text-center">
              <MapPin className="mx-auto text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Seattle Native</h3>
              <p className="text-gray-500 text-sm">Central District born & raised</p>
            </div>
            <div className="card-dark p-6 text-center">
              <Music2 className="mx-auto text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Original Sound</h3>
              <p className="text-gray-500 text-sm">Authentic Seattle hip-hop</p>
            </div>
            <div className="card-dark p-6 text-center">
              <Users className="mx-auto text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Community Rooted</h3>
              <p className="text-gray-500 text-sm">East Union Street influence</p>
            </div>
            <div className="card-dark p-6 text-center">
              <Award className="mx-auto text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Real Music</h3>
              <p className="text-gray-500 text-sm">No gimmicks, no filters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Short Bio for Press */}
      <section className="section bg-[#0A0A0A]" data-testid="press-bio-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">Press Bio</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Short Bio */}
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-4">Short Bio</h3>
              <p className="text-gray-300 leading-relaxed">
                Mafi D is a Seattle-based hip-hop artist from the Central District. Known for his authentic West Coast sound and street-wise lyricism, he represents the raw, unfiltered voice of Seattle hip-hop. His music draws from his experiences growing up around East Union Street, delivering tracks that are both grounded and powerful.
              </p>
            </div>

            {/* One-liner */}
            <div className="card-dark p-6">
              <h3 className="text-emerald-400 font-medium mb-4">One-Liner</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                "Seattle hip-hop straight from the Central District – authentic, raw, and real."
              </p>
              <p className="text-gray-500 text-sm mt-4">
                – Mafi D (aka Mafi Klick)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
