import "./App.css";
import { CustomNavbar } from "./components/CustomNavbar";
import CustomCarousel from "./components/CustomCarusel";
import CustomCardB from "./components/CustomCardB";
import CustomText from "./components/CustomText";
import CustomCardImg from "./components/CustomCardImg";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomCarousel />
      <CustomCardB />
      <CustomText />
      <CustomCardImg />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
