import './App.css';
import Header from './common/header';
import Home from './pages/home';
import Project from './pages/project';
import { Route, Routes } from "react-router-dom";
import ProductsDetail from './pages/productsDetail';
import AddProducts from './pages/addProducts';
import EditProduct from './components/products/editProducts';
import Footer from '../src/common/footer';

//format code, shift+option+f
function App() {
  return (
    <div className="App">
      <Header >
      </Header>
      <div>
        <Home />
        <Routes>
          <Route path="project" element={<Project />} />
          <Route path="products_detail/:index" element={<ProductsDetail />} />
          <Route path="addProducts/:index" element={<AddProducts />} />
          <Route path="editProduct/:index" element={<EditProduct />} />
        </Routes>
      </div>
      <Footer/>    
    </div>
  );
}

export default App;
