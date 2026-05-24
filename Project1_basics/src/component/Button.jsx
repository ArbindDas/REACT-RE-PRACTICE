


export default function Button ({onClick , color , title }){
  return(
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
        <span>
          {title}
        </span>
        
    </button>
  )

}