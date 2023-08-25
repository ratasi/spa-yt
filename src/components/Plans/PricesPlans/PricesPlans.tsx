import { MotionTransition } from "@/components/MotionTransition";
import { dataPricePlans } from "./PricesPlans.data";
import { PricesPlansProps } from "./PricesPlans.types";


export function PricesPlans(props: PricesPlansProps) {
    const { isMonthly } = props;

    return (
        <div id="pricing" className="grid gap-10 my-5 md:grid-cols-3">
            {dataPricePlans.map(({ id, name, description, prices, features, primary }) => (
                <MotionTransition key={id}>
                    <div className="p-4 shadow-lg rounded-xl shadow-pink-100">
                        <h4 className="mb-5 text-2xl font-bold text-center">{name}</h4>
                        <p className="text-center">{description}</p>

                        <div className="flex items-end justify-center my-7">
                            <span className="text-6xl font-black text-pink-600">
                                {isMonthly ? (
                                    prices[0].price
                                ) : (
                                    prices[1].price
                                )}
                            </span>
                            <span className="ml-3 text-xl font-extrabold text-slate-400">
                                {isMonthly ? (
                                    prices[0].name
                                ) : (
                                    prices[1].name
                                )}
                            </span>
                        </div>

                        {features.map(({ id, name, active }) => (
                            <div key={id} className="flex justify-center my-4">
                                {active ? (
                                    <CheckIcon />
                                ) : (
                                    <CloseIcon />
                                )}
                                <span className="ml-4">{name}</span>
                            </div>
                        ))}

                        <div className="my-6 text-center">
                            <button className={`px-8 py-3 rounded-xl 
                            ${primary ?
                                    'border-2 border-pink-400 text-pink-400 bg-white' :
                                    'text-white bg-pink-600'}`}>
                                Contratar plan</button>
                        </div>
                    </div>
                </MotionTransition>
            ))}
        </div>
    )
}


const CheckIcon = () => {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-green-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    )
}

const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}