export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Traço — início">
      <svg
        className="brand-mark"
        width="36"
        height="40"
        viewBox="0 0 36 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 2v30h26M3 11h25v24H11V7M1 25h34M17 18v21"
          stroke="currentColor"
          strokeWidth=".8"
        />
      </svg>
      <span>
        traço<span className="brand-dot">.</span>
      </span>
    </a>
  );
}
