import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Shopping } from "./pages/Shopping/Shopping";
import { TopNavbar } from "./components/TopNavbar";
import { SuccessPage } from "./pages/PaymentResponsePage/SuccessPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/successpage" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
