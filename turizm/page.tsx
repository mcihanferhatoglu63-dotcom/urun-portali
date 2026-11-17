"use client";
import React, { useState } from "react";
import { 
  Building2, Hotel, Users, ShieldCheck, 
  PlusCircle, Calendar, MessageSquare, X, CheckCircle2 
} from "lucide-react";

// Tip Tanımlamaları
interface Tenant {
  id: string;
  name: string;
  plan: string;
  expires: string;
  status: string;
}

interface InventoryItem {
  id: string;
  type: string;
  title: string;
  netPrice: number;
  b2cPrice: number;
  quota: number;
}

interface Booking {
  pnr: string;
  customer: string;
  phone: string;
  item: string;
  amount: number;
  commission: number;
  status: string;
}

export default function TurizmSaaSPanel() {
  const [currentRole, setCurrentRole] = useState<"SUPER_ADMIN" | "TENANT_ADMIN" | "SUB_AGENT">("SUPER_ADMIN");
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const [tenants, setTenants] = useState<Tenant[]>([
    { id: "t1", name: "Akdeniz Butik Turizm", plan: "PRO", expires: "2026-12-31", status: "Aktif" },
    { id: "t2", name: "Toros Dağcılık & Pansiyon", plan: "BASIC", expires: "2026-06-15", status: "Aktif" },
    { id: "t3", name: "Kızkalesi VIP Transfer & Otel", plan: "TRIAL", expires: "2026-11-25", status: "Beklemede" }
  ]);

  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: "inv1", type: "OTEL", title: "Kızkalesi Panorama Butik Otel", netPrice: 1200, b2cPrice: 1500, quota: 6 },
    { id: "inv2", type: "PANSİYON", title: "Silifke Sahil Aile Pansiyonu", netPrice: 800, b2cPrice: 1000, quota: 9 },
    { id: "inv3", type: "TUR", title: "Kapadokya Balon & Konaklama Turu", netPrice: 3500, b2cPrice: 4200, quota: 12 },
    { id: "inv4", type: "OTOBÜS", title: "Mersin - İstanbul 2+1 VIP Koltuk", netPrice: 850, b2cPrice: 1000, quota: 4 },
    { id: "inv5", type: "UÇAK", title: "Çukurova - Sabiha Gökçen Blok Bilet", netPrice: 1650, b2cPrice: 1950, quota: 7 }
  ]);

  const [bookings, setBookings] = useState<Booking[]>([
    { pnr: "PNR-9281", customer: "Ahmet Yılmaz", phone: "905320000001", item: "Kızkalesi Panorama Butik Otel", amount: 1500, commission: 300, status: "Onaylandı" },
    { pnr: "PNR-9282", customer: "Elif Demir", phone: "905320000002", item: "Mersin - İstanbul 2+1 VIP Koltuk", amount: 1000, commission: 150, status: "Beklemede" }
  ]);

  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItem || !customerName) return;

    const newPnr = "PNR-" + Math.floor(1000 + Math.random() * 9000);
    const earnedCommission = selectedItem.b2cPrice - selectedItem.netPrice;

    const newBooking: Booking = {
      pnr: newPnr,
      customer: customerName,
      phone: customerPhone.replace(/\D/g, ""),
      item: selectedItem.title,
      amount: selectedItem.b2cPrice,
      commission: earnedCommission,
      status: "Onaylandı"
    };

    setBookings([newBooking, ...bookings]);
    setInventory(inventory.map(inv => 
      inv.id === selectedItem.id ? { ...inv, quota: Math.max(0, inv.quota - 1) } : inv
    ));

    setSelectedItem(null);
    setCustomerName("");
    setCustomerPhone("");
    setActiveTab("bookings");
  };

  const sendWhatsAppVoucher = (booking: Booking) => {
    const message = `Merhaba *${booking.customer}*,%0A%0ARezervasyon belgeniz (Voucher) aşağıdadır:%0A%0A🎫 *PNR Kodu:* ${booking.pnr}%0A🏨 *Hizmet:* ${booking.item}%0A💳 *Tutar:* ${booking.amount} ₺%0A✅ *Durum:* ${booking.status}%0A%0ABizi tercih ettiğiniz için teşekkür eder, iyi yolculuklar dileriz.`;
    const phoneParam = booking.phone ? booking.phone : "";
    const whatsappUrl = `https://wa.me/${phoneParam}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const cycleTenantPlan = (id: string) => {
    const order = ["TRIAL", "BASIC", "PRO"];
    setTenants(tenants.map(t => {
      if (t.id !== id) return t;
      const nextPlan = order[(order.indexOf(t.plan) + 1) % order.length];
      return { ...t, plan: nextPlan, status: "Aktif" };
    }));
  };

  const totalCommission = bookings.reduce((acc, b) => acc + b.commission, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-500/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Turizm & Acente B2B Hub</h1>
            <p className="text-xs text-slate-400">Otel, Pansiyon, Tur & Ulaşım Müsaitlik Sistemi</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <span className="text-xs text-slate-400 px-2 font-medium hidden sm:inline">Görünüm:</span>
          <button onClick={() => setCurrentRole("SUPER_ADMIN")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${currentRole === "SUPER_ADMIN" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}>Süper Admin (Sen)</button>
          <button onClick={() => setCurrentRole("TENANT_ADMIN")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${currentRole === "TENANT_ADMIN" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}>İşletme Sahibi</button>
          <button onClick={() => setCurrentRole("SUB_AGENT")} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${currentRole === "SUB_AGENT" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"}`}>Aracı / Sub-Agent</button>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-slate-900/50 border-r border-slate-800 p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-slate-500 uppercase px-3 mb-1">
            {currentRole === "SUPER_ADMIN" ? "Sistem Yönetimi" : currentRole === "TENANT_ADMIN" ? "İşletme Paneli" : "Aracı Satış Paneli"}
          </p>

          <button onClick={() => setActiveTab("dashboard")} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === "dashboard" ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800/50"}`}>
            <Calendar className="w-4 h-4" /> Müsaitlik & Hızlı Satış
          </button>

          {currentRole === "SUPER_ADMIN" && (
            <button onClick={() => setActiveTab("tenants")} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === "tenants" ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800/50"}`}>
              <ShieldCheck className="w-4 h-4" /> İşletmeler & Paketler
            </button>
          )}

          <button onClick={() => setActiveTab("bookings")} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === "bookings" ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" : "text-slate-400 hover:bg-slate-800/50"}`}>
            <Users className="w-4 h-4" /> Rezervasyonlar & Voucher
          </button>

          <div className="mt-auto bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <p className="text-xs text-slate-400 mb-1">Toplam Aracı Komisyonu</p>
            <p className="text-xl font-bold text-emerald-400">+{totalCommission.toLocaleString("tr-TR")} ₺</p>
            <p className="text-[11px] text-slate-500 mt-1">{bookings.length} adet aktif satıştan</p>
          </div>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">
          {currentRole === "SUPER_ADMIN" && activeTab === "tenants" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">Kayıtlı İşletmeler & Abonelik Paketleri</h2>
                <p className="text-sm text-slate-400">Sistemi kullanan acente, otel ve pansiyonların lisans paketlerini yönetin.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/50">
                      <th className="p-4">İşletme Adı</th>
                      <th className="p-4">Paket</th>
                      <th className="p-4">Bitiş Tarihi</th>
                      <th className="p-4">Durum</th>
                      <th className="p-4">Paket İşlemi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    {tenants.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-800/30 transition">
                        <td className="p-4 font-semibold text-white">{t.name}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${t.plan === "PRO" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"}`}>
                            {t.plan}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300">{t.expires}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-md text-xs ${t.status === "Aktif" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                            {t.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button onClick={() => cycleTenantPlan(t.id)} className="text-indigo-400 hover:text-indigo-300 font-semibold text-xs bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 transition">
                            Paketi Değiştir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">Anlık Müsaitlik ve Hızlı Satış Havuzu</h2>
                <p className="text-sm text-slate-400">Otel, pansiyon, tur, otobüs ve uçak blok kontenjanlarından anında satış yapın.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inventory.map((item) => (
                  <div key={item.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-2.5 py-1 rounded-lg font-bold">
                          {item.type}
                        </span>
                        <span className={`text-xs font-medium ${item.quota > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                          {item.quota > 0 ? `Kalan: ${item.quota} Kontenjan` : "Tükendi"}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-base mb-3">{item.title}</h3>
                      <div className="text-sm text-slate-400 space-y-1.5 mb-5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                        <p className="flex justify-between">
                          <span>Net B2B Maliyet:</span>
                          <strong className="text-slate-200">{item.netPrice} ₺</strong>
                        </p>
                        <p className="flex justify-between">
                          <span>Müşteri Satış Fiyatı:</span>
                          <strong className="text-indigo-400">{item.b2cPrice} ₺</strong>
                        </p>
                        <p className="flex justify-between border-t border-slate-800 pt-1.5 text-xs">
                          <span>Aracı Net Kazancı:</span>
                          <strong className="text-emerald-400">+{item.b2cPrice - item.netPrice} ₺</strong>
                        </p>
                      </div>
                    </div>
                    <button 
                      disabled={item.quota === 0}
                      onClick={() => setSelectedItem(item)}
                      className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
                      <PlusCircle className="w-4 h-4" /> Hemen Rezervasyon Gir
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">Rezervasyonlar, Komisyon & WhatsApp Voucher</h2>
                <p className="text-sm text-slate-400">Kesilen PNR kayıtlarını yönetin ve müşteriye tek tıkla WhatsApp üzerinden fiş gönderin.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/50">
                      <th className="p-4">PNR Kodu</th>
                      <th className="p-4">Müşteri</th>
                      <th className="p-4">Hizmet</th>
                      <th className="p-4">Satış Tutarı</th>
                      <th className="p-4">Aracı Payı</th>
                      <th className="p-4">Durum</th>
                      <th className="p-4">Voucher Paylaş</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-sm">
                    {bookings.map((b, i) => (
                      <tr key={i} className="hover:bg-slate-800/30 transition">
                        <td className="p-4 font-mono font-bold text-indigo-400">{b.pnr}</td>
                        <td className="p-4">
                          <div className="text-white font-medium">{b.customer}</div>
                          {b.phone && <div className="text-xs text-slate-500">{b.phone}</div>}
                        </td>
                        <td className="p-4 text-slate-300">{b.item}</td>
                        <td className="p-4 font-semibold text-white">{b.amount} ₺</td>
                        <td className="p-4 text-emerald-400 font-semibold">+{b.commission} ₺</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${b.status === "Onaylandı" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button onClick={() => sendWhatsAppVoucher(b)} className="bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition">
                            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Gönder
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Yeni Rezervasyon & PNR Kes</h3>
              <button onClick={() => setSelectedItem(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-4 text-sm">
              <p className="font-semibold text-indigo-400">{selectedItem.title}</p>
              <p className="text-slate-400 text-xs mt-1">
                Satış Fiyatı: <strong className="text-white">{selectedItem.b2cPrice} ₺</strong> • Kazancınız: <strong className="text-emerald-400">+{selectedItem.b2cPrice - selectedItem.netPrice} ₺</strong>
              </p>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Müşteri Adı Soyadı *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Örn: Mehmet Kaya"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Müşteri WhatsApp Telefonu (Başında 90 ile)</label>
                <input 
                  type="text" 
                  placeholder="Örn: 905321234567"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setSelectedItem(null)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl text-sm font-semibold transition">İptal</button>
                <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> PNR Oluştur
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}