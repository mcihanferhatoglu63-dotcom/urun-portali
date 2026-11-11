import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Platformu',
      badge: 'GÖRSEL SİTE MİMARİSİ',
      description: 'Daire haritası, otomatik aidat takibi ve canlı gelir-gider raporlaması.',
      link: 'https://site-yonetimi.vercel.app',
      accent: 'from-blue-500 to-cyan-400',
      glow: 'group-hover:shadow-cyan-500/30 group-hover:border-cyan-500/50',
      type: 'site',
    },
    {
      id: 'pos-adisyon',
      title: 'Restoran & Kafe POS Adisyon Sistemi',
      badge: 'CANLI MASA HARİTASI',
      description: 'Çoklu garson senkronizasyonu, QR menü ve anlık adisyon yönetimi.',
      link: 'https://pos-adisyon.vercel.app',
      accent: 'from-purple-500 to-pink-500',
      glow: 'group-hover:shadow-pink-500/30 group-hover:border-pink-500/50',
      type: 'pos',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* ÇİFT RENK CANLI AMBİYANS IŞIKLARI & PARLAMALAR */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0f19]/70 border-b border-slate-800/80 px-4 sm:px-8 py-4 shadow-lg shadow-cyan-950/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-1.5 flex items-center justify-center shadow-lg shadow-cyan-500/10 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-base text-white tracking-wide">Ürünlerim</span>
              <span className="block text-[10px] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono font-semibold">Live Dashboard Vitrini</span>
            </div>
          </div>

          <a 
            href="#demo"
            className="px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-all shadow-md shadow-cyan-500/10"
          >
            Sistemleri İncele
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="max-w-5xl mx-auto text-center pt-14 sm:pt-20 pb-10 sm:pb-16 px-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          Canlı Ekran Önizlemeleri & Aydınlık Arayüz
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Yönetimi Kolaylaştıran <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.2)]">
            İnteraktif Arayüzler
          </span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-normal">
          Karmaşık süreçleri tek bir ekranda basitleştiren, canlı ve hızlı yönetim panellerini keşfedin.
        </p>
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
              className={`group relative rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 backdrop-blur-2xl shadow-2xl ${project.glow} flex flex-col justify-between overflow-hidden`}
            >
              {/* Kart İçerisinden Sızan Hafif Renk Işıması */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    {project.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                    Canlı Demo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* İNTERAKTİF PANELLER */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#121826] border border-slate-700/80 p-4 overflow-hidden group-hover:border-cyan-500/50 transition-all shadow-inner">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono pl-2">
                      {project.type === 'site' ? 'site-admin-v2.0' : 'pos-terminal-v3.1'}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">ONLINE</span>
                </div>

                {project.type === 'site' ? (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-semibold">Blok / Daire</div>
                      <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-between text-[11px] text-cyan-200 font-medium shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        <span>A Blok D:12</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
                        A Blok D:13
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
                        B Blok D:04
                      </div>
                    </div>

                    <div className="col-span-2 space-y-3">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center shadow-md">
                        <div>
                          <div className="text-[9px] text-slate-300 font-medium">Aylık Toplam Aidat</div>
                          <div className="text-sm font-extrabold text-emerald-400">₺48.500,00</div>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Ödendi</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-300 font-medium">
                          <span>Gelir Dağılımı</span>
                          <span className="text-cyan-300">%92 Tahsilat</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-700">
                          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[92%] rounded-full shadow-[0_0_8px_#22d3ee]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-2 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-semibold">Masa Düzeni (Canlı)</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-center text-[10px] text-emerald-300 font-bold shadow-sm">
                          Masa 1 <span className="block text-[8px] font-normal text-slate-300">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-center text-[10px] text-slate-400">
                          Masa 2 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-500/50 text-center text-[10px] text-pink-300 font-bold shadow-sm">
                          Masa 3 <span className="block text-[8px] font-normal text-slate-300">Hesap</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-center text-[10px] text-emerald-300 font-bold shadow-sm">
                          Masa 4 <span className="block text-[8px] font-normal text-slate-300">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-center text-[10px] text-slate-400">
                          Masa 5 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-center text-[10px] text-slate-400">
                          Masa 6 <span className="block text-[8px]">Boş</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-semibold">Adisyon #104</div>
                      <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-[9px] space-y-1 shadow-sm">
                        <div className="flex justify-between text-slate-200">
                          <span>2x Latte</span>
                          <span>₺180</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>1x Tatlı</span>
                          <span>₺140</span>
                        </div>
                        <div className="border-t border-slate-700 pt-1 flex justify-between font-bold text-pink-300">
                          <span>Toplam</span>
                          <span>₺320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Anında Çıkan Parlak Buton */}
                <div className="absolute inset-0 bg-[#0b0f19]/80 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className={`px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-2xl shadow-cyan-500/30 transform group-hover:scale-105 transition-transform flex items-center gap-2 border border-white/20`}>
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
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-400 px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}