import { useState } from "react";

import Header from "./components/header";
import MenuHamburger from "./components/menuHamburger";
import Content from "./components/content";
import CreateTweet from "./components/createTweet";
import Navbar from "./components/navbar";
import SideTrends from "./components/sideTrends";
import SideMenu from "./components/sideMenu";
import SideMenuTablet from "./components/sideMenuTablet";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
      <SideMenu />
      <SideMenuTablet />
      <Content />
      <SideTrends />
      <CreateTweet />
      <Navbar />
      <MenuHamburger showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
    </div>
  );
}

export default App;
