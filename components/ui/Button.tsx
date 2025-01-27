import Link from "next/link"

interface Props {
  children: React.ReactNode,
  href: string 
}
export default function Button({children,href} :Props ){
  return (
    <>
      <Link href={href} className="btn">{children}</Link>
    </>
  )
}