import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Platformu',
      badge: 'GÖRSEL SİTE MİMARİSİ',
      description: 'Daire haritası, otomatik aidat takibi ve canlı gelir-gider raporlaması.',
      link: 'https://site-yonetimi.vercel.app',
      accent: 'from-blue-600 to-cyan-500',
      badgeStyle: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      hoverBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/15',
      type: 'site',
    },
    {
      id: 'pos-adisyon',
      title: 'Restoran & Kafe POS Adisyon Sistemi',
      badge: 'CANLI MASA HARİTASI',
      description: 'Çoklu garson senkronizasyonu, QR menü ve anlık adisyon yönetimi.',
      link: 'https://pos-adisyon.vercel.app',
      accent: 'from-indigo-600 to-purple-600',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200',
      hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/15',
      type: 'pos',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* AYDINLIK ÇİFT RENK PASTEL IŞIK BULUTLARI & DESEN */}
      <div 
        className="absolute inset-0 pointer-events-none -z-20 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-200/60 via-sky-200/50 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[450px] bg-gradient-to-br from-indigo-200/60 via-purple-200/50 to-transparent blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/80 px-4 sm:px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shadow-md shadow-slate-200/60 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-extrabold text-sm sm:text-base text-slate-900 tracking-wide">Ürünlerim</span>
              <span className="block text-[10px] bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 font-mono font-bold">
                Live Dashboard Vitrini
              </span>
            </div>
          </div>

          <a 
            href="#demo"
            className="px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-md shadow-indigo-500/20"
          >
            Sistemleri İncele
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="max-w-5xl mx-auto text-center pt-14 sm:pt-20 pb-10 sm:pb-16 px-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-white/90 text-indigo-700 text-xs font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Canlı Ekran Önizlemeleri
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
          Yönetimi Kolaylaştıran <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
            İnteraktif Arayüzler
          </span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
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
              className={`group relative rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl shadow-xl shadow-slate-200/60 ${project.hoverBorder} flex flex-col justify-between overflow-hidden`}
            >
              {/* Kart Köşesinden Gelen Yumuşak Renk Parlaması */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-cyan-300/30 to-purple-300/30 blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase border rounded-full ${project.badgeStyle}`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                    Canlı Demo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  {project.description}
                </p>
              </div>

              {/* AYDINLIK İNTERAKTİF DASHBOARD PENCERESİ */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-50 border border-slate-200/90 p-4 overflow-hidden group-hover:border-indigo-300 transition-all shadow-inner">
                
                {/* Pencere Üst Çubuğu */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono font-semibold pl-2">
                      {project.type === 'site' ? 'site-admin-v2.0' : 'pos-terminal-v3.1'}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-mono font-bold">
                    ONLINE
                  </span>
                </div>

                {project.type === 'site' ? (
                  /* Site Yönetim Aydınlık Dashboard Önizlemesi */
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Blok / Daire</div>
                      <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-between text-[11px] text-cyan-900 font-bold shadow-sm">
                        <span>A Blok D:12</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 font-medium">
                        A Blok D:13
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 font-medium">
                        B Blok D:04
                      </div>
                    </div>

                    <div className="col-span-2 space-y-3">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center shadow-sm">
                        <div>
                          <div className="text-[9px] text-slate-500 font-semibold">Aylık Toplam Aidat</div>
                          <div className="text-sm font-black text-emerald-600">₺48.500,00</div>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 font-bold">Ödendi</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
                        <div className="flex justify-between text-[9px] text-slate-600 font-bold">
                          <span>Gelir Dağılımı</span>
                          <span className="text-cyan-600">%92 Tahsilat</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
                          <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full w-[92%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* POS Adisyon Aydınlık Dashboard Önizlemesi */
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-2 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Masa Düzeni (Canlı)</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-center text-[10px] text-emerald-800 font-extrabold shadow-sm">
                          Masa 1 <span className="block text-[8px] font-medium text-emerald-600">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500 font-medium">
                          Masa 2 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-50 border border-purple-300 text-center text-[10px] text-purple-800 font-extrabold shadow-sm">
                          Masa 3 <span className="block text-[8px] font-medium text-purple-600">Hesap</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-center text-[10px] text-emerald-800 font-extrabold shadow-sm">
                          Masa 4 <span className="block text-[8px] font-medium text-emerald-600">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500 font-medium">
                          Masa 5 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500 font-medium">
                          Masa 6 <span className="block text-[8px]">Boş</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Adisyon #104</div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[9px] space-y-1.5 shadow-sm">
                        <div className="flex justify-between text-slate-700 font-medium">
                          <span>2x Latte</span>
                          <span>₺180</span>
                        </div>
                        <div className="flex justify-between text-slate-700 font-medium">
                          <span>1x Tatlı</span>
                          <span>₺140</span>
                        </div>
                        <div className="border-t border-slate-200 pt-1 flex justify-between font-extrabold text-purple-700">
                          <span>Toplam</span>
                          <span>₺320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Anında Çıkan Ferah Buton */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className={`px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-xl shadow-indigo-500/25 transform group-hover:scale-105 transition-transform flex items-center gap-2`}>
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
      <footer className="border-t border-slate-200/80 bg-white/50 py-8 text-center text-xs text-slate-500 font-medium px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}