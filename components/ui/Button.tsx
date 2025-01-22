
interface props {
    text: string,
    className?: string,
    white?: boolean,
    dark?: boolean
}
export default function Button({text, className, white, dark}: props) {
    const buttonClasses = `${white && ' bg-white text-black '} ${dark && ' bg-black text-white '} ${className}`
  return (
    <div className={`${buttonClasses} w-fit text-xl px-6 py-1 rounded-lg font-medium`}>{text}</div>
  )
}