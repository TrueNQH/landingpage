import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Users, BookOpen, Clock, LineChart, Phone, Mail, MapPin, Star, MessageCircle, Menu, X, TrendingUp, Award, Zap, Globe, Lock, GraduationCap } from "lucide-react";
import axios from "axios";
import PerformanceOverview from "./components/PerformanceOverview";
import FeatureRow from "./components/FeatureRow";
import ChatbotPopup from "./components/ChatbotPopup";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { getTranslation } from "./translations";
/**
 * EduCRM White–Blue Landing Page (Gradient Edition)
 * ------------------------------------------------------------
 * - Áp dụng 2 gradient chủ đạo do bạn cung cấp:
 *   + primary: linear-gradient(135deg, #3B82F6, #06B6D4)
 *   + secondary: linear-gradient(135deg, #22D3EE, #3B82F6)
 * - Đã thay toàn bộ inline gradient rời rạc bằng token dùng lại.
 * - Thêm GButton, GBadge, GSection để tái sử dụng và đồng bộ style.
 */

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const section = "py-16 sm:py-20";
const btn =
  "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition shadow-sm";

// 🌈 Gradient tokens
const GRADIENTS = {
  primary: "linear-gradient(135deg, #3B82F6, #06B6D4)",
  secondary: "linear-gradient(135deg, #22D3EE, #3B82F6)",
};

// 🔘 Reusable gradient button
function GButton({ children, gradient = "secondary", className = "", as = "a", ...props }) {
  const Comp = as;
  return (
    <Comp
      {...props}
      className={`${btn} text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${className}`}
      style={{ background: GRADIENTS[gradient] }}
    >
      {children}
    </Comp>
  );
}

