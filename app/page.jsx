import React from 'react';

export default function Home() {
  const projects = [
    {
      id: 'site-yonetim',
      title: 'Apartman & Site Yönetim Platformu',
      badge: 'GÖRSEL SİTE MİMARİSİ',
      description: 'Daire haritası, otomatik aidat takibi ve canlı gelir-gider raporlaması.',
      link: 'https://site-yonetimi.vercel.app',
      accent: 'from-blue-500 to-indigo-600',
      glow: 'group-hover:shadow-indigo-500/20',
      type: 'site',
    },
    {
      id: 'pos-adisyon',
      title: 'Restoran & Kafe POS Adisyon Sistemi',
      badge: 'CANLI MASA HARİTASI',
      description: 'Çoklu garson senkronizasyonu, QR menü ve anlık adisyon yönetimi.',
      link: 'https://pos-adisyon.vercel.app',
      accent: 'from-purple-500 to-pink-600',
      glow: 'group-hover:shadow-pink-500/20',
      type: 'pos',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* ARKA PLAN AMBİYANSI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[500px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* NAVBAR / HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO & MARKA */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1.5 flex items-center justify-center shadow-lg shadow-indigo-500/10 overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Eger logo.png bulunamazsa logo (2).png dener
                  if (!e.currentTarget.dataset.tried) {
                    e.currentTarget.dataset.tried = "true";
                    e.currentTarget.src = "/logo (2).png";
                  }
                }}
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-base text-white tracking-wide">Ürünlerim</span>
              <span className="block text-[10px] text-indigo-400 font-mono">Live Dashboard Vitrini</span>
            </div>
          </div>

          <a 
            href="#demo"
            className="px-4 py-2 text-xs font-semibold rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all"
          >
            Sistemleri İncele
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="max-w-5xl mx-auto text-center pt-12 sm:pt-20 pb-10 sm:pb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Canlı Ekran Önizlemeleri
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Yönetimi Kolaylaştıran <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            İnteraktif Arayüzler
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto font-normal">
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
              className={`group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 backdrop-blur-2xl shadow-2xl ${project.glow} flex flex-col justify-between overflow-hidden`}
            >
              {/* Kart Bilgileri */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                    {project.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                    Canlı Demo
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* BİREBİR İNTERAKTİF PANELLER (DASHBOARD MOCKUP) */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#0d111d] border border-slate-800 p-4 overflow-hidden group-hover:border-indigo-500/40 transition-all shadow-2xl">
                
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono pl-2">
                      {project.type === 'site' ? 'site-admin-v2.0' : 'pos-terminal-v3.1'}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">ONLINE</span>
                </div>

                {/* DİNAMİK ARAYÜZ SIMÜLASYONU */}
                {project.type === 'site' ? (
                  /* Site Yönetim Ekranı Simülasyonu */
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    {/* Sol Mini Menü & Daireler */}
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Blok / Daire</div>
                      <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between text-[11px] text-indigo-300 font-medium">
                        <span>A Blok D:12</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400">
                        A Blok D:13
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400">
                        B Blok D:04
                      </div>
                    </div>

                    {/* Sağ Finans Paneli */}
                    <div className="col-span-2 space-y-3">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                        <div>
                          <div className="text-[9px] text-slate-400">Aylık Toplam Aidat</div>
                          <div className="text-sm font-bold text-emerald-400">₺48.500,00</div>
                        </div>
                        <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/20 text-emerald-300">Ödendi</span>
                      </div>
                      {/* Simüle Grafik Çizgileri */}
                      <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-800/60 space-y-2">
                        <div className="flex justify-between text-[9px] text-slate-500">
                          <span>Gelir Dağılımı</span>
                          <span>%92 Tahsilat</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full w-[92%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* POS Adisyon Ekranı Simülasyonu */
                  <div className="pt-4 grid grid-cols-3 gap-3 h-full">
                    {/* Canlı Masa Düzeni */}
                    <div className="col-span-2 space-y-2">
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Masa Düzeni (Canlı)</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center text-[10px] text-emerald-300 font-bold">
                          Masa 1 <span className="block text-[8px] font-normal">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-center text-[10px] text-slate-500">
                          Masa 2 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-center text-[10px] text-purple-300 font-bold">
                          Masa 3 <span className="block text-[8px] font-normal">Hesap</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center text-[10px] text-emerald-300 font-bold">
                          Masa 4 <span className="block text-[8px] font-normal">Dolu</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-center text-[10px] text-slate-500">
                          Masa 5 <span className="block text-[8px]">Boş</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-center text-[10px] text-slate-500">
                          Masa 6 <span className="block text-[8px]">Boş</span>
                        </div>
                      </div>
                    </div>

                    {/* Sağ Adisyon Akışı */}
                    <div className="col-span-1 space-y-2">
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Adisyon #104</div>
                      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/60 text-[9px] space-y-1">
                        <div className="flex justify-between text-slate-300">
                          <span>2x Latte</span>
                          <span>₺180</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>1x Tatlı</span>
                          <span>₺140</span>
                        </div>
                        <div className="border-t border-slate-700 pt-1 flex justify-between font-bold text-purple-300">
                          <span>Toplam</span>
                          <span>₺320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Anında Çıkan Parlak Buton */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className={`px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-xl transform group-hover:scale-105 transition-transform flex items-center gap-2`}>
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
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600 px-4">
        © 2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}