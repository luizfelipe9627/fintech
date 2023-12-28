import "./styles/utils/all.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sale from "./pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
