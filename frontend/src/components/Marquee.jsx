export default function Marquee({ items = [], accent = "#E6007E" }) {
  const content = items.concat(items);
  return (
    <div
      data-testid="marquee"
      className="border-y border-black/10 bg-white overflow-hidden py-8"
    >
      <div className="marquee">
        <div className="marquee-track">
          {content.map((text, i) => (
            <span
              key={i}
              className="font-heading text-3xl md:text-5xl tracking-tighter uppercase font-semibold whitespace-nowrap flex items-center gap-8"
            >
              {text}
              <span
                className="w-3 h-3 inline-block"
                style={{ background: i % 2 === 0 ? accent : "#00B4F0" }}
              ></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
