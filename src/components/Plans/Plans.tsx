"use client";

import { useState } from "react";
import { PricesPlans } from "./PricesPlans";

export default function Plans() {
    const [isMonthly, setIsMonthly] = useState(true)

    return (
        <div className="py-20 md:py-56">
            <h2 className="text-4xl font-bold text-center">Aquí tienes todos <br /><span className="text-pink-400">nuestros planes</span></h2>
            <p className="max-w-lg mx-auto mt-10 text-center">Lorem ipsum, lorem ipsum lorem ispum ipsum lorem ispum ipsum lorem ispum ipsum lorem ispum ipsum lorem ispumipsum lorem ispum</p>

            <div className="grid items-center justify-center max-w-sm grid-cols-3 mx-auto my-10 overflow-hidden">
                <span className="text-xl font-bold text-center">Mensual</span>
                <div className="flex justify-center">
                    <label className="relative inline-flex items-center mr-5 cursor-poinrwe">
                        <input type="checkbox" className="sr-only peer" />
                        <div onClick={() => setIsMonthly(!isMonthly)}
                            className="w-11 h-6 bg-pink-400 rounded-full peer 
                            peer-focus:ring-indigo-500  peer-checked:after:translate-x-full
                            peer-checked:after:border-white after:content-[''] 
                            after:absolute after:top-0.5 after:left-[2px] 
                            after:bg-white after:border-pink-300 after:border 
                            after:rounded-full after:h-5 after:w-5 after:transition-all 
                            peer-checked:bg-indigo-500"
                        />
                    </label>
                </div>
                <span className="text-xl font-bold text-center">Anual</span>
            </div>

            <PricesPlans isMonthly={isMonthly} />
        </div>
    )
}
