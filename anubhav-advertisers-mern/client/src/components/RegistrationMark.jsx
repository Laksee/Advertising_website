// The registration mark is Anubhav's core visual motif: the crosshair-in-circle
// symbol printers use to align colour plates. Here it doubles as a "target" —
// fitting for an agency whose whole job is aligning a brand with its audience.
export default function RegistrationMark({ size = 24, spin = false, color = "currentColor", className = "" }) {
  return (
    <svg
      className={`reg-mark ${spin ? "reg-mark--spin" : ""} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.3" />
      <circle cx="12" cy="12" r="3.2" stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="0.5" x2="12" y2="6.5" stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="17.5" x2="12" y2="23.5" stroke={color} strokeWidth="1.3" />
      <line x1="0.5" y1="12" x2="6.5" y2="12" stroke={color} strokeWidth="1.3" />
      <line x1="17.5" y1="12" x2="23.5" y2="12" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}
