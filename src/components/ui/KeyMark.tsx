import type { SVGProps } from "react";

// Classic key glyph, shared with the favicon and app icons (scripts/make-icons.mjs).
export default function KeyMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden {...props}>
      <g transform="rotate(-45 32 32) translate(0.5 0)">
        <path
          fillRule="evenodd"
          d="M6 32a12 12 0 1 0 24 0a12 12 0 1 0 -24 0Z M12.5 32a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0Z"
        />
        <path d="M28 28.5H58.5V35.5H55.5V42.5H50.5V35.5H47.5V40H43V35.5H28Z" />
      </g>
    </svg>
  );
}
