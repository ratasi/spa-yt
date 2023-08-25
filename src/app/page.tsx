import { About } from "@/components/About";
import { Discount } from "@/components/Discount";
import { Features } from "@/components/Features";
import { Navbar } from "@/components/Navbar";
import { Overview } from '@/components/Overview'
import Plans from "@/components/Plans/Plans";
import { Practice } from "@/components/Practice";

export default function Home() {
  return (
    <main className="px-3 md:px-10">
      <Navbar />
      <Overview />
      <Features />
      <div className="max-w-6xl mx-auto">
        <About />
        <Practice />
        <Plans />
        <Discount />
      </div>
    </main>
  )
}
