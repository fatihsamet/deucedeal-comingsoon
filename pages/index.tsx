import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-green-800 min-h-screen flex flex-col justify-center items-center text-white px-4 text-center">
      <Head>
        <title>DeuceDeal - Coming Soon</title>
      </Head>

      <img src="/logo.png" alt="DeuceDeal Logo" className="w-48 mb-6" />

      <h1 className="text-3xl md:text-5xl font-bold mb-4">GAME. SET. DEAL.</h1>

      <p className="text-lg md:text-xl max-w-xl mb-6">
        Türkiye’nin tenis tutkunları için ikinci el ekipman pazarı çok yakında burada!
        Uygulama lansmanında ilk sen haberdar olmak istiyorsan e-posta adresini bırak.
      </p>

      <a
        href="https://forms.gle/qxrqnWmxqygdwQ5H6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-green-800 font-semibold py-2 px-6 rounded-full hover:bg-green-100 transition"
      >
        E-posta ile haberdar ol
      </a>

      <div className="mt-10 text-sm opacity-70">
        <p>© {new Date().getFullYear()} DeuceDeal. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}
