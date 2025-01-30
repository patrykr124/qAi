import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div  className="wrapper">
            <div className="border-t border-white/20">
                <div className="py-2">
                    <div className="logo py-12">
                        <Link href={"/"}>
                            <Image className="hover:scale-105 transition-all duration-300" src="/assets/img/logo4.svg" alt="logo" width={120} height={120} />
                        </Link>
                    </div>
                    <div className="py-4 bg-gray-box/35 rounded-xl p-4">
                        <p className="text-white/50">Copyright © 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}