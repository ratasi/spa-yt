import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export function Discount() {
    return (
        <MotionTransition>
            <div className="grid items-center px-5 py-10 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div>
                    <h2 className="text-3xl font-extrabold text-white md:text-5xl">Puedes practicar en cualquier momento que te convenga</h2>
                    <p className="my-10 text-white">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum</p>
                    <button className="px-8 py-3 text-white bg-pink-400 rounded-xl">Tengo un cupón</button>
                </div>
                <Image src="/assets/discount.png" alt="Discount image" width="350" height="350" className="mx-auto" />
            </div>
        </MotionTransition>
    )
}
