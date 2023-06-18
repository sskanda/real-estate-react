import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import NewHomespage from "./pages/NewHomespage";
import Explorepage from "./pages/Explorepage";
import Footerpage from "./pages/Footerpage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Homepage></Homepage>
      <Aboutpage></Aboutpage>
      <NewHomespage></NewHomespage>
      <Explorepage></Explorepage>
      <Footerpage></Footerpage>
    </>
  );
}

export default App;
