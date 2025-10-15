import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Users, BookOpen, Clock, LineChart, Phone, Mail, MapPin, Star, MessageCircle, Menu, X, TrendingUp, Award, Zap, Globe, Lock, GraduationCap } from "lucide-react";
import axios from "axios";
import PerformanceOverview from "./components/PerformanceOverview";
import FeatureRow from "./components/FeatureRow";
import ChatbotPopup from "./components/ChatbotPopup";
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
            <a className="hover:text-blue-700 transition-colors font-medium" href="#features">Tính năng</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#pricing">Giá dịch vụ</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#testimonials">Đánh giá</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#faq">FAQ</a>
            <a className="hover:text-blue-700 transition-colors font-medium" href="#contact">Liên hệ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 border border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl px-4 py-2 text-base font-medium transition-all"
            >
              <MessageCircle size={18} />
              Liên hệ
            </a>

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

        {/* Mobile Menu (nằm cùng khối, bo tròn đáy) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-x border-b border-slate-200 shadow-lg rounded-b-2xl overflow-hidden">
            <div className="px-4 py-4 space-y-3">
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#features" onClick={() => setMobileMenuOpen(false)}>Tính năng</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Giá dịch vụ</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Đánh giá</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a className="block py-2 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors" href="#contact" onClick={() => setMobileMenuOpen(false)}>Liên hệ</a>
              <div className="pt-3 border-t border-slate-200">
                <GButton as="a" href="#demo" className="block w-full justify-center text-base py-3">
                  Dùng thử miễn phí
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
      icon: <Users size={22} className="opacity-90" />,
      description: "Trung tâm giáo dục tin tưởng",
    },
    {
      label: "Người dùng",
      value: "10k+",
      icon: <TrendingUp size={22} className="opacity-90" />,
      description: "Người dùng tích cực",
    },
    {
      label: "Tăng hiệu suất",
      value: "+32%",
      icon: <Award size={22} className="opacity-90" />,
      description: "Hiệu quả vận hành",
    },
  ];

  return (
    <section className="bg-white">
      <div className={`${container} ${section}`}>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 animate-scale-in stagger-1">
            Số liệu ấn tượng
          </h2>
          <p className="text-lg text-slate-600 animate-fade-in-up stagger-2">
            Những con số chứng minh hiệu quả của XinKEdu
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
  return (
    <section id="features" className="bg-white">
      <div className={`${container} ${section} space-y-24`}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Tính năng nổi bật
          </h2>
          <p className="text-xl text-slate-600">
            Giải pháp toàn diện cho mọi nhu cầu quản lý giáo dục
          </p>
        </div>

        {/* AI đề thi */}
        <FeatureRow
          reverse
          title="Tạo đề thi bằng AI (nhanh & thông minh)"
          desc="Sinh đề tự động theo chủ đề, độ khó, chuẩn đầu ra. Hỗ trợ nhiều loại câu hỏi và chấm điểm tự động."
          bullets={[
            "Sinh câu hỏi: Trắc nghiệm, Đúng/Sai, Điền khuyết, Tự luận",
            "Điều chỉnh độ khó, kỹ năng & chuẩn đầu ra (Bloom/CEFR)",
            "Ngân hàng câu hỏi theo chủ đề, tag & mức độ",
            "Tự động chống trùng câu hỏi & xáo thứ tự đáp án",
            "Giải thích đáp án, gợi ý chấm & thang điểm",
          
          ]}
          img="taodethi.png"
          icon={<BookOpen size={28} />}
        />

        {/* OCR đề thi */}
        <FeatureRow
          title="Tạo đề thi từ ảnh (OCR)"
          desc="Chụp/tải ảnh đề thi giấy, hệ thống OCR & chuẩn hóa format, xuất đề trong vài giây."
          bullets={[
            "Nhận diện chữ Việt/EN chính xác, chống nhiễu",
            "Tự động crop/deskew & làm sạch nền",
            "Chuẩn hóa bố cục, tách câu hỏi/đáp án",
            "Tạo ngân hàng câu hỏi từ ảnh chỉ với 1 lần chụp",
            "Random phương án & đánh số tự động",
         
          ]}
          img="taodeOCR.png"
          icon={<GraduationCap size={28} />}
        />

        {/* AI trợ giảng live */}
        <FeatureRow
          title="AI trợ giảng Live & phân tích buổi dạy"
          desc="Theo dõi thời gian thực, gợi ý tương tác, đánh dấu highlight & xuất báo cáo lớp học."
          bullets={[
            "Gợi ý quiz/bài tập theo tiến độ trong giờ học",
            "Hỏi AI kiến thức vừa được giảng để củng cố",
            "Theo dõi mức độ tương tác & cảnh báo học viên yếu",
            "Đánh dấu highlight theo mốc thời gian (timestamp)",
            "Thu phản hồi nhanh (poll) & tổng hợp ý kiến",
         
          ]}
          img="meeting.png"
          icon={<LineChart size={28} />}
        />

        {/* Check-in / out */}
        <FeatureRow
          reverse
          title="Check-in / Check-out dạy học"
          desc="Điểm danh ca dạy bằng một chạm: GPS + ghi chú tức thời."
          bullets={[
            "Check-in theo vị trí & thời gian, hỗ trợ ngoại tuyến",
            "Ảnh xác thực & ghi chú minh chứng ca dạy",
            "Cảnh báo đi muộn/về sớm & thống kê chuyên cần",
            "Tự động đối soát công theo ca/lịch dạy",
            "Xuất dữ liệu chấm công phục vụ tính lương",
            
          ]}
          img="inout.png"
          icon={<Shield size={28} />}
        />

        {/* Xếp lịch dạy */}
        <FeatureRow
          title="Xếp lịch dạy cho giáo viên"
          desc="Sắp xếp ca dạy trực quan, tránh trùng ca và tự động nhắc lịch qua Zalo/Email."
          bullets={[
            "Kéo-thả ca dạy theo tuần/tháng, template lịch",
            "Phát hiện xung đột phòng/giờ/giáo viên theo thời gian thực",
            "Quản lý nhiều cơ sở/phòng học & thiết bị",
            "Lọc theo môn, cấp độ, ca, giáo viên & trạng thái",
            "Đồng bộ lịch với AI nhắc lịch, email/Zalo",
           
          ]}
          img="classm.png"
          icon={<Clock size={28} />}
        />

        {/* Thi & xem điểm */}
        <FeatureRow
          reverse
          title="Thi & xem điểm online"
          desc="Học sinh làm bài trên web/mobile, chống gian lận nhẹ, xem điểm & lời giải ngay sau khi nộp."
          bullets={[
            "Phòng thi theo lịch, mã thi & giới hạn thời gian",
            "Giám sát camera/mic nhẹ nhàng, phát hiện tab-out",
            "Chấm tự động, hiển thị điểm & thứ hạng tức thì",
            "Xem đáp án, lời giải & phân tích câu sai",
            "Thi lại có điều kiện (số lần, ngưỡng điểm, ngân hàng khác)",
          ]}
          img="exam.jpg"
          icon={<CheckCircle2 size={28} />}
        />

        {/* --- TÍNH NĂNG ĐẶC BIỆT --- */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Tính năng đặc biệt</h3>
            <p className="mt-3 text-slate-600">
              Bộ công cụ nâng cao giúp trung tâm vận hành trơn tru và minh bạch.
            </p>
          </div>

          {/* Card 1: CRM & Nhân sự (dùng FeatureRow + ảnh) */}
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
                      style={{ background: "linear-gradient(90deg, transparent, #fff, transparent)" }}
                    />
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 pt-2">
                  <FeatureRow
                    title="CRM & Quản lý nhân sự"
                    desc="Theo dõi pipeline tuyển sinh, quản lý hồ sơ & phân quyền nhân sự; đồng bộ KPI và bảng công từ ca dạy."
                    bullets={[
                      "Pipeline tuyển sinh theo giai đoạn & xác suất",
                      "Lead scoring, nguồn lead & chăm sóc tự động",
                      "Hồ sơ giáo viên/nhân sự, hợp đồng & chứng chỉ",
                      "Phân quyền chi tiết theo vai trò & đơn vị",
                      "Chấm công/KPI đồng bộ từ check-in & lịch dạy",
                    ]}
                    img="crm.jpg"
                    icon={<Shield size={28} />}
                  />
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full animate-float" style={{ background: "#3B82F6", animationDelay: "0s" }} />
                  <div className="w-1 h-1 rounded-full mt-2 animate-float" style={{ background: "#22D3EE", animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Hỗ trợ Kế toán (dùng FeatureRow + ảnh, đảo chiều) */}
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
                      style={{ background: "linear-gradient(90deg, transparent, #fff, transparent)" }}
                    />
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 pt-2">
                  <FeatureRow
                    reverse
                    title="Hỗ trợ kế toán"
                    desc="Quản lý thu học phí, công nợ; báo cáo doanh thu/chi phí theo lớp–khóa; xuất file đối soát minh bạch."
                    bullets={[
                      "Lập hóa đơn/phiếu thu học phí theo kỳ, gói",
                      "Theo dõi công nợ & nhắc phí tự động đa kênh",
                      "Phiếu thu/chi & nhật ký quỹ minh bạch",
                      "Báo cáo doanh thu–chi phí theo lớp/khóa/cơ sở",
                      "Xuất file kế toán (Excel/CSV) & đối soát nhanh",

                    ]}
                    img="ketoan.png"
                    icon={<LineChart size={28} />}
                  />
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full animate-float" style={{ background: "#3B82F6", animationDelay: "0s" }} />
                  <div className="w-1 h-1 rounded-full mt-2 animate-float" style={{ background: "#22D3EE", animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- END: TÍNH NĂNG ĐẶC BIỆT --- */}
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


function PlanCard({ ribbon, gradient, price, unit, features, note, highlight=false }) {
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_LIMIT = 8;
  const hasMore = Array.isArray(features) && features.length > VISIBLE_LIMIT;
  const visibleFeatures = showAll ? features : (features || []).slice(0, VISIBLE_LIMIT);

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
          {note || "Gói tính năng phù hợp cho nhu cầu."}
        </p>
        <div className="mt-5 relative flex-1">
          <ul className="space-y-3">
            {visibleFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 text-sm group-hover:text-slate-800 transition-all duration-300 group-hover:translate-x-1" style={{transitionDelay: `${i * 30}ms`}}>
                <CheckCircle2 className="mt-0.5 text-emerald-600 group-hover:text-emerald-700 transition-all duration-300" size={16}/>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          {!showAll && hasMore && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        {hasMore && (
          <button onClick={() => setShowAll(!showAll)} className="mt-4 text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
            {showAll ? "Thu gọn" : "Xem thêm"}
          </button>
        )}
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
      ribbon: "Dùng Thử Miễn Phí",
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      price: "Free",
      unit: "",
      note: "Đầy đủ tính năng nhưng giới hạn tài nguyên (dung lượng, số lần AI/ngày, băng thông).",
      features: [
        // Upload & AI đề thi
        "AI Phân tích tài liệu bài giảng",
        "AI Tạo đề thi từ tài liệu",
        "AI Tạo đề thi từ ảnh chụp (OCR)",
        "AI phân tích buổi dạy",
        "AI đánh giá performance học sinh trong buổi học",
        "Chỉnh sửa được câu hỏi",
        "Publish / Unpublish đề thi",
        "Live Teach (giảng dạy thời gian thực)",
        // Dạy & phân tích buổi dạy
        "Xem lịch dạy học",
        "Check-in buổi dạy",      
        // Kiểm tra – đánh giá
        "Chọn bài thi và làm kiểm tra",
        "Xem điểm và đáp án",
        "Tự tạo đề ôn tập dựa theo dạng đề vừa làm",
        "Xem tài liệu mà giáo viên publish trong buổi học",
        // Quản lý
        "Lên lịch dạy cho giáo viên",
        "Ghi nhận buổi dạy cho giáo viên",
        "Quản lý giáo viên",
        "Quản lý học trò",
        "Quản lý lớp học",
        "Quản lý hồ sơ nhân viên",

      ],
    },
  
    {
      ribbon: "Basic",
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      price: "300",
      unit: "000đ",
      note: "Bộ tính năng nền tảng cho trung tâm nhỏ.",
      features: [
        "Xử lý upload PDF/TXT < 10MB",
        "AI Phân tích tài liệu bài giảng",
        "AI Tạo đề thi từ tài liệu",
        "Đa dạng loại câu hỏi",
        "Publish / Unpublish đề thi",
        "Chọn bài thi và làm kiểm tra",
        "Xem điểm và đáp án",
        "Lên lịch dạy cho giáo viên",
        "Ghi nhận buổi dạy",
      ],
    },
  
    {
      ribbon: "Advance",
      gradient: "linear-gradient(135deg, #22D3EE, #3B82F6)",
      price: "3.000",
      unit: "000đ",
      note: "Mở rộng cho vận hành lớp học chủ động.",
      features: [
        "Bao gồm phần lớn Basic",
        "Chỉnh sửa được câu hỏi",
        "Check-in buổi dạy",
        "AI Tạo đề thi từ ảnh chụp (OCR)",
        "Live Teach (giảng dạy thời gian thực)",
        "AI phân tích buổi dạy",
        "Quản lý giáo viên / học trò / lớp học",
      ],
    },
  
    {
      ribbon: "Pro",
      gradient: "linear-gradient(135deg, #A855F7, #3B82F6)",
      price: "5.000",
      unit: "000đ",
      note: "Bổ sung các module vận hành nâng cao.",
      features: [
        "Bao gồm phần lớn Advance",
        "Xử lý upload PDF/TXT > 10MB",
        "AI đánh giá performance học sinh trong buổi học",
        "Tự tạo đề ôn tập theo chương/bài",
        "Xem tài liệu giáo viên publish trong buổi học",
        "Xem báo cáo quá trình học tập cá nhân",
        "Quản lý hồ sơ nhân viên",
        "Kế toán",
        "Chatbot tư vấn",
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
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Gửi yêu cầu tư vấn</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
  {/* Họ và tên */}
  <div className="space-y-2">
    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700">
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
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder="Nguyễn Văn A"
    />
  </div>

  {/* Trung tâm đang hoạt động */}
  <div className="space-y-2">
    <label htmlFor="contact-center" className="block text-sm font-semibold text-slate-700">
      Trung tâm đang hoạt động <span className="text-rose-500">*</span>
    </label>
    <input
      id="contact-center"
      type="text"
      name="center"
      value={formData.center}
      onChange={handleChange}
      required
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder="VD: XinK Language Center"
    />
  </div>

  {/* Email */}
  <div className="space-y-2">
    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700">
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
      className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all"
      placeholder="ban@congty.com"
    />
  </div>

  {/* Số điện thoại (VN) */}
  <div className="space-y-2">
    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700">
      Số điện thoại liên hệ <span className="text-rose-500">*</span>
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
      placeholder="0862706996 hoặc +84862706996"
    />
    <p className="text-xs text-slate-500">Định dạng: 0XXXXXXXXX hoặc +84XXXXXXXXX</p>
  </div>

  {/* Nhu cầu (full width) */}
  <div className="sm:col-span-2 space-y-2">
    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700">
      Nhu cầu của bạn <span className="text-rose-500">*</span>
    </label>
    <textarea
      id="contact-message"
      rows={4}
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/60 outline-none transition-all resize-none"
      placeholder="Mô tả ngắn (số lớp, tính năng cần, thời gian dự kiến...)"
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