import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import { Home } from "./Components/Home/Home";

export function App() {
  return (
    <main className="main">
      <Menu />
      <Home />
    </main>
  );
}
