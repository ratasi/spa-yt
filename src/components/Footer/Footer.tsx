

export function Footer() {
    return (
        <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
            <div className="grid md:grid-cols-[350px_1fr_1fr_1fr] md:gap-10">
                <div>
                    <img src="/assets/logo.png" alt="Logo Website" className="w-24 md:w-48" />
                    <p className="mt-4">Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>

                <div className="my-3">
                    <h4 className="text-xl font-bold text-white">Plataforma</h4>
                    <p className="my-4">Overview</p>
                    <p className="my-4">Features</p>
                    <p className="my-4">About</p>
                    <p className="my-4">Pricing</p>
                </div>
                <div className="my-3">
                    <h4 className="text-xl font-bold text-white">Help</h4>
                    <p className="my-4">How we work?</p>
                    <p className="my-4">Where are the questions?</p>
                    <p className="my-4">How to pay?</p>
                    <p className="my-4">What we need for this?</p>
                </div>
                <div className="my-3">
                    <h4 className="text-xl font-bold text-white">Contacts</h4>
                    <p className="my-4">(+34) 662 662 662</p>
                    <p className="my-4">118 Lorem ipsum</p>
                    <p className="my-4">Spain, Valencia (46900)</p>
                </div>

            </div>
        </footer>
    )
}
