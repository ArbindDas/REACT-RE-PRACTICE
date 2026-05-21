export default function Button({
  title,
  onClick,
  color,

  // {🧠 Why do we need Parent → Child data passing (props)?}

  // {Because in real apps:}

  // {👉 Data is usually stored in one place (parent / central state)}
  // {👉 But many UI parts (children) need to use that same data}

  // So React uses props to share data downward
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden

        min-w-32.5
        px-6 py-3

        rounded-2xl
        font-semibold text-white

        tracking-wide
        cursor-pointer

        transition-all duration-300 ease-out

        shadow-lg hover:shadow-2xl
        active:scale-[0.96]

        transform-gpu
        will-change-transform

        border border-white/10

        ${color}
      `}
    >
      {/* Soft glow layer */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10"></span>

      {/* Shine sweep effect */}
      <span className="absolute -left-full top-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></span>

      {/* Button text */}
      <span className="relative z-10">{title}</span>
    </button>
  );
}
