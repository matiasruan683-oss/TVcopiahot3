export function GuaranteeSeal() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="shrink-0"
      role="img"
      aria-label="Selo de garantia de 30 dias"
    >
      <circle cx="60" cy="60" r="56" fill="none" stroke="#C2703A" strokeWidth="3" />
      <circle cx="60" cy="60" r="47" fill="none" stroke="#C2703A" strokeWidth="1.5" strokeDasharray="2 4" />
      <text x="60" y="52" textAnchor="middle" fill="#C2703A" fontSize="22" fontWeight="700" fontFamily="Fraunces, serif">
        30
      </text>
      <text x="60" y="72" textAnchor="middle" fill="#C2703A" fontSize="11" fontWeight="700" letterSpacing="2" fontFamily="Karla, sans-serif">
        DIAS
      </text>
      <text x="60" y="88" textAnchor="middle" fill="#C2703A" fontSize="8" letterSpacing="1.5" fontFamily="Karla, sans-serif">
        GARANTIA
      </text>
    </svg>
  );
}
