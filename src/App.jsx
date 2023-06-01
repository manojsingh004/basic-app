import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";


export default function App() {
  return (
    <>
      
      <div className="min-h-full">
   


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="blogs" element={<Blogs />} />
         
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
      </div>
    </>
  )
}
