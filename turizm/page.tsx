"use client";

import React, { useState } from "react";
import {
  Building2,
  Users,
  ShieldCheck,
  Briefcase,
  Search,
  Send,
  TrendingUp,
  CreditCard,
  Plus,
  CheckCircle2,
  Calendar,
  MapPin,
} from "lucide-react";

type UserRole = "super_admin" | "tenant_admin" | "sub_agent";

export default function TurizmSaaSPanel() {
  const [activeRole, setActiveRole] = useState<UserRole>("tenant_admin");

  // Örnek SaaS Verileri (İleride Firebase'e bağlanacak)
  const tenants = [
    { id: 1, name: "Akdeniz Turizm A.Ş.", plan: "Pro", subAgents: 14, revenue: "425.000 ₺", status: "Aktif" },
    { id: 2, name: "Kapadokya VIP Travel", plan: "Basic", subAgents: 4, revenue: "118.500 ₺", status: "Aktif" },
    { id: 3, name: "Ege Rüyası Acente", plan: "Trial", subAgents: 1, revenue: "12.000 ₺", status: "Deneme" },
  ];

  const inventory = [
    { id: "HTL-101", title: "Kemer Resort & Spa (5*)", location: "Antalya", quota: 12, netPrice: 4500, sellPrice: 5200 },
    { id: "TUR-204", title: "Günübirlik Balon & Vadi Turu", location: "Nevşehir", quota: 8, netPrice: 1800, sellPrice: 2250 },
    { id: "HTL-309", title: "Bodrum Butik Taş Otel", location: "Muğla", quota: 3, netPrice: 3200, sellPrice: 3750 },
  ];

  const bookings = [
    { pnr: "MCF-8942", customer: "Ahmet Yılmaz", phone: "905551234567", item: "Kemer Resort & Spa", amount: 10400, commission: 1400, status: "Onaylandı" },
    { pnr: "MCF-8943", customer: "Selin Kaya", phone: "905559876543", item: "Balon & Vadi Turu", amount: 4500, commission: 900, status: "Onaylandı" },
  ];

  const sendWhatsAppVoucher = (booking: typeof bookings[0]) => {
    const text = `*REZERVASYON VOUCHER*\n\n*PNR:* ${booking.pnr}\n*Misafir:* ${booking.customer}\n*Hizmet:* ${booking.item}\n*Durum:* ${booking.status}\n\nİyi tatiller dileriz!`;
    window.open(`https://wa.me/${booking.phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      {/* ÜST BAR & ROL DEĞİŞTİRİCİ (SaaS Simülatörü) */}
      <header className="max-w-7xl mx-auto mb-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2.5 rounded-xl">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">MCF Turizm B2B Hub</h1>
            <p className="text-xs text-slate-400">Çok Kiracılı (Multi-Tenant) Acente Yönetim Sistemi</p>
          </div>
        </div>

        {/* Rol Geçiş Butonları */}
        <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveRole("super_admin")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition ${
              activeRole === "super_admin" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Super Admin
          </button>
          <button
            onClick={() => setActiveRole("tenant_admin")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition ${
              activeRole === "tenant_admin" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Ana Acente
          </button>
          <button
            onClick={() => setActiveRole("sub_agent")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition ${
              activeRole === "sub_agent" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            Alt Acente (Satış)
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* 1. SUPER ADMIN EKRANI */}
        {activeRole === "super_admin" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Aktif Acente (Tenant)</p>
                <p className="text-2xl font-bold text-white mt-1">18 Firma</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Aylık SaaS Abonelik Geliri</p>
                <p className="text-2xl font-bold text-emerald-400 mt-1">54.000 ₺</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Sistem Üzerinden Geçen Hacim</p>
                <p className="text-2xl font-bold text-indigo-400 mt-1">2.450.000 ₺</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <h2 className="font-semibold text-white">Kayıtlı Acenteler & Abonelik Paketleri</h2>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-lg flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Yeni Acente Tanımla
                </button>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950/50 text-slate-400">
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
                      <td className="p-4 text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> {t.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. ANA ACENTE (TENANT ADMIN) EKRANI */}
        {activeRole === "tenant_admin" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Tanımlı Kontenjanlar</p>
                <p className="text-2xl font-bold text-white mt-1">23 Oda / Tur</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Bağlı Alt Acente Sayısı</p>
                <p className="text-2xl font-bold text-indigo-400 mt-1">14 Alt Acente</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-sm">Net Komisyon Kârı</p>
                <p className="text-2xl font-bold text-emerald-400 mt-1">68.400 ₺</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <h2 className="font-semibold text-white">Otel & Tur Envanteri (B2B Fiyat Matrisi)</h2>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-lg flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Yeni Kontenjan Ekle
                </button>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950/50 text-slate-400">
                  <tr>
                    <th className="p-4">Kod</th>
                    <th className="p-4">Ürün / Tesis</th>
                    <th className="p-4">Bölge</th>
                    <th className="p-4">Kalan Kontenjan</th>
                    <th className="p-4">Alış (Net)</th>
                    <th className="p-4">B2B Satış Fiyatı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {inventory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/30">
                      <td className="p-4 font-mono text-indigo-400">{item.id}</td>
                      <td className="p-4 font-medium text-white">{item.title}</td>
                      <td className="p-4 text-slate-400">{item.location}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">
                          {item.quota} Müsait
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">{item.netPrice} ₺</td>
                      <td className="p-4 font-bold text-white">{item.sellPrice} ₺</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. ALT ACENTE (SUB-AGENT SATIŞ) EKRANI */}
        {activeRole === "sub_agent" && (
          <div className="space-y-6">
            {/* Hızlı Rezervasyon Arama Çubuğu */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-2.5 rounded-xl">
                <MapPin className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Destinasyon veya Otel..."
                  className="bg-transparent text-sm text-white focus:outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-2.5 rounded-xl">
                <Calendar className="w-4 h-4 text-slate-400" />
                <input type="date" className="bg-transparent text-sm text-slate-300 focus:outline-none w-full" />
              </div>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-2.5 rounded-xl">
                <Users className="w-4 h-4 text-slate-400" />
                <select className="bg-transparent text-sm text-slate-300 focus:outline-none w-full">
                  <option>2 Yetişkin</option>
                  <option>2 Yetişkin, 1 Çocuk</option>
                  <option>1 Yetişkin</option>
                </select>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 py-2.5">
                <Search className="w-4 h-4" /> Müsaitlik Ara
              </button>
            </div>

            {/* PNR & Hızlı WhatsApp Voucher Listesi */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-800">
                <h2 className="font-semibold text-white">Son PNR Kayıtlarım & Hızlı Voucher Gönderimi</h2>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950/50 text-slate-400">
                  <tr>
                    <th className="p-4">PNR Kodu</th>
                    <th className="p-4">Misafir</th>
                    <th className="p-4">Hizmet</th>
                    <th className="p-4">Satış Tutarı</th>
                    <th className="p-4">Aracı Payı</th>
                    <th className="p-4">Voucher Paylaş</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {bookings.map((b, i) => (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className="p-4 font-mono font-bold text-indigo-400">{b.pnr}</td>
                      <td className="p-4 text-white">{b.customer}</td>
                      <td className="p-4 text-slate-300">{b.item}</td>
                      <td className="p-4 font-semibold text-white">{b.amount} ₺</td>
                      <td className="p-4 text-emerald-400 font-semibold">+{b.commission} ₺</td>
                      <td className="p-4">
                        <button
                          onClick={() => sendWhatsAppVoucher(b)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                        >
                          <Send className="w-3.5 h-3.5" /> WhatsApp Gönder
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
  );
}