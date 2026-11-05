import Link from 'next/link';

export default function SiteYonetimiPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* ÜST MENÜ */}
      <header style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 'bold', fontSize: '20px', color: '#ffffff', textDecoration: 'none' }}>
            &larr; Ana Sayfa
          </Link>
          <div style={{ fontSize: '14px', color: '#38bdf8', fontWeight: 'bold' }}>
            Apartman & Site Yönetim Sistemi
          </div>
        </div>
      </header>

      {/* DETAY BAŞLIK */}
      <section style={{ padding: '64px 24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Mülk Yönetim Çözümleri
        </span>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#ffffff', marginTop: '16px', marginBottom: '24px' }}>
          Apartman & Site Yönetim Sistemi
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: '1.6' }}>
          Kat ve dairelerinizi görsel olarak haritalandırın, aidat takibini otomatize edin ve tüm mali süreçleri şeffaf bir şekilde yönetin.
        </p>
      </section>

      {/* ÖZELLİKLER GRİDİ */}
      <section style={{ padding: '32px 24px', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            🏢 Görsel Kat ve Daire Mimarısı
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Binanızın kat sayısını ve her kattaki daire mimarisini görsel builder ile kolayca tanımlayın. Hangi dairede kimin oturduğunu ve borç durumunu tek bakışta görün.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            💰 Dinamik Aidat & Kasa Takibi
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Aylık aidat borçlandırmalarını otomatik yapın, ödemeleri işleyin, gelir-gider dengesini ve kasa durumunu anlık raporlayın.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            👥 Sakin & Yönetici Panelleri
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Kat malikleri kendi geçmiş ödemelerini inceleyebilir; yöneticiler ise geciken ödemeleri ve site duyurularını kolayca yönetebilir.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            🔒 Çoklu Mülk / Çoklu Tenant
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Tek bir platform üzerinden birden fazla apartman veya siteyi birbirinden tamamen bağımsız ve güvenli şekilde yönetin.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#64748b', marginTop: 'auto' }}>
        2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>

    </div>
  );
}