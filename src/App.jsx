import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch" element={<VideoDetail />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
