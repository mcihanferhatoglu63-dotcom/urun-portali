import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Sistemi',
      description: 'Kat ve daire görselleştirme mimarisi, dinamik aidat takibi, gelir-gider hesaplaması ve şeffaf yönetim paneli.',
      link: 'https://mcf-site-yonetimi-2.vercel.app/', // Projenizin linkini buraya yazabilirsiniz
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    },
    {
      id: 'pos-adisyon',
      title: 'Kafe & Restoran POS Adisyon Sistemi',
      description: 'Çoklu garson senkronizasyonu, canlı masa düzeni haritası, QR müşteri menüsü ve SuperAdmin yetkilendirmesi.',
      link: 'https://pos-adisyon-system.vercel.app/', // Projenizin linkini buraya yazabilirsiniz
      gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 overflow-hidden font-sans">
      {/* ARKA PLAN DERİNLİĞİ & GLOW EFEKTLERİ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/70 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Ürünlerim
            </h1>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projeler</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">Hakkımda</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">İletişim</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center pt-20 pb-16 px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 shadow-inner">
          ✨ Yazılım & Yönetim Çözümleri
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          İşletmeniz ve Mülkleriniz İçin <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Yeni Nesil Çözümler
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Restoranınızın adisyon süreçlerini hızlandırın, sitenizin yönetimini tek ekrandan tamamen dijitalleştirin.
        </p>
      </section>

      {/* PROJELER GRID (Tıklanabilir Kartlar) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Kart İçi Hafif Renk Parlaması */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Proje Başlığı */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  {project.title}
                  <svg
                    className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                
                {/* Açıklama */}
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* İncele Yazısı */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Sisteme Git
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 mt-20 py-8 text-center text-sm text-slate-500">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}