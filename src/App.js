import React from "react";
import Header from "./pages/Header/Header";
import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import MainHeader from "./pages/MainHeader/MainHeader";
import Tabs from "./Components/Tabcomponent/Tabs";
import CardContent from "./pages/Card/CardContent";
import CompanyInformation from "./pages/CompanyInformation/CompanyInformation";
import Main from "./pages/Main/Main";
import Form from "./pages/Form/Form";
import Accordion from "./pages/Accordion/Accordion";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainHeader />
      <Tabs />
      <CardContent />
      <CompanyInformation />
      <Main />
      <Form />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
