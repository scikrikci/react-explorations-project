import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers/AppRoutes";

function App() {
  document.documentElement.dataset.theme = "dark";
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
