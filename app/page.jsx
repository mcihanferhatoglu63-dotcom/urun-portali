import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetimi',
      subtitle: 'Aidat, Gelir-Gider ve Daire Takip Paneli',
      link: 'https://mcf-site-yonetimi-2.vercel.app', // Kendi canlı linkinizle değiştirin
      badge: 'Yönetim Sistemi',
      accentColor: 'from-blue-500 to-cyan-400',
      glowColor: 'group-hover:shadow-cyan-500/20',
      // Proje görseliniz varsa public/ içine koyup yolunu verebilirsiniz
      previewBg: 'bg-gradient-to-br from-blue-900/40 via-slate-900 to-cyan-900/20',
    },
    {
      id: 'pos-adisyon',
      title: 'Kafe & Restoran POS Adisyon',
      subtitle: 'Canlı Masa Düzeni ve QR Menü Yönetimi',
      link: 'https://pos-adisyon-system.vercel.app', // Kendi canlı linkinizle değiştirin
      badge: 'POS & Adisyon',
      accentColor: 'from-purple-500 to-pink-500',
      glowColor: 'group-hover:shadow-pink-500/20',
      previewBg: 'bg-gradient-to-br from-purple-900/40 via-slate-900 to-pink-900/20',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* DINAMIK ARKAPLAN GEOMETRİSİ & IŞIKLAR */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full" />
      </div>

      {/* HEADER / LOGO */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* LOGO ALANI */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-slate-800 p-1.5 border border-slate-700/80 shadow-lg shadow-indigo-500/10 flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Logo bulunamazsa yedek ikon gösterir
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-indigo-400 font-black text-xl">Ü</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Ürünlerim
            </span>
          </div>

          <a 
            href="#projects" 
            className="px-4 py-2 text-xs font-semibold rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all shadow-sm"
          >
            Sistemler
          </a>
        </div>
      </header>

      {/* HERO SECTION - SADE VE GÖRSEL */}
      <section className="max-w-5xl mx-auto text-center pt-20 pb-12 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
          Canlı Yazılım Sistemleri
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
          Dijital Yönetim <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            Platformları
          </span>
        </h1>
      </section>

      {/* DİNAMİK KARTLAR GRID */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-xl ${project.glowColor}`}
            >
              {/* Kart İç Işığı */}
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all" />

              <div>
                {/* Rozet */}
                <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/60 rounded-full border border-slate-700/50 mb-4">
                  {project.badge}
                </span>

                {/* Başlık */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {project.title}
                </h2>

                <p className="text-slate-400 text-sm font-medium mb-6">
                  {project.subtitle}
                </p>
              </div>

              {/* DİNAMİK GÖRSEL MOCKUP ALANI */}
              <div className={`w-full h-44 rounded-2xl ${project.previewBg} border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-slate-700 transition-all`}>
                
                {/* Tarayıcı Üst Bar Efekti */}
                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">live preview</span>
                </div>

                {/* Ortadaki Dinamik Buton / Görsel İpucu */}
                <div className="flex items-center justify-center my-auto">
                  <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accentColor} shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform`}>
                    Sisteme Giriş Yap
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SADE FOOTER */}
      <footer className="mt-20 py-8 text-center text-xs text-slate-600 border-t border-slate-900">
        © 2026 Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}