import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <div className="grid items-center justify-between md:grid-cols-2 gap:4 md:gap-20 md:px-20">
            <Image src="/assets/logo.png" alt="Logo TarreDev" width="200" height="25" className="mx-auto lg:mx-0" />
            <div className="flex gap-4 text-center">
                <Link href="#overview">Overview</Link>
                <Link href="#features">Features</Link>
                <Link href="#about">About</Link>
                <Link href="#practice">Practice</Link>
                <Link href="#pricing">Pricing</Link>
            </div>
        </div>
    )
}
