import React from "react";
import Header from "./pages/Header/Header";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import MainHeader from "./pages/MainHeader/MainHeader";
import Tabs from "./Components/Tabcomponent/Tabs";
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainHeader />
      <Tabs />
    </div>
  );
}

export default App;
