/**
 * Ambient "liquid marble" backdrop for the hero.
 *
 * Three soft, blurred fields of light drift slowly across the hero image,
 * evoking veined marble / water — materials that recur in the services copy
 * ("spa-calm bathrooms", stone, brass). This is the site's one bold motion
 * moment; everywhere else motion stays quiet on purpose.
 */
export function LiquidBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-soft-light"
    >
      <div
        className="liquid-blob-a absolute -left-1/4 -top-1/3 h-[70%] w-[70%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, oklch(0.72 0.106 79 / 0.9), transparent 70%)",
        }}
      />
      <div
        className="liquid-blob-b absolute -right-1/4 top-0 h-[65%] w-[65%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, oklch(0.985 0.006 85 / 0.8), transparent 70%)",
        }}
      />
      <div
        className="liquid-blob-c absolute -bottom-1/3 left-1/4 h-[75%] w-[75%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.72 0.106 79 / 0.7), transparent 70%)",
        }}
      />
    </div>
  );
}
