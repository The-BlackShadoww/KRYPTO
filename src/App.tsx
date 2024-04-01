import Analytics from "./components/analytincs/Analytics";
import CTA from "./components/cta/CTA";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonial/Testimonial";
import "./assets/global.css";

function App() {
    return (
        <main>
            <div className="container [&>*]:mb-32 relative">
                <Navbar />
                <Hero />
                <Featured />
                <Analytics />
                <Testimonial />
                <CTA />
                <Footer />
                <div className="absolute -top-[2%] -z-10  w-[850px] h-[450px] rounded-full inset-0 bg-gradient-to-r from-[#8c88da] to-[#8c88da] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
            </div>
            <div className="bg-gradient-to-r from-[#AAD9D9] to-[#8080D7] p-1"></div>
        </main>
    );
}

export default App;
