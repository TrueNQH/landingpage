import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Users, BookOpen, Clock, LineChart, Phone, Mail, MapPin, Star, MessageCircle, Menu, X, TrendingUp, Award, Zap, Globe, Lock, GraduationCap } from "lucide-react";
import axios from "axios";
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/60 shadow-sm">
      <div className={`${container} h-18 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="size-12 flex justify-center items-center">
            <img style={{maxWidth: "130%"}} src="logo.png" alt="logo" />
          </div>
        </div>

        {/* Tăng font nav: md:15px, lg:16px, xl:18px */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] lg:text-base xl:text-lg text-slate-700">
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#features">Tính năng</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#pricing">Giá dịch vụ</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#testimonials">Đánh giá</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#faq">FAQ</a>
          <a className="hover:text-blue-700 transition-colors duration-200 font-medium" href="#contact">Liên hệ</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Tăng text-sm -> text-base, icon 16 -> 18 */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl px-4 py-2 text-base font-medium transition-all duration-200"
          >
            <MessageCircle size={18} />
            Liên hệ
          </a>

          {/* Tăng icon 16 -> 18, chữ theo mặc định của GButton; thêm text-base để đảm bảo lớn hơn */}
          <GButton
            as="a"
            href="#demo"
            onClick={(e) => { e.preventDefault(); onOpenLogin && onOpenLogin(); }}
            gradient="secondary"
            className="px-5 py-2.5 text-base"
          >
            <Zap size={18} />
            Dùng thử
          </GButton>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {/* Tăng text-base cho mobile */}
            <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#features" onClick={() => setMobileMenuOpen(false)}>Tính năng</a>
            <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Giá dịch vụ</a>
            <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Đánh giá</a>
            <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ</a>
            <div className="pt-3 border-t border-slate-200">
              <GButton as="a" href="#demo" className="block w-full justify-center text-base py-3">Dùng thử miễn phí</GButton>
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
     <div
  className={`
    ${container} ${section}
    pt-10 md:pt-24 pb-10 md:pb-12
    md:min-h-[calc(100dvh-64px)]
    supports-[height:100svh]:md:min-h-[calc(100svh-64px)]
    lg:h-[calc(100dvh-64px)]
    supports-[height:100svh]:lg:h-[calc(100svh-64px)]
  `}
>

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
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4 animate-scale-in stagger-1">Số liệu ấn tượng</h2>
          <p className="text-lg text-white/90 animate-fade-in-up stagger-2">Những con số chứng minh hiệu quả của XinKEdu</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={item.label} className={`group relative animate-bounce-in stagger-${index + 3}`}>
              <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 hover:shadow-xl hover:ring-blue-200 transition-all duration-500 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-110">{item.value}</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-slate-700 group-hover:text-slate-800 transition-colors duration-300">{item.label}</p>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '0s'}} />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-float mt-2" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GSection>
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

function Feature() {
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
function Features() {
  const items = [
    {
      title: "Xếp lịch dạy cho giáo viên",
      desc: "Sắp xếp ca dạy trực quan, tránh trùng lịch, tự động nhắc lịch qua Zalo/Email để mọi người luôn đúng giờ.",
      bullets: [
        "Lịch tuần/tháng, kéo-thả ca dạy",
        "Cảnh báo trùng phòng/giờ/giáo viên",
        "Nhắc lịch & đổi ca nhanh",
      ],
      icon: <Clock size={28} />,
    },
    {
      title: "Tạo đề thi bằng AI",
      desc: "Sinh đề theo chủ đề, độ khó, chuẩn đầu ra. Hỗ trợ nhiều loại câu hỏi và gợi ý chấm điểm nhanh.",
      bullets: [
        "Trắc nghiệm/Đúng-Sai/Điền khuyết/Tự luận",
        "Điều chỉnh độ khó, mục tiêu kỹ năng",
        "Nhận xét AI + phân tích điểm",
      ],
      icon: <BookOpen size={28} />,
    },
    {
      title: "Tạo đề từ ảnh (OCR)",
      desc: "Chụp/tải ảnh đề giấy, hệ thống OCR hoá và chuẩn hóa câu hỏi. Xuất Word/PDF trong vài giây.",
      bullets: [
        "Nhận diện tiếng Việt/EN chính xác",
        "Giữ ký hiệu, chuẩn hóa bố cục",
        "Random phương án, chống lộ đáp án",
      ],
      icon: <GraduationCap size={28} />,
    },
    {
      title: "Check-in / Check-out dạy học",
      desc: "Điểm danh ca dạy bằng một chạm, kèm GPS và ghi chú. Tự tổng hợp bảng công hỗ trợ tính lương.",
      bullets: [
        "Theo dõi vị trí & thời gian",
        "Xác thực + ghi chú ca dạy",
        "Bảng công tự động",
      ],
      icon: <Shield size={28} />,
    },
    {
      title: "AI trợ giảng Live",
      desc: "Theo dõi buổi dạy thời gian thực, gợi ý tương tác, đánh dấu highlight và xuất báo cáo sau buổi.",
      bullets: [
        "Hỏi-đáp AI trong lớp",
        "Lấy phản hồi học sinh",
        "Báo cáo: highlight, to-do",
      ],
      icon: <LineChart size={28} />,
    },
    {
      title: "Thi & xem điểm online",
      desc: "Tổ chức thi trên web/mobile, chống gian lận nhẹ, công bố điểm và lời giải ngay sau khi nộp.",
      bullets: [
        "Phòng thi theo lịch",
        "Xem điểm + đáp án",
        "Ôn tập & tổng hợp kiến thức",
      ],
      icon: <CheckCircle2 size={28} />,
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className={`${container} ${section} space-y-16 lg:space-y-20`}>
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 animate-scale-in stagger-1">
            Tính năng nổi bật
          </h2>
          <p className="text-xl text-slate-600 animate-fade-in-up stagger-2">
            Giải pháp toàn diện cho mọi nhu cầu quản lý giáo dục
          </p>
        </div>

        {/* GRID features: không ảnh minh họa */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {items.map((it, i) => (
            <FeatureCard key={i} {...it} index={i} />
          ))}
        </div>

        {/* --- Tính năng Đặc biệt --- */}
        <div className="space-y-8 animate-fade-in-up stagger-3">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 animate-bounce-in stagger-4">
              Tính năng đặc biệt
            </h3>
            <p className="mt-3 text-slate-600 animate-fade-in-up stagger-5">
              Bộ công cụ nâng cao giúp trung tâm vận hành trơn tru và minh bạch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CRM + Nhân sự */}
            <div className="group relative animate-slide-up-stagger stagger-6">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-blue-600" size={22} />
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    CRM & Quản lý nhân sự
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="group-hover:translate-x-1 transition-transform duration-300">• Quản lý lead/khách hàng, pipeline tuyển sinh</li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '50ms'}}>• Hồ sơ giáo viên/nhân sự, phân quyền chi tiết</li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '100ms'}}>• KPI & bảng công đồng bộ từ check-in/ca dạy</li>
                </ul>
              </div>
            </div>

            {/* Kế toán */}
            <div className="group relative animate-slide-up-stagger stagger-6">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition-all duration-300 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <LineChart className="text-emerald-600" size={22} />
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Hỗ trợ kế toán
                  </p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="group-hover:translate-x-1 transition-transform duration-300">• Thu học phí, công nợ, phiếu thu/chi</li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '50ms'}}>• Doanh thu – chi phí theo lớp, khóa</li>
                  <li className="group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '100ms'}}>• Xuất file kế toán & đối soát minh bạch</li>
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

/** Card không dùng ảnh, icon + text + bullets */
function FeatureCard({ icon, title, desc, bullets, index = 0 }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-slate-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:ring-blue-200 hover-lift animate-slide-up-stagger stagger-${(index % 6) + 1}`}>
      {/* halo gradient nhẹ để thay "hình minh hoạ" */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-sky-200/60 to-cyan-100/40 blur-3xl opacity-60 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="shrink-0 grid place-items-center size-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">{title}</h4>
          <p className="mt-2 text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{desc}</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>
                <span className="mt-1 size-1.5 rounded-full bg-sky-500/80 group-hover:bg-blue-500 transition-colors duration-300" />
                <span className="group-hover:text-slate-800 transition-colors duration-300">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-float mt-2" style={{animationDelay: '0.5s'}} />
        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-float mt-1" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
}


