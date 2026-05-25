

type ButtonProps = {

    onClick: () => void
    title: string
    color?: string
}

export default function Button({
    onClick,
    title,
    color
}:ButtonProps){



    return(
        <div>
            <button
             onClick={onClick}
            className={`bg-amber-300 text-5xl ${color}`}
             >
                {title}
            </button>
        </div>
    )

}