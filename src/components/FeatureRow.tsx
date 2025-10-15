// FeatureRow.tsx
import { CheckCircle2 } from "lucide-react";
import React from "react";

function GradientPadFrame({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[32px] p-4 sm:p-6 ${className}`}
      style={{
        // lớp padding có nền gradient bên ngoài (blue→teal như bạn chọn)
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(13,148,136,0.10))",
      }}
    >
      <div className="rounded-[22px] bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
        <div className="p-2 sm:p-3">{children}</div>
      </div>
    </div>
  );
}

type FeatureRowProps = {
  title: string;
  desc?: string;
  bullets: string[];
  img: string;             // đường dẫn ảnh (public/)
  icon?: React.ReactNode;  // icon ở đầu tiêu đề
  reverse?: boolean;       // đảo layout (ảnh trái, text phải)
  containerClass?: string; // tuỳ biến container
  sectionClass?: string;   // tuỳ biến spacing
  imageAlt?: string;
};

export default function FeatureRow({
  title,
  desc,
  bullets,
  img,
  icon,
  reverse = false,
  containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionClass = "py-12 sm:py-16",
  imageAlt = title,
}: FeatureRowProps) {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className={`${containerClass} ${sectionClass}`}>
        <div
          className={`grid items-start gap-10 lg:gap-14 lg:grid-cols-2 ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* LEFT: text block */}
          <div>
            <div className="flex items-center gap-3">
              {icon ? (
                <span className="shrink-0 text-sky-500">{icon}</span>
              ) : null}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h3>
            </div>

            {desc ? (
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {desc}
              </p>
            ) : null}

            <ul className="mt-6 space-y-4">
              {bullets.map((t, i) => (
                <li
                  key={i}
                  className="relative pl-9 text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="absolute left-0 top-1 h-5 w-5 text-emerald-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: image with gradient padding */}
          <div className="relative">
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
                src={img}
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
