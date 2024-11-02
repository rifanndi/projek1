// App.js
import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BlogPage from "./pages/blog";
import ProductPagePlavonpvc from "./pages/produkpageplavonpvc";
import ProductPageOrnamenpvc from "./pages/produkpageornamanpvc";
import ProductPageListpvc from "./pages/produkpagelispvc";
import AboutUsPage from "./pages/abutus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/papan" element={<ProductPagePlavonpvc />} />
        <Route path="/ornamen" element={<ProductPageOrnamenpvc />} />
        <Route path="/list-plafon" element={<ProductPageListpvc />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
