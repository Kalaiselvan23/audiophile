import Navbar from "../components/Navbar";
import Title from "../components/Headphone/Title";
import Headphonemodels from "../components/Headphone/Headphonemodels";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Compliment from "../components/Compliment";
function Headphones() {
  return (
    <div>
      <Navbar />
      <Title />
      <Headphonemodels />
      <Products />
      {/* <Compliment /> */}
      <Footer />
    </div>
  );
}
export default Headphones;
