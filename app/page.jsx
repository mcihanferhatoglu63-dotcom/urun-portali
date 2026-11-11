import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Platformu',
      badge: 'GÖRSEL SİTE MİMARİSİ',
      description: 'Daire haritası, otomatik aidat takibi ve canlı gelir-gider raporlaması.',
      link: 'https://site-yonetimi.vercel.app',
      accent: 'from-emerald-500 to-teal-500',
      badgeStyle: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
      hoverGlow: 'group-hover:shadow-emerald-500/25 group-hover:border-emerald-400/60',
      type: 'site',
    },
    {
      id: 'pos-adisyon',
      title: 'Restoran & Kafe POS Adisyon Sistemi',
      badge: 'CANLI MASA HARİTASI',
      description: 'Çoklu garson senkronizasyonu, QR menü ve anlık adisyon yönetimi.',
      link: 'https://pos-adisyon.vercel.app',
      accent: 'from-cyan-500 to-blue-600',
      badgeStyle: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
      hoverGlow: 'group-hover:shadow-cyan-500/25 group-hover:border-cyan-400/60',
      type: 'pos',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#041d15] via-[#092b2e] to-[#0a192f] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      

      <div className="absolute top-0 left-0 w-[600px] h-[700px] bg-emerald-500/20 blur-[160px] pointer-events-none -z-10 rounded-full" />
      {/* Orta Turkuaz / Aurora Geçişi */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-400/15 blur-[180px] pointer-events-none -z-10 rounded-full" />
      {/* Sağ Mavilik */}
      <div className="absolute top-0 right-0 w-[600px] h-[700px] bg-blue-600/25 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#071d20]/80 border-b border-teal-900/40 px-4 sm:px-8 py-4 shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900/90 border border-teal-600/40 p-1.5 flex items-center justify-center shadow-lg shadow-emerald-950/40 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-extrabold text-sm sm:text-base text-white tracking-wide">Ürünlerim</span>

            </div>
          </div>

          <a 
            href="#demo"
            className="px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:opacity-90 transition-all shadow-md shadow-emerald-900/40 border border-teal-400/30"
          >
            Sistemleri İncele
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="max-w-5xl mx-auto text-center pt-14 sm:pt-20 pb-10 sm:pb-16 px-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Canlı Önizleme
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Yönetimi Kolaylaştıran <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            İnteraktif Arayüzler
          </span>
        </h1>

      </section>

      {/* INTERACTIVE DASHBOARD CARDS GRID */}
      <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-3xl border border-teal-900/50 bg-[#0a2327]/60 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 backdrop-blur-2xl shadow-2xl shadow-black/40 ${project.hoverGlow} flex flex-col justify-between overflow-hidden`}
            >
              {/* Kart İçi Kuzey Işıkları Parlaması */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-blue-500/15 blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase border rounded-full ${project.badgeStyle}`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-bold text-teal-300/80 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                    Canlı Demo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-teal-200 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">
                  {project.description}
                </p>
              </div>

              {/* DASHBOARD PENCERESİ */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#06181b]/80 border border-teal-900/60 p-4 overflow-hidden group-hover:border-teal-500/40 transition-all shadow-inner">
                
                <div className="flex items-center justify-between pb-3 border-b border-teal-900/60">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] text-teal-300/80 font-mono font-semibold pl-2">
                      {project.type === 'site' ? 'site-admin-v2.0' : 'pos-terminal-v3.1'}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                    ONLINE
                  </span>
                </div>

                {project.type === 'site' ? (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-teal-300/80 uppercase font-bold">Blok / Daire</div>
                      <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-between text-[11px] text-emerald-200 font-bold">
                        <span>A Blok D:12</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="p-2 rounded-lg bg-[#0a2327] border border-teal-900/60 text-[11px] text-slate-300">
                        A Blok D:13
                      </div>
                      <div className="p-2 rounded-lg bg-[#0a2327] border border-teal-900/60 text-[11px] text-slate-300">
                        B Blok D:04
                      </div>
                    </div>

                    <div className="col-span-2 space-y-3">
                      <div className="p-3 rounded-xl bg-[#0a2327] border border-teal-900/80 flex justify-between items-center shadow-sm">
                        <div>
                          <div className="text-[9px] text-slate-300 font-semibold">Aylık Toplam Aidat</div>
                          <div className="text-sm font-black text-emerald-400">₺48.500,00</div>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold">Ödendi</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#0a2327]/60 border border-teal-900/60 space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-300 font-bold">
                          <span>Gelir Dağılımı</span>
                          <span className="text-emerald-300">%92 Tahsilat</span>
                        </div>
                        <div className="w-full bg-[#06181b] h-2.5 rounded-full overflow-hidden p-0.5 border border-teal-900">
                          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[92%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-2 space-y-2">
                      <div className="text-[9px] font-mono text-teal-300/80 uppercase font-bold">Masa Düzeni (Canlı)</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-center text-[10px] text-emerald-200 font-extrabold">
                          Masa 1 <span className="block text-[8px] font-medium text-slate-300">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0a2327] border border-teal-900/60 text-center text-[10px] text-slate-400">
                          Masa 2 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-center text-[10px] text-cyan-200 font-extrabold">
                          Masa 3 <span className="block text-[8px] font-medium text-slate-300">Hesap</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-center text-[10px] text-emerald-200 font-extrabold">
                          Masa 4 <span className="block text-[8px] font-medium text-slate-300">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0a2327] border border-teal-900/60 text-center text-[10px] text-slate-400">
                          Masa 5 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0a2327] border border-teal-900/60 text-center text-[10px] text-slate-400">
                          Masa 6 <span className="block text-[8px]">Boş</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-teal-300/80 uppercase font-bold">Adisyon #104</div>
                      <div className="p-2.5 rounded-lg bg-[#0a2327] border border-teal-900/80 text-[9px] space-y-1.5 shadow-sm">
                        <div className="flex justify-between text-slate-200 font-medium">
                          <span>2x Latte</span>
                          <span>₺180</span>
                        </div>
                        <div className="flex justify-between text-slate-200 font-medium">
                          <span>1x Tatlı</span>
                          <span>₺140</span>
                        </div>
                        <div className="border-t border-teal-900 pt-1 flex justify-between font-extrabold text-cyan-300">
                          <span>Toplam</span>
                          <span>₺320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-[#071d20]/90 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className={`px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-2xl shadow-black/50 transform group-hover:scale-105 transition-transform flex items-center gap-2 border border-white/20`}>
                    Uygulamaya Bağlan
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-teal-900/40 bg-[#071d20] py-8 text-center text-xs text-teal-300/70 font-medium px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}