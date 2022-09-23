import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Photos } from "./components/photos/Photos";

function App() {
  return (
    <div className="App">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
