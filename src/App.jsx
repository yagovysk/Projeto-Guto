import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";

export function App() {
  return (
    <main className="main">
      <Menu />
      <Home />
      <Services />
    </main>
  );
}
