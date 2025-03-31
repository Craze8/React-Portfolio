import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  return (
    <div className="overflow-y-auto">
    <Navbar/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Stack/>
     <Footer/>
     <Analytics/>
    </div>
  )
}