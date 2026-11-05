import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      
      {/* ÜST MENÜ */}
      <header style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#ffffff' }}>
            Ürünlerim
          </div>
          <nav style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
            <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Ana Sayfa</Link>
            <Link href="/urunler/site-yonetimi" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Site Yönetimi</Link>
            <Link href="/urunler/pos-adisyon" style={{ color: '#cbd5e1', textDecoration: 'none' }}>POS Adisyon</Link>
            <a href="#iletisim" style={{ color: '#38bdf8', textDecoration: 'none' }}>İletişim</a>
          </nav>
        </div>
      </header>

      {/* HERO BÖLÜMÜ */}
      <section style={{ padding: '96px 24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#ffffff' }}>
          İşletmeniz ve Mülkleriniz İçin Yeni Nesil Çözümler
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '32px' }}>
          Restoranınızın adisyon süreçlerini hızlandırın, sitenizin yönetimini tek ekrandan tamamen dijitalleştirin.
        </p>
      </section>

      {/* PROJE KARTLARI */}
      <section style={{ padding: '32px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        
        {/* Kart 1 */}
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Apartman & Site Yönetim Sistemi
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: '1.6' }}>
              Kat ve daire görselleştirme mimarisi, dinamik aidat takibi, gelir-gider hesaplaması ve şeffaf yönetim paneli.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link href="/urunler/site-yonetimi" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>
              Detayları İncele &rarr;
            </Link>
          </div>
        </div>

        {/* Kart 2 */}
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Kafe & Restoran POS Adisyon Sistemi
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: '1.6' }}>
              Çoklu garson senkronizasyonu, canlı masa düzeni haritası, QR müşteri menüsü ve SüperAdmin yetkilendirmesi.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link href="/urunler/pos-adisyon" style={{ color: '#818cf8', fontWeight: 'bold', textDecoration: 'none' }}>
              Detayları İncele &rarr;
            </Link>
          </div>
        </div>

      </section>

      {/* İLETİŞİM / TEKLİF AL BÖLÜMÜ */}
      <section id="iletisim" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '24px', padding: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
            Projeleriniz İçin Teklif Alın
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '32px', lineHeight: '1.6' }}>
            İşletmenize özel yazılım çözümleri, demo talepleri veya detaylı bilgi almak için doğrudan iletişime geçebilirsiniz.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a 
              href="mailto:iletisim@ornek.com" 
              style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}
            >
              E-Posta Gönder
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#059669', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}
            >
              WhatsApp ile Ulaş
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#64748b', marginTop: 'auto' }}>
        2026 Ürünlerim - Tüm Hakları Saklıdır.
      </footer>

    </div>
  );
}