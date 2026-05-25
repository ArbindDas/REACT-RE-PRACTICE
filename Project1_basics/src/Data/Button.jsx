

export default function Button({
    onClick,
    title,
    color
}){



    return(
        
        <button 

        onClick={onClick}
        
        className={`${color} px-4 py-2 text-white rounded`}

        >
                {title}

        </button>
    )

}