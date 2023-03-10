import { useState } from "react";

import Header from "./components/header";
import MenuHamburger from "./components/menuHamburger";
import Content from "./components/content";
import CreateTweet from "./components/createTweet";
import Navbar from "./components/navbar";
import SideTrends from "./components/sideTrends";
import SideMenu from "./components/sideMenu";
import SideMenuTablet from "./components/sideMenuTablet";
import EditModal from "./components/editModal";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModal, setModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
      <SideMenu />
      <SideMenuTablet />
      <Content setModal={setModal} setProduct={setProduct} setUser={setUser} />
      <SideTrends />
      <CreateTweet />
      <Navbar />
      <MenuHamburger showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
      {isModal && (
        <EditModal setModal={setModal} product={product} user={user} />
      )}
    </div>
  );
}

export default App;
