import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Platformu',
      badge: 'GÖRSEL SİTE MİMARİSİ',
      description: 'Daire haritası, otomatik aidat takibi ve canlı gelir-gider raporlaması.',
      link: 'https://site-yonetimi.vercel.app',
      accent: 'from-emerald-600 to-teal-600',
      badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      hoverGlow: 'group-hover:shadow-emerald-500/20 group-hover:border-emerald-400',
      type: 'site',
    },
    {
      id: 'pos-adisyon',
      title: 'Restoran & Kafe POS Adisyon Sistemi',
      badge: 'CANLI MASA HARİTASI',
      description: 'Çoklu garson senkronizasyonu, QR menü ve anlık adisyon yönetimi.',
      link: 'https://pos-adisyon.vercel.app',
      accent: 'from-teal-600 to-cyan-600',
      badgeStyle: 'bg-teal-100 text-teal-800 border-teal-200',
      hoverGlow: 'group-hover:shadow-teal-500/20 group-hover:border-teal-400',
      type: 'pos',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-[#ecfdf5] to-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      
      {/* FERAH AÇIK YEŞİL VE PASTEL IŞIK KÜRELERİ */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-200/50 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[500px] bg-teal-200/50 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-emerald-100 px-4 sm:px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-emerald-200 p-1.5 flex items-center justify-center shadow-md shadow-emerald-900/5 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-extrabold text-sm sm:text-base text-slate-900 tracking-wide">Ürünlerim</span>
              <span className="block text-[10px] bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 font-mono font-bold">
                Eco-Fresh Portal
              </span>
            </div>
          </div>

          <a 
            href="#demo"
            className="px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 transition-all shadow-md shadow-emerald-600/20"
          >
            Sistemleri İncele
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="max-w-5xl mx-auto text-center pt-14 sm:pt-20 pb-10 sm:pb-16 px-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Canlı Ekran Önizlemeleri
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
          Yönetimi Kolaylaştıran <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            İnteraktif Arayüzler
          </span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto font-medium">
          Açık yeşil tonlarının ferahlığıyla tasarlanmış canlı yönetim panelleri.
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
              className={`group relative rounded-3xl border border-emerald-100 bg-white/90 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl shadow-xl shadow-emerald-900/5 ${project.hoverGlow} flex flex-col justify-between overflow-hidden`}
            >
              {/* Kart İçi Aydınlık Parlama */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase border rounded-full ${project.badgeStyle}`}>
                    {project.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                    Canlı Demo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  {project.description}
                </p>
              </div>

              {/* DASHBOARD PENCERESİ */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-50 border border-emerald-100 p-4 overflow-hidden group-hover:border-emerald-300 transition-all shadow-inner">
                
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
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold border border-emerald-200">
                    ONLINE
                  </span>
                </div>

                {project.type === 'site' ? (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Blok / Daire</div>
                      <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-between text-[11px] text-emerald-900 font-bold">
                        <span>A Blok D:12</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600">
                        A Blok D:13
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600">
                        B Blok D:04
                      </div>
                    </div>

                    <div className="col-span-2 space-y-3">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center shadow-sm">
                        <div>
                          <div className="text-[9px] text-slate-500 font-semibold">Aylık Toplam Aidat</div>
                          <div className="text-sm font-black text-emerald-600">₺48.500,00</div>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">Ödendi</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-600 font-bold">
                          <span>Gelir Dağılımı</span>
                          <span className="text-emerald-600">%92 Tahsilat</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full w-[92%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    <div className="col-span-2 space-y-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Masa Düzeni (Canlı)</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300 text-center text-[10px] text-emerald-900 font-extrabold">
                          Masa 1 <span className="block text-[8px] font-medium text-emerald-700">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500">
                          Masa 2 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-teal-100 border border-teal-300 text-center text-[10px] text-teal-900 font-extrabold">
                          Masa 3 <span className="block text-[8px] font-medium text-teal-700">Hesap</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300 text-center text-[10px] text-emerald-900 font-extrabold">
                          Masa 4 <span className="block text-[8px] font-medium text-emerald-700">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500">
                          Masa 5 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-center text-[10px] text-slate-500">
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
                        <div className="border-t border-slate-200 pt-1 flex justify-between font-extrabold text-teal-700">
                          <span>Toplam</span>
                          <span>₺320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-white/80 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className={`px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-xl shadow-emerald-600/25 transform group-hover:scale-105 transition-transform flex items-center gap-2`}>
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
      <footer className="border-t border-emerald-100 bg-white/50 py-8 text-center text-xs text-slate-500 font-medium px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}