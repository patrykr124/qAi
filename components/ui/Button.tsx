import Link from "next/link"

interface Props {
  children: React.ReactNode,
  href: string ,
  className?: string
}
export default function Button({children,href,className} :Props ){
  return (
    <>
      <Link href={href} className={` ${className} btn quicksand`}>{children}</Link>
    </>
  )
}