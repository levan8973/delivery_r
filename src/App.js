import React from "react";
import Header from "./pages/Header/Header";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import MainHeader from "./pages/MainHeader/MainHeader";
import TabContent from "./Components/Tabcomponent/TabContent";
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainHeader />
      <TabContent />
    </div>
  );
}

export default App;
