import './App.css'
import MainMenu from "./pages/cms_includes_file/MainMenu";
import ContractManagementMenu from "./pages/ContractManagementMenu";
import AddContract from './pages/AddContract';
import AddContractDetails from './pages/AddContractDetails';
import AddContractFxDetails from './pages/AddContractFxDetails';
import AddContractTradeDetails from './pages/AddContractTradeDetails';
import AddContractMiscellaneousDetails from './pages/AddContractMiscellaneousDetails'
import AddContractActivityDetail from './pages/AddContractActivityDetail'
import AddContractHistoryDetails from './pages/AddContractHistoryDetails'
import AddContractCrmDetails from './pages/AddContractCrmDetails'
import AddContractEventDetails from './pages/AddContractEventDetails'
import AddContractQualityDetails from './pages/AddContractQualityDetails'
import AddContractOptionalityDetails from './pages/AddContractOptionalityDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/ContractManagementMenu" element={<ContractManagementMenu />} />
        <Route path="/AddContract" element={<AddContract/>}></Route>
        <Route path="/AddContractDetails" element={<AddContractDetails/>}></Route>
        <Route path="/AddContractFxDetails" element={<AddContractFxDetails/>}></Route>
        <Route path="/AddContractTradeDetails" element={<AddContractTradeDetails/>}></Route>
        <Route path="AddContractMiscellaneousDetails" element={<AddContractMiscellaneousDetails/>}></Route>
        <Route path="AddContractActivityDetail" element={<AddContractActivityDetail/>}></Route>
        <Route path="AddContractHistoryDetails" element={<AddContractHistoryDetails/>}></Route>
        <Route path="AddContractCrmDetails" element={<AddContractCrmDetails/>}></Route>
        <Route path="AddContractEventDetails" element={<AddContractEventDetails/>}></Route>
        <Route path="AddContractQualityDetails" element={<AddContractQualityDetails/>}></Route>
        <Route path="AddContractOptionalityDetails" element={<AddContractOptionalityDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;