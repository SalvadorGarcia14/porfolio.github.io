import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "../components/hero/hero";

const MainLayout = ({ }) => {
    return (
        <div className="main-layout">
            <Navbar />

            <header>
                <Hero />
            </header>
            <main>
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;


