import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-court-line text-green-900 overflow-hidden flex flex-col">
      <Head>
        <title>DeuceDeal - Coming Soon</title>
      </Head>

      <header className="flex justify-center py-6">
        <img src="/logo.png" alt="DeuceDeal Logo" className="h-16 object-contain" />
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6">GAME. SET. DEAL.</h2>
        <p className="text-lg md:text-xl max-w-md mb-8">
          Türkiye'nin tenis tutkunları için ikinci el ekipman pazarı çok yakında burada!
        </p>
        <a
          href="https://forms.gle/qxrqnWmxqygdwQ5H6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
        >
          E-posta ile haberdar ol
        </a>
      </main>

      <footer className="text-center py-6">
        <div className="flex gap-4 justify-center mb-2">
          <span className="text-xl">📸</span>
          <span className="text-xl">🐦</span>
          <span className="text-xl">💬</span>
        </div>
        <p className="text-sm opacity-60">© 2025 DeuceDeal</p>
      </footer>

      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="none">
          <rect width="800" height="600" fill="#4CAF50"/>
          <line x1="0" y1="300" x2="800" y2="300" stroke="#F4F4F4" strokeWidth="10"/>
          <line x1="400" y1="0" x2="400" y2="600" stroke="#F4F4F4" strokeWidth="10"/>
          <circle cx="400" cy="300" r="40" stroke="#F4F4F4" strokeWidth="6" fill="none"/>
        </svg>
      </div>
    </div>
  );
}
