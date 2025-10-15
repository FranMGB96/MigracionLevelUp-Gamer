import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App