// 🏷️ Reusable gradient badge/pill
function GBadge({ children, gradient = "secondary", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full text-white px-3 py-1 text-xs font-medium shadow-sm ${className}`}
      style={{ background: GRADIENTS[gradient], border: "1px solid rgba(255,255,255,0.35)" }}
    >
      {children}
    </span>
  );
}

// 🧱 Section with gradient background
function GSection({ gradient = "primary", children, className = "", overlay = false, id }) {
  return (
    <section id ={id} className={`relative overflow-hidden ${className}`} style={{ background: GRADIENTS[gradient] }}>
      {overlay && <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 1px 1px, rgba(0,0,0,.18) 1px, transparent 0)", backgroundSize: "22px 22px", opacity: 0.12 }} />}
      {children}
    </section>
  );
}

function Navbar({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
   <div style={{marginTop: "20px"}} className="fixed top-0 inset-x-0 z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
           className={[
            "flex items-center justify-evenly",
            "h-16 sm:h-18 px-3 sm:px-5",
            // Nền & hiệu ứng
            "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85",
            "border border-slate-200/70 ring-1 ring-black/5 shadow-md",
            // PILL tròn hẳn
            "rounded-[999px] overflow-hidden",
            "transition-all duration-150",
            mobileMenuOpen ? "rounded-b-none" : "",
          ].join(" ")}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-12 flex justify-center items-center">
              <a href="/"> <img style={{ maxWidth: "150%" }} src="logo.png" alt="logo" /></a>
             
            </div>
          </div>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] lg:text-base xl:text-lg text-slate-700">
            <a className="hover:text-blue-700 transition-colors font-medium" href="#features">{t('nav.features')}</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#pricing">{t('nav.pricing')}</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#testimonials">{t('nav.testimonials')}</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#faq">{t('nav.faq')}</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#contact">{t('nav.contact')}</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            
            

            <GButton
              as="a"
              href="#demo"
              onClick={(e) => { e.preventDefault(); onOpenLogin && onOpenLogin(); }}
              gradient="secondary"
              className="px-5 py-2.5 text-base"
            >
              <Zap size={18} />
              {t('nav.tryFree')}
            </GButton>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (nằm cùng khối, bo tròn đáy) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-x border-b border-slate-200 shadow-lg rounded-b-2xl overflow-hidden">
            <div className="px-4 py-4 space-y-3">
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#features" onClick={() => setMobileMenuOpen(false)}>{t('nav.features')}</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#pricing" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>{t('nav.testimonials')}</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#faq" onClick={() => setMobileMenuOpen(false)}>{t('nav.faq')}</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>
              <div className="pt-3 border-t border-slate-200">
                <GButton as="a" href="#demo" className="block w-full justify-center text-base py-3">
                  {t('hero.tryFreeBtn')}
                </GButton>
              </div>
            </div>
          </div>
        )}
      </div>
   </div>
  );
}



function Hero({ onOpenLogin }) {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <GSection gradient="primary" overlay className="text-slate-800">
     <div
  className={`
    ${container} ${section}
    pt-10 md:pt-24 pb-10 md:pb-12
    md:min-h-[100dvh]
    supports-[height:100svh]:md:min-h-[100svh]
    lg:h-[100dvh]
    supports-[height:100svh]:lg:h-[100svh]
  `}
>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-[90px]">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <GBadge gradient="secondary">
                  <Sparkles size={16} className="text-white animate-pulse" />
                  {t('hero.badge')}
                </GBadge>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  <span className="block animate-slide-in-left" style={{animationDelay: '0.3s'}}>{t('hero.title1')}</span>
                  <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-slide-in-left" style={{animationDelay: '0.4s'}}>{t('hero.title2')}</span>
                  <span className="block animate-slide-in-left" style={{animationDelay: '0.5s'}}>{t('hero.title3')}</span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                  <span className="text-white font-semibold"> {t('hero.languages')}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <GButton
                as="a"
                href="#demo"
                onClick={(e) => { e.preventDefault(); onOpenLogin && onOpenLogin(); }}
                gradient="secondary"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Zap size={18} className="text-white animate-bounce" />
                {t('hero.tryFreeBtn')}
                <ArrowRight size={18} />
              </GButton>
              <a className={`${btn} border border-white/30 text-white hover:bg-white/10 transition backdrop-blur hover:scale-105`} href="#contact">
                <MessageCircle size={18} className="text-white" />
                {t('hero.getConsultation')}
              </a>
            </div>

           
          </div>

          <div className="relative lg:ml-8 animate-fade-in-right" style={{animationDelay: '0.9s'}}>
            <div className="absolute -inset-6 rounded-3xl bg-white/20 blur-xl animate-pulse"/>
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <video src="video.mp4" autoPlay muted loop playsInline className="w-full h-96 object-cover"></video>
            </div>
          
          </div>
        </div>
      </div>
    </GSection>
  );
}

function Metrics() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const items = [
    {
      label: t('metrics.centers.label'),
      value: t('metrics.centers.value'),
      icon: <Users size={22} className="opacity-90" />,
      description: t('metrics.centers.description'),
    },
    {
      label: t('metrics.users.label'),
      value: t('metrics.users.value'),
      icon: <TrendingUp size={22} className="opacity-90" />,
      description: t('metrics.users.description'),
    },
    {
      label: t('metrics.performance.label'),
      value: t('metrics.performance.value'),
      icon: <Award size={22} className="opacity-90" />,
      description: t('metrics.performance.description'),
    },
  ];

  return (
    <section className="bg-white">
      <div className={`${container} ${section}`}>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 animate-scale-in stagger-1">
            {t('metrics.title')}
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in-up stagger-2">
            {t('metrics.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={item.label} className={`group relative animate-bounce-in stagger-${index + 3}`}>
              {/* Outer gradient border */}
              <div
                className="p-[1px] rounded-3xl"
                style={{ background: GRADIENTS.primary }}
              >
                {/* Card */}
                <div className="rounded-[22px] bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5">
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon chip with gradient */}
                    <div
                      className="p-3 rounded-2xl text-white transition-all duration-300 group-hover:scale-110"
                      style={{ background: GRADIENTS.secondary }}
                    >
                      {item.icon}
                    </div>

                    <div className="text-right">
                      <p className="text-4xl font-extrabold tracking-tight text-slate-900 transition-transform duration-300 group-hover:scale-110">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-slate-800">{item.label}</p>

                  {/* Floating particles (accent with brand colors) */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-2 h-2 rounded-full animate-float"
                      style={{ background: "#3B82F6", animationDelay: "0s" }}
                    />
                    <div
                      className="w-1 h-1 rounded-full animate-float mt-2"
                      style={{ background: "#22D3EE", animationDelay: "0.45s" }}
                    />
                  </div>
                </div>
              </div>
              {/* subtle glow on hover */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition"
                style={{ background: GRADIENTS.secondary }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





function Feature() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const SectionHeading = ({ kicker, title }) => (
    <div className="text-center max-w-3xl mx-auto">
      
      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h3>
    </div>
  );

  return (
    <section id="features" className="bg-white">
      <div className={`${container} ${section} space-y-24`}>

        {/* Header chung */}
        

        {/* ───────────────── Block 1: Công nghệ AI hỗ trợ Giáo dục ───────────────── */}
        <div className="space-y-12">
          <SectionHeading
          
            title="Công nghệ AI hỗ trợ Giáo dục"
          />

          {/* AI đề thi */}
          <FeatureRow
            reverse
            title={t('features.aiExam.title')}
            desc={t('features.aiExam.desc')}
            bullets={t('features.aiExam.bullets')}
            img="taodethi.png"
            icon={<BookOpen size={28} />}
          />

          {/* OCR đề thi */}
          <FeatureRow
            title={t('features.ocrExam.title')}
            desc={t('features.ocrExam.desc')}
            bullets={t('features.ocrExam.bullets')}
            img="taodeOCR.png"
            icon={<GraduationCap size={28} />}
          />

          {/* AI trợ giảng live */}
          <FeatureRow
            title={t('features.aiAssistant.title')}
            desc={t('features.aiAssistant.desc')}
            bullets={t('features.aiAssistant.bullets')}
            img="meeting.png"
            icon={<LineChart size={28} />}
          />
        </div>

        {/* Divider nhẹ giữa các block */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ───────────────── Block 2: Tính năng hỗ trợ trong quản lý giáo dục ───────────────── */}
        <div className="space-y-12">
          <SectionHeading
         
            title="Tính năng hỗ trợ trong quản lý giáo dục"
          />

          {/* Check-in / out */}
          <FeatureRow
            reverse
            title={t('features.checkin.title')}
            desc={t('features.checkin.desc')}
            bullets={t('features.checkin.bullets')}
            img="inout.png"
            icon={<Shield size={28} />}
          />

          {/* Xếp lịch dạy */}
          <FeatureRow
            title={t('features.schedule.title')}
            desc={t('features.schedule.desc')}
            bullets={t('features.schedule.bullets')}
            img="classm.png"
            icon={<Clock size={28} />}
          />

          {/* Thi & xem điểm */}
          <FeatureRow
            reverse
            title={t('features.exam.title')}
            desc={t('features.exam.desc')}
            bullets={t('features.exam.bullets')}
            img="test_qa.jpg"
            icon={<CheckCircle2 size={28} />}
          />
        </div>

        {/* Divider nhẹ */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ───────────────── Block 3: Tính năng Đặc biệt ───────────────── */}
        <div className="space-y-10">
          <SectionHeading
          
            title="Tính năng Đặc biệt"
          />

          {/* Card 1: CRM & Nhân sự (bọc spotlight + dùng FeatureRow để có ảnh) */}
          <div className="group relative">
            <div
              className="absolute -inset-1 rounded-3xl blur-2xl opacity-0 group-hover:opacity-35 transition duration-500"
              style={{ background: GRADIENTS.secondary }}
            />
            <div className="relative p-[1px] rounded-3xl" style={{ background: GRADIENTS.primary }}>
              <div className="rounded-[22px] bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1.5">
                <div className="flex items-center justify-between px-4 sm:px-6 pt-5">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: GRADIENTS.secondary }}
                  >
                    ✨ ĐẶC BIỆT
                  </span>
                  <div className="relative h-6 w-24 overflow-hidden rounded-full">
                    <div
                      className="absolute inset-y-0 -left-16 w-20 opacity-20 group-hover:translate-x-28 transition-transform duration-700"
                      style={{ background: 'linear-gradient(90deg, transparent, #fff, transparent)' }}
                    />
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 pt-2">
                  <FeatureRow
                    title={t('features.special.crm.title')}
                    desc={t('features.special.crm.desc')}
                    bullets={t('features.special.crm.bullets')}
                    img="crm.jpg"
                    icon={<Shield size={28} />}
                  />
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full animate-float" style={{ background: '#3B82F6', animationDelay: '0s' }} />
                  <div className="w-1 h-1 rounded-full mt-2 animate-float" style={{ background: '#22D3EE', animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Kế toán (đảo chiều) */}
          <div className="group relative">
            <div
              className="absolute -inset-1 rounded-3xl blur-2xl opacity-0 group-hover:opacity-35 transition duration-500"
              style={{ background: GRADIENTS.secondary }}
            />
            <div className="relative p-[1px] rounded-3xl" style={{ background: GRADIENTS.primary }}>
              <div className="rounded-[22px] bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1.5">
                <div className="flex items-center justify-between px-4 sm:px-6 pt-5">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: GRADIENTS.secondary }}
                  >
                    ✨ ĐẶC BIỆT
                  </span>
                  <div className="relative h-6 w-24 overflow-hidden rounded-full">
                    <div
                      className="absolute inset-y-0 -left-16 w-20 opacity-20 group-hover:translate-x-28 transition-transform duration-700"
                      style={{ background: 'linear-gradient(90deg, transparent, #fff, transparent)' }}
                    />
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 pt-2">
                  <FeatureRow
                    reverse
                    title={t('features.special.accounting.title')}
                    desc={t('features.special.accounting.desc')}
                    bullets={t('features.special.accounting.bullets')}
                    img="ketoan.png"
                    icon={<LineChart size={28} />}
                  />
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full animate-float" style={{ background: '#3B82F6', animationDelay: '0s' }} />
                  <div className="w-1 h-1 rounded-full mt-2 animate-float" style={{ background: '#22D3EE', animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ─────────────── END Block 3 ─────────────── */}
      </div>
    </section>
  );
}






function PlanCard({ ribbon, gradient, price, unit, features, note, highlight=false }) {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const VISIBLE_LIMIT = 8;
  const hasMore = Array.isArray(features) && features.length > VISIBLE_LIMIT;
  const visibleFeatures = showAll ? (features || []) : (features || []).slice(0, VISIBLE_LIMIT);
  const NAVBAR_OFFSET = 72;

  function scrollToContact(e) {
    e?.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-blue-200' : 'border-slate-200'} bg-white shadow-sm h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-500 group hover-lift`}>
      {/* Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-2xl" />

      <div className="px-6 py-8 flex flex-col flex-1 relative z-10">
        <div className="mb-4">
          <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold text-white transition-all duration-300" style={{ background: gradient }}>
            {ribbon}
          </span>
        </div>

        {/* (Optional) price/unit nếu bạn cần hiển thị, thêm block ở đây */}

        <p className="mt-5 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
          {note || "Gói tính năng phù hợp cho nhu cầu."}
        </p>

        {/* FEATURES */}
        <div className="mt-5 relative flex-1">
          <ul className="space-y-3">
            {visibleFeatures.map((f, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-slate-700 text-sm group-hover:text-slate-800 transition-all duration-300 group-hover:translate-x-1"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {/* Ô icon cố định 20x20 */}
                <span
                  className="w-5 h-5 rounded-full bg-emerald-50 ring-1 ring-emerald-200/60 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={14} className="shrink-0" />
                </span>

                {/* Text wrap nhiều dòng, không ảnh hưởng icon */}
                <span className="leading-relaxed break-words">{f}</span>
              </li>
            ))}
          </ul>

          {!showAll && hasMore && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center"
          >
            {showAll ? t('common.collapse') : t('common.seeMore')}
          </button>
        )}

        <div className="mt-auto pt-6">
          <GButton
            as="button"
            onClick={scrollToContact}
            className="w-full rounded-full justify-center"
            gradient={highlight ? 'secondary' : 'primary'}
          >
            {t('pricing.contactUs')}
          </GButton>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-float mt-2" style={{ animationDelay: '0.5s' }} />
        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-float mt-1" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}




