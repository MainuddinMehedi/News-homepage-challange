import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ViteLogoCard from "./components/ViteLogoCard";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="viteCard" element={<ViteLogoCard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
