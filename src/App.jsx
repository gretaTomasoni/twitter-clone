import Header from "./components/header";
import Content from "./components/content";
import CreateTweet from "./components/createTweet";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <CreateTweet />
      <Navbar />
    </div>
  );
}

export default App;
