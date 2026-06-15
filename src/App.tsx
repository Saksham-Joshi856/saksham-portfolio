import MainContainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";
import { BackgroundVisuals } from "./components/BackgroundVisuals";
import "./App.css";

const App = () => {
  return (
    <>
      <BackgroundVisuals />
      <MainContainer />
      <ScrollToTop />
    </>
  );
};

export default App;
