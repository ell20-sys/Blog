import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <>
    <div className="fixed w-full z-[100]">
      <NavBar />
    </div>
      <Hero />
      <Banner/>
    </>
  );
}

export default App;
