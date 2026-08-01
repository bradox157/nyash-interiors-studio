export function MarqueeStrip({ images }: { images: { src: string; alt: string }[] }) {
  // Duplicate the list so the CSS loop (translate -50%) is seamless.
  const loop = [...images, ...images];

  return (
    <div className="group relative overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
        {loop.map((img, i) => (
          <div
            key={`${img.alt}-${i}`}
            className="h-28 w-40 shrink-0 overflow-hidden sm:h-36 sm:w-52"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
