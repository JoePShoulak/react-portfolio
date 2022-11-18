import { HashRouter } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Content />
      <Footer />
    </HashRouter>
  );
}

export default App;
