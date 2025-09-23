import Home from "./pages/Home";
import "./App.css";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
