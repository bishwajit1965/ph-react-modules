// import { ExternalUsers } from "./components/module-45/ExternalUsers";
// import { Counter } from "./components_m-45/Counter";
import "./App.css";
import { Countries } from "./components/module-46/countries/Countries";
import Footer from "./components/module-46/footer/Footer";
import Header from "./components/module-46/header/Header";
import NavBar from "./components/module-46/navbar/NavBar";

function App() {
  return (
    <div className="App">
      {/* Module-45 */}
      {/* <ExternalUsers /> */}
      {/* <Counter /> */}

      {/* Module-46 */}
      <NavBar />
      <Header />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
