type Props = {
  eyebrow: string;
  title: string;
  /** part of the title rendered in the brand colour */
  highlight?: string;
  description?: string;
  align?: "center" | "start";
  dark?: boolean;
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "start",
  dark = false,
  as: Tag = "h2",
}: Props) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-sm font-bold ${
          dark ? "text-brand" : "text-muted"
        }`}
      >
        <span className="size-2.5 rounded-full bg-brand ring-4 ring-brand/25" aria-hidden />
        {eyebrow}
      </p>
      <Tag
        className={`text-3xl leading-tight font-black sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {parts[0]}
        {highlight && <span className="text-brand">{highlight}</span>}
        {parts[1]}
      </Tag>
      {description && (
        <p className={`mt-4 leading-8 ${dark ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
