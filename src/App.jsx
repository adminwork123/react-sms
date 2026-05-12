import './App.css'
import MainMenu from "./pages/cms_includes_file/MainMenu";
import ContractManagementMenu from "./pages/ContractManagementMenu";
import AddSearchContract from "./pages/AddSearchContract";
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
import AddComponents from './pages/AddComponents'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppRoutes() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      {/* MAIN ROUTES */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainMenu />} />
        <Route path="/ContractManagementMenu" element={<ContractManagementMenu />} />
        <Route path="/AddSearchContract" element={<AddSearchContract/>}/>
        <Route path="/AddContract" element={<AddContract />} />
        <Route path="/AddContractDetails" element={<AddContractDetails />} />
        <Route path="/AddContractFxDetails" element={<AddContractFxDetails />} />
        <Route path="/AddContractTradeDetails" element={<AddContractTradeDetails />} />
        <Route path="/AddContractMiscellaneousDetails" element={<AddContractMiscellaneousDetails />} />
        <Route path="/AddContractActivityDetail" element={<AddContractActivityDetail />} />
        <Route path="/AddContractHistoryDetails" element={<AddContractHistoryDetails />} />
        <Route path="/AddContractCrmDetails" element={<AddContractCrmDetails />} />
        <Route path="/AddContractEventDetails" element={<AddContractEventDetails />} />
        <Route path="/AddContractQualityDetails" element={<AddContractQualityDetails />} />
        <Route path="/AddContractOptionalityDetails" element={<AddContractOptionalityDetails />} />
        <Route path="/AddComponents" element={<AddComponents />} />
      </Routes>

      {/* MODAL OVERLAY ROUTE */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/AddContractDetails"
            element={<AddContractDetails isModal />}
          />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;