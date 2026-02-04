import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ChatPage } from "./pages/ChatPage";
import { LibraryPage } from "./pages/LibraryPage";
import { APIPage } from "./pages/APIPage";
import { NeuralMapPage } from "./pages/NeuralMapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ChatPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="api-management" element={<APIPage />} />
          <Route path="neural-map" element={<NeuralMapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
