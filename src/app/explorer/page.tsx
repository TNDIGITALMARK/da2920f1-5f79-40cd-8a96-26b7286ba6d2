'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const locations = [
  {
    id: 1,
    name: 'The Krusty Krab',
    description: 'Famous restaurant where SpongeBob works making Krabby Patties. Home of the secret formula!',
    image: '/generated/krusty-krab.png',
    facts: [
      'Owned by Mr. Krabs',
      'Famous for Krabby Patties',
      'SpongeBob works as fry cook',
      'Squidward mans the register'
    ],
    position: { x: 35, y: 45 }
  },
  {
    id: 2,
    name: 'SpongeBob\'s Pineapple House',
    description: 'SpongeBob\'s home - a pineapple with Gary the snail. Features a cozy living room, kitchen, and library.',
    image: '/generated/pineapple-house.png',
    facts: [
      'Lives with Gary the snail',
      'Fully furnished pineapple',
      'Has an extensive library',
      'Foghorn alarm clock'
    ],
    position: { x: 25, y: 60 }
  },
  {
    id: 3,
    name: 'Jellyfish Fields',
    description: 'The beautiful meadow where SpongeBob and Patrick love to catch jellyfish with nets.',
    image: '/generated/jellyfish-scene.png',
    facts: [
      'Thousands of jellyfish',
      'SpongeBob\'s favorite spot',
      'Jellyfish produce jelly',
      'Peaceful underwater meadow'
    ],
    position: { x: 65, y: 30 }
  },
  {
    id: 4,
    name: 'Patrick\'s Rock',
    description: 'Patrick Star\'s simple home - literally just a rock with sand underneath where he lives.',
    image: '/generated/patrick-character.png',
    facts: [
      'Just a rock on the outside',
      'Patrick\'s best friend spot',
      'Next to SpongeBob\'s house',
      'Surprisingly spacious inside'
    ],
    position: { x: 20, y: 70 }
  }
];

const characterFacts = [
  {
    id: 1,
    fact: 'Lives in a pineapple under the sea in Bikini Bottom',
    icon: '🍍'
  },
  {
    id: 2,
    fact: 'Works as a fry cook at the Krusty Krab restaurant',
    icon: '🍔'
  },
  {
    id: 3,
    fact: 'Best friends with Patrick Star and Sandy Cheeks',
    icon: '⭐'
  },
  {
    id: 4,
    fact: 'Owns a pet snail named Gary who meows like a cat',
    icon: '🐌'
  },
  {
    id: 5,
    fact: 'Loves jellyfishing and blowing bubbles',
    icon: '🫧'
  },
  {
    id: 6,
    fact: 'Has won Employee of the Month 374 times',
    icon: '🏆'
  }
];

export default function ExplorerPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const activeLocation = locations.find(loc => loc.id === selectedLocation);

  return (
    <div className="min-h-screen bg-[hsl(var(--ocean-light))] relative overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
                  href="/adventures"
                  className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105"
                >
                  Adventures
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
              Bikini Bottom Explorer
            </h1>
            <p className="text-xl text-[hsl(var(--navy-blue))] max-w-2xl mx-auto">
              Click on the locations below to explore the underwater world of SpongeBob SquarePants!
            </p>
          </div>

          {/* Interactive Map Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Map Canvas */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[hsl(var(--navy-blue))] mb-6 text-center">
                Interactive Map
              </h2>
              <div className="relative bg-gradient-to-b from-[hsl(var(--ocean-light))] to-[hsl(var(--ocean-blue))] rounded-[1.5rem] aspect-square overflow-hidden">
                {/* Ocean floor illustration */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[hsl(var(--sandy-tan))] rounded-b-[1.5rem]">
                  {/* Simple seaweed decorations */}
                  <div className="absolute bottom-0 left-[10%] w-2 h-16 bg-green-600 rounded-t-full opacity-60"></div>
                  <div className="absolute bottom-0 left-[30%] w-2 h-20 bg-green-600 rounded-t-full opacity-60"></div>
                  <div className="absolute bottom-0 right-[20%] w-2 h-12 bg-green-600 rounded-t-full opacity-60"></div>
                  <div className="absolute bottom-0 right-[40%] w-2 h-24 bg-green-600 rounded-t-full opacity-60"></div>
                </div>

                {/* Location pins */}
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl transition-all ${
                      selectedLocation === location.id
                        ? 'bg-[hsl(var(--spongebob-yellow))] scale-125 shadow-lg'
                        : 'bg-[hsl(var(--krabs-red))] hover:scale-110 hover:shadow-md'
                    }`}
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    title={location.name}
                  >
                    📍
                  </button>
                ))}
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] text-center mt-4">
                Click the red pins to learn about each location!
              </p>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              {activeLocation ? (
                <div className="space-y-6">
                  <div className="relative w-full h-48 rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={activeLocation.image}
                      alt={activeLocation.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-[hsl(var(--navy-blue))]">
                    {activeLocation.name}
                  </h3>
                  <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {activeLocation.description}
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-[hsl(var(--navy-blue))] mb-3">
                      Fun Facts:
                    </h4>
                    <ul className="space-y-2">
                      {activeLocation.facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[hsl(var(--spongebob-yellow))] font-bold">⭐</span>
                          <span className="text-[hsl(var(--muted-foreground))]">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold text-[hsl(var(--navy-blue))] mb-2">
                      Select a Location
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))]">
                      Click on any red pin on the map to explore that location!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Character Facts Section */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-[hsl(var(--navy-blue))] mb-8 text-center">
              SpongeBob Fun Facts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {characterFacts.map((item) => (
                <div
                  key={item.id}
                  className="bg-[hsl(var(--ocean-light))] rounded-[1.5rem] p-6 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 text-center">{item.icon}</div>
                  <p className="text-[hsl(var(--navy-blue))] font-medium text-center leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* All Locations Grid */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--navy-blue))] mb-8 text-center">
              All Locations
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => {
                    setSelectedLocation(location.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-[1.5rem] p-4 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 text-left"
                >
                  <div className="relative w-full h-32 rounded-[1rem] overflow-hidden mb-4">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-[hsl(var(--navy-blue))] mb-2">
                    {location.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
                    {location.description}
                  </p>
                </button>
              ))}
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
                <li><Link href="/quotes" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Quotes</Link></li>
                <li><Link href="/explorer" className="hover:text-[hsl(var(--spongebob-yellow))] transition-colors">Explorer</Link></li>
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
