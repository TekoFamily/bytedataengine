import Hero from '../components/home/Hero';
import ArchitectureDiagram from '../components/home/ArchitectureDiagram';
import Methodology from '../components/home/Methodology';
import Problems from '../components/home/Problems';
// import Pipeline from '../components/home/Pipeline';
import Features from '../components/home/Features';
import TrustSection from '../components/home/TrustSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Problems />
            <ArchitectureDiagram />
            <Methodology />
            <TrustSection />
            {/*   <Pipeline /> */}
            <Features />
        </>
    );
};

export default HomePage;
