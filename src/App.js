import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./Header";
import Rectangle from "./Rectangle"
import Exciting from "./Exciting";
import Recent_Product from "./Recent_Product";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Exciting />
        <Rectangle/>
        <Recent_Product/>
      </Container>
    </div>
  );
}

export default App;