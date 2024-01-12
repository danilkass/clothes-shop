import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import CategoriesMenu from "./components/CategoriesMenu/CategoriesMenu";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CategoriesMenu />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
