const drawings = {
  projeto:
    'M12 12h88v76H12V12ZM12 22h26V12M86 12v32h14M50 22v44h50M50 66v22M12 66h16M28 66a22 22 0 0 1 22 22M38 22v16M38 38a16 16 0 0 0-16 16',
  materiais:
    'M14 14h48v64H14V14ZM62 28h34v50H62M48 48h36v44H48V48ZM20 14c0 20 10 28-6 48M29 14c0 24 14 24-5 64M39 14c0 25 12 22-5 64M50 14c0 17 6 20-2 34M55 57h1M70 62h1M60 74h1M76 83h1M54 86h1',
  execucao:
    'M8 20l48 23 48-23M8 29l48 23 48-23M8 38l42 20v38M56 43v53M62 49v47M36 34l26 12M56 52l6-3',
} as const;
export function ServiceIcon({ kind }: { kind: keyof typeof drawings }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 112 108"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={drawings[kind]}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
