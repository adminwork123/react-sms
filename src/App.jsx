import React from "react";
import Topbar from "./components/Topbar";
import TopMenu from "./components/TopMenu";
import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";
 import TabsSection from "./components/TabsSection";
import "./styles/style.css";

function App() {
  return (
    <div>
      <Topbar />
      <TopMenu />
      <ContractForm />
      <ContractTable />
      <TabsSection />
    </div>
  );
}

export default App;
