import { HashRouter } from "react-router-dom";

import { MainContainer } from "./components/Containers/MainContainer";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <MainContainer>
        <Register />
      </MainContainer>
    </HashRouter>
  );
}

export default App;
