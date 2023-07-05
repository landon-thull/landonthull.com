import HeroSection from "./components/HeroSection";

const App: React.FC = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-fixed bg-gradient-to-b from-black to-gunmetal">
      <HeroSection />
    </div>
  );
}

export default App;
