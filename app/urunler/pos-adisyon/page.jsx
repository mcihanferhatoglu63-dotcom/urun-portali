import Link from 'next/link';

export default function PosAdisyonPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* ÜST MENÜ */}
      <header style={{ borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 'bold', fontSize: '20px', color: '#ffffff', textDecoration: 'none' }}>
            &larr; Ana Sayfa
          </Link>
          <div style={{ fontSize: '14px', color: '#818cf8', fontWeight: 'bold' }}>
            Kafe & Restoran POS Adisyon Sistemi
          </div>
        </div>
      </header>

      {/* DETAY BAŞLIK */}
      <section style={{ padding: '64px 24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#818cf8', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Restoran Otomasyon Çözümleri
        </span>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#ffffff', marginTop: '16px', marginBottom: '24px' }}>
          Kafe & Restoran POS Adisyon Sistemi
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: '1.6' }}>
          Çoklu garson senkronizasyonu, canlı masa düzeni haritası, QR müşteri menüsü ve SüperAdmin yetkilendirmesiyle işletmenizin operasyonel hızını zirveye taşıyın.
        </p>
      </section>

      {/* ÖZELLİKLER GRİDİ */}
      <section style={{ padding: '32px 24px', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            ⚡ Anlık Garson & Mutfak Senkronizasyonu
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Garsonların masadan aldığı siparişler saniyeler içinde mutfak ekranına düşer. Hazırlanan siparişler anlık olarak güncellenerek gecikmelerin önüne geçilir.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            🗺️ Görsel Masa Düzeni Haritası
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Salon ve bahçe yerleşimine uygun dinamik masa düzeni. Dolu, boş veya hesap isteyen masaları renk kodlarıyla tek ekrandan kolayca yönetin.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            📱 QR Müşteri Menüsü
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Müşterilerin masalarındaki karekod ile menüyü incelemesini ve dilerlerse doğrudan kendi cihazlarından sipariş vermesini sağlayan modern altyapı.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
            🔐 SüperAdmin Plan Yönetimi
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            İşletme bazlı yetkilendirmeler ve plan (Pro, Trial, Basic) seçimleri yalnızca SüperAdmin kontrolünde güvenle yönetilir.
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