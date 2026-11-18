"use client";

import React, { useState } from "react";
import {
  Building2,
  Users,
  ShieldCheck,
  Send,
  Plus,
  CheckCircle2,
  Calendar,
  X,
  Phone,
  User,
  Ticket,
  Sparkles,
  PackagePlus,
} from "lucide-react";

type UserRole = "SUPER_ADMIN" | "TENANT_ADMIN" | "SUB_AGENT";
type ActiveTab = "dashboard" | "tenants" | "bookings";

interface InventoryItem {
  id: string;
  category: string;
  title: string;
  quota: number;
  netPrice: number;
  sellPrice: number;
  commission: number;
}

interface BookingItem {
  pnr: string;
  customerName: string;
  customerPhone: string;
  itemTitle: string;
  pax: number;
  date: string;
  totalAmount: number;
  commissionEarned: number;
  status: string;
}

export default function TurizmSaaSPanel() {
  const [currentRole, setCurrentRole] = useState<UserRole>("SUPER_ADMIN");
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");

  // Canlı Envanter & Kontenjan State'i
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: "HTL-01",
      category: "OTEL",
      title: "Kızkalesi Panorama Butik Otel",
      quota: 6,
      netPrice: 1200,
      sellPrice: 1500,
      commission: 300,
    },
    {
      id: "PNS-02",
      category: "PANSİYON",
      title: "Silifke Sahil Aile Pansiyonu",
      quota: 9,
      netPrice: 800,
      sellPrice: 1000,
      commission: 200,
    },
    {
      id: "TUR-03",
      category: "TUR",
      title: "Kapadokya Balon & Konaklama Turu",
      quota: 12,
      netPrice: 3500,
      sellPrice: 4200,
      commission: 700,
    },
    {
      id: "OTB-04",
      category: "OTOBÜS",
      title: "Mersin - İstanbul 2+1 VIP Koltuk",
      quota: 4,
      netPrice: 850,
      sellPrice: 1000,
      commission: 150,
    },
    {
      id: "UCK-05",
      category: "UÇAK",
      title: "Çukurova - Sabiha Gökçen Blok Bilet",
      quota: 7,
      netPrice: 1650,
      sellPrice: 1950,
      commission: 300,
    },
  ]);

  // Canlı Rezervasyon & PNR State'i
  const [bookings, setBookings] = useState<BookingItem[]>([
    {
      pnr: "MCF-4821",
      customerName: "Ahmet Yılmaz",
      customerPhone: "905551112233",
      itemTitle: "Kızkalesi Panorama Butik Otel",
      pax: 1,
      date: "2026-11-22",
      totalAmount: 1500,
      commissionEarned: 300,
      status: "Onaylandı",
    },
    {
      pnr: "MCF-4822",
      customerName: "Zeynep Demir",
      customerPhone: "905554445566",
      itemTitle: "Mersin - İstanbul 2+1 VIP Koltuk",
      pax: 1,
      date: "2026-11-24",
      totalAmount: 1000,
      commissionEarned: 150,
      status: "Onaylandı",
    },
  ]);

  // Rezervasyon Modal State'leri
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paxCount, setPaxCount] = useState(1);
  const [travelDate, setTravelDate] = useState("2026-11-25");
  const [lastCreatedBooking, setLastCreatedBooking] = useState<BookingItem | null>(null);

  // Yeni Kontenjan Ekleme Modal State'leri
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("OTEL");
  const [newTitle, setNewTitle] = useState("");
  const [newQuota, setNewQuota] = useState(5);
  const [newNetPrice, setNewNetPrice] = useState(1000);
  const [newSellPrice, setNewSellPrice] = useState(1300);

  // Örnek İşletmeler (Süper Admin sekmesi için)
  const tenants = [
    { id: 1, name: "Akdeniz Turizm A.Ş.", plan: "Pro", subAgents: 14, revenue: "425.000 ₺", status: "Aktif" },
    { id: 2, name: "Erdemli & Silifke Travel", plan: "Basic", subAgents: 5, revenue: "148.000 ₺", status: "Aktif" },
    { id: 3, name: "Çukurova Express Acente", plan: "Trial", subAgents: 2, revenue: "34.500 ₺", status: "Deneme" },
  ];

  const totalCommission = bookings.reduce((acc, b) => acc + b.commissionEarned, 0);
  const calculatedNewCommission = Math.max(0, newSellPrice - newNetPrice);

  // Yeni Kontenjan Kaydetme Fonksiyonu
  const handleAddInventory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || newQuota <= 0) return;

    const newItem: InventoryItem = {
      id: `${newCategory.slice(0, 3)}-${Math.floor(10 + Math.random() * 89)}`,
      category: newCategory,
      title: newTitle.trim(),
      quota: newQuota,
      netPrice: newNetPrice,
      sellPrice: newSellPrice,
      commission: calculatedNewCommission,
    };

    setInventory([newItem, ...inventory]);
    setIsAddModalOpen(false);
    setNewTitle("");
    setNewQuota(5);
    setNewNetPrice(1000);
    setNewSellPrice(1300);
  };

  const openBookingModal = (item: InventoryItem) => {
    setSelectedItem(item);
    setCustomerName("");
    setCustomerPhone("");
    setPaxCount(1);
    setLastCreatedBooking(null);
  };

  const handleCreateReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItem || !customerName.trim() || !customerPhone.trim()) return;

    const randomPnr = `MCF-${Math.floor(1000 + Math.random() * 9000)}`;
    const cleanPhone = customerPhone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("90") ? cleanPhone : `90${cleanPhone.replace(/^0/, "")}`;

    const newBooking: BookingItem = {
      pnr: randomPnr,
      customerName: customerName.trim(),
      customerPhone: formattedPhone,
      itemTitle: selectedItem.title,
      pax: paxCount,
      date: travelDate,
      totalAmount: selectedItem.sellPrice * paxCount,
      commissionEarned: selectedItem.commission * paxCount,
      status: "Onaylandı",
    };

    setBookings([newBooking, ...bookings]);

    setInventory((prev) =>
      prev.map((inv) =>
        inv.id === selectedItem.id
          ? { ...inv, quota: Math.max(0, inv.quota - paxCount) }
          : inv
      )
    );

    setLastCreatedBooking(newBooking);
  };

  const sendWhatsAppVoucher = (b: BookingItem) => {
    const voucherText =
      `*MCF TURİZM-ACENTE | RESMİ VOUCHER*\n` +
      `----------------------------------\n` +
      `*PNR Kodu:* ${b.pnr}\n` +
      `*Misafir:* ${b.customerName}\n` +
      `*Hizmet:* ${b.itemTitle}\n` +
      `*Tarih:* ${b.date}\n` +
      `*Kişi / Adet:* ${b.pax}\n` +
      `*Toplam Tutar:* ${b.totalAmount} ₺\n` +
      `*Durum:* ${b.status}\n` +
      `----------------------------------\n` +
      `İyi yolculuklar ve iyi tatiller dileriz!`;

    window.open(`https://wa.me/${b.customerPhone}?text=${encodeURIComponent(voucherText)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      {/* ÜST BAR */}
      <header className="border-b border-slate-800/80 bg-[#0b101d] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-600/20">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">MCF TURİZM-ACENTE</h1>
            <p className="text-xs text-slate-400">Otel, Pansiyon, Tur & Ulaşım Müsaitlik Sistemi</p>
          </div>
        </div>

        {/* ROL DEĞİŞTİRİCİ */}
        <div className="flex items-center gap-2 bg-[#070b14] border border-slate-800 p-1.5 rounded-xl">
          <span className="text-xs text-slate-400 px-2 hidden sm:inline">Görünüm:</span>
          <button
            onClick={() => setCurrentRole("SUPER_ADMIN")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              currentRole === "SUPER_ADMIN"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Süper Admin (Sen)
          </button>
          <button
            onClick={() => setCurrentRole("TENANT_ADMIN")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              currentRole === "TENANT_ADMIN"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            İşletme Sahibi
          </button>
          <button
            onClick={() => setCurrentRole("SUB_AGENT")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              currentRole === "SUB_AGENT"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Aracı / Sub-Agent
          </button>
        </div>
      </header>

      {/* ANA GÖVDE */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* SOL MENÜ */}
        <aside className="w-full md:w-64 bg-[#0b101d]/70 border-r border-slate-800/80 p-4 flex flex-col gap-2">
          <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase px-3 mb-1">
            {currentRole === "SUPER_ADMIN"
              ? "SİSTEM YÖNETİMİ"
              : currentRole === "TENANT_ADMIN"
              ? "İŞLETME PANELİ"
              : "ARACI SATIŞ PANELİ"}
          </p>

          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
              activeTab === "dashboard"
                ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" /> Müsaitlik & Hızlı Satış
          </button>

          {currentRole === "SUPER_ADMIN" && (
            <button
              onClick={() => setActiveTab("tenants")}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "tenants"
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> İşletmeler & Paketler
            </button>
          )}

          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
              activeTab === "bookings"
                ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" /> Rezervasyonlar & Voucher
          </button>

          {/* SOL ALT KOMİSYON KARTI */}
          <div className="mt-auto bg-[#0f1626] border border-slate-800 rounded-2xl p-4">
            <p className="text-xs text-slate-400">Toplam Aracı Komisyonu</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">+{totalCommission} ₺</p>
            <p className="text-[11px] text-slate-500 mt-1">{bookings.length} adet aktif satıştan</p>
          </div>
        </aside>

        {/* SAĞ İÇERİK ALANI */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl">
          {/* SEKME 1: MÜSAİTLİK & HIZLI SATIŞ HAVUZU */}
          {activeTab === "dashboard" && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Anlık Müsaitlik ve Hızlı Satış Havuzu</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Otel, pansiyon, tur, otobüs ve uçak blok kontenjanlarından anında satış yapın.
                  </p>
                </div>

                {/* Sadece Süper Admin ve İşletme Sahibi yeni kontenjan ekleyebilir */}
                {currentRole !== "SUB_AGENT" && (
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition cursor-pointer shrink-0"
                  >
                    <PackagePlus className="w-4 h-4" /> + Yeni Kontenjan Ekle
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {inventory.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0e1422] border border-slate-800/90 hover:border-indigo-500/40 rounded-2xl p-5 flex flex-col justify-between transition"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {item.category}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            item.quota > 0 ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          {item.quota > 0 ? `Kalan: ${item.quota} Kontenjan` : "Kontenjan Doldu"}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-4">{item.title}</h3>

                      <div className="bg-[#080c16] border border-slate-800/80 rounded-xl p-3.5 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Net B2B Maliyet:</span>
                          <span className="font-semibold text-white">{item.netPrice} ₺</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Müşteri Satış Fiyatı:</span>
                          <span className="font-bold text-indigo-400">{item.sellPrice} ₺</span>
                        </div>
                        <div className="border-t border-slate-800 pt-2 flex justify-between">
                          <span className="text-slate-400">Aracı Net Kazancı:</span>
                          <span className="font-bold text-emerald-400">+{item.commission} ₺</span>
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={item.quota === 0}
                      onClick={() => openBookingModal(item)}
                      className="mt-5 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Hemen Rezervasyon Gir
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEKME 2: İŞLETMELER & PAKETLER (SUPER ADMIN) */}
          {activeTab === "tenants" && currentRole === "SUPER_ADMIN" && (
            <div className="bg-[#0e1422] border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-white">Kayıtlı Acenteler & SaaS Paketleri</h2>
                  <p className="text-xs text-slate-400">Sisteme bağlı tüm acentelerin abonelik ve hacim durumu</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#080c16] text-slate-400 text-xs uppercase">
                    <tr>
                      <th className="p-4">Acente Adı</th>
                      <th className="p-4">Paket</th>
                      <th className="p-4">Alt Acente</th>
                      <th className="p-4">Toplam Ciro</th>
                      <th className="p-4">Durum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {tenants.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-800/30">
                        <td className="p-4 font-medium text-white">{t.name}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-md text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {t.plan}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300">{t.subAgents} Şube</td>
                        <td className="p-4 font-semibold text-white">{t.revenue}</td>
                        <td className="p-4 text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> {t.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SEKME 3: REZERVASYONLAR & VOUCHER */}
          {activeTab === "bookings" && (
            <div className="bg-[#0e1422] border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-white">Kesilen PNR Kayıtları & Dijital Voucher</h2>
                  <p className="text-xs text-slate-400">Tamamlanan rezervasyonları tek tıkla müşteriye WhatsApp üzerinden gönderin</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#080c16] text-slate-400 text-xs uppercase">
                    <tr>
                      <th className="p-4">PNR Kodu</th>
                      <th className="p-4">Misafir</th>
                      <th className="p-4">Hizmet</th>
                      <th className="p-4">Tarih / Kişi</th>
                      <th className="p-4">Tutar</th>
                      <th className="p-4">Komisyon</th>
                      <th className="p-4">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {bookings.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="p-4 font-mono font-bold text-indigo-400">{b.pnr}</td>
                        <td className="p-4 font-medium text-white">{b.customerName}</td>
                        <td className="p-4 text-slate-300">{b.itemTitle}</td>
                        <td className="p-4 text-slate-400 text-xs">
                          {b.date} • {b.pax} Kişi
                        </td>
                        <td className="p-4 font-semibold text-white">{b.totalAmount} ₺</td>
                        <td className="p-4 font-bold text-emerald-400">+{b.commissionEarned} ₺</td>
                        <td className="p-4">
                          <button
                            onClick={() => sendWhatsAppVoucher(b)}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <Send className="w-3.5 h-3.5" /> WhatsApp Voucher
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

      {/* YENİ KONTENJAN / ÜRÜN EKLEME MODALI */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1422] border border-slate-700/80 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <PackagePlus className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white">Sisteme Yeni Kontenjan Ekle</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddInventory} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Hizmet Kategorisi</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                  >
                    <option value="OTEL">OTEL</option>
                    <option value="PANSİYON">PANSİYON</option>
                    <option value="TUR">TUR</option>
                    <option value="OTOBÜS">OTOBÜS</option>
                    <option value="UÇAK">UÇAK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Açık Kontenjan Adedi</label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={newQuota}
                    onChange={(e) => setNewQuota(Number(e.target.value))}
                    className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Tesis / Tur / Hat Adı</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Örn: Erdemli Kızkalesi Deniz Manzaralı Oda"
                  className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Net B2B Maliyet (₺)</label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={newNetPrice}
                    onChange={(e) => setNewNetPrice(Number(e.target.value))}
                    className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Müşteri Satış Fiyatı (₺)</label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={newSellPrice}
                    onChange={(e) => setNewSellPrice(Number(e.target.value))}
                    className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                  />
                </div>
              </div>

              {/* Otomatik Komisyon Hesaplama Önizlemesi */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex justify-between items-center">
                <span className="text-xs text-slate-300">Aracı Net Kazancı (Otomatik):</span>
                <span className="text-base font-bold text-emerald-400">+{calculatedNewCommission} ₺</span>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-xl transition cursor-pointer"
              >
                Havuzda Yayınla
              </button>
            </form>
          </div>
        </div>
      )}

      {/* REZERVASYON & PNR OLUŞTURMA MODALI */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1422] border border-slate-700/80 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white">Hızlı Rezervasyon & PNR</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!lastCreatedBooking ? (
              <form onSubmit={handleCreateReservation} className="space-y-4">
                <div className="bg-[#080c16] border border-slate-800 p-3.5 rounded-xl">
                  <p className="text-xs text-indigo-400 font-semibold">{selectedItem.category}</p>
                  <p className="text-sm font-bold text-white mt-0.5">{selectedItem.title}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Birim Satış: <span className="text-white font-semibold">{selectedItem.sellPrice} ₺</span> • Kalan Kontenjan:{" "}
                    <span className="text-emerald-400 font-semibold">{selectedItem.quota}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Misafir Adı Soyadı</label>
                  <div className="flex items-center gap-2 bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5">
                    <User className="w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Örn: Mehmet Yılmaz"
                      className="bg-transparent text-sm text-white w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">WhatsApp Telefon Numarası</label>
                  <div className="flex items-center gap-2 bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="bg-transparent text-sm text-white w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Hizmet Tarihi</label>
                    <input
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Kişi / Koltuk Adedi</label>
                    <input
                      type="number"
                      min={1}
                      max={selectedItem.quota}
                      required
                      value={paxCount}
                      onChange={(e) => setPaxCount(Number(e.target.value))}
                      className="bg-[#080c16] border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400">Tahsil Edilecek Tutar</p>
                    <p className="text-lg font-bold text-white">{selectedItem.sellPrice * paxCount} ₺</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Net Komisyonun</p>
                    <p className="text-sm font-bold text-emerald-400">+{selectedItem.commission * paxCount} ₺</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-3 rounded-xl transition cursor-pointer"
                >
                  Rezervasyonu Onayla & PNR Üret
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Rezervasyon Onaylandı</p>
                  <h4 className="text-2xl font-mono font-bold text-white mt-1">{lastCreatedBooking.pnr}</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Kontenjan otomatik güncellendi ve komisyon hesabınıza işlendi.
                  </p>
                </div>

                <div className="bg-[#080c16] border border-slate-800 rounded-xl p-3.5 text-left text-xs space-y-1.5">
                  <p className="text-slate-400">
                    Misafir: <span className="text-white font-medium">{lastCreatedBooking.customerName}</span>
                  </p>
                  <p className="text-slate-400">
                    Hizmet: <span className="text-white font-medium">{lastCreatedBooking.itemTitle}</span>
                  </p>
                  <p className="text-slate-400">
                    Tutar: <span className="text-indigo-400 font-bold">{lastCreatedBooking.totalAmount} ₺</span>
                  </p>
                </div>

                <button
                  onClick={() => sendWhatsAppVoucher(lastCreatedBooking)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Müşteriye WhatsApp Voucher Gönder
                </button>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full text-xs text-slate-400 hover:text-white py-2"
                >
                  Pencereyi Kapat
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}