function PlanCard({ ribbon, gradient, price, unit, features, highlight=false }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-blue-200' : 'border-slate-200'} bg-white shadow-sm h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-500 group hover-lift`}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-2xl" />
      
      <div className="px-6 py-8 flex flex-col flex-1 relative z-10">
        <div className="mb-4">
          <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold text-white transition-all duration-300" style={{background: gradient}}>{ribbon}</span>
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
            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm group-hover:text-slate-800 transition-all duration-300 group-hover:translate-x-1" style={{transitionDelay: `${i * 30}ms`}}>
              <CheckCircle2 className="mt-0.5 text-emerald-600 group-hover:text-emerald-700 transition-all duration-300" size={16}/>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <GButton as="button" className="w-full rounded-full justify-center" gradient={highlight ? 'secondary' : 'primary'}>
            MUA NGAY
          </GButton>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-float mt-2" style={{animationDelay: '0.5s'}} />
        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-float mt-1" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
}


function Pricing(){
  const plans = [
    {
      ribbon: 'Basic',
      gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
      price: '2.499',
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
      price: '2.499',
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
    <GSection id="pricing" gradient="primary" className="py-16 sm:py-20">
      <div className={`${container}`}>
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-scale-in stagger-1">Giá Dịch Vụ</h2>
          <p className="mt-3 text-white/90 animate-fade-in-up stagger-2">Chọn gói phù hợp với giai đoạn phát triển của trung tâm.</p>
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
      <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 group-hover:shadow-xl group-hover:ring-blue-200 transition-all duration-500 hover-lift">
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
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-scale-in stagger-1">Khách hàng nói gì?</h3>
          <p className="text-xl text-white/90 animate-fade-in-up stagger-2">Những phản hồi thực tế từ các trung tâm đã triển khai EduCRM</p>
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
  const faqs = [
    {
      q: "Triển khai & thời gian thực hiện",
      a: "XinKEdu triển khai theo quy trình chuẩn gồm khảo sát nhanh nhu cầu, cấu hình mẫu (lớp, môn, giáo viên, phân quyền), nhập dữ liệu ban đầu và đào tạo sử dụng. Với gói cloud, thời gian thường 1–3 ngày làm việc. Nếu có tuỳ biến đặc thù hoặc tích hợp hệ thống sẵn có, chúng tôi lên kế hoạch mốc nghiệm thu rõ ràng để bảo đảm tiến độ."
    },
    {
      q: "Bảo mật dữ liệu & tuân thủ",
      a: "Dữ liệu được mã hoá khi truyền và khi lưu, phân quyền theo vai trò (RBAC), ghi nhật ký truy cập và sao lưu định kỳ. Chúng tôi áp dụng nguyên tắc tối thiểu đặc quyền, kiểm thử định kỳ và cảnh báo bất thường. Hạ tầng tách biệt theo khách hàng; có tuỳ chọn vùng lưu trữ gần Việt Nam. Tài liệu quy trình backup/restore sẵn sàng cung cấp khi kích hoạt."
    },
    {
      q: "Tính năng AI & OCR đề thi",
      a: "AI hỗ trợ gợi ý nội dung dạy, tạo nhanh ngân hàng câu hỏi theo cấp độ khó, và phân tích buổi dạy để đưa ra điểm nổi bật, việc cần làm. Với OCR, bạn tải ảnh/PDF, hệ thống nhận dạng và chuyển thành câu hỏi có thể chỉnh sửa, giữ được ký hiệu môn tự nhiên. Có thể xuất sang Word/PDF hoặc đưa thẳng vào ngân hàng câu hỏi."
    },
    {
      q: "Tích hợp SSO, API & nhập dữ liệu",
      a: "Hệ thống hỗ trợ SSO Google/Microsoft, ràng buộc miền email và kết hợp xác thực nội bộ nếu cần. Chúng tôi cung cấp API REST cùng webhook để kết nối CRM/kế toán/LMS. Việc nhập dữ liệu ban đầu dùng CSV/XLSX/Google Sheets với trình ánh xạ trường trực quan, kiểm tra lỗi ngay khi tải lên và hướng dẫn sửa nhanh trước khi ghi nhận."
    },
    {
      q: "Quy mô, hiệu năng & phân quyền",
      a: "XinKEdu phục vụ từ vài trăm tới hàng chục nghìn học viên. Có đa cơ sở/campus với báo cáo theo từng cơ sở hoặc tổng hợp. Phân quyền chi tiết theo vai trò và phạm vi (khối lớp, cơ sở), hỗ trợ phê duyệt thao tác nhạy cảm. Kiến trúc linh hoạt giúp mở rộng tài nguyên theo nhu cầu thực tế mà không gián đoạn hoạt động giảng dạy."
    },
    {
      q: "Dùng thử, giá & hoá đơn",
      a: "Bạn được dùng thử 14 ngày với các tính năng cốt lõi. Khi nâng cấp, toàn bộ dữ liệu dùng thử được giữ nguyên. Chúng tôi hỗ trợ thanh toán theo tháng/năm, có ưu đãi cho thanh toán dài hạn và tổ chức giáo dục phi lợi nhuận. Xuất hoá đơn VAT đầy đủ; mọi chi phí tuỳ biến (nếu có) được bóc tách minh bạch theo hạng mục."
    },
    {
      q: "Hỗ trợ kỹ thuật, SLA & dữ liệu sau dùng thử",
      a: "Hỗ trợ qua email/chat trong giờ làm việc; gói Pro/Enterprise có kênh ưu tiên với SLA phản hồi/khắc phục rõ ràng. Chúng tôi cung cấp tài liệu, video hướng dẫn và đào tạo định kỳ khi có cập nhật lớn. Sau dùng thử, dữ liệu được giữ 30 ngày để bạn nâng cấp hoặc xuất ra; quá thời hạn, hệ thống xoá an toàn theo quy trình chuẩn."
    }
  ];
  
  
  return (
    <section id="faq" className="bg-white">
      <div className={`${container} ${section}`}>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center animate-fade-in-up animate-scale-in stagger-1">Câu hỏi thường gặp</h3>
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
                Chúng tôi luôn sẵn sàng hỗ trợ
              </h3>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed animate-fade-in-up stagger-2">
                Điền thông tin để nhận tư vấn & demo theo nhu cầu. <b>Phản hồi
                trong 24h.</b>
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
                    <p className="font-semibold text-white">Hotline</p>
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full
                                 bg-emerald-400/20 text-emerald-50 border border-emerald-300/40"
                    >
                      Trực 24/7
                    </span>
                  </div>
                  <a
                    href="tel:0862706996"
                    className="text-white/85 font-medium hover:text-white transition-colors"
                  >
                    086.270.6996
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
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:edu@xinkgroup.com"
                    className="text-white/85 font-medium hover:text-white break-words transition-colors"
                  >
                    edu@xinkgroup.com
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
                  <p className="font-semibold text-white">Địa chỉ</p>
                  <p className="text-white/85 font-medium leading-relaxed">
                    Tầng 4, Tòa ICT1, Khu Công viên phần mềm số 2 đường Như
                    Nguyệt, Phường Hải Châu, Thành phố Đà Nẵng
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
              <h4 className="text-2xl font-bold text-slate-900 mb-6">
                Gửi yêu cầu tư vấn
              </h4>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Họ và tên <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200
                               bg-white/90 text-slate-900 placeholder:text-slate-400
                               focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60
                               outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200
                               bg-white/90 text-slate-900 placeholder:text-slate-400
                               focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60
                               outline-none transition-all"
                    placeholder="ban@congty.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Nhu cầu của bạn <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200
                               bg-white/90 text-slate-900 placeholder:text-slate-400
                               focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60
                               outline-none transition-all resize-none"
                    placeholder="Mô tả ngắn (số lớp, tính năng cần, thời gian dự kiến...)"
                  />
                </div>
              </div>

              <GButton
                as="button"
                type="submit"
                gradient="secondary"
                className="w-full mt-8 h-12 text-base font-semibold
                           justify-center ring-1 ring-white/20 hover:ring-white/30
                           focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-white"
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
              <li><a href="#pricing" className="hover:text-white transition-colors">Giá dịch vụ</a></li>
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
      <Features/>
      <Pricing/>
     
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
                <p className="text-center text-sm text-slate-500">Chưa có tài khoản? <a href="#contact" className="text-blue-600 hover:underline" onClick={() => setLoginOpen(false)}>Đăng ký</a></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}