function Pricing(){
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const plans = [
    {
      ribbon: t('pricing.plans.free.ribbon'),
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      price: t('pricing.plans.free.price'),
      unit: t('pricing.plans.free.unit'),
      note: t('pricing.plans.free.note'),
      features: t('pricing.plans.free.features'),
    },
  
    {
      ribbon: t('pricing.plans.basic.ribbon'),
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      price: t('pricing.plans.basic.price'),
      unit: t('pricing.plans.basic.unit'),
      note: t('pricing.plans.basic.note'),
      features: t('pricing.plans.basic.features'),
    },
  
    {
      ribbon: t('pricing.plans.advance.ribbon'),
      gradient: "linear-gradient(135deg, #22D3EE, #3B82F6)",
      price: t('pricing.plans.advance.price'),
      unit: t('pricing.plans.advance.unit'),
      note: t('pricing.plans.advance.note'),
      features: t('pricing.plans.advance.features'),
    },
  
    {
      ribbon: t('pricing.plans.pro.ribbon'),
      gradient: "linear-gradient(135deg, #A855F7, #3B82F6)",
      price: t('pricing.plans.pro.price'),
      unit: t('pricing.plans.pro.unit'),
      note: t('pricing.plans.pro.note'),
      features: t('pricing.plans.pro.features'),
    },
  ];
  
  

  return (
    <GSection id="pricing" gradient="primary" className="py-16 sm:py-20">
      <div className={`${container}`}>
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-scale-in stagger-1">{t('pricing.title')}</h2>
          <p className="mt-3 text-white/90 animate-fade-in-up stagger-2">{t('pricing.subtitle')}</p>
        </div>

        {/* Grid 3 cột + nhấn card giữa bằng arbitrary-variants */}
        <div
          className=" 
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            [grid-auto-rows:1fr]
          "
        >
          {plans.map((p, index) => (
            <div key={p.ribbon} className={`h-full animate-bounce-in stagger-${index + 3}`}>
              <PlanCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </GSection>
  );
}



function TestimonialCard({name, title, quote, avatar, className = "", style = {}}){
  return (
    <div className={`group relative ${className}`} style={style}>
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="h-full relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition-all duration-500 hover-lift">
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-3xl" />
        
        <div className="flex items-start gap-4 mb-6 relative z-10">
          <div className="flex-shrink-0">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300">
              {avatar}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current"/>
              ))}
            </div>
            <p className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors duration-300">{name}</p>
            <p className="text-slate-600 font-medium group-hover:text-slate-700 transition-colors duration-300">{title}</p>
          </div>
        </div>
        <blockquote className="text-slate-700 leading-relaxed text-lg italic group-hover:text-slate-800 transition-colors duration-300 relative z-10">
          "{quote}"
        </blockquote>
        
        {/* Floating particles */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '0s'}} />
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-float mt-2" style={{animationDelay: '0.5s'}} />
          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-float mt-1" style={{animationDelay: '1s'}} />
        </div>
      </div>
    </div>
  );
}

