import Link from 'next/link';
import Image from 'next/image';

const adventures = [
  {
    id: 1,
    title: 'Jellyfish Fields',
    description: 'Join SpongeBob and Patrick on their favorite pastime - jellyfishing! Explore the beautiful meadows filled with colorful jellyfish.',
    image: '/generated/jellyfish-scene.png',
    highlights: [
      'Catch jellyfish with nets',
      'Make delicious jelly',
      'Beware of the King Jellyfish!',
      'Beautiful underwater meadows'
    ],
    color: 'squidward-teal'
  },
  {
    id: 2,
    title: 'The Krusty Krab Kitchen',
    description: 'Experience a day in the life of SpongeBob as he creates perfect Krabby Patties at the famous Krusty Krab restaurant.',
    image: '/generated/krusty-krab.png',
    highlights: [
      'Learn the secret formula (not really!)',
      'Flip perfect patties',
      'Serve hungry customers',
      'Earn Employee of the Month'
    ],
    color: 'krabs-red'
  },
  {
    id: 3,
    title: 'Pineapple Paradise',
    description: 'Visit SpongeBob\'s cozy pineapple home and meet Gary the snail. Explore every room of this unique underwater residence!',
    image: '/generated/pineapple-house.png',
    highlights: [
      'Meet Gary the snail',
      'Visit the library',
      'See SpongeBob\'s foghorn alarm',
      'Check out the pineapple architecture'
    ],
    color: 'spongebob-yellow'
  }
];

const funActivities = [
  {
    icon: '🫧',
    title: 'Bubble Blowing',
    description: 'Learn SpongeBob\'s 23 bubble-blowing techniques!'
  },
  {
    icon: '🎵',
    title: 'Sing Along',
    description: 'Join in the F.U.N. song and other SpongeBob classics'
  },
  {
    icon: '🏋️',
    title: 'Karate',
    description: 'Practice karate moves with SpongeBob and Sandy'
  },
  {
    icon: '🐌',
    title: 'Pet Gary',
    description: 'Spend time with the world\'s smartest pet snail'
  },
  {
    icon: '🍔',
    title: 'Make Krabby Patties',
    description: 'Learn to cook the perfect burger'
  },
  {
    icon: '🏖️',
    title: 'Goo Lagoon',
    description: 'Visit Bikini Bottom\'s favorite beach spot'
  }
];

export default function AdventuresPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--ocean-light))] relative overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/30 rounded-full animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation Header */}
      <header className="relative z-10">
        <nav className="bg-[hsl(var(--ocean-blue))] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-14 h-14 bg-[hsl(var(--spongebob-yellow))] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-2xl font-bold text-[hsl(var(--navy-blue))]">SB</span>
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">BIKINI BOTTOM BEATS</span>
              </Link>

              <div className="flex items-center gap-2 sm:gap-6">
                <Link
                  href="/"
                  className="text-white font-semibold hover:text-[hsl(var(--spongebob-yellow))] transition-colors px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/quotes"
                  className="text-white font-semibold hover:text-[hsl(var(--spongebob-yellow))] transition-colors px-3 py-2 hidden md:block"
                >
                  Quotes
                </Link>
                <Link
                  href="/explorer"
                  className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105"
                >
                  Explorer
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-[hsl(var(--navy-blue))] mb-4">
              Bikini Bottom Adventures
            </h1>
            <p className="text-xl text-[hsl(var(--navy-blue))] max-w-2xl mx-auto">
              Dive into exciting adventures with SpongeBob and friends. Every day is a new opportunity for fun!
            </p>
          </div>

          {/* Main Adventures */}
          <div className="space-y-12 mb-16">
            {adventures.map((adventure, index) => (
              <div
                key={adventure.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <Image
                      src={adventure.image}
                      alt={adventure.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-white rounded-[2rem] p-8 shadow-lg">
                    <h2 className="text-4xl font-bold text-[hsl(var(--navy-blue))] mb-4">
                      {adventure.title}
                    </h2>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                      {adventure.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy-blue))]">
                        Highlights:
                      </h3>
                      <ul className="space-y-2">
                        {adventure.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[hsl(var(--spongebob-yellow))] text-xl">⭐</span>
                            <span className="text-[hsl(var(--muted-foreground))]">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
                      Start Adventure
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun Activities Grid */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-[hsl(var(--navy-blue))] mb-8 text-center">
              Fun Activities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {funActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--ocean-light))] rounded-[1.5rem] p-6 text-center hover:shadow-md transition-all hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy-blue))] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-[hsl(var(--ocean-blue))] to-[hsl(var(--squidward-teal))] rounded-[2rem] p-12 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for More Adventures?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              There's always something new happening in Bikini Bottom! Explore more locations and discover hidden secrets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/explorer"
                className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105 inline-block"
              >
                Explore Bikini Bottom
              </Link>
              <Link
                href="/quotes"
                className="bg-white text-[hsl(var(--ocean-blue))] font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105 inline-block"
              >
                Read Quotes
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[hsl(var(--navy-blue))] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--spongebob-yellow))] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[hsl(var(--navy-blue))]">SB</span>
                </div>
                <span className="font-bold text-lg">BIKINI BOTTOM<br/>BEATS</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Home</Link></li>
                <li><Link href="/adventures" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Adventures</Link></li>
                <li><Link href="/quotes" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Quotes</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Privacy</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 flex justify-center gap-6">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--spongebob-yellow))] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--spongebob-yellow))] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[hsl(var(--spongebob-yellow))] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
