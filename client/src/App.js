import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CategoryMenu />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
