import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main><HomePage /> </main>
      <Footer />
    </div>
  );
}

export default App;
