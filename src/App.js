import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Post from "./Component/Pages/Post";
import Layout from "./Component/Layout";
import PostLayout from "./Component/PostLayout";
import PostDetail from "./Component/Pages/PostDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post" element={<PostLayout />} >
              <Route  path=":category" element={<PostDetail />} />
              <Route  index element={<PostDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>ERROR: 404</h1>} />
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;
