import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Sistemi',
      tag: 'YÖNETİM PLAZASI',
      description: 'Kat görselleştirme, aidat ve gelir-gider takibi.',
      link: 'https://mcf-site-yonetimi-2.vercel.app',
      bgGradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      glowColor: 'group-hover:shadow-blue-500/20',
      accentColor: 'bg-blue-500',
    },
    {
      id: 'pos-adisyon',
      title: 'Kafe & Restoran POS Adisyon',
      tag: 'POS & ADİSYON',
      description: 'Canlı masa düzeni, garson senkronizasyonu ve QR menü.',
      link: 'https://pos-adisyon-system.vercel.app',
      bgGradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'group-hover:shadow-purple-500/20',
      accentColor: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* ARKA PLAN AMBİYANS IŞIKLARI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[450px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#030712]/80 border-b border-slate-800/80 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA (Public klasöründeki logo.png) */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-900 border border-slate-700/80 p-1.5 flex items-center justify-center shadow-lg shadow-indigo-500/10 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>

              <span className="block font-bold text-sm sm:text-base tracking-wide text-slate-200">MCF TECHNOLOGY & SOFTWARE SOLUTIONS</span>

            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Aktif</span>
          </div>
        </div>
      </header>

      {/* HERO ALANI (Mobilde taşmayı önleyen esnek fontlar) */}
      <section className="max-w-5xl mx-auto text-center pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 text-white leading-[1.15]">
          Yenilikçi Dijital <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Yönetim Sistemleri
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-lg max-w-xl mx-auto font-normal px-2">
          İşletmeleriniz ve mülkleriniz için geliştirilmiş, yüksek performanslı yeni nesil web çözümleri.
        </p>
      </section>

      {/* PROJE KARTLARI (Mobilde alt alta, masüstünde yan yana) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-8 transition-all duration-500 hover:-translate-y-2 ${project.borderColor} backdrop-blur-2xl shadow-2xl ${project.glowColor} flex flex-col justify-between overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                    {project.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* UYGULAMA PENCERESİ */}
              <div className="relative z-10 w-full h-40 sm:h-48 rounded-2xl bg-[#0b0f19] border border-slate-800/80 p-3 sm:p-4 flex flex-col justify-between overflow-hidden group-hover:border-slate-700 transition-colors shadow-inner">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-800/60">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  </div>

                </div>

                <div className="flex items-center justify-center my-auto">
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs font-bold text-white bg-slate-800/90 border border-slate-700/80 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all shadow-lg">
                    <span className={`w-2 h-2 rounded-full ${project.accentColor} animate-ping`} />
                    Sisteme Canlı Bağlan
                  </div>
                </div>

                <div className="w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-40" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-6 sm:py-8 text-center text-xs text-slate-600 px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}