import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Recipe from "./component/Recipe";
import ErrorBoundary from "./component/Error";
import ErrorFallback from "./component/ErrorFallback";
import "./App.css";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/:menu" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
