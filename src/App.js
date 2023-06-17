import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import NewHomespage from "./pages/NewHomespage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Homepage></Homepage>
      <Aboutpage></Aboutpage>
      <NewHomespage></NewHomespage>
    </>
  );
}

export default App;
