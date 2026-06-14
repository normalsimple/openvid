"use client";

export default function FeaturesGrid() {
  return (
    <section
      className="w-full py-16 sm:py-24"
      aria-label="Product features"
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#0EA5E9] uppercase mb-4">
            <span className="w-4 h-px bg-[#0EA5E9]" aria-hidden="true" />
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white leading-tight mb-4">
            Everything you need to ship stunning demos
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Record, enhance, and export — cinematic results directly in your browser, no installs required.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "56px",
          }}
        >
          {/* ── LARGE: 3D Mockups (7 cols × 7 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 7", gridRow: "span 7" }}
          >
            {/* Replace this div with your actual screenshot/image */}
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 px-8">
              <div className="text-[10px] text-neutral-700 font-mono tracking-wider">
                [ REPLACE WITH YOUR IMAGE ]
              </div>
              <div className="flex gap-4 items-end">
                <div
                  className="w-14 h-24 rounded-2xl border border-white/10 flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    transform: "perspective(400px) rotateY(-12deg) rotateX(4deg)",
                  }}
                >
                  <div className="w-9 h-16 rounded-xl border border-[#0EA5E9]/20 bg-[#0EA5E9]/5" />
                </div>
                <div
                  className="w-24 h-14 rounded-xl border border-white/[0.07] flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    transform: "perspective(400px) rotateY(-8deg) rotateX(-3deg)",
                  }}
                >
                  <div className="w-18 h-10 rounded-lg border border-[#0EA5E9]/15 bg-[#0EA5E9]/4" />
                </div>
              </div>
              <div className="flex gap-2">
                {["Safari", "Chrome", "Arc", "iPhone", "Samsung"].map((d, i) => (
                  <div
                    key={d}
                    className="text-[9px] font-medium px-2 py-1 rounded"
                    style={{
                      background: i === 0 ? "rgba(14,165,233,0.09)" : "rgba(255,255,255,0.03)",
                      border: i === 0 ? "1px solid rgba(14,165,233,0.22)" : "1px solid rgba(255,255,255,0.06)",
                      color: i === 0 ? "#38bdf8" : "#4b5563",
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient label overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 pt-16"
              style={{ background: "linear-gradient(to top, #0D1117 60%, transparent)" }}
            >
              <div className="text-[9px] font-semibold tracking-widest text-[#0EA5E9] uppercase mb-1.5">
                Device frames
              </div>
              <div className="text-lg font-semibold text-white leading-tight">
                3D mockups in one click
              </div>
              <div className="text-sm text-neutral-500 mt-1">
                Safari, Chrome, Arc, iPhone, Samsung — 3D transforms, perspective & masking
              </div>
            </div>
          </div>

          {/* ── Screen Recording (5 cols × 4 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 5", gridRow: "span 4" }}
          >
            <div className="absolute inset-0 p-4 pb-0 flex flex-col">
              {/* Fake browser chrome */}
              <div
                className="rounded-lg px-3 py-2 flex items-center gap-2 mb-2 shrink-0"
                style={{ background: "#161B22", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <div
                  className="flex-1 rounded text-[9px] text-neutral-600 px-2 py-0.5 font-mono"
                  style={{ background: "#0D1117" }}
                >
                  openvid.dev/editor
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] text-red-400 font-mono">00:24</span>
                </div>
              </div>
              {/* Fake content */}
              <div
                className="flex-1 rounded-lg p-3"
                style={{ background: "#161B22", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="space-y-1.5">
                  <div className="h-1.5 w-3/5 rounded-full bg-[#0EA5E9]/20" />
                  <div className="h-1.5 w-4/5 rounded-full bg-white/[0.06]" />
                  <div className="h-1.5 w-2/5 rounded-full bg-white/[0.06]" />
                  <div className="h-1.5 w-3/4 rounded-full bg-white/[0.04]" />
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4 pt-12"
              style={{ background: "linear-gradient(to top, #0D1117 65%, transparent)" }}
            >
              <div className="text-[9px] font-semibold tracking-widest text-[#0EA5E9] uppercase mb-1">
                Capture
              </div>
              <div className="text-base font-semibold text-white">Record your screen</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Browser-native. Tab, window or fullscreen.
              </div>
            </div>
          </div>

          {/* ── Zoom & 3D Camera (5 cols × 3 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 5", gridRow: "span 3" }}
          >
            <div className="absolute inset-0 p-4 pb-10">
              <div className="text-[9px] text-neutral-700 uppercase tracking-widest mb-2">Timeline</div>
              {/* Track */}
              <div className="relative h-1.5 rounded-full bg-white/[0.04] mb-2">
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ width: "38%", background: "rgba(14,165,233,0.2)" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#0EA5E9] bg-[#0D1117]"
                  style={{ left: "34%" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#0EA5E9] bg-[#0D1117]"
                  style={{ left: "64%" }}
                />
              </div>
              <div className="flex gap-2 mt-3">
                {[
                  { label: "2× zoom", color: "rgba(14,165,233,0.09)", border: "rgba(14,165,233,0.22)", text: "#38bdf8" },
                  { label: "3D tilt X/Y", color: "rgba(139,92,246,0.09)", border: "rgba(139,92,246,0.22)", text: "#a78bfa" },
                  { label: "ease-in-out", color: "rgba(14,165,233,0.09)", border: "rgba(14,165,233,0.22)", text: "#38bdf8" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="text-[9px] font-medium px-2.5 py-1 rounded-full"
                    style={{ background: b.color, border: `1px solid ${b.border}`, color: b.text }}
                  >
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, #0D1117 80%, transparent)" }}
            >
              <div className="text-sm font-semibold text-white">Cinematic zoom & 3D camera</div>
            </div>
          </div>

          {/* ── Backgrounds (4 cols × 5 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 4", gridRow: "span 5" }}
          >
            <div className="absolute inset-0 p-4 pb-14">
              <div
                className="grid gap-1.5 mb-3"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                {[
                  { bg: "#1a1a2e", active: true },
                  { bg: "#0f3460" },
                  { bg: "linear-gradient(135deg,#667eea,#764ba2)" },
                  { bg: "linear-gradient(135deg,#f093fb,#f5576c)" },
                  { bg: "linear-gradient(135deg,#4facfe,#00f2fe)" },
                  { bg: "linear-gradient(135deg,#43e97b,#38f9d7)" },
                  { bg: "#292524" },
                  { bg: "#44403c" },
                  { bg: "linear-gradient(135deg,#fd746c,#ff9068)" },
                  { bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)" },
                  { bg: "#161B22" },
                  { bg: "rgba(255,255,255,0.04)", dashed: true },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-md"
                    style={{
                      aspectRatio: "1",
                      background: s.bg,
                      border: s.active
                        ? "2px solid #0EA5E9"
                        : s.dashed
                        ? "1px dashed rgba(255,255,255,0.12)"
                        : "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
              <div className="text-[9px] text-neutral-700 uppercase tracking-widest">
                100+ backgrounds
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, #0D1117 70%, transparent)" }}
            >
              <div className="text-sm font-semibold text-white">Backgrounds</div>
              <div className="text-xs text-neutral-500 mt-0.5">Solid, gradient, Unsplash, or your own</div>
            </div>
          </div>

          {/* ── Export (4 cols × 5 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 4", gridRow: "span 5" }}
          >
            <div className="absolute inset-0 p-4 pb-14">
              {[
                { label: "4K", sub: "3840 × 2160", active: false },
                { label: "2K", sub: "2560 × 1440", active: true },
                { label: "1080p", sub: "1920 × 1080", active: false },
              ].map((q) => (
                <div
                  key={q.label}
                  className="flex items-center justify-between rounded-lg px-3 py-2 mb-1.5"
                  style={{
                    background: q.active ? "rgba(14,165,233,0.08)" : "rgba(255,255,255,0.02)",
                    border: q.active
                      ? "1px solid rgba(14,165,233,0.25)"
                      : "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    className="text-xs font-semibold"
                    style={{ color: q.active ? "#0EA5E9" : "#4b5563" }}
                  >
                    {q.label}
                  </span>
                  <span
                    className="text-[9px] font-mono"
                    style={{ color: q.active ? "#38bdf8" : "#374151" }}
                  >
                    {q.sub}
                  </span>
                </div>
              ))}
              <div className="flex gap-1.5 flex-wrap mt-3">
                {["MP4", "WebM", "GIF", "PNG", "AVIF"].map((f) => (
                  <div
                    key={f}
                    className="text-[9px] font-medium px-2 py-1 rounded"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "#4b5563",
                    }}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, #0D1117 70%, transparent)" }}
            >
              <div className="text-sm font-semibold text-white">4K export</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                MP4, WebM, GIF, PNG, AVIF — up to 4K 30fps
              </div>
            </div>
          </div>

          {/* ── Layers (4 cols × 5 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 4", gridRow: "span 5" }}
          >
            <div className="absolute inset-0 p-4 pb-14">
              <div className="text-[9px] text-neutral-700 uppercase tracking-widest mb-2">Layers</div>
              {[
                { name: "Video", active: false },
                { name: "Text overlay", active: true },
                { name: "Shape", active: false },
                { name: "SVG import", active: false },
              ].map((layer) => (
                <div
                  key={layer.name}
                  className="flex items-center gap-2 rounded-md px-2.5 py-1.5 mb-1"
                  style={{
                    background: layer.active ? "rgba(14,165,233,0.09)" : "rgba(255,255,255,0.02)",
                    border: layer.active
                      ? "1px solid rgba(14,165,233,0.2)"
                      : "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: layer.active ? "#0EA5E9" : "#374151" }}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: layer.active ? "#0EA5E9" : "#4b5563" }}
                  >
                    {layer.name}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, #0D1117 70%, transparent)" }}
            >
              <div className="text-sm font-semibold text-white">Layers & canvas</div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Shapes, text, SVG, images — above or below video
              </div>
            </div>
          </div>

          {/* ── Audio (3 cols × 3 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 3", gridRow: "span 3" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pb-8 px-3">
              <div className="flex items-end gap-0.5 h-8">
                {[4, 9, 14, 8, 20, 14, 6, 18, 11, 7, 4, 12, 8, 5, 3, 10, 7, 14, 8, 5].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-sm"
                      style={{
                        height: h,
                        background: i % 3 === 0 ? "#0EA5E9" : "rgba(255,255,255,0.1)",
                      }}
                    />
                  )
                )}
              </div>
              <div className="text-[8px] text-neutral-700">multi-track</div>
            </div>
            <div className="absolute bottom-3 left-4">
              <div className="text-xs font-semibold text-white">Audio</div>
            </div>
          </div>

          {/* ── Free / No watermark (3 cols × 3 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 3", gridRow: "span 3" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pb-8">
              <span
                className="text-3xl font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Free
              </span>
              <div className="text-[8px] text-neutral-700">no watermark</div>
            </div>
            <div className="absolute bottom-3 left-4">
              <div className="text-xs font-semibold text-white">Always free</div>
            </div>
          </div>

          {/* ── Elements / Shapes (3 cols × 3 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 3", gridRow: "span 3" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pb-8">
              <div className="flex gap-2 items-center">
                <div
                  className="w-5 h-5 rounded-sm"
                  style={{
                    background: "rgba(14,165,233,0.2)",
                    border: "1px solid rgba(14,165,233,0.35)",
                  }}
                />
                <div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: "rgba(139,92,246,0.2)",
                    border: "1px solid rgba(139,92,246,0.35)",
                  }}
                />
                <div
                  className="w-5 h-5"
                  style={{
                    background: "rgba(249,115,22,0.2)",
                    clipPath: "polygon(50% 0%,100% 100%,0% 100%)",
                  }}
                />
              </div>
              <div className="text-[8px] text-neutral-700">shapes · text · SVG</div>
            </div>
            <div className="absolute bottom-3 left-4">
              <div className="text-xs font-semibold text-white">Elements</div>
            </div>
          </div>

          {/* ── Upload video (3 cols × 3 rows) ── */}
          <div
            className="rounded-2xl overflow-hidden relative bg-[#0D1117] border border-white/[0.06]"
            style={{ gridColumn: "span 3", gridRow: "span 3" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 pb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(14,165,233,0.07)",
                  border: "1px dashed rgba(14,165,233,0.28)",
                }}
              >
                <span className="text-lg text-[#0EA5E9]">↑</span>
              </div>
              <div className="text-[8px] text-neutral-700">MP4 · WebM · MOV</div>
            </div>
            <div className="absolute bottom-3 left-4">
              <div className="text-xs font-semibold text-white">Upload video</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}