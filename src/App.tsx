import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ChatPage } from "./pages/ChatPage";
import { LibraryPage } from "./pages/LibraryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ChatPage />} />
          <Route path="library" element={<LibraryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
