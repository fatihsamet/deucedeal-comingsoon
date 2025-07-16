import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-court-line flex flex-col items-center justify-between text-green-900 relative overflow-hidden">
      <Head>
        <title>DeuceDeal - Coming Soon</title>
      </Head>

      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-xl font-semibold mb-2">DeuceDeal</h1>
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

      <div className="absolute bottom-0 left-0 w-full h-48 bg-[url('/court-lines.svg')] bg-no-repeat bg-bottom bg-contain pointer-events-none opacity-40"></div>
    </div>
  );
}
