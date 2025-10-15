// PerformanceOverview.tsx
import { CheckCircle2 } from "lucide-react";

function GradientPadFrame({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[32px] p-4 sm:p-6 ${className}`}
      // lớp padding có nền gradient bên ngoài
      style={{
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(13,148,136,0.10))",
      }}
    >
      {/* khung ảnh bên trong */}
      <div className="rounded-[22px] bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
        {/* thanh tiêu đề giả để giống mock */}
        
        <div className="p-2 sm:p-3">
          {children}
        </div>
      </div>
    </div>
  );
}

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  bullets?: string[];
  title?: string;
  containerClass?: string;
  sectionClass?: string;
};

export default function PerformanceOverview({
  title = "Tổng quan hiệu suất",
  bullets = [
    "Theo dõi toàn diện hiệu quả kinh doanh và năng suất nhân sự",
    "Theo dõi các chỉ số chính: Biên lợi nhuận, chi phí thu hút khách hàng, tỷ lệ chuyển đổi",
    "Hiển thị KPI trực quan với biểu đồ tương tác và phân tích tỷ lệ hoàn thành",
    "Xác định nhân viên xuất sắc qua bảng xếp hạng hiệu suất",
    "Dữ liệu chi tiết hỗ trợ ra quyết định chiến lược",
  ],
  imageSrc = "/inout.png", // đổi sang ảnh của bạn
  imageAlt = "Bảng điều khiển hiệu suất",
  containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionClass = "py-16 sm:py-20",
}: Props) {
  return (
    <section id="performance-overview" className="bg-white dark:bg-slate-950">
      <div className={`${containerClass} ${sectionClass}`}>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            <ul className="mt-6 space-y-4">
              {bullets.map((t, i) => (
                <li key={i} className="relative pl-9 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <CheckCircle2 className="absolute left-0 top-1 h-5 w-5 text-emerald-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT with outer gradient padding */}
          <div className="relative">
            {/* nhẹ nhàng thêm glow phía sau */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[36px] blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(13,148,136,0.10))",
              }}
            />
            <GradientPadFrame>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded-xl ring-1 ring-emerald-500/10"
                style={{ aspectRatio: "16 / 9" }}
                loading="lazy"
              />
            </GradientPadFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
