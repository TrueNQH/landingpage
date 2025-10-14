import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Users, BookOpen, Clock, LineChart, Phone, Mail, MapPin, Star, MessageCircle, Menu, X, TrendingUp, Award, Zap, Globe, Lock, GraduationCap } from "lucide-react";

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
function GSection({ gradient = "primary", children, className = "", overlay = false }) {
  return (
    <section className={`relative overflow-hidden ${className}`} style={{ background: GRADIENTS[gradient] }}>
      {overlay && <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 1px 1px, rgba(0,0,0,.18) 1px, transparent 0)", backgroundSize: "22px 22px", opacity: 0.12 }} />}
      {children}
    </section>
  );
}

function Navbar({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/60 shadow-sm">
      <div className={`${container} h-16 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="size-12 flex justify-center items-center">
            <img src="logo.png" alt="logo" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#features">Tính năng</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#pricing">Lợi ích</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#testimonials">Đánh giá</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#faq">FAQ</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#contact">Liên hệ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200">
            <MessageCircle size={16} />
            Liên hệ
          </a>

          <GButton
            as="a"
            href="#demo"
            onClick={(e) => { e.preventDefault(); onOpenLogin && onOpenLogin(); }}
            gradient="secondary"
            className="px-5 py-2.5"
          >
            <Zap size={16} />
            Dùng thử
          </GButton>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a className="block py-2 text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#features" onClick={() => setMobileMenuOpen(false)}>Tính năng</a>
            <a className="block py-2 text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Lợi ích</a>
            <a className="block py-2 text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Đánh giá</a>
            <a className="block py-2 text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a className="block py-2 text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ</a>
            <div className="pt-3 border-t border-slate-200">
              <GButton as="a" href="#demo" className="block w-full justify-center">Dùng thử miễn phí</GButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onOpenLogin }) {
  return (
    <GSection gradient="primary" overlay className="text-slate-800">
      <div className={`${container} ${section} pt-16 pb-12`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <GBadge gradient="secondary">
                  <Sparkles size={16} className="text-white animate-pulse" />
                  Nền tảng giáo dục thông minh
                </GBadge>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  <span className="block animate-slide-in-left" style={{animationDelay: '0.3s'}}>Nền Tảng Giáo Dục</span>
                  <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-slide-in-left" style={{animationDelay: '0.4s'}}>Thông Minh</span>
                  <span className="block animate-slide-in-left" style={{animationDelay: '0.5s'}}>Hỗ Trợ Bởi AI</span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  Cho các trung tâm ngoại ngữ để tối ưu vận hành và tăng trưởng bền vững.
                  <span className="text-white font-semibold"> (EN, JP, KR, CN)</span>
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
                Dùng thử miễn phí
                <ArrowRight size={18} />
              </GButton>
              <a className={`${btn} border border-white/30 text-white hover:bg-white/10 transition backdrop-blur hover:scale-105`} href="#contact">
                <MessageCircle size={18} className="text-white" />
                Nhận tư vấn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              {[
                { icon: <Zap size={20} className="text-white animate-pulse"/>, text: "Triển khai nhanh" },
                { icon: <Lock size={20} className="text-white animate-pulse"/>, text: "Bảo mật cao" },
                { icon: <Globe size={20} className="text-white animate-pulse"/>, text: "Hỗ trợ 24/7" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/20 border border-white/30 shadow-sm backdrop-blur hover:bg-white/30 hover:scale-105 transition-all duration-300">
                  {item.icon}
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
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
  const items = [
    {
      label: "Trung tâm sử dụng",
      value: "500+",
      icon: <Users size={24} className="text-blue-600"/>,
      description: "Trung tâm giáo dục tin tưởng"
    },
    {
      label: "Người dùng",
      value: "10k+",
      icon: <TrendingUp size={24} className="text-green-600"/>,
      description: "Người dùng tích cực"
    },
    {
      label: "Tăng hiệu suất",
      value: "+32%",
      icon: <Award size={24} className="text-purple-600"/>,
      description: "Hiệu quả vận hành"
    },
  ];
  return (
    <GSection gradient="primary" className="">
      <div className={`${container} ${section}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Số liệu ấn tượng</h2>
          <p className="text-lg text-white/90">Những con số chứng minh hiệu quả của XinKEdu</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={item.label} className="group relative animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.2}s`}}>
              <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 hover:shadow-xl hover:ring-blue-200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">{item.value}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-slate-700">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GSection>
  );
}

function ProductOverview() {
  return (
    <section id="overview" className="bg-white">
      <div className={`${container} ${section}`}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Tổng quan hiệu suất</h2>
          <p className="mt-3 text-slate-600">Trực quan dữ liệu doanh thu, tỷ lệ chuyển đổi, tình trạng lớp & đội ngũ.</p>
        </div>
        <div className="mt-10 rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
          <img
            src="dashboard.png"
            alt="Tổng quan số liệu và KPI của XinKEdu"
            className=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ reverse=false, title, desc, bullets, img, icon }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      <div className={`${reverse ? "lg:col-start-2" : ""} animate-fade-in-left`}>
        <div className="group relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-slate-100/60 to-blue-100/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-md group-hover:shadow-lg group-hover:ring-blue-200 transition-all duration-500 bg-white hover:scale-105">
            <img
              src={img}
              alt={`${title} - minh họa`}
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
      <div className={`${reverse ? "lg:col-start-1" : ""} space-y-5 animate-fade-in-right`}>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
        <ul className="space-y-4">
          {bullets.map((bullet, index) => (
            <li key={bullet} className="flex items-start gap-3 text-slate-700 group animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="text-emerald-600 group-hover:text-emerald-700 transition-colors duration-200 animate-pulse" size={18}/>
              </div>
              <span className="text-base group-hover:text-slate-900 transition-colors duration-200">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white">
      <div className={`${container} ${section} space-y-24`}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Tính năng nổi bật</h2>
          <p className="text-xl text-slate-600">Giải pháp toàn diện cho mọi nhu cầu quản lý giáo dục</p>
        </div>

        {/* 1/ Trung tâm xếp lịch dạy cho giáo viên */}
        <FeatureRow
          title="Xếp lịch dạy cho giáo viên"
          desc="Sắp xếp ca dạy trực quan, tránh trùng ca và tự động nhắc lịch qua Zalo/Email."
          bullets={[
            "Lịch tuần/tháng, sắp xếp ca dạy",
            "Cảnh báo trùng phòng/giờ/giáo viên",
            "Tự động nhắc lịch & đổi ca nhanh",
          ]}
          img="schedule.png"
          icon={<Clock size={28} />}
        />

        {/* 2/ Giáo viên Tạo đề thi bằng AI */}
        <FeatureRow
          reverse
          title="Tạo đề thi bằng AI (nhanh & thông minh)"
          desc="Sinh đề tự động theo chủ đề, độ khó, chuẩn đầu ra. Hỗ trợ nhiều loại câu hỏi và chấm điểm tự động."
          bullets={[
            "Sinh câu hỏi: Trắc nghiệm, Đúng/Sai, Điền khuyết, Tự luận",
            "Điều chỉnh độ khó, mục tiêu kỹ năng",
            "Chấm điểm tự động + nhận xét AI",
          ]}
          img="taode.png"
          icon={<BookOpen size={28} />}
        />

        {/* 3/ Giáo viên Tạo đề thi bằng OCR chụp hình */}
        <FeatureRow
          title="Tạo đề thi từ ảnh (OCR)"
          desc="Chụp/tải ảnh đề thi giấy, hệ thống OCR & chuẩn hóa format, xuất đề trong vài giây."
          bullets={[
            "Nhận diện chữ Việt/EN chính xác",
            "Chuẩn hóa bố cục, random phương án",
            "Xuất Word/PDF sẵn sàng in ấn",
          ]}
          img="ocr.png"
          icon={<GraduationCap size={28} />}
        />

        {/* 4/ Giáo viên check in / check out */}
        <FeatureRow
          reverse
          title="Check-in / Check-out dạy học"
          desc="Điểm danh ca dạy bằng một chạm: GPS + ghi chú tức thời."
          bullets={[
            "Check-in theo vị trí & thời gian",
            "Xác thực, ghi chú ca dạy",
            "Tổng hợp bảng công & phục vụ tính lương",
          ]}
          img="checkin.png"
          icon={<Shield size={28} />}
        />

        {/* 5/ Nền tảng AI + chatbot hỗ trợ Live */}
        <FeatureRow
          title="AI trợ giảng Live & phân tích buổi dạy"
          desc="Theo dõi thời gian thực, gợi ý tương tác, đánh dấu highlight & xuất báo cáo lớp học."
          bullets={[
            "Hỏi AI những kiến thức mới có trong buổi học",
            "Lấy ý kiến phản hồi từ học sinh",
            "Báo cáo sau buổi: highlight, to-do",
          ]}
          img="meeting.png"
          icon={<LineChart size={28} />}
        />

        {/* 6/ Học sinh thi & xem điểm online */}
        <FeatureRow
          reverse
          title="Thi & xem điểm online"
          desc="Học sinh làm bài trên web/mobile, chống gian lận nhẹ, xem điểm & lời giải ngay sau khi nộp."
          bullets={[
            "Phòng thi online theo lịch",           
            "Xem điểm, đáp án & lời giải",
            "Ôn tập, tổng hợp kiến thức",
          ]}
          img="exam.jpg"
          icon={<CheckCircle2 size={28} />}
        />

        {/* --- Tính năng Đặc biệt --- */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Tính năng đặc biệt</h3>
            <p className="mt-3 text-slate-600">
              Bộ công cụ nâng cao giúp trung tâm vận hành trơn tru và minh bạch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Đặc biệt 1: CRM + Nhân sự */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-blue-600" size={22} />
                  <p className="text-lg font-semibold text-slate-900">CRM & Quản lý nhân sự</p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li>• Quản lý lead/khách hàng, pipeline tuyển sinh</li>
                  <li>• Hồ sơ giáo viên/nhân sự, phân quyền chi tiết</li>
                  <li>• KPI & bảng công đồng bộ từ check-in/ca dạy</li>
                </ul>
              </div>
            </div>

            {/* Đặc biệt 2: Kế toán */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition">
                <div className="flex items-center gap-3 mb-3">
                  <LineChart className="text-emerald-600" size={22} />
                  <p className="text-lg font-semibold text-slate-900">Hỗ trợ kế toán</p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li>• Thu học phí, công nợ, phiếu thu/chi</li>
                  <li>• Báo cáo doanh thu – chi phí theo lớp, khóa</li>
                  <li>• Xuất file kế toán & đối soát minh bạch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* --- End: Tính năng Đặc biệt --- */}
      </div>
    </section>
  );
}
function FeatureEvent({
  title = "Create the Real Event & Event Details",
  desc = "Quicklearn allows you to create genuine Events and Event Details whenever and how you want. It also includes:",
  bullets = ["Flexible Event Create", "Anytime Event Open & Close"],
  mainImg, // ảnh nền chính (UI lớn bên phải) — ví dụ: '/img/event-main.png'
  gridImg, // ảnh danh sách nhỏ — ví dụ: '/img/event-grid.png'
}) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* trang trí nền */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-24 top-24 h-24 w-24 rounded-full border-2 border-violet-100/60" />
        <div className="absolute right-12 top-56 grid h-16 w-16 grid-cols-4 gap-1 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="rounded-sm border border-fuchsia-200/60" />
          ))}
        </div>
        <svg className="absolute left-1/2 top-2/3 -translate-x-1/2 opacity-30" width="160" height="40" viewBox="0 0 160 40" fill="none">
          <path d="M2 30c12-22 28-22 40 0s28 22 40 0 28-22 40 0 28 22 36 0" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT: text */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-slate-600">{desc}</p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white">
                    <path fill="currentColor" d="M9.5 16.2 5.8 12.5l1.4-1.4 2.3 2.3 6.4-6.4 1.4 1.4z" />
                  </svg>
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: stacked mockups */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* card nền lớn */}
          <div className="relative rounded-2xl border border-slate-200 bg-white/90 shadow-xl backdrop-blur-sm">
            <div className="p-4 sm:p-6">
              {/* nếu có ảnh thật */}
              {mainImg ? (
                <img
                  src={mainImg}
                  alt="Event UI"
                  className="h-64 w-full rounded-xl object-cover sm:h-72"
                />
              ) : (
                // mock UI
                <div className="h-64 w-full rounded-xl bg-gradient-to-br from-slate-50 to-violet-50 sm:h-72">
                  <div className="grid h-full grid-cols-12 gap-3 p-4">
                    <div className="col-span-4 space-y-3">
                      <div className="h-8 rounded-md bg-slate-200/80" />
                      <div className="h-8 rounded-md bg-slate-200/60" />
                      <div className="h-8 rounded-md bg-slate-200/40" />
                      <div className="h-8 rounded-md bg-slate-200/30" />
                    </div>
                    <div className="col-span-8 space-y-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg bg-white p-3 shadow">
                          <div className="h-10 w-20 rounded bg-indigo-100" />
                          <div className="h-2 w-36 rounded bg-slate-200" />
                          <div className="ml-auto h-7 w-16 rounded bg-indigo-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* card “Event Schedule” (tầng trên, lệch phải) */}
          <div className="absolute -bottom-8 right-2 w-[88%] translate-y-2 rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6">
            <div className="border-b border-slate-100 px-5 py-3">
              <p className="text-sm font-semibold text-slate-900">Event Schedule</p>
            </div>
            <div className="divide-y divide-slate-100">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3">
                  <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700">
                    09:00 AM
                  </span>
                  <div className="h-2 w-40 rounded bg-slate-200" />
                  <div className="ml-auto flex -space-x-2">
                    {[...Array(3)].map((__, j) => (
                      <span key={j} className="h-6 w-6 rounded-full border border-white bg-slate-200" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ticket nhỏ nổi phía trước (tầng trên cùng, lệch trái) */}
          <div className="absolute -left-4 bottom-10 w-[60%] rotate-1 rounded-2xl border border-slate-200 bg-white shadow-xl sm:-left-8">
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">Ticket Fair</p>
              <p className="text-xs text-indigo-600">Gold <span className="text-slate-400">(Seats Available: 50)</span></p>
              <div className="mt-3 grid grid-cols-3 items-center gap-2">
                <span className="text-sm font-bold text-slate-900">$20.00</span>
                <div className="flex items-center justify-center gap-2">
                  <button className="h-8 w-8 rounded-md border border-slate-200 text-slate-600">−</button>
                  <div className="h-8 w-8 rounded-md border border-slate-200 bg-slate-50 text-center leading-8">0</div>
                  <button className="h-8 w-8 rounded-md border border-slate-200 text-slate-600">+</button>
                </div>
                <span className="text-right text-sm font-semibold text-slate-900">$0.00</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700">
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function PlanCard({ ribbon, gradient, price, unit, features, highlight=false }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-blue-200' : 'border-slate-200'} bg-white shadow-sm h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 group`}>
      <div className="px-6 py-8 flex flex-col flex-1">
        <div className="mb-4">
          <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold text-white group-hover:scale-110 transition-transform duration-300" style={{background: gradient}}>{ribbon}</span>
        </div>
        <div className="flex items-end gap-2 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
          <span className="text-5xl font-extrabold tracking-tight group-hover:scale-110 transition-transform duration-300">{price}</span>
          <div className="pb-2 leading-none">
            <span className="align-baseline text-lg font-bold">{unit}</span>
            <span className="block text-xs text-slate-500">/Tháng</span>
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
          Gói tính năng phù hợp cho nhu cầu.
        </p>
        <ul className="mt-5 space-y-3 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm group-hover:text-slate-800 transition-colors duration-300">
              <CheckCircle2 className="mt-0.5 text-emerald-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all duration-300" size={16}/>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6"> {/* mt-7 -> mt-auto pt-6 để CTA dính đáy */}
          <GButton as="button" className="w-full rounded-full justify-center" gradient={highlight ? 'secondary' : 'primary'}>
            MUA NGAY
          </GButton>
        </div>
      </div>
    </div>
  );
}


function Pricing(){
  const plans = [
    {
      ribbon: 'Basic',
      gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
      price: '800',
      unit: '000đ',
      features: [
        
        'Upload Tài Liệu < 10mb',
        'Phân tích tài liệu bằng AI',
        'Overview tài liệu',
        'Tạo đề thi AI từ tài liệu',
        'Đa dạng loại câu hỏi',
        'Xem, Publish / Unpublish đề thi',
        'Chọn bài kiểm tra, xem điểm & đáp án',
        'Ghi nhận buổi dạy',
        'Quản lý lớp học, giáo viên, học sinh',
        'Lên lịch dạy cho giáo viên',
       
      ]
    },
    {
      ribbon: 'Advance',
      gradient: 'linear-gradient(135deg, #22D3EE, #3B82F6)',
      price: '1.299',
      unit: '000đ',
      features: [
        'Bao gồm toàn bộ Basic',
        'Live Teach (giảng dạy thời gian thực)',
        'AI Analysis nâng cao',
        'Tải tài liệu lớn > 10MB',
        'Chỉnh sửa câu hỏi đã sinh',
        'Tự tạo đề ôn tập theo chương/bài',
        'Nâng cấp chấm điểm & phản hồi',
        'Quản trị đề thi linh hoạt (ngân hàng câu hỏi)',
        'Theo dõi tiến độ học theo lớp/nhóm'
      ]
    },
    {
      ribbon: 'Premium',
      gradient: 'linear-gradient(135deg, #A855F7, #3B82F6)',
      price: '2.499',
      unit: '000đ',
      features: [
        'Bao gồm toàn bộ Advance',
        'Quản lý hồ sơ nhân viên',
        'Chấm công & tính lương',
        'Báo cáo hiệu suất (KPI)',
        'Quản lý thông tin tài chính',
        'Dự báo tài chính',
        'Chatbot tư vấn',
        'Phân quyền chi tiết & nhật ký hoạt động',
        'Hỗ trợ ưu tiên'
      ],
      
    },
    
  ];
  

  return (
    <GSection gradient="primary" className="py-16 sm:py-20">
      <div className={`${container}`}>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in-up" style={{animationDelay: '0.1s'}}>Bảng giá</h2>
          <p className="mt-3 text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Chọn gói phù hợp với giai đoạn phát triển của trung tâm.</p>
        </div>

        {/* Grid 3 cột + nhấn card giữa bằng arbitrary-variants */}
        <div
          className="
            grid gap-6 justify-center
            grid-cols-1
            sm:[grid-template-columns:repeat(2,22rem)]
            lg:[grid-template-columns:repeat(3,22rem)]
            [grid-auto-rows:1fr]
                    
          "
        >
          {plans.map((p, index) => (
            <div key={p.ribbon} className="h-full animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.2}s`}}>
              <PlanCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </GSection>
  );
}

function CTAStrip() {
  return (
    <GSection gradient="secondary" id="cta">
      <div className={`${container} ${section} text-center`}>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white animate-fade-in-up" style={{animationDelay: '0.1s'}}>Đơn giản hóa quản lý – tập trung tăng trưởng</h3>
        <p className="mt-3 text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Phù hợp cho trung tâm giáo dục mọi quy mô. Không phí ẩn.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 min-w-[220px] animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.3s'}}>
            <p className="text-sm text-slate-600">Hiểu rõ khách hàng</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">CRM</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 min-w-[220px] animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <p className="text-sm text-slate-600">Tối ưu vận hành</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">Ops</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 min-w-[220px] animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.5s'}}>
            <p className="text-sm text-slate-600">KPI đo lường thực tế</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">Analytics</p>
          </div>
        </div>
        <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <GButton as="a" className="px-6 py-3 hover:scale-105 transition-transform duration-300" gradient="primary">Bắt đầu ngay <ArrowRight size={18}/></GButton>
        </div>
      </div>
    </GSection>
  );
}

function TestimonialCard({name, title, quote, avatar, className = "", style = {}}){
  return (
    <div className={`group relative ${className}`} style={style}>
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition-all duration-300 hover:scale-105">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {avatar}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current"/>
              ))}
            </div>
            <p className="font-bold text-slate-900 text-lg">{name}</p>
            <p className="text-slate-600 font-medium">{title}</p>
          </div>
        </div>
        <blockquote className="text-slate-700 leading-relaxed text-lg italic">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
}

function Testimonials(){
  const items = [
    {
      name: "Nguyễn Hương",
      title: "Giám đốc Trung tâm Alpha",
      quote: "EduCRM giúp đội ngũ giảm 40% thời gian nhập liệu và theo dõi học viên tốt hơn. Giao diện thân thiện, dễ sử dụng.",
      avatar: "NH"
    },
    {
      name: "Trần Minh",
      title: "Quản lý Tuyển sinh",
      quote: "Pipeline rõ ràng, tỷ lệ chuyển đổi tăng đáng kể chỉ sau 2 tuần sử dụng. Hỗ trợ khách hàng rất nhiệt tình.",
      avatar: "TM"
    },
    {
      name: "Lê Thị Mai",
      title: "Hiệu trưởng Trường THCS",
      quote: "Tính năng quản lý lớp học và thời khóa biểu rất tiện lợi. Giúp nhà trường vận hành hiệu quả hơn.",
      avatar: "LM"
    },
  ];
  return (
    <GSection gradient="primary" id="testimonials">
      <div className={`${container} ${section}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Khách hàng nói gì?</h3>
          <p className="text-xl text-white/90">Những phản hồi thực tế từ các trung tâm đã triển khai EduCRM</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t, index) => <TestimonialCard key={t.name} {...t} className={`animate-fade-in-up`} style={{animationDelay: `${0.1 + index * 0.2}s`}} />)}
        </div>
      </div>
    </GSection>
  );
}

function FAQ(){
  const [open, setOpen] = useState(0);
  const faqs = [
    {q:"XinKEdu triển khai thế nào?", a:"Chúng tôi hỗ trợ triển khai nhanh trong 1–3 ngày làm việc cùng hướng dẫn chi tiết."},
    {q:"Dữ liệu có an toàn không?", a:"Dữ liệu được mã hóa, sao lưu định kỳ và tuân thủ các tiêu chuẩn bảo mật phổ biến."},
    {q:"Có gói dùng thử không?", a:"Bạn có thể dùng thử miễn phí 14 ngày với đầy đủ tính năng cốt lõi."},
  ];
  return (
    <section id="faq" className="bg-white">
      <div className={`${container} ${section}`}>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Câu hỏi thường gặp</h3>
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {faqs.map((f, i) => (
            <button
              key={i}
              className="w-full text-left px-6 py-5 hover:bg-slate-50"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900">{f.q}</p>
                <span className="text-blue-600 font-semibold">{open === i ? "–" : "+"}</span>
              </div>
              {open === i && (
                <p className="mt-2 text-slate-600">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <GSection gradient="secondary" id="contact">
      <div className={`${container} ${section}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Chúng tôi luôn sẵn sàng hỗ trợ</h3>
              <p className="text-xl text-white/90 leading-relaxed">Điền thông tin để nhận tư vấn và demo theo nhu cầu của bạn. Cam kết phản hồi trong 24h.</p>
            </div>

            

<div className="space-y-6">
  {/* HOTLINE */}
  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/30">
    <div className="relative p-3 rounded-xl bg-white/30 text-white
                    transition-transform duration-300 group-hover:scale-110">
      {/* ping chấm trạng thái */}
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
      </span>
      <Phone size={20} className="relative" />
    </div>
    <div className="transition-colors duration-300">
      <p className="font-semibold text-white">Hotline</p>
      <p className="text-white/90 font-medium">086.270.6996</p>
    </div>
    {/* glow viền khi hover */}
    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0
                     group-hover:ring-2 group-hover:ring-white/40 transition-all duration-300" />
  </div>

  {/* EMAIL */}
  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/30">
    <div className="relative p-3 rounded-xl bg-white/30 text-white
                    transition-transform duration-300 group-hover:scale-110">
      <Mail size={20} className="relative motion-safe:animate-pulse" />
    </div>
    <div className="transition-colors duration-300">
      <p className="font-semibold text-white">Email</p>
      <p className="text-white/90 font-medium">edu@xinkgroup.com</p>
    </div>
    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0
                     group-hover:ring-2 group-hover:ring-white/40 transition-all duration-300" />
  </div>

  {/* ĐỊA CHỈ */}
  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/30">
    <div className="relative p-3 rounded-xl bg-white/30 text-white
                    transition-transform duration-300 group-hover:scale-110">
      <MapPin size={20} className="relative" />
    </div>
    <div className="transition-colors duration-300">
      <p className="font-semibold text-white">Địa chỉ</p>
      <p className="text-white/90 font-medium">Đà Nẵng, Việt Nam</p>
    </div>
    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0
                     group-hover:ring-2 group-hover:ring-white/40 transition-all duration-300" />
  </div>
</div>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-3xl p-8 shadow-xl ring-1 ring-slate-200 bg-white">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Gửi yêu cầu tư vấn</h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-slate-900 placeholder-slate-400"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-slate-900 placeholder-slate-400"
                    placeholder="ban@congty.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nhu cầu của bạn *</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-slate-900 placeholder-slate-400 resize-none"
                    placeholder="Mô tả ngắn về trung tâm & nhu cầu triển khai"
                  />
                </div>
              </div>

              <GButton
  as="button"
  type="submit"
  className="w-full mt-8 text-lg py-4 font-bold flex items-center justify-center"
>
  <MessageCircle size={20} className="mr-2" />
  Gửi yêu cầu tư vấn
</GButton>


              <p className="text-center text-sm text-slate-500 mt-4">
                Chúng tôi cam kết bảo mật thông tin của bạn.
              </p>
            </div>
          </form>
        </div>
      </div>
    </GSection>
  );
}

function Footer(){
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
      <div className={`${container} py-16`}>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-bold text-white text-xl">XinKEdu</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Giải pháp toàn diện cho giáo dục. Tối ưu vận hành, tăng trưởng bền vững.
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
              <p className="text-white font-semibold">CÔNG TY CỔ PHẦN XINKGROUP</p>
              <p>Mã số doanh nghiệp: 0402241823. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Đà Nẵng cấp lần đầu ngày 12/07/2024.</p>
              <p>Địa chỉ: Lô 8B2, An Thượng 37, Phường Mỹ An, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng, Việt Nam</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Sản phẩm</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Tính năng</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Lợi ích</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Đánh giá</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Hỗ trợ</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tài liệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">© 2025 XinKGroup. All rights reserved.</div>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a className="hover:text-white transition-colors" href="#">Điều khoản</a>
              <a className="hover:text-white transition-colors" href="#">Bảo mật</a>
              <a className="hover:text-white transition-colors" href="#">Chính sách</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function EduCRMLanding(){
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      <Metrics/>
      <ProductOverview/>
      <Features/>
      <Pricing/>
      <CTAStrip/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>

      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onCloseLogin} />
          <div className="relative z-[101] w-full max-w-md mx-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900">Đăng nhập để dùng thử</h4>
                <button onClick={onCloseLogin} className="rounded-lg p-2 hover:bg-slate-100">
                  <X size={18}/>
                </button>
              </div>
              <form onSubmit={onSubmitLogin} className="px-6 py-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ban@congty.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mật khẩu</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Tối thiểu 6 ký tự"
                      required
                      minLength={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition pr-12"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 text-slate-500 hover:text-slate-700">
                      {showPassword ? "Ẩn" : "Hiện"}
                    </button>
                  </div>
                </div>
                <GButton as="button" type="submit" className="w-full justify-center">Đăng nhập</GButton>
                <p className="text-center text-sm text-slate-500">Chưa có tài khoản? <a href="#" className="text-blue-600 hover:underline">Đăng ký</a></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
