import './style.css'

interface IProps {
    text: string
    onClick?: () => void
}

export function Button({text = "", onClick}: IProps) {
    return (
        <>
            <button className='button' onClick={onClick}>{text}</button>
        </>
    )
}