import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-court-line flex flex-col items-center justify-between text-green-900 relative overflow-hidden">
      <Head>
        <title>DeuceDeal - Coming Soon</title>
      </Head>

      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <img src="/logo.png" alt="DeuceDeal Logo" className="w-36 mb-4" />
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

      <footer className="text-center pb-10">
        <div className="flex gap-4 justify-center mb-4">
          <span className="text-xl">📸</span>
          <span className="text-xl">🐦</span>
          <span className="text-xl">💬</span>
        </div>
        <p className="text-sm opacity-60">© 2025 DeuceDeal</p>
      </footer>

      <svg className="absolute bottom-0 left-0 w-full h-48 opacity-30 pointer-events-none" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="200" fill="#4CAF50"/>
        <line x1="0" y1="100" x2="800" y2="100" stroke="#F4F4F4" strokeWidth="10"/>
        <line x1="400" y1="0" x2="400" y2="200" stroke="#F4F4F4" strokeWidth="10"/>
        <circle cx="400" cy="100" r="35" stroke="#F4F4F4" strokeWidth="6" fill="none"/>
      </svg>
    </div>
  );
}
