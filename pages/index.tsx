import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-court-line text-green-900 flex items-center justify-center px-4 relative overflow-hidden">
      <Head>
        <title>DeuceDeal - Coming Soon</title>
      </Head>

      <div className="flex flex-col items-center text-center max-w-xl gap-6 py-12 px-4 bg-white/70 backdrop-blur-md rounded-xl shadow-xl">
        <img src="/logo.png" alt="DeuceDeal Logo" className="h-20 w-auto object-contain" />

        <h1 className="text-4xl md:text-5xl font-extrabold">GAME. SET. DEAL.</h1>

        <p className="text-lg md:text-xl text-green-800">
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
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-40 opacity-20 pointer-events-none" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="200" fill="#4CAF50"/>
        <line x1="0" y1="100" x2="800" y2="100" stroke="#F4F4F4" strokeWidth="10"/>
        <line x1="400" y1="0" x2="400" y2="200" stroke="#F4F4F4" strokeWidth="10"/>
        <circle cx="400" cy="100" r="35" stroke="#F4F4F4" strokeWidth="6" fill="none"/>
      </svg>
    </div>
  );
}
