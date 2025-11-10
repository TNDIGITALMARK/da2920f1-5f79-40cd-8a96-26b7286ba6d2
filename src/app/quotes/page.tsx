'use client';

import Link from 'next/link';
import { useState } from 'react';

const quotes = [
  {
    id: 1,
    text: "I'm ready! I'm ready! I'm ready!",
    category: 'optimism',
    episode: 'Help Wanted',
    context: 'SpongeBob\'s iconic catchphrase when heading to work'
  },
  {
    id: 2,
    text: 'The best time to wear a striped sweater is all the time',
    category: 'friendship',
    episode: 'As Seen on TV',
    context: 'SpongeBob singing about his favorite sweater'
  },
  {
    id: 3,
    text: 'Is mayonnaise an instrument?',
    category: 'work',
    episode: 'Band Geeks',
    context: 'Patrick\'s hilarious question during band practice'
  },
  {
    id: 4,
    text: 'I have exactly ten dollars',
    category: 'optimism',
    episode: 'F.U.N.',
    context: 'SpongeBob checking his wallet before hanging out with Plankton'
  },
  {
    id: 5,
    text: 'Can you feel it now, Mr. Krabs?',
    category: 'work',
    episode: 'Mid-Life Crustacean',
    context: 'SpongeBob and Patrick trying to help Mr. Krabs feel young again'
  },
  {
    id: 6,
    text: 'F is for friends who do stuff together',
    category: 'friendship',
    episode: 'F.U.N.',
    context: 'SpongeBob teaching Plankton about friendship'
  },
  {
    id: 7,
    text: 'I don\'t need it... I don\'t need it... I NEED IT!',
    category: 'optimism',
    episode: 'Tea at the Treedome',
    context: 'SpongeBob trying to resist water in Sandy\'s treedome'
  },
  {
    id: 8,
    text: 'Firmly grasp it!',
    category: 'work',
    episode: 'Jellyfish Jam',
    context: 'SpongeBob teaching Patrick how to hold a jellyfish net'
  }
];

const categories = [
  { id: 'all', label: 'All Quotes', color: 'spongebob-yellow' },
  { id: 'optimism', label: 'Optimism', color: 'spongebob-yellow' },
  { id: 'work', label: 'Work Life', color: 'ocean-blue' },
  { id: 'friendship', label: 'Friendship', color: 'patrick-pink' }
];

export default function QuotesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  const handleShare = (quote: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'SpongeBob Quote',
        text: quote
      });
    } else {
      navigator.clipboard.writeText(quote);
      setCopiedId(quotes.find(q => q.text === quote)?.id || null);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

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
                  href="/adventures"
                  className="text-white font-semibold hover:text-[hsl(var(--spongebob-yellow))] transition-colors px-3 py-2 hidden md:block"
                >
                  Adventures
                </Link>
                <Link
                  href="/explorer"
                  className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105"
                >
                  Explore
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
              Memorable Quotes
            </h1>
            <p className="text-xl text-[hsl(var(--navy-blue))] max-w-2xl mx-auto">
              Discover SpongeBob's most iconic catchphrases and memorable moments from Bikini Bottom!
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[hsl(var(--spongebob-yellow))] text-white shadow-lg scale-105'
                    : 'bg-white text-[hsl(var(--navy-blue))] hover:shadow-md hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Quotes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote) => (
              <div
                key={quote.id}
                className="bg-white rounded-[1.5rem] p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="text-[hsl(var(--spongebob-yellow))] text-4xl mb-4">"</div>

                {/* Quote Text */}
                <p className="text-lg font-bold text-[hsl(var(--navy-blue))] mb-4 leading-relaxed">
                  {quote.text}
                </p>

                {/* Quote Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      <strong>Episode:</strong> {quote.episode}
                    </span>
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] italic">
                    {quote.context}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    quote.category === 'optimism'
                      ? 'bg-[hsl(var(--spongebob-yellow))] text-white'
                      : quote.category === 'work'
                      ? 'bg-[hsl(var(--ocean-blue))] text-white'
                      : 'bg-[hsl(var(--patrick-pink))] text-white'
                  }`}>
                    {quote.category.toUpperCase()}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare(quote.text)}
                    className="flex-1 bg-[hsl(var(--ocean-blue))] text-white font-bold px-4 py-2 rounded-full hover:shadow-md transition-all hover:scale-105 text-sm"
                  >
                    {copiedId === quote.id ? 'Copied!' : 'Share'}
                  </button>
                  <button
                    onClick={() => {
                      // Simulate adding to favorites
                      alert('Added to favorites! (Feature coming soon)');
                    }}
                    className="bg-[hsl(var(--spongebob-yellow))] text-white font-bold px-4 py-2 rounded-full hover:shadow-md transition-all hover:scale-105"
                  >
                    ⭐
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[hsl(var(--muted-foreground))]">
                No quotes found in this category. Try selecting a different one!
              </p>
            </div>
          )}

          {/* Fun Fact Box */}
          <div className="mt-16 bg-white rounded-[2rem] p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[hsl(var(--navy-blue))] mb-4 text-center">
              Did You Know?
            </h3>
            <p className="text-lg text-[hsl(var(--muted-foreground))] text-center leading-relaxed">
              SpongeBob SquarePants has delivered over 5,000 memorable quotes across 300+ episodes,
              making it one of the most quotable shows in television history!
            </p>
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
