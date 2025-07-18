import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-tennis-court bg-cover bg-center text-white flex flex-col justify-center items-center px-4">
      <Head>
        <title>Korttayız - Coming Soon</title>
      </Head>

      <img src="/logo.png" alt="Korttayız Logo" className="h-20 md:h-24 mb-6" />

      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">GAME. SET. DEAL.</h1>

      <p className="text-center max-w-md text-lg md:text-xl mb-6">
        Türkiye’nin tenis tutkunları için ikinci el ekipman pazarı çok yakında burada!
      </p>

      <a
        href="https://forms.gle/qxrqnWmxqygdwQ5H6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-green-900 font-semibold py-3 px-6 rounded-full transition hover:scale-105 shadow-lg mb-10"
      >
        E-posta ile haberdar ol
      </a>

      <p className="text-sm mt-6 opacity-60">© 2025 Korttayız</p>
    </div>
  );
}
