import Navbar from "./js/nav/Navbar";
import Hero from "./js/hero/Hero";
import Easy from "./js/easybank/Easy";
import Article from "./js/article/Article";
import Footer from "./js/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Easy/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