function Testimonials(){
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const items = t('testimonials.items');
  
  return (
    <GSection gradient="primary" id="testimonials">
      <div className={`${container} ${section}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-scale-in stagger-1">{t('testimonials.title')}</h3>
          <p className="text-xl text-white/90 animate-fade-in-up stagger-2">{t('testimonials.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t, index) => <TestimonialCard key={t.name} {...t} className={`animate-bounce-in stagger-${index + 3}`} />)}
        </div>
      </div>
    </GSection>
  );
}

function FAQ(){
  const [open, setOpen] = useState(0);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const faqs = t('faq.items');
  
  
  return (
    <section id="faq" className="bg-white">
      <div className={`${container} ${section}`}>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center animate-fade-in-up animate-scale-in stagger-1">{t('faq.title')}</h3>
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200 animate-fade-in-up stagger-2">
          {faqs.map((f, i) => (
            <button
              key={i}
              className={`w-full text-left px-6 py-5 hover:bg-slate-50 transition-all duration-300 group animate-slide-up-stagger stagger-${i + 3}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900 group-hover:text-blue-700 transition-colors duration-300">{f.q}</p>
                <span className={`text-blue-600 font-semibold transition-all duration-300 group-hover:scale-110 ${open === i ? "rotate-180" : ""}`}>
                  {open === i ? "–" : "+"}
                </span>
              </div>
              {open === i && (
                <p className="mt-2 text-slate-600 animate-fade-in-up">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://xink-edu-backend-459095746983.asia-southeast1.run.app/contact", formData);
    console.log(res);
    if(res.status === 200){
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.");
    } else {
      alert("Lỗi khi gửi liên hệ! Vui lòng thử lại.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <GSection gradient="secondary" id="contact">
      <div className={`${container} ${section}`}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* LEFT: Copy + Contact cards */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-scale-in stagger-1">
                {t('contact.title')}
              </h3>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed animate-fade-in-up stagger-2">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-5 md:space-y-6">
              {/* HOTLINE */}
              <div
                className="relative group flex items-center gap-4 p-4 md:p-5 rounded-2xl
                           bg-white/35 border border-white/50 backdrop-blur
                           shadow-lg transition-all duration-300 hover-lift
                           animate-slide-up-stagger stagger-3"
              >
                <div
                  className="relative size-11 grid place-items-center rounded-xl
                             bg-white/70 text-sky-600 shadow-inner"
                  aria-hidden="true"
                >
                  {/* ping */}
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                  </span>
                  <Phone size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">{t('contact.info.hotline')}</p>
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full
                                 bg-emerald-400/20 text-emerald-50 border border-emerald-300/40"
                    >
                      {t('contact.info.available24')}
                    </span>
                  </div>
                  <a
                    href="tel:0862706996"
                    className="text-white/85 font-medium hover:text-white transition-colors"
                  >
                    {t('contact.info.phone')}
                  </a>
                </div>

                {/* glow */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl
                             ring-0 ring-white/0 group-hover:ring-2 group-hover:ring-white/40
                             transition-all duration-300"
                />
              </div>

              {/* EMAIL */}
              <div
                className="relative group flex items-center gap-4 p-4 md:p-5 rounded-2xl
                           bg-white/35 border border-white/50 backdrop-blur
                           shadow-lg transition-all duration-300 hover-lift
                           animate-slide-up-stagger stagger-4"
              >
                <div
                  className="relative size-11 grid place-items-center rounded-xl
                             bg-white/70 text-sky-600 shadow-inner"
                  aria-hidden="true"
                >
                  <Mail size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">{t('contact.info.email')}</p>
                  <a
                    href="mailto:hi@ixink.com"
                    className="text-white/85 font-medium hover:text-white break-words transition-colors"
                  >
                    {t('contact.info.emailAddress')}
                  </a>
                </div>

                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl
                             ring-0 ring-white/0 group-hover:ring-2 group-hover:ring-white/40
                             transition-all duration-300"
                />
              </div>

              {/* ADDRESS */}
              <div
                className="relative group flex items-center gap-4 p-4 md:p-5 rounded-2xl
                           bg-white/35 border border-white/50 backdrop-blur
                           shadow-lg transition-all duration-300 hover-lift
                           animate-slide-up-stagger stagger-5"
              >
                <div
                  className="relative size-11 grid place-items-center rounded-xl
                             bg-white/70 text-sky-600 shadow-inner"
                  aria-hidden="true"
                >
                  <MapPin size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">{t('contact.info.address')}</p>
                  <p className="text-white/85 font-medium leading-relaxed">
                    {t('contact.info.addressText')}
                  </p>
                </div>

                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl
                             ring-0 ring-white/0 group-hover:ring-2 group-hover:ring-white/40
                             transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up stagger-6">
            <div className="rounded-2xl p-8 shadow-xl shadow-blue-600/10 ring-1 ring-slate-200 bg-white">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.form.title')}</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
  {/* Họ và tên */}
  <div className="space-y-2">
    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700">
      {t('contact.form.name')} <span className="text-rose-500">{t('common.required')}</span>
    </label>
    <input
      id="contact-name"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      autoComplete="name"
      required
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder={t('contact.form.placeholders.name')}
    />
  </div>

  {/* Trung tâm đang hoạt động */}
  <div className="space-y-2">
    <label htmlFor="contact-center" className="block text-sm font-semibold text-slate-700">
      {t('contact.form.center')} <span className="text-rose-500">{t('common.required')}</span>
    </label>
    <input
      id="contact-center"
      type="text"
      name="center"
      value={formData.center}
      onChange={handleChange}
      required
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder={t('contact.form.placeholders.center')}
    />
  </div>

  {/* Email */}
  <div className="space-y-2">
    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700">
      {t('contact.form.email')} <span className="text-rose-500">{t('common.required')}</span>
    </label>
    <input
      id="contact-email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      autoComplete="email"
      required
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder={t('contact.form.placeholders.email')}
    />
  </div>

  {/* Số điện thoại (VN) */}
  <div className="space-y-2">
    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700">
      {t('contact.form.phone')} <span className="text-rose-500">{t('common.required')}</span>
    </label>
    <input
      id="contact-phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      inputMode="tel"
      required
      pattern="^(\+84|0)\d{9,10}$"
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder={t('contact.form.placeholders.phone')}
    />
    <p className="text-xs text-slate-500">{t('contact.form.phoneFormat')}</p>
  </div>

  {/* Nhu cầu (full width) */}
  <div className="sm:col-span-2 space-y-2">
    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700">
      {t('contact.form.message')} <span className="text-rose-500">{t('common.required')}</span>
    </label>
    <textarea
      id="contact-message"
      rows={4}
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all resize-none"
      placeholder={t('contact.form.placeholders.message')}
    />
  </div>
</div>


              <GButton
                as="button"
                type="submit"
                gradient="secondary"
                className="w-full mt-8 h-12 text-base font-semibold justify-center ring-1 ring-white/20 hover:ring-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-white"
              >
                <MessageCircle size={20} className="mr-2" />
                {t('contact.form.submit')}
              </GButton>

              <p className="text-center text-sm text-slate-500 mt-4">
                {t('contact.form.privacy')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </GSection>
  );
}


function Footer(){
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      <div className={`${container} py-16`}>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-bold text-white text-xl">XinKEdu</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer">
                <Phone size={20} className="text-blue-400"/>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer">
                <Mail size={20} className="text-green-400"/>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer">
                <MapPin size={20} className="text-purple-400"/>
              </div>
            </div>
            <div className="mt-6 text-slate-400 text-sm space-y-2 max-w-xl">
              <p className="text-white font-semibold">{t('footer.company')}</p>
              <p>{t('footer.companyInfo')}</p>
              <p>{t('footer.address')}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.products.title')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">{t('footer.products.features')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('footer.products.pricing')}</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">{t('footer.products.testimonials')}</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">{t('footer.products.demo')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t('footer.support.title')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#faq" className="hover:text-white transition-colors">{t('footer.support.faq')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.support.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.support.docs')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.support.guide')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">{t('footer.legal.copyright')}</div>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a className="hover:text-white transition-colors" href="#">{t('footer.legal.terms')}</a>
              <a className="hover:text-white transition-colors" href="#">{t('footer.legal.privacy')}</a>
              <a className="hover:text-white transition-colors" href="#">{t('footer.legal.policy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EduCRMLanding(){
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const onOpenLogin = () => setLoginOpen(true);
  const onCloseLogin = () => setLoginOpen(false);
  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Vui lòng nhập email hợp lệ");
      return;
    }
    if (!password || password.length < 6) {
      alert("Mật khẩu tối thiểu 6 ký tự");
      return;
    }
    alert("Đăng nhập thành công (demo)");
    onCloseLogin();
  };

  return (
    <div className="bg-white text-slate-800">
      <Navbar onOpenLogin={onOpenLogin}/>
   
      <Hero onOpenLogin={onOpenLogin}/>

      <Feature/>
      <Pricing/>
     
      <Metrics/>
      <Testimonials/>

      <FAQ/>
      <Contact/>
      <Footer/>

      {/* Floating Chatbot */}
      <ChatbotPopup />

      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onCloseLogin} />
          <div className="relative z-[101] w-full max-w-md mx-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900">{t('login.title')}</h4>
                <button onClick={onCloseLogin} className="rounded-lg p-2 hover:bg-slate-100">
                  <X size={18}/>
                </button>
              </div>
              <form onSubmit={onSubmitLogin} className="px-6 py-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('login.email')}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('login.placeholders.email')}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('login.password')}</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t('login.placeholders.password')}
                      required
                      minLength={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition pr-12"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 text-slate-500 hover:text-slate-700">
                      {showPassword ? t('login.hidePassword') : t('login.showPassword')}
                    </button>
                  </div>
                </div>
                <GButton as="button" type="submit" className="w-full justify-center">{t('login.loginBtn')}</GButton>
                <p className="text-center text-sm text-slate-500">{t('login.noAccount')} <a href="#contact" className="text-blue-600 hover:underline" onClick={() => setLoginOpen(false)}>{t('login.register')}</a></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <EduCRMLanding />
    </LanguageProvider>
  